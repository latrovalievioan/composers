import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector, useAppDispatch } from '../hooks';
import { popular } from '../redux/actions';
import { AppLoader } from './AppLoader';

export const PopularComposers = () => {
  const composers = useAppSelector(
    (state) => state.composerList.popularComposers
  );

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (composers.length === 0) {
      dispatch(popular());
    }
  }, [composers.length]);

  if (composers.length === 0) return <AppLoader />;

  return <ComposersGrid composers={composers} />;
};
