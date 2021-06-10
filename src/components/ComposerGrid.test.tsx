import React from 'react';
import renderer from 'react-test-renderer';
import { ComposersGrid } from './ComposersGrid';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const composerGrid = renderer
    .create(
      <BrowserRouter>
        <ComposersGrid />
      </BrowserRouter>
    )
    .toJSON();
  expect(composerGrid).toMatchSnapshot();
});
