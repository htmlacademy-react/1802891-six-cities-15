import { Offer } from '../types/offer';

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

export { getFavoritesByLocation };
