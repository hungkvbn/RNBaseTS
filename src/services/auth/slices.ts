import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {SLICE_KEY_NAME} from '..';
import {RootState} from '../../store/store';
import {AuthState} from './types';

const initialState: AuthState = {
  status: 'idle',
  error: undefined,
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  initScreen: 'SettingScreen',
};

const AuthSlice = createSlice({
  name: SLICE_KEY_NAME.AUTH_KEY,
  initialState: initialState,
  reducers: {
    signIn: state => {
      state.status = 'loading';
      state.error = undefined;
    },
    signInSuccess: (state, {payload}) => {
      const {accessToken, refreshToken} = payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isLoggedIn = true;
      state.status = 'idle';
    },
    signInFailed: (state, actionPayload) => {
      state.status = 'error';
      state.error = actionPayload.payload.error;
    },
  },
});

const getAuthState = (rootState: RootState) => rootState.auth;

export const AuthReducer = AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;

const selectToken = createSelector(
  getAuthState,
  ({accessToken}) => accessToken,
);
const selectAuth = createSelector(getAuthState, auth => auth);

export const AuthSelectors = {
  selectAuth,
  selectToken,
};
