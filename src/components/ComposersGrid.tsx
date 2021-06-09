import React from 'react';
import { Composer } from '../types';
import { ComposerCard } from './ComposerCard';
import './ComposersGrid.css';
import { SearchBar } from '../components/SearchBar';

export const ComposersGrid = ({
  composers = [],
}: {
  composers?: readonly Composer[];
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="composer-grid">
        {composers
          .filter((c: Composer) =>
            c.complete_name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((composer: Composer) => {
            return <ComposerCard key={composer.id} composer={composer} />;
          })}
      </div>
    </>
  );
};
