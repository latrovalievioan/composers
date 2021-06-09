import { Middleware } from 'redux';
import { loadFavoritesFromStorage, popular, essentials } from './redux/actions';

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

    case 'INIT_APP': {
      store.dispatch(loadFavoritesFromStorage());
      store.dispatch(essentials() as any);
      store.dispatch(popular() as any);
      break;
    }

    default:
      break;
  }
};
