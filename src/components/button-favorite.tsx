import { changeFavoriteAction } from '../store/api-action';
import { useAppDispatch } from '../hooks';
import { fetchFavoriteAction } from '../store/api-action';

type TButtonFavorite = {
  offerId: string;
  isFavorite: boolean;
  sizeOptionButtonFavorite: {
    extraClass: string;
    width: string;
    height: string;
  };
}

export default function ButtonFavorite({ offerId, isFavorite, sizeOptionButtonFavorite }: TButtonFavorite) {
  const { width, height, extraClass } = sizeOptionButtonFavorite;
  const dispatch = useAppDispatch();
  let status = +isFavorite;

  function onIsFavoriteClick() {
    try {
      status = +!isFavorite;
      dispatch(changeFavoriteAction({ offerId, status }));
      dispatch(fetchFavoriteAction());
    } catch { /* empty */ }
  }

  return (
    <button className={`${extraClass}__bookmark-button button ${status === 1 && `${extraClass}__bookmark-button--active`}`} type="button" onClick={onIsFavoriteClick}>
      <svg className={`${extraClass}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
