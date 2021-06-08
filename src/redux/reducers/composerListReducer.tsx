import { PayloadAction } from '@reduxjs/toolkit';

const initialState: object[] = [];

export const composerListReducer = (
  state = initialState,
  action: PayloadAction
): any => {
  switch (action.type) {
    case 'ESSENTIALS':
    case 'POPULAR':
    case 'SEARCH':
    case 'FAVORITES':
      return action.payload;

    default:
      return state;
  }
};
