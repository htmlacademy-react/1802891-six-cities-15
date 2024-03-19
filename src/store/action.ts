import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { OfferPreviews } from '../types/offer-preview';
import { Comment } from '../types/comment';
import { TUser } from '../types/user';
import { TAuthorizationStatus } from '../types/authorization-status';
import { AppRoute } from '../const';

const selectCity = createAction<string>('mainPage/selectCity');

const sortOffer = createAction<string>('mainPage/sortOffer');

const loadOffer = createAction<OfferPreviews[]>('data/loadOffers');

const loadDataUser = createAction<TUser>('data/loadDataUser');

const loadComments = createAction<Comment[]>('data/loadComments');

const loadFavorite = createAction<OfferPreviews[]>('data/loadFavorite');

const chooseOffer = createAction<Offer>('mainPage/chooseOffer');

const chooseId = createAction<string>('mainPage/chooseId');

const requireAuthorization = createAction<TAuthorizationStatus>('user/requireAuthorization');

const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

const redirectToRoute = createAction<AppRoute>('mainPage/redirectToRoute');

export { selectCity, redirectToRoute, loadDataUser, sortOffer, requireAuthorization, loadOffer, setOfferDataLoadingStatus, loadComments, loadFavorite, chooseOffer, chooseId };
