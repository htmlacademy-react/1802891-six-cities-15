import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './slice/offers';
import { offerSlice } from './slice/offer';
import { favoriteSlice } from './slice/favorite';
import { reviewsSlice } from './slice/reviews';
import { userSlice } from './slice/user';

const rootReducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [favoriteSlice.name]: favoriteSlice.reducer
});

export default rootReducer;
