import React, { ReactElement } from 'react';
import { Composer } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/ComposerCard.css';
import { useAppDispatch } from '../hooks';

export const ComposerCard = ({
  composer,
}: {
  composer: Composer;
}): ReactElement => {
  const addToFavorites = () => {
    const composersArr = JSON.parse(localStorage.getItem('composers') || '[]');
    composersArr.push(composer);
    localStorage.setItem('composers', JSON.stringify(composersArr));
  };

  return (
    <div className="composer-card">
      <img src={composer.portrait} alt=""></img>
      <div className="image-overlay">
        <span className="plus-icon" onClick={() => addToFavorites()}>
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </span>
        <p>Add to Favorites</p>
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
