import React from 'react';
import {useSelector} from 'react-redux';
import {AuthSelectors} from './slices';
import {AuthState} from './types';

export const AuthenticationContext = React.createContext<AuthState | undefined>(
  undefined,
);

const AuthenticationProvider = (props: any) => {
  const auth = useSelector(AuthSelectors.selectAuth);
  const refreshToken = auth.refreshToken;
  const accessToken = auth.accessToken;
  const isLoggedIn = auth.isLoggedIn || false;
  const error = auth.error;
  const status = auth?.status || 'idle';
  const initScreen = auth?.initScreen || 'DashboardScreen';
  return (
    <AuthenticationContext.Provider
      value={{
        status,
        refreshToken,
        accessToken,
        isLoggedIn,
        error,
        initScreen,
      }}>
      {props.children && React.Children.only(props.children)}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
