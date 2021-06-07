import { PayloadAction } from '@reduxjs/toolkit';
import { getEssentialComposers } from '../../api';

export const composerListReducer = (state = [], action: PayloadAction) => {
  switch (action.type) {
    case 'ESSENTIALS':
      return getEssentialComposers().then((data) => data);

    case 'POPULAR':
      return state;

    case 'SEARCH':
      return state;

    default:
      return state;
  }
};
