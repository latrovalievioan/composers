import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Composer } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToFavorites, removeFromFavorites } from '../redux/actions/';

export const CardOverlay = ({ composer }: { composer: Composer }) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favoriteComposersIds.has(composer.id)
  );

  const onAddComposer = () => {
    dispatch(addToFavorites(composer.id));
  };

  const onRemoveComposer = () => {
    dispatch(removeFromFavorites(composer.id));
  };

  const getSign = () => {
    return isFavorite ? (
      <>
        {' '}
        <span className="plus-icon" onClick={onRemoveComposer}>
          <FontAwesomeIcon icon={faMinusCircle} size="3x" />
        </span>
        <p>Remove from Favorites</p>
      </>
    ) : (
      <>
        {' '}
        <span className="plus-icon" onClick={onAddComposer}>
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </span>
        <p>Add to Favorites</p>
      </>
    );
  };

  return <div className="image-overlay">{getSign()}</div>;
};
