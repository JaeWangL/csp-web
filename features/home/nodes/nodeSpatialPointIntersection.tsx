import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Handle, Position } from 'react-flow-renderer';

type DataProps = {
  // Empty Now
};

type NodeEpipolarRectificationProps = {
  data: DataProps;
};

function NodeSpatialPointIntersection(props: NodeEpipolarRectificationProps): JSX.Element {
  const { data } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="edge-container">
        <img alt="" className="icon" src="/icons/ic_change_file.svg" />
        <p className="title">{t('spatialPointIntersection')}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default memo(NodeSpatialPointIntersection, isEqual);
