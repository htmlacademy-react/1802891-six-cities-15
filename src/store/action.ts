import { createAction } from '@reduxjs/toolkit';

const selectCity = createAction<string>('mainPage/selectCity');
const sortOffer = createAction<string>('mainPage/sortOffer');

export { selectCity, sortOffer };
