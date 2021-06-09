import React from 'react';
import { Composer } from '../types';
import { ComposerCard } from './ComposerCard';
import './ComposersGrid.css';
import { SearchBar } from '../components/SearchBar';
import { SortDropdown } from '../components/SortDropdown';

export const ComposersGrid = ({
  composers = [],
}: {
  composers?: readonly Composer[];
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortKey, setSortKey] = React.useState<keyof Composer>('name');

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <SortDropdown value={sortKey} onChange={setSortKey} />
      <div className="composer-grid">
        {composers
          .filter((c: Composer) =>
            c.complete_name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return -1;
            if (a[sortKey] > b[sortKey]) return 1;
            return 0;
          })
          .map((composer: Composer) => {
            return <ComposerCard key={composer.id} composer={composer} />;
          })}
      </div>
    </>
  );
};
