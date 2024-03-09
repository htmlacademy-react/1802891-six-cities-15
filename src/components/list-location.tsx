import Location from './location';
import { MouseEvent } from 'react';

type ListLocation = {
  listLocations: string[];
  handleCurrentCityClick: (evt: MouseEvent<HTMLSpanElement>) => void;
  currentCity: string;
}

export default function ListLocation({ listLocations, handleCurrentCityClick, currentCity }: ListLocation) {
  return (
    <ul className="locations__list tabs__list" onClick={handleCurrentCityClick}>
      {listLocations.map((location) => <Location key={location} city={location} isActive={currentCity === location} />)}
    </ul>
  );
}
