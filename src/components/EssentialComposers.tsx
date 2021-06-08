import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector, useAppDispatch } from '../hooks';
import { essentials } from '../redux/actions';

export const EssentialComposers = () => {
  const composers = useAppSelector(
    (state) => state.composerList.essentialComposers
  );

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (composers.length === 0) {
      dispatch(essentials());
    }
  }, [composers.length]);

  if (composers.length === 0) return <h2>Loading</h2>;

  return <ComposersGrid composers={composers} />;
};
