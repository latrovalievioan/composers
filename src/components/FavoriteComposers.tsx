import React from 'react';
import { ComposersGrid } from './ComposersGrid';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Composer } from '../types';
import {
  loadFavoritesFromStorage,
  essentials,
  popular,
} from '../redux/actions/index';

export const FavoriteComposers = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(essentials());
    dispatch(popular());
    dispatch(loadFavoritesFromStorage());
  }, []);

  const favorites = useAppSelector((state) => {
    const { essentialComposers, popularComposers } = state.composerList;
    const allComposers = [...essentialComposers, ...popularComposers];
    const { favoriteComposersIds } = state;
    const favoriteComposers = Array.from(favoriteComposersIds, (id: string) =>
      allComposers.find((c) => c.id === id)
    ).filter((c) => c !== undefined) as Composer[];
    return favoriteComposers;
  });

  return <ComposersGrid composers={favorites} />;
};
