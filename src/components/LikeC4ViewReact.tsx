import { LikeC4View } from 'likec4:react';

interface LikeC4ViewProps {
  viewId: string; 
}

const LikeC4ViewReact: React.FC<LikeC4ViewProps> = ({ viewId }) => {
  return <LikeC4View viewId={viewId} />;
};

export default LikeC4ViewReact;