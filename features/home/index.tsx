import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('common');

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
      <p>{t('spatialPointIntersection')}</p>
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges}>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default memo(Home, isEqual);
