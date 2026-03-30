import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025',
    title: 'Sri Ramakrishna College of Arts & Science',
    subtitle: 'Graduated in 2025',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'PathFinder, Coimbatore',
    subtitle: 'Data Analyst',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'New American Company, Coimbatore',
    subtitle: 'Data Analyst',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'Transition to Digital Marketing',
    subtitle: 'Resigned from analytics roles and moved into digital marketing full-time',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'Present',
    title: 'Vergina Sharley MS',
    subtitle: 'Digital Marketing Professional, Coimbatore, India',
    position: 'right',
  }
]