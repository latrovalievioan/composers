import { PayloadAction } from '@reduxjs/toolkit';

const initialState: object[] = [];

export const composerListReducer = (
  state = initialState,
  action: PayloadAction
): any => {
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
