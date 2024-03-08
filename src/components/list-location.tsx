import Location from './location';
import { MouseEvent } from 'react';

type ListLocation = {
  listLocations: string[];
  handleCurrentCityClick: (evt: MouseEvent<HTMLSpanElement>) => void;
}

export default function ListLocation({ listLocations, handleCurrentCityClick }: ListLocation) {
  return (
    <ul className="locations__list tabs__list" onClick={handleCurrentCityClick}>
      {listLocations.map((location) => <Location key={location} city={location} />)}
    </ul>
  );
}
