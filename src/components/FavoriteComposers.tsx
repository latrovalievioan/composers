import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector } from '../hooks';

export const FavoriteComposers = () => {
  const favorites = useAppSelector((state) => {
    const { essentialComposers, popularComposers } = state.composerList;
    const allComposers = [...essentialComposers, ...popularComposers];
    const { favoriteComposersIds } = state;
    const favoriteComposers = Array.from(favoriteComposersIds, (id: string) =>
      allComposers.find((c) => c.id === id)
    );
    console.log({
      allComposers,
      favoriteComposersIds,
      favoriteComposers,
    });
    return favoriteComposers;
  });
  return <ComposersGrid composers={favorites} />;
};
