import {
  getEssentialComposers,
  getPopularComposers,
  searchComposer,
} from '../../api';

import { AppDispatch } from '../store';

export const essentials = (): any => async (dispatch: AppDispatch) => {
  let composers;
  try {
    composers = await getEssentialComposers();
  } catch {
    composers = 'No Composers Found';
  }

  dispatch({
    type: 'ESSENTIALS',
    payload: composers,
  });
};

export const popular = (): any => async (dispatch: AppDispatch) => {
  let composers;
  try {
    composers = await getPopularComposers();
  } catch {
    composers = 'No Composers Found';
  }

  dispatch({
    type: 'POPULAR',
    payload: composers,
  });
};

export const nameSearch =
  (text: string): any =>
  async (dispatch: AppDispatch) => {
    const composers = await searchComposer(text);

    if (typeof composers !== 'string') {
      dispatch({
        type: 'SEARCH',
        payload: composers,
      });
    }
  };

export const favorites = (): any => async (dispatch: AppDispatch) => {
  dispatch({
    type: 'FAVORITES',
    payload: JSON.parse(localStorage.getItem('composers') || '[]'),
  });
};
