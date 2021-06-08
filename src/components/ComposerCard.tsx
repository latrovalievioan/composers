import React, { ReactElement } from 'react';
import { Composer } from '../types';
import './ComposerCard.css';
import { CardOverlay } from './CardOverlay';

export const ComposerCard = ({
  composer,
}: {
  composer: Composer;
}): ReactElement => {
  return (
    <div className="composer-card">
      <img src={composer.portrait} alt=""></img>
      <CardOverlay composer={composer} />
      <div className="composer-info">
        <h3 className="composer-title">{composer.complete_name}</h3>
        <span>Birth: {composer.birth}</span>
        <span>Death: {composer.death || 'still alive'}</span>
        <span>Epoch: {composer.epoch}</span>
      </div>
    </div>
  );
};
