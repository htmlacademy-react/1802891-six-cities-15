import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

const selectCity = createAction<Offer, string>('mainPage/selectCity');

export { selectCity };
