import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector, useAppDispatch } from '../hooks';
import { popular } from '../redux/actions';

export const PopularComposers = () => {
  const composers = useAppSelector((state) => state.composerList);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (composers.length === 0) {
      dispatch(popular());
    }
  }, [composers.length]);

  if (composers.length === 0) return <h2>Loading</h2>;

  return <ComposersGrid composers={composers} />;
};
