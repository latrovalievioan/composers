import React from 'react';
import renderer from 'react-test-renderer';
import { Nav } from './Nav';
import { BrowserRouter } from 'react-router-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const nav = renderer
    .create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
});

describe('Test nav component with shallow', () => {
  const nav = shallow(<Nav />);

  it('Contains three nav li', () => {
    expect(nav.find('li')).toHaveLength(3);
  });
  it('Every nav li contains a Link', () => {
    expect(nav.find('li').find(Link).exists()).toBeTruthy();
  });
});

describe('Test nav component with Full DOM', () => {
  it.only(`Changes the selected link's className on click`, () => {
    const nav = mount(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    let navLink = nav.find('Link').at(0);
    navLink.simulate('click');

    nav.update();

    navLink = nav.find('Link').at(0);

    expect(navLink.hasClass('selected-link')).toBeTruthy();
  });
});
