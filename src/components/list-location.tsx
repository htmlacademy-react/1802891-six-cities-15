import Location from './location';
import { SyntheticEvent } from 'react';

type ListLocation = {
  listLocations: string[];
  handleCurrentCityClick: (evt: SyntheticEvent<HTMLSpanElement>) => void;
  currentCity: string;
}

export default function ListLocation({ listLocations, handleCurrentCityClick, currentCity }: ListLocation) {
  return (
    <ul className="locations__list tabs__list">
      {listLocations.map((location) => <Location key={location} city={location} isActive={currentCity === location} handleCurrentCityClick={handleCurrentCityClick} />)}
    </ul>
  );
}
