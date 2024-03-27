import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../service/api';
import { redirect } from './middlewares/redirect';
import rootReducer from './rootReduser';

const api = createAPI();

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
  reducer: rootReducer
});

export { store };
