import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

export const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
}) => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        placeholder="Find by Name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
