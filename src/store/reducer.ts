import { createReducer } from '@reduxjs/toolkit';
import { selectCity } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: [...offers].filter((offer) => offer.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city.name;
      state.offers = [...offers].filter((offer) => offer.city.name === state.city);
    });
});

export { reducer };

