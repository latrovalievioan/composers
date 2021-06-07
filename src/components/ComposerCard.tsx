import React, { ReactElement } from 'react';
import { Composer } from '../types';

export const ComposerCard = ({
  composer,
}: {
  composer: Composer;
}): ReactElement => {
  return <div>{composer.name}</div>;
};
