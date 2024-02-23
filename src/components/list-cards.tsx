import { SyntheticEvent, useState } from 'react';
import { Offer } from '../types/offer';
import Card from './card';

type TListCardsProps = {
  offers: Offer[];
}

export default function ListCards({ offers }: TListCardsProps) {
  const [card, setCard] = useState(offers);

  const onPointingCardMouseOver = (event: SyntheticEvent) => {
    if (event.target.closest('.cities__card')) {
      console.log(event);
    }

  };

  return (
    <div className="cities__places-list places__list tabs__content" onMouseOver={onPointingCardMouseOver}>
      {offers.map((offer) => <Card key={offer.id} cardClass='cities__card' offer={offer} />)}
    </div>
  );
}
