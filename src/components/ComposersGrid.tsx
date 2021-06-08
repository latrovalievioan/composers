import { Composer } from '../types';
import { useAppSelector } from '../hooks';
import { ComposerCard } from './ComposerCard';
import '../styles/ComposersGrid.css';

export const ComposersGrid = () => {
  const composerList = useAppSelector((state) => state.composerList);

  return (
    <div className="composer-grid">
      {composerList.map((composer: Composer) => {
        return <ComposerCard key={composer.id} composer={composer} />;
      })}
    </div>
  );
};
