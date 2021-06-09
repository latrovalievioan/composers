import { Middleware } from 'redux';

export const storageMiddleWare: Middleware = (store) => (next) => (action) => {
  const favoriteComposersIds = store.getState().favoriteComposersIds;

  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const newStorageState = new Set(favoriteComposersIds);
      newStorageState.add(action.payload);
      localStorage.setItem(
        'favoriteComposersIds',
        JSON.stringify(Array.from(newStorageState))
      );
      break;
    }
    case 'REMOVE_FROM_FAVORITES': {
      const newStorageState = new Set(favoriteComposersIds);
      newStorageState.delete(action.payload);
      localStorage.setItem(
        'favoriteComposersIds',
        JSON.stringify(Array.from(newStorageState))
      );
      break;
    }

    default:
      break;
  }

  next(action);
};
