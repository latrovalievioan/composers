import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Composer } from '../types';
import './SortDropdown.css';

export const SortDropdown = ({
  value,
  onChange,
}: {
  value: keyof Composer;
  onChange: (newValue: keyof Composer) => void;
}) => {
  const options: (keyof Composer)[] = ['name', 'birth', 'epoch'];
  return (
    <div className="dropdown-container">
      <p>Sort By:</p>
      <Dropdown
        value={value}
        onChange={(option) => onChange(option.value as keyof Composer)}
        options={options}
        placeholder="Sort By"
      />
    </div>
  );
};
