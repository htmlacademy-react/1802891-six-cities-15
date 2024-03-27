import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteAction } from '../api-action';
import { OfferPreviews } from '../../types/offer-preview';

type TInitialState = {
  isOfferDataLoadingStatus: boolean;
  favorite: OfferPreviews[];
}

const initialState: TInitialState = {
  isOfferDataLoadingStatus: false,
  favorite: [],
};

const favoriteSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.isOfferDataLoadingStatus = true;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favorite = action.payload;
        state.isOfferDataLoadingStatus = false;
      })
      .addCase(fetchFavoriteAction.rejected, (state) => {
        state.isOfferDataLoadingStatus = false;
      });
  },
  initialState,
  name: 'favorite',
  reducers: {

  },
  selectors: {
    favorite: (state) => state.favorite,
  }
});

const favoriteSelectors = favoriteSlice.selectors;

export { favoriteSlice, favoriteSelectors };
