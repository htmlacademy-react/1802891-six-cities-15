import { ReactNode } from 'react';
import { OfferPreviews } from '../types/offer-preview';

type TFavoriteItemsProps = {
  children: ReactNode;
  offer: OfferPreviews;
}
export default function FavoriteItems({ children, offer }: TFavoriteItemsProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offer.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>
  );
}
