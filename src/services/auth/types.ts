import {
  MainStackParamList,
  AuthStackParams,
} from '../../navigation/NavigatorManager';

export type status = 'idle' | 'loading' | 'error';

export type User = {
  name: string;
};

export type ParamsLogin = {
  userId: string;
  password: string;
};

export type IAuthenticationContext = {
  status: status;
  refreshToken?: string;
  accessToken?: string;
  isLoggedIn: boolean;
  error?: string;
};

export type ProfileResponse = any;

export type AuthState = Partial<IAuthenticationContext> & {
  initScreen: keyof MainStackParamList | keyof AuthStackParams;
};
