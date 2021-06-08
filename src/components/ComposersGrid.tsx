import { Composer } from '../types';
import { ComposerCard } from './ComposerCard';
import './ComposersGrid.css';

export const ComposersGrid = ({
  composers = [],
}: {
  composers?: Composer[];
}) => {
  return (
    <div className="composer-grid">
      {composers.map((composer: Composer) => {
        return <ComposerCard key={composer.id} composer={composer} />;
      })}
    </div>
  );
};
