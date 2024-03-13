import PlacesOption from './places-option';
import { placesOption } from '../const';

type PlacesOptionsProps = {
  isOpen: boolean;
  handelSortOfferClick: (sortType: string) => void;
}

export default function PlacesOptions({ isOpen, handelSortOfferClick }: PlacesOptionsProps) {
  return (
    <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
      {placesOption.map((place) => <PlacesOption key={place} place={place} handelSortOfferClick={handelSortOfferClick} />)}
    </ul>
  );
}
