import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthReducer} from '../services/auth/slices';
import {DashboardReducer} from '../services/dashboard';

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
