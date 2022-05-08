import { memo, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import NodeCutTiles from './nodes/nodeCutTiles';
import NodeEpipolarRectification from './nodes/nodeEpipolarRectification';
import NodeImportData from './nodes/nodeImportData';
import NodeSpatialPointIntersection from './nodes/nodeSpatialPointIntersection';
import NodeStereoMatching from './nodes/nodeStereoMatching';
import { initialEdges, initialNodes } from './mock';

function Home(): JSX.Element {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const nodeTypes = useMemo(
    () => ({
      cutTiles: NodeCutTiles,
      epipolarRectification: NodeEpipolarRectification,
      importData: NodeImportData,
      spatialPointIntersection: NodeSpatialPointIntersection,
      stereoMatching: NodeStereoMatching,
    }),
    [],
  );

  return (
    <div className="flow-wrapper">
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges}>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default memo(Home, isEqual);
