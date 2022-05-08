import { memo } from 'react';
import isEqual from 'react-fast-compare';

function Home(): JSX.Element {
  return (
    <div>
      <p>Home</p>
    </div>
  );
}

export default memo(Home, isEqual);
