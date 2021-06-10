import React from 'react';
import { Composer } from '../types';
import './ComposerCard.css';
import { AddRemoveButton } from './AddRemoveButton';

export const ComposerCard = ({ composer }: { composer: Composer }) => {
  return (
    <div className="composer-card">
      <img src={composer.portrait} alt=""></img>
      <div className="composer-info">
        <h3 className="composer-title">{composer.complete_name}</h3>
        <span>Birth: {composer.birth}</span>
        <span>Death: {composer.death || 'still alive'}</span>
        <span>Epoch: {composer.epoch}</span>
        <AddRemoveButton composer={composer} />
      </div>
    </div>
  );
};
