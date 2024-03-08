import Container from '../components/container';
import OfferInside from '../components/offer-inside';
import Rating from '../components/rating';
import { Helmet } from 'react-helmet-async';
import CommentsTemplate from '../components/comments-template';
import { CountStar } from '../const';
import { useParams } from 'react-router-dom';
import { Comments } from '../mocks/comments';
import ReviewsComments from '../components/reviews-comments';
import Map from '../components/map';
import { useState } from 'react';
import { OptionListCard } from '../const';
import ListCards from '../components/list-cards';
import { OfferPreviews } from '../types/offer-preview';
import { useAppSelector } from '../hooks';

export default function OfferPage() {
  const offers = useAppSelector((state) => state.offers);

  const [selectedOffer, setSelectedOffer] = useState<OfferPreviews | null>(
    null
  );

  const handleListItemHover = (currentCard: OfferPreviews | null) => {
    if (currentCard !== null) {
      setSelectedOffer(currentCard);
    }
  };

  const { offerId } = useParams();
  const dataOffer = offers.find((offer) => offer.id === offerId);

  if (dataOffer === undefined) {
    return;
  }

  return (
    <Container mainClass='offer'>
      <Helmet>
        <title>Offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {dataOffer.images.map((image: string) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={`${image}`} alt="Photo studio" />
              </div>
            )
            )}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {dataOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}

            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {dataOffer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating ratingClass='offer' rating={dataOffer.rating} isRatingValue />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {dataOffer.type && dataOffer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {dataOffer.bedrooms && `${dataOffer.bedrooms} Bedrooms`}
              </li>
              <li className="offer__feature offer__feature--adults">
                {dataOffer.maxAdults && `Max ${dataOffer.maxAdults} adults`}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{dataOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {dataOffer.goods.map((good) => <OfferInside key={good} textOffer={good} />)}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={dataOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {dataOffer.host.name}
                </span>
                {dataOffer.host.isPro &&
                  <span className="offer__user-status">
                    Pro
                  </span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ReviewsComments comments={Comments} />
              <CommentsTemplate countStar={CountStar} />
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map city={dataOffer.city} offers={offers} selectedOffer={selectedOffer} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <ListCards offers={offers} onListItemHover={handleListItemHover} extraClass={OptionListCard.FAVORITES_CARD} />
        </section>
      </div>
    </Container>
  );
}
