import { MouseEvent, useState } from 'react';
import { optionCard } from '../const';
import { Offer } from '../types/offer';
import Card from './card';

type ListOfferNearbyProps = {
  offers: Offer[];
  onListItemHover: (currentCard: Offer) => void;
  extraClass: string;
}

export default function ListCards({ offers, onListItemHover, extraClass }: ListOfferNearbyProps) {
  const [cardId, setCardId] = useState('');

  const onPointingCardMouseOver = ({ target }: MouseEvent<HTMLDivElement>) => {
    setCardId(target.dataset.id);
  };

  const currentCard = offers.find((offer) => offer.id === cardId);

  if (currentCard !== undefined) {
    onListItemHover(currentCard);
  }

  return (
    <div className={extraClass} onMouseOver={onPointingCardMouseOver}>
      {offers.map((offer) => <Card key={offer.id} optionCard={optionCard.CITIES_CARD} offer={offer} />)}
    </div>
  );
}
