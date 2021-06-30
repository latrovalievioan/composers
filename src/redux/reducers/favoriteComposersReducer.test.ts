import { favoriteComposersReducer } from './favoriteComposersReducer';

describe('Tests for Favorite composers Reducer', () => {
  it('Initial state should be an empty Set', () => {
    const state = favoriteComposersReducer(new Set(), 'Action');
    expect(state).toStrictEqual(new Set());
  });

  it('Should handle add action', () => {
    const testId = '123';

    const state = favoriteComposersReducer(new Set(), {
      type: 'ADD_TO_FAVORITES',
      payload: testId,
    });

    const testSet = new Set();
    testSet.add(testId);

    expect(state).toStrictEqual(testSet);
  });

  it('Should handle delete action', () => {
    const testId = '123';

    const state = favoriteComposersReducer(new Set(), {
      type: 'ADD_TO_FAVORITES',
      payload: testId,
    });

    const testState = favoriteComposersReducer(state, {
      type: 'REMOVE_FROM_FAVORITES',
      payload: testId,
    });

    expect(testState).toStrictEqual(new Set());
  });

  it('Should handle load from favorites action', () => {
    const testArr = ['1', '2', '3'];

    const state = favoriteComposersReducer(new Set(), {
      type: 'LOAD_FROM_FAVORITES',
      payload: testArr,
    });

    expect(state).toStrictEqual(testArr);
  });
});
