import { Edges, Text, TextProps } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

import { usePortalStore } from "@stores";
import { Project } from "@types";

interface ProjectTileProps {
  project: Project;
  index: number;
  position: [number, number, number];
  rotation: [number, number, number];
  activeId: number | null;
  onClick: () => void;
}

const ProjectTile = ({ project, index, position, rotation, activeId, onClick }: ProjectTileProps) => {
  const projectRef = useRef<THREE.Group>(null);
  const hoverAnimRef = useRef<gsap.core.Timeline | null>(null);
  const [hovered, setHovered] = useState(false);
  const isProjectSectionActive = usePortalStore((state) => state.activePortalId === "projects");

  const titleProps = useMemo(() => ({
    font: "/soria-font.ttf",
    color: "#111827",
  }), []);

  const subtitleProps: Partial<TextProps> = useMemo(() => ({
    font: "/Vercetti-Regular.woff",
    color: "#1f2937",
    anchorX: "left",
    anchorY: "top",
  }), []);

  const cardProps = isMobile ? {
    width: 3.65,
    height: 1.9,
    titleX: -1.6,
    titleY: -0.46,
    titleSize: 0.35,
    titleMaxWidth: 3,
    dateX: -1.12,
    dateY: 0.92,
    dateSize: 0.2,
    subtextY: 0.18,
    subtextSize: 0.14,
  } : {
    width: 4.05,
    height: 2.05,
    titleX: -1.78,
    titleY: -0.5,
    titleSize: 0.44,
    titleMaxWidth: 3.2,
    dateX: -1.2,
    dateY: 0.98,
    dateSize: 0.23,
    subtextY: 0.18,
    subtextSize: 0.16,
  };

  useEffect(() => {
    if (!projectRef.current) return;
    hoverAnimRef.current?.kill();

    const [mesh, title, dateGroup, textBox, button] = projectRef.current.children;

    hoverAnimRef.current = gsap.timeline();
    hoverAnimRef.current
      .to(projectRef.current.position, { z: hovered ? 0.8 : 0, duration: 0.2 }, 0)
      .to(projectRef.current.position, { y: hovered ? 0.16 : 0 }, 0)
      .to(projectRef.current.scale, {
        x: hovered ? 1.12 : 1,
        y: hovered ? 1.12 : 1,
        z: hovered ? 1.12 : 1,
      }, 0)
      .to(title.position, { y: hovered ? 0.35 : -0.62 }, 0)
      .to(textBox, { fillOpacity: hovered ? 1 : 0, duration: 0.4 }, 0)
      .to(dateGroup.position, { y: hovered ? 1.65 : 1.05 }, 0)
      .to(mesh.scale, { y: hovered ? 1.45 : 1 }, 0)
      .to((mesh as THREE.Mesh).material, { opacity: hovered ? 0.96 : 0.45 }, 0)
      .to(mesh.position, { y: hovered ? 0.22 : 0 }, 0);

    if (project.url) {
      hoverAnimRef.current
        .to(button.scale, { y: hovered ? 1 : 0, x: hovered ? 1 : 0 }, 0)
        .to(button.position, { z: hovered ? 0.3 : -1 }, 0);
    }
  }, [hovered]);

  useEffect(() => {
    if (isMobile) {
      setHovered(activeId === index);
    }
  }, [isMobile, activeId]);

  useEffect(() => {
    if (projectRef.current) {
      gsap.to(projectRef.current.position, {
        y: isProjectSectionActive ? 0 : -10,
        duration: 1,
        delay: isProjectSectionActive ? index * 0.1 : 0,
      });
    }
  }, [isProjectSectionActive]);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!project.url) return;

    const button = e.eventObject;
    gsap.to(button.position, { z: 0, duration: 0.1 })
      .then(() => gsap.to(button.position, { z: 0.3, duration: 0.3 }));

    setTimeout(() => {
      if (project.url?.startsWith('/')) {
        window.location.href = project.url;
        return;
      }
      window.open(project.url, '_blank');
    }, 50);
  };

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => !isMobile && isProjectSectionActive && setHovered(true)}
      onPointerOut={() => !isMobile && isProjectSectionActive && setHovered(false)}>
      <group ref={projectRef}>
        <mesh>
          <planeGeometry args={[cardProps.width, cardProps.height, 1]} />
          <meshBasicMaterial color="#f8fafc" transparent opacity={0.56}/>
          <Edges color="#0f172a" lineWidth={1.2} />
        </mesh>
        <Text
          {...titleProps}
          position={[cardProps.titleX, cardProps.titleY, 0.101]}
          anchorX="left"
          anchorY="bottom"
          maxWidth={cardProps.titleMaxWidth}
          lineHeight={1.05}
          fontSize={cardProps.titleSize}>
          {project.title}
        </Text>
        <group position={[cardProps.dateX, cardProps.dateY, 0.01]}>
          <mesh>
            <planeGeometry args={[1.7, 0.4, 1]} />
            <meshBasicMaterial color="#0f172a" opacity={0.1} transparent />
            <Edges color="#0f172a" lineWidth={0.9} />
          </mesh>
          <Text
            {...subtitleProps}
            position={[-0.7, 0.2, 0]}
            fontSize={cardProps.dateSize}>
            {project.date.toUpperCase()}
          </Text>
        </group>
        <Text
          {...subtitleProps}
          maxWidth={isMobile ? 3 : 3.15}
          position={[cardProps.titleX, cardProps.subtextY, 0.1]}
          lineHeight={1.2}
          fontSize={cardProps.subtextSize}>
          {project.subtext}
        </Text>
        {project.url && (
          <group
            position={[1.45, -0.74, -1]}
            scale={[0, 0, 1]}
            onClick={handleClick}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>
            <mesh>
              <boxGeometry args={[1.1, 0.4, 0.2]} />
              <meshBasicMaterial color="#111827" />
              <Edges color="white" lineWidth={1} />
            </mesh>
            <Text
              {...subtitleProps}
              color="white"
              position={[-0.4, 0.15, 0.2]}
              fontSize={0.25}>
              VIEW ↗
            </Text>
          </group>
        )}
      </group>
    </group>
  );
};

export default ProjectTile;