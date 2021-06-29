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

  it('Essential Composers action should set the state to an object with two keys: essentialComposers: an array with composer objects, popularComposer: an empty array', () => {
    const state = composerListReducer(initialState, {
      type: 'SET_ESSENTIAL_COMPOSERS',
      payload: [
        {
          id: '23',
          name: 'ioni',
          complete_name: 'ioni bonboni',
          birth: '30.04.1996',
          death: '',
          epoch: 'post-modern',
          portrait: 'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
        },
      ],
    });

    expect(state).toStrictEqual({
      essentialComposers: [
        {
          id: '23',
          name: 'ioni',
          complete_name: 'ioni bonboni',
          birth: '30.04.1996',
          death: '',
          epoch: 'post-modern',
          portrait: 'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
        },
      ],
      popularComposers: [],
    });
  });

  it('Popular Composers action should set the state to an object with two keys: popularComposers: an array with composer objects, essentialComposers: an empty array', () => {
    const state = composerListReducer(initialState, {
      type: 'SET_POPULAR_COMPOSERS',
      payload: [
        {
          id: '23',
          name: 'ioni',
          complete_name: 'ioni bonboni',
          birth: '30.04.1996',
          death: '',
          epoch: 'post-modern',
          portrait: 'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
        },
      ],
    });

    expect(state).toStrictEqual({
      popularComposers: [
        {
          id: '23',
          name: 'ioni',
          complete_name: 'ioni bonboni',
          birth: '30.04.1996',
          death: '',
          epoch: 'post-modern',
          portrait: 'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
        },
      ],
      essentialComposers: [],
    });
  });
});
