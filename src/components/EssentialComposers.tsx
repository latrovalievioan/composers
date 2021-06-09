import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector, useAppDispatch } from '../hooks';
import { essentials } from '../redux/actions';
import { AppLoader } from './AppLoader';

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

  if (composers.length === 0) return <AppLoader />;

  return <ComposersGrid composers={composers} />;
};
