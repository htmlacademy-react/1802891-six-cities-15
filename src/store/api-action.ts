import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { APIRoute } from '../const';
import { Comment } from '../types/comment';
import { loadOffer, setOfferDataLoadingStatus, loadComments, loadFavorite, chooseOffer } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.OFFERS);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadOffer(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();
    dispatch(setOfferDataLoadingStatus(true));
    const { data } = await api.get<Comment[]>(`${APIRoute.COMMENTS}/${state.idOffer}`);
    dispatch(setOfferDataLoadingStatus(false));
    console.log(data);
    dispatch(loadComments(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'mainPage/chooseOffer',
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();
    dispatch(setOfferDataLoadingStatus(true));
    const { data } = await api.get<Offer>(`${APIRoute.OFFERS}/${state.idOffer}`);
    dispatch(setOfferDataLoadingStatus(false));
    console.log(data);
    dispatch(chooseOffer(data));
  },
);

// export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchOffers',
//   async (_arg, { dispatch, extra: api }) => {
//     dispatch(setOfferDataLoadingStatus(true));
//     const { data } = await api.get<Offer[]>(APIRoute.OFFERS);
//     const { comments } = await api.get<Offer[]>(APIRoute.COMMENTS);
//     const { favorite } = await api.get<Offer[]>(APIRoute.FAVORITE);
//     const { user } = await api.get<Offer[]>(APIRoute.USER);
//     dispatch(setOfferDataLoadingStatus(false));
//     dispatch(loadOffer(data));
//   },
// );

