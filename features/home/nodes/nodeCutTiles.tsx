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

function NodeCutTiles(props: NodeEpipolarRectificationProps): JSX.Element {
  const { data } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="edge-container">
        <img alt="" className="icon" src="/icons/ic_cut_image.svg" />
        <p className="title">{t('cutTiles')}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={{ marginRight: '24px' }} />
      <Handle type="source" position={Position.Bottom} id="b" style={{ marginLeft: '24px' }} />
    </>
  );
}

export default memo(NodeCutTiles, isEqual);
