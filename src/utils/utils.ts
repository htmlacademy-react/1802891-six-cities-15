import { Offer } from '../types/offer';
import dayjs from 'dayjs';

function getFavoritesByLocation(favorites: Offer[]) {
  return favorites.reduce<{ [key: string]: Offer[] }>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    if (current.isFavorite) {
      acc[location].push(current);
    }

    return acc;
  }, {});
}

function humanizeOrderData(date: string, format: string) {
  return date ? dayjs(date).format(format) : '';
}

function sortPriceLow(offerA: Offer, offerB: Offer,) {
  return offerA.price - offerB.price;
}

function sortPriceHigh(offerA: Offer, offerB: Offer,) {
  return offerB.price - offerA.price;
}

function sortRating(offerA: Offer, offerB: Offer,) {
  return offerB.rating - offerA.rating;
}

export { getFavoritesByLocation, humanizeOrderData, sortPriceLow, sortPriceHigh, sortRating };
