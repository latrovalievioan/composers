import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SortDropdown } from './SortDropdown';

import { Composer } from '../types';

configure({ adapter: new Adapter() });

describe('Testing Sort Dropdown with full DOM', () => {
  let value = 'name' as keyof Composer;

  const dropdown = mount(
    <SortDropdown
      value={value}
      onChange={(newValue) => {
        value = newValue;
      }}
    />
  );

  it(`renders SortDropdown with the right initial value`, () => {
    expect(
      dropdown.find('Dropdown').getDOMNode<HTMLInputElement>().value
    ).toEqual('name');
  });
});
