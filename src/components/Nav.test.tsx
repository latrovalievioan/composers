import React from 'react';
import renderer from 'react-test-renderer';
import { Nav } from './Nav';
import { BrowserRouter } from 'react-router-dom';

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
