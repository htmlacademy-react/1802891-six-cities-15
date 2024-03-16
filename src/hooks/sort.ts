import { OfferPreviews } from '../types/offer-preview';
import { ListSort } from '../const';
import { sortPriceLow, sortPriceHigh, sortRating } from '../utils/utils';
import { LocationCity } from '../const';

export function sortingOffers(action: string, state: OfferPreviews[], offers: OfferPreviews[]): OfferPreviews[] {
  let sortOffers: OfferPreviews[] = [];
  switch (action) {
    case ListSort.SORT_POPULAR:
      sortOffers = [...offers].filter((offer) => offer.city.name === LocationCity.PARIS);
      break;
    case ListSort.SORT_PRICE_HIGH:
      sortOffers = state.sort(sortPriceHigh);
      break;
    case ListSort.SORT_PRICE_LOW:
      sortOffers = state.sort(sortPriceLow);
      break;
    case ListSort.SORT_RATED:
      sortOffers = state.sort(sortRating);
      break;
  }

  return sortOffers;
}

