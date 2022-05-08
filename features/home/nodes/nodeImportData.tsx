import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Handle, Position } from 'react-flow-renderer';

type DataProps = {
  translationName: string;
  index: string;
};

type NodeImportDataProps = {
  data: DataProps;
};

function NodeImportData(props: NodeImportDataProps): JSX.Element {
  const { data } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <div className="edge-container">
        <img alt="" className="icon" src="/icons/ic_import_data.svg" />
        <p className="title">{t(data.translationName, { index: data.index })}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default memo(NodeImportData, isEqual);
