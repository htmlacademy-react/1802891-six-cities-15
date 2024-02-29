import { Link } from 'react-router-dom';
import { OfferPreviews } from '../types/offer-preview';
import Rating from './rating';
import { AppRoute } from '../const';
type TCardProps = {
  offer: OfferPreviews;
  optionCard: {
    classCard: string;
    width: string;
    height: string;
  };
}

export default function Card({ offer, optionCard }: TCardProps) {
  const { width, height, classCard } = optionCard;
  return (
    <article className={`${classCard} place-card`} data-id={offer.id}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={`${offer.previewImage}`} width={width} height={height} alt="Place image" data-id={offer.id} />
        </Link>
      </div>
      <div className="place-card__info" data-id={offer.id}>
        <div className="place-card__price-wrapper" data-id={offer.id}>
          <div className="place-card__price" data-id={offer.id}>
            <b className="place-card__price-value" data-id={offer.id}>&euro;{offer.price}</b>
            <span className="place-card__price-text" data-id={offer.id}>&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button" data-id={offer.id}>
            <svg className="place-card__bookmark-icon" width="18" height="19" data-id={offer.id}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating ratingClass="place-card" rating={offer.rating} data-id={offer.id} />
        <h2 className="place-card__name" data-id={offer.id}>
          <Link to={`/${AppRoute.Offer}/${offer.id}`} state={offer} data-id={offer.id}>{offer.title}</Link>
        </h2>
        <p className="place-card__type" data-id={offer.id}>{offer.type}</p>
      </div>
    </article>
  );
}
