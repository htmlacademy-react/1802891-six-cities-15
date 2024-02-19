import { ReactNode } from 'react';

type TFavoriteItemsProps = {
  children: ReactNode;
}
export default function FavoriteItems({ children }: TFavoriteItemsProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Cologne</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>
  );
}