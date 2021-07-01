import React from 'react';
import renderer from 'react-test-renderer';
import { ComposersGrid } from './ComposersGrid';
import { ComposerCard } from './ComposerCard';
import { BrowserRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

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

describe('Testing composersGrid component with shallow', () => {
  it('renders a ComposerCard for every composer in the props array', () => {
    const composerArr = [
      {
        id: '87',
        name: 'Bach',
        complete_name: 'Johann Sebastian Bach',
        birth: '1685-01-01',
        death: '1750-01-01',
        epoch: 'Baroque',
        portrait:
          'https://assets.openopus.org/portraits/12091447-1568084857.jpg',
      },
      {
        id: '145',
        name: 'Beethoven',
        complete_name: 'Ludwig van Beethoven',
        birth: '1770-01-01',
        death: '1827-01-01',
        epoch: 'Early Romantic',
        portrait:
          'https://assets.openopus.org/portraits/55910756-1568084860.jpg',
      },
    ];
    const grid = shallow(<ComposersGrid composers={composerArr} />);

    expect(grid.find(ComposerCard)).toHaveLength(2);
  });

  it('does not render a ComposerCard if composers prop is empty', () => {
    const composerArr: any = [];
    const grid = shallow(<ComposersGrid composers={composerArr} />);
    expect(grid.find(ComposerCard)).toHaveLength(0);
  });
});
