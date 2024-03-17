import { createReducer } from '@reduxjs/toolkit';
import { selectCity, sortOffer, loadOffer, setOfferDataLoadingStatus, loadComments, chooseOffer, chooseId } from './action';
import { offers } from '../mocks/offers';
import { sortingOffers } from '../hooks/sort';
import { LocationCity } from '../const';
import { Offer } from '../types/offer';
import { OfferPreviews } from '../types/offer-preview';
import { Comment } from '../types/comment';

const initialState = {
  city: LocationCity.PARIS,
  offers: <OfferPreviews[]>[],
  initialOffers: <OfferPreviews[]>[],
  isOfferDataLoadingStatus: false,
  comments: <Comment[]>[],
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
      state.offers = sortingOffers(action.payload, state.offers, offers);
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
    });
});

export { reducer };

