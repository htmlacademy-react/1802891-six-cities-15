import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { OfferPreviews } from '../types/offer-preview';
import { APIRoute, AppRoute } from '../const';
import { Comment } from '../types/comment';
import { userAction } from './slice/user';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { saveToken } from '../service/token';
import { TUser } from '../types/user';

export const fetchOffersAction = createAsyncThunk<OfferPreviews[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreviews[]>(APIRoute.OFFERS);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.COMMENTS}/${id}`);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/chooseOffer',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.OFFERS}/${id}`);
    return data;
  },
);

export const fetchOfferNearbyAction = createAsyncThunk<OfferPreviews[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/chooseOfferNearby',
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferPreviews[]>(`${APIRoute.OFFERS}/${id}/nearby`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.LOGIN);

  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.LOGIN, { email, password });
    saveToken(token);
    dispatch(userAction.redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.LOGOUT);
  },
);

export const fetchUserAction = createAsyncThunk<TUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUser',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUser>(APIRoute.LOGIN);
    return data;
  },
);

export const fetchFavoriteAction = createAsyncThunk<OfferPreviews[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorite',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreviews[]>(APIRoute.FAVORITE);
    return data;
  },
);

