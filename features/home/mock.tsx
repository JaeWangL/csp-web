import { useTranslation } from 'next-i18next';
import { Node, Edge } from 'react-flow-renderer';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'importData',
    data: { translationName: 'importSatelliteImage', index: 1 },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'importData',
    data: { translationName: 'importSatelliteRpc', index: 1 },
    position: { x: 500, y: 25 },
  },
  {
    id: '3',
    type: 'importData',
    data: { translationName: 'importSatelliteImage', index: 2 },
    position: { x: 750, y: 25 },
  },
  {
    id: '4',
    type: 'importData',
    data: { translationName: 'importSatelliteRpc', index: 2 },
    position: { x: 1000, y: 25 },
  },
  {
    id: '5',
    type: 'epipolarRectification',
    data: {},
    position: { x: 600, y: 125 },
  },
  {
    id: '6',
    type: 'cutTiles',
    data: {},
    position: { x: 630, y: 205 },
  },
  {
    id: '7',
    type: 'stereoMatching',
    data: { algorithm: 'MGM' },
    position: { x: 400, y: 285 },
  },
  {
    id: '8',
    type: 'stereoMatching',
    data: { algorithm: 'SGBM' },
    position: { x: 800, y: 285 },
  },
  {
    id: '9',
    type: 'spatialPointIntersection',
    data: {},
    position: { x: 400, y: 365 },
  },
  {
    id: '10',
    type: 'spatialPointIntersection',
    data: {},
    position: { x: 800, y: 365 },
  },
  {
    id: '11',
    type: 'spatialPointIntersection',
    data: {},
    position: { x: 400, y: 445 },
  },
  {
    id: '12',
    type: 'spatialPointIntersection',
    data: {},
    position: { x: 800, y: 445 },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-5', source: '1', target: '5' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', sourceHandle: 'a', target: '7', animated: true },
  { id: 'e6-8', source: '6', sourceHandle: 'b', target: '8', animated: true },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e8-10', source: '8', target: '10' },
  { id: 'e9-11', source: '9', target: '11', animated: true },
  { id: 'e10-12', source: '10', target: '12', animated: true },
];
