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
  handelPointCardMouseOver?: (currentOffer: OfferPreviews | null) => void;
}

export default function Card({ offer, optionCard, handelPointCardMouseOver }: TCardProps) {
  const { width, height, classCard } = optionCard;

  const onPointCardMouseOver = () => {
    handelPointCardMouseOver(offer);
  };

  const onPointCardMouseLeave = () => {
    handelPointCardMouseOver(null);
  };

  return (
    <article className={`${classCard} place-card`} onMouseOver={onPointCardMouseOver} onMouseLeave={onPointCardMouseLeave}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={`${offer.previewImage}`} width={width} height={height} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info" >
        <div className="place-card__price-wrapper" >
          <div className="place-card__price" >
            <b className="place-card__price-value" >&euro;{offer.price}</b>
            <span className="place-card__price-text" >&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button" >
            <svg className="place-card__bookmark-icon" width="18" height="19" >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating ratingClass="place-card" rating={offer.rating} />
        <h2 className="place-card__name" >
          <Link to={`/${AppRoute.Offer}/${offer.id}`} state={offer} >{offer.title}</Link>
        </h2>
        <p className="place-card__type" >{offer.type}</p>
      </div>
    </article>
  );
}
