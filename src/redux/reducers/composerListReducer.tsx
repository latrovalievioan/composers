import { PayloadAction } from '@reduxjs/toolkit';

export const composerListReducer = (state = [], action: PayloadAction) => {
  switch (action.type) {
    case 'ESSENTIALS':
      return action.payload;

    case 'POPULAR':
      return action.payload;

    case 'SEARCH':
      return action.payload;

    default:
      return state;
  }
};
