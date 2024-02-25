// import { MouseEvent, useState } from 'react';
import { optionCard } from '../const';
import { Offer } from '../types/offer';
import Card from './card';

type TListCardsProps = {
  offers: Offer[];
}

export default function ListCards({ offers }: TListCardsProps) {
  // const [card, setCard] = useState({ id: '' });

  // const onPointingCardMouseOver = ({ target }: MouseEvent<HTMLDivElement>) => {
  //   if (target.closest('.place-card')) {
  //   setCard(...card, id: target)
  //   }
  // onMouseOver={onPointingCardMouseOver}
  // };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} optionCard={optionCard.CITIES_CARD} offer={offer} />)}
    </div>
  );
}
