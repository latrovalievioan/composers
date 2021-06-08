import { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Composer } from '../types';

export const CardOverlay = ({
  composer,
}: {
  composer: Composer;
}): ReactElement => {
  const isFavorite = (): boolean => {
    const storageComposers = JSON.parse(
      localStorage.getItem('composers') || '[]'
    );
    return storageComposers.some((comp: Composer) => comp.id === composer.id);
  };

  const [state, setState] = useState(isFavorite());

  const addToFavorites = () => {
    const storageComposers = JSON.parse(
      localStorage.getItem('composers') || '[]'
    );
    if (isFavorite()) return;
    storageComposers.push(composer);
    localStorage.setItem('composers', JSON.stringify(storageComposers));
    setState(isFavorite());
  };

  const removeFromFavorites = () => {
    const storageComposers = JSON.parse(
      localStorage.getItem('composers') || '[]'
    );
    if (!isFavorite()) return;
    const filteredComposers = storageComposers.filter(
      (comp: Composer) => comp.id !== composer.id
    );
    localStorage.setItem('composers', JSON.stringify(filteredComposers));
    setState(isFavorite());
  };

  const getSign = () => {
    return state ? (
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
    );
  };

  return <div className="image-overlay">{getSign()}</div>;
};
