import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, RequestStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { TUser } from '../../types/user';

type TInitialState = {
  status: string;
  isOfferDataLoadingStatus: boolean;
  authorizationStatus: string;
  dataUser: TUser | null;
}

const initialState: TInitialState = {
  status: RequestStatus.NONE,
  authorizationStatus: AuthorizationStatus.UN_KNOWN,
  isOfferDataLoadingStatus: false,
  dataUser: null,
};

const userSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isOfferDataLoadingStatus = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.isOfferDataLoadingStatus = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isOfferDataLoadingStatus = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isOfferDataLoadingStatus = false;
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
        state.dataUser = null;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isOfferDataLoadingStatus = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.isOfferDataLoadingStatus = false;
        state.authorizationStatus = AuthorizationStatus.AUTH;
        state.dataUser = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.isOfferDataLoadingStatus = false;
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      });
  },
  initialState,
  name: 'user',
  reducers: {
    redirectToRoute: (state, action: PayloadAction<AppRoute>) => {

    },
  },
  selectors: {
    dataUser: (state: TInitialState) => state.dataUser,
    authorizationStatus: (state: TInitialState) => state.authorizationStatus,
  }
});

const userAction = userSlice.actions;

const userSelector = userSlice.selectors;

export { userAction, userSelector, userSlice };


