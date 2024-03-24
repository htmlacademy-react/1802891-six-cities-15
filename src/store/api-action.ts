import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { OfferPreviews } from '../types/offer-preview';
import { APIRoute, AppRoute } from '../const';
import { Comment } from '../types/comment';
import { loadOffer, redirectToRoute, setOfferDataLoadingStatus, loadDataUser, loadComments, loadFavorite, requireAuthorization, chooseOffer } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { saveToken } from '../service/token';
import { TUser } from '../types/user';

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

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.COMMENTS}/${id}`);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadComments(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/chooseOffer',
  async (id, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(true));
    const { data } = await api.get<Offer>(`${APIRoute.OFFERS}/${id}`);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(chooseOffer(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.LOGIN);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
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
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.LOGOUT);
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  },
);

export const fetchUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUser',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TUser>(APIRoute.LOGIN);
    dispatch(loadDataUser(data));
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorite',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(true));
    const { data } = await api.get<OfferPreviews[]>(APIRoute.FAVORITE);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadFavorite(data));
  },
);

