import { initialState, composerListReducer } from './composerListReducer';

describe('Composer list Reducer testings', () => {
  it('initial state should be an object with two empty arrays as values for the keys essentialComposers and popularComposers', () => {
    const state = composerListReducer(initialState, {
      type: '',
      payload: [],
    });
    expect(state).toStrictEqual({
      essentialComposers: [],
      popularComposers: [],
    });
  });
});
