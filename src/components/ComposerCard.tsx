import React, { ReactElement } from 'react';
import { Composer } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/ComposerCard.css';
import { useAppDispatch } from '../hooks';

export const ComposerCard = ({
  composer,
}: {
  composer: Composer;
}): ReactElement => {
  const storageComposers = JSON.parse(
    localStorage.getItem('composers') || '[]'
  );

  const isFavorite = () => {
    return storageComposers.some((comp: Composer) => comp.id === composer.id);
  };

  const addToFavorites = () => {
    if (isFavorite()) return;
    storageComposers.push(composer);
    localStorage.setItem('composers', JSON.stringify(storageComposers));
  };

  const removeFromFavorites = () => {
    if (!isFavorite()) return;
    const filteredComposers = storageComposers.filter(
      (comp: Composer) => comp.id !== composer.id
    );
    localStorage.setItem('composers', JSON.stringify(filteredComposers));
  };

  return (
    <div className="composer-card">
      <img src={composer.portrait} alt=""></img>
      <div className="image-overlay">
        {isFavorite() ? (
          <>
            {' '}
            <span className="plus-icon" onClick={() => removeFromFavorites()}>
              <FontAwesomeIcon icon={faMinusCircle} size="3x" />
            </span>
            <p>Remove from Favorites</p>
          </>
        ) : (
          <>
            {' '}
            <span className="plus-icon" onClick={() => addToFavorites()}>
              <FontAwesomeIcon icon={faPlusCircle} size="3x" />
            </span>
            <p>Add to Favorites</p>
          </>
        )}
      </div>
      <div className="composer-info">
        <h3 className="composer-title">{composer.complete_name}</h3>
        <span>Birth: {composer.birth}</span>
        <span>Death: {composer.death || 'still alive'}</span>
        <span>Epoch: {composer.epoch}</span>
      </div>
    </div>
  );
};
