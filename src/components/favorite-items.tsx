import { ReactNode } from 'react';
import { OfferPreviews } from '../types/offer-preview';

type TFavoriteItemsProps = {
  children: ReactNode;
  city: string;
}
export default function FavoriteItems({ children, city }: TFavoriteItemsProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>
  );
}
