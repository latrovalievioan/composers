import React from 'react';
import renderer from 'react-test-renderer';
import { ComposerCard } from './ComposerCard';
import { AddRemoveButton } from './AddRemoveButton';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

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

describe('Testing Composer Card component with shallow', () => {
  const composer = {
    id: '87',
    name: 'Bach',
    complete_name: 'Johann Sebastian Bach',
    birth: '1685-01-01',
    death: '1750-01-01',
    epoch: 'Baroque',
    portrait: 'https://assets.openopus.org/portraits/12091447-1568084857.jpg',
  };

  const card = shallow(<ComposerCard composer={composer} />);

  it('Card has an Image of the composer', () => {
    expect(card.find('img')).toHaveLength(1);
  });

  it('Card has a composer info wrapper', () => {
    expect(card.exists('.composer-info')).toEqual(true);
  });

  const composerInfoWrapper = card.find('.composer-info');

  it('Composer info wrapper contains a title', () => {
    expect(composerInfoWrapper.find('h3')).toHaveLength(1);
  });

  it('Composer info wrapper contain three spans', () => {
    expect(composerInfoWrapper.find('span')).toHaveLength(3);
  });

  it('Composer info wrapper contains one AddRemoveButton Component', () => {
    expect(composerInfoWrapper.find(AddRemoveButton)).toHaveLength(1);
  });
});
