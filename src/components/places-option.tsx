import { SyntheticEvent } from 'react';

type PlacesOptionProps = {
  place: string;
  handelSortOfferClick: (sortType: string) => void;
}

export default function PlacesOption({ place, handelSortOfferClick }: PlacesOptionProps) {
  const onSortOfferClick = (evt: SyntheticEvent) => {
    handelSortOfferClick(evt.target.textContent);
  };
  return (
    <li className="places__option" tabIndex={0} onClick={onSortOfferClick}>{place}</li>
  );
}
