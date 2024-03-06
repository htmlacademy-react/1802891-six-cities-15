import { MouseEvent, useState } from 'react';
import { optionCard } from '../const';
import { Offer } from '../types/offer';
import Card from './card';

type TListCardsProps = {
  offers: Offer[];
  onListItemHover: (currentCard: Offer) => void;
}

export default function ListCards({ offers, onListItemHover }: TListCardsProps) {
  const [cardId, setCardId] = useState('');

  const onPointingCardMouseOver = ({ target }: MouseEvent<HTMLDivElement>) => {
    setCardId(target.dataset.id);
  };

  const currentCard = offers.find((offer) => offer.id === cardId);

  if (currentCard !== undefined) {
    onListItemHover(currentCard);
  }

  return (
    <div className="cities__places-list places__list tabs__content" onMouseOver={onPointingCardMouseOver}>
      {offers.map((offer) => <Card key={offer.id} optionCard={optionCard.CITIES_CARD} offer={offer} />)}
    </div>
  );
}
