import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SearchBar } from './SearchBar';

configure({ adapter: new Adapter() });

describe('Testing SearchBar component with full DOM', () => {
  let value = 'ioni';
  const searchBar = mount(
    <SearchBar value={value} onChange={(newValue) => (value = newValue)} />
  );
  it(`renders SearchBar's input with the value of the props value`, () => {
    expect(
      searchBar.find('input').getDOMNode<HTMLInputElement>().value
    ).toEqual(value);
  });

  it(`changes the value on input change`, () => {
    searchBar
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'Hello' } });

    expect(value).toEqual('Hello');
  });
});
