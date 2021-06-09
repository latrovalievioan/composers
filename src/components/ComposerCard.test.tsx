import React from 'react';
import renderer from 'react-test-renderer';
import { ComposerCard } from './ComposerCard';

jest.mock('./AddRemoveButton', () => {
  return { AddRemoveButton: () => <div id="mock-button"></div> };
});

it('renders correctly', () => {
  const nav = renderer
    .create(
      <ComposerCard
        composer={{
          id: '123123',
          name: 'tsivanoff',
          complete_name: 'ts!van-0ff;)',
          birth: 'yesterday',
          death: 'tomorrow',
          epoch: 'paleolit',
          portrait: 'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
        }}
      />
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
});
