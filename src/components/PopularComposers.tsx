import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector } from '../hooks';
import { AppLoader } from './AppLoader';

export const PopularComposers = () => {
  const composers = useAppSelector(
    (state) => state.composerList.popularComposers
  );

  if (composers.length === 0) return <AppLoader />;

  return <ComposersGrid composers={composers} />;
};
