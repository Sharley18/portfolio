import { Box, Edges, Line, Text, TextProps } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { usePortalStore } from "@stores";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { WORK_TIMELINE } from "@constants";
import { WorkTimelinePoint } from "@types";

interface TimelineLayout {
  pointScale: number;
  anchorOffset: number;
  textNudgeX: number;
  yearFontSize: number;
  titleFontSize: number;
  titleMaxWidth: number;
  subtitleFontSize: number;
  subtitleMaxWidth: number;
  yearY: number;
  titleY: number;
  subtitleY: number;
}

const TimelinePoint = ({
  point,
  diff,
  layout,
}: {
  point: WorkTimelinePoint;
  diff: number;
  layout: TimelineLayout;
}) => {
  const getPoint = useMemo(() => {
    switch (point.position) {
      case 'left': return new THREE.Vector3(-layout.anchorOffset, 0.08, -0.1);
      case 'right': return new THREE.Vector3(layout.anchorOffset, 0.08, -0.1);
      default: return new THREE.Vector3();
    }
  }, [point.position, layout.anchorOffset]);

  const textAlign = point.position === 'left' ? 'right' : 'left';
  const sideOffset = point.position === 'left' ? -layout.textNudgeX : layout.textNudgeX;

  const textProps: Partial<TextProps> = useMemo(() => ({
    font: "/Vercetti-Regular.woff",
    color: "#111827",
    anchorX: textAlign,
    fillOpacity: 1 - 0.8 * diff,
    outlineWidth: 0.01,
    outlineColor: "#ffffff",
  }), [textAlign, diff]);

  const titleProps = useMemo(() => ({
    ...textProps,
    font: "/soria-font.ttf",
    fontSize: layout.titleFontSize,
    maxWidth: layout.titleMaxWidth,
    lineHeight: 1.1,
    outlineWidth: 0.014,
  }), [textProps, layout.titleFontSize, layout.titleMaxWidth]);

  return (
    <group position={point.point} scale={layout.pointScale}>
      <Box args={[0.2, 0.2, 0.2]} position={[0, 0, -0.1]} scale={[1 - diff, 1 - diff, 1 - diff]}>
        <meshBasicMaterial color="#0f172a" wireframe />
        <Edges color="#0f172a" lineWidth={1.5} />
      </Box>
      <group>
        <group position={getPoint}>
          <Text {...textProps} fontSize={layout.yearFontSize} position={[sideOffset - diff / 2, layout.yearY, 0]}>
            {point.year}
          </Text>
          <group position={[0, layout.titleY, 0]}>
            <Text {...titleProps} position={[sideOffset, -diff / 2, 0]}>
              {point.title}
            </Text>
            <Text
              {...textProps}
              color="#334155"
              fontSize={layout.subtitleFontSize}
              maxWidth={layout.subtitleMaxWidth}
              lineHeight={1.25}
              position={[sideOffset, layout.subtitleY - diff, 0]}>
              {point.subtitle}
            </Text>
          </group>
        </group>
      </group>
    </group>
  );
};

const Timeline = ({ progress }: { progress: number }) => {
  const { camera, size } = useThree();
  const isActive = usePortalStore((state) => state.activePortalId === 'work');
  const timeline = useMemo(() => WORK_TIMELINE, []);
  const isCompact = size.width < 900;

  const layout = useMemo<TimelineLayout>(() => {
    if (size.width < 520) {
      return {
        pointScale: 0.32,
        anchorOffset: 0.72,
        textNudgeX: 0.03,
        yearFontSize: 0.16,
        titleFontSize: 0.235,
        titleMaxWidth: 2.1,
        subtitleFontSize: 0.12,
        subtitleMaxWidth: 2.15,
        yearY: 0.11,
        titleY: -0.31,
        subtitleY: -0.26,
      };
    }

    if (size.width < 1024) {
      return {
        pointScale: 0.4,
        anchorOffset: 0.82,
        textNudgeX: 0.04,
        yearFontSize: 0.175,
        titleFontSize: 0.27,
        titleMaxWidth: 2.3,
        subtitleFontSize: 0.13,
        subtitleMaxWidth: 2.35,
        yearY: 0.12,
        titleY: -0.34,
        subtitleY: -0.28,
      };
    }

    return {
      pointScale: 0.52,
      anchorOffset: 0.94,
      textNudgeX: 0.05,
      yearFontSize: 0.2,
      titleFontSize: 0.31,
      titleMaxWidth: 2.7,
      subtitleFontSize: 0.145,
      subtitleMaxWidth: 2.8,
      yearY: 0.14,
      titleY: -0.37,
      subtitleY: -0.31,
    };
  }, [size.width]);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(timeline.map(p => p.point), false), [timeline]);
  const curvePoints = useMemo(() => curve.getPoints(500), [curve]);
  const visibleCurvePoints = useMemo(() => curvePoints.slice(0, Math.max(1, Math.ceil(progress * curvePoints.length))), [curvePoints, progress]);
  const visibleTimelinePoints = useMemo(() => timeline.slice(0, Math.max(1, Math.round(progress * (timeline.length - 1) + 1))), [timeline, progress]);

  const [visibleDashedCurvePoints, setVisibleDashedCurvePoints] = useState<THREE.Vector3[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useFrame((_, delta) => {
    if (isActive) {
      const position = curve.getPoint(progress);
      camera.position.x = THREE.MathUtils.damp(camera.position.x, (isCompact ? -1 : -2) + position.x, 4, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, -39 + position.z, 4, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, (isCompact ? 12.2 : 13) - position.y, 4, delta);
    }
  });

  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (groupRef.current) {
      tl.to(groupRef.current.scale, {
        x: isActive ? 1 : 0,
        y: isActive ? 1 : 0,
        z: isActive ? 1 : 0,
        duration: 1,
        delay: isActive ? 0.4 : 0,
      });
      tl.to(groupRef.current.position, {
        y: isActive ? 0 : -2,
        duration: 1,
        delay: isActive ? 0.4 : 0,
      }, 0);
    }

    if (isActive) {
      let i = 0;
      clearInterval(intervalRef.current!);
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          const p = i++ / 100;
          setVisibleDashedCurvePoints(curvePoints.slice(0, Math.max(1, Math.ceil(p * curvePoints.length))));
          if (i > 100 && intervalRef.current) clearInterval(intervalRef.current);
        }, 10);
      }, 1000);
    } else {
      setVisibleDashedCurvePoints([]);
      clearInterval(intervalRef.current!);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isActive]);

  return (
    <group position={[0, -0.1, -0.1]}>
      <Line points={visibleCurvePoints} color="#0f172a" lineWidth={3} />
      {visibleDashedCurvePoints.length > 0 && (
        <Line
          points={visibleDashedCurvePoints}
          color="#1e293b"
          lineWidth={0.5}
          dashed
          dashSize={0.25}
          gapSize={0.25}
        />
      )}
      <group ref={groupRef}>
        {visibleTimelinePoints.map((point, i) => {
          const diff = Math.min(2 * Math.max(i - (progress * (timeline.length - 1)), 0), 1);
          return <TimelinePoint point={point} key={i} diff={diff} layout={layout} />;
        })}
      </group>
    </group>
  );
};

export default Timeline;
