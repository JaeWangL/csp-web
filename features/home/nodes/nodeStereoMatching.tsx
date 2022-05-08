import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Handle, Position } from 'react-flow-renderer';

type DataProps = {
  algorithm: 'MGM' | 'SGMB';
};

type NodeEpipolarRectificationProps = {
  data: DataProps;
};

function NodeStereoMatching(props: NodeEpipolarRectificationProps): JSX.Element {
  const { data } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="edge-container">
        <img alt="" className="icon" src="/icons/ic_duplicate_paper.svg" />
        <p className="title">{t(`stereoMatching${data.algorithm}`)}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default memo(NodeStereoMatching, isEqual);
