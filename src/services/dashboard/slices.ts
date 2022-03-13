import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {SLICE_KEY_NAME} from '..';
import {RootState} from '../../store/store';
import {fetchProfile} from './effects';
import {DashboardState} from './types';

const initialState: DashboardState = {
  userProfile: undefined,
  loading: false,
  error: undefined,
};

const DashboardSlice = createSlice({
  name: SLICE_KEY_NAME.AUTH_KEY,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(DashboardAsyncActions.fetchProfile.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(
      DashboardAsyncActions.fetchProfile.fulfilled,
      (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.userProfile = action.payload.results[0];
      },
    );
    builder.addCase(
      DashboardAsyncActions.fetchProfile.rejected,
      (state, action) => {
        state.error = action.error as any;
        state.loading = false;
      },
    );
  },
});

const getState = (rootState: RootState) => rootState.dashboard;

export const DashboardReducer = DashboardSlice.reducer;
export const DashboardActions = DashboardSlice.actions;
export const DashboardAsyncActions = {
  fetchProfile: fetchProfile(SLICE_KEY_NAME.AUTH_KEY),
};

const selectProfile = createSelector(getState, ({userProfile}) => userProfile);
const selectDashboard = createSelector(getState, dashboard => dashboard);

export const DashboardSelectors = {
  selectDashboard,
  selectProfile,
};
