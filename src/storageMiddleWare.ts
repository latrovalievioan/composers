import { Middleware } from 'redux';

export const storageMiddleWare: Middleware = (store) => (next) => (action) => {
  next(action);
  const { favoriteComposersIds } = store.getState();

  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      localStorage.setItem(
        'favoriteComposersIds',
        JSON.stringify(Array.from(favoriteComposersIds))
      );
      break;
    }
    case 'REMOVE_FROM_FAVORITES': {
      localStorage.setItem(
        'favoriteComposersIds',
        JSON.stringify(Array.from(favoriteComposersIds))
      );
      break;
    }
    default:
      break;
  }
};
