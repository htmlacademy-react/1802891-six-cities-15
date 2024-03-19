import { createReducer } from '@reduxjs/toolkit';
import { selectCity, sortOffer, loadDataUser, loadOffer, loadFavorite, requireAuthorization, setOfferDataLoadingStatus, loadComments, chooseOffer, chooseId } from './action';
import { sortingOffers } from '../hooks/sort';
import { LocationCity } from '../const';
import { Offer } from '../types/offer';
import { OfferPreviews } from '../types/offer-preview';
import { TUser } from '../types/user';
import { AuthorizationStatus } from '../const';
import { Comment } from '../types/comment';

const initialState = {
  city: LocationCity.PARIS,
  offers: <OfferPreviews[]>[],
  initialOffers: <OfferPreviews[]>[],
  authorizationStatus: AuthorizationStatus.UN_KNOWN,
  favorite: <OfferPreviews[]>[],
  isOfferDataLoadingStatus: false,
  comments: <Comment[]>[],
  dataUser: <TUser | null>null,
  currentOffer: <Offer><unknown>null,
  idOffer: <string><unknown>null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
      state.offers = state.initialOffers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(sortOffer, (state, action) => {
      state.offers = sortingOffers(action.payload, state.offers, state.initialOffers);
    })
    .addCase(loadOffer, (state, action) => {
      state.initialOffers = action.payload;
      state.offers = state.initialOffers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoadingStatus = action.payload;
    })
    .addCase(chooseId, (state, action) => {
      state.idOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(chooseOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadDataUser, (state, action) => {
      state.dataUser = action.payload;
    })
    .addCase(loadFavorite, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };

