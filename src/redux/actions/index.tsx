import {
  getEssentialComposers,
  getPopularComposers,
  searchComposer,
} from '../../api';

import { AppDispatch } from '../store';

export const essentials = () => async (dispatch: AppDispatch) => {
  const composers = await getEssentialComposers();
  dispatch({
    type: 'SET_ESSENTIAL_COMPOSERS',
    payload: composers,
  });
};

export const popular = () => async (dispatch: AppDispatch) => {
  const composers = await getPopularComposers();
  dispatch({
    type: 'SET_POPULAR_COMPOSERS',
    payload: composers,
  });
};

export const nameSearch = (text: string) => async (dispatch: AppDispatch) => {
  const composers = await searchComposer(text);

  if (typeof composers !== 'string') {
    dispatch({
      type: 'SEARCH',
      payload: composers,
    });
  }
};

export const favorites = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: 'FAVORITES',
    payload: JSON.parse(localStorage.getItem('composers') || '[]'),
  });
};

export const addToFavorites = (composerId: string) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: composerId,
  };
};

export const removeFromFavorites = (composerId: string) => {
  return {
    type: 'REMOVE_FROM_FAVORITES',
    payload: composerId,
  };
};

export const loadFavoritesFromStorage = () => {
  return {
    type: 'LOAD_FROM_FAVORITES',
    payload: new Set(
      JSON.parse(localStorage.getItem('favoriteComposersIds') || '[]')
    ),
  };
};
