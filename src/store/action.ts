import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { OfferPreviews } from '../types/offer-preview';
import { Comment } from '../types/comment';

const selectCity = createAction<string>('mainPage/selectCity');

const sortOffer = createAction<string>('mainPage/sortOffer');

const loadOffer = createAction<OfferPreviews[]>('data/loadOffers');

const loadComments = createAction<Comment[]>('data/loadComments');

const loadFavorite = createAction<Offer[]>('data/loadFavorite');

const chooseOffer = createAction<Offer>('mainPage/chooseOffer');

const chooseId = createAction<string>('mainPage/chooseId');

const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export { selectCity, sortOffer, loadOffer, setOfferDataLoadingStatus, loadComments, loadFavorite, chooseOffer, chooseId };
