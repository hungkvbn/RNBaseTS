import {useDispatch, useSelector} from 'react-redux';
import {ParamsLogin, status} from './types';
import {AuthActions, AuthSelectors} from './slices';
import {AuthService} from '.';

export const useSignIn = (): [
  (params: ParamsLogin) => Promise<{accessToken: string; refreshToken: string}>,
  {
    status?: status;
    error?: string;
  },
] => {
  const dispatch = useDispatch();
  const auth = useSelector(AuthSelectors.selectAuth);
  const statusState = {
    status: auth.status,
    error: auth.error,
  };
  const signIn = async (params: ParamsLogin) => {
    try {
      dispatch(AuthActions.signIn());
      const data = await AuthService.login(params);
      dispatch(AuthActions.signInSuccess(data));
      return data;
    } catch (error) {
      dispatch(AuthActions.signInFailed(error));
      console.error(error);
      return Promise.reject(error);
    }
  };

  return [signIn, statusState];
};
