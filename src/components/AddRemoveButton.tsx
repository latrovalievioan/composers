import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Composer } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

export const AddRemoveButton = ({ composer }: { composer: Composer }) => {
  const dispatch = useAppDispatch();

  const isFavorite: boolean = useAppSelector((state) =>
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
          <FontAwesomeIcon icon={faHeartBroken} size="2x" />
        </span>
      </>
    ) : (
      <>
        {' '}
        <span className="plus-icon" onClick={onAddComposer}>
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </span>
      </>
    );
  };

  return <div className="image-overlay">{getSign()}</div>;
};
