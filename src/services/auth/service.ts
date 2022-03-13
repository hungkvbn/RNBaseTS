import {ApiResponse, ApisauceInstance} from 'apisauce';
import {ParamsLogin, ProfileResponse} from '.';
import {END_POINT} from '../../constants/enpoint';

const AuthDataMock = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
};

class AuthService {
  private request?: ApisauceInstance;
  set httpInstance(httpInstance: ApisauceInstance) {
    this.request = httpInstance;
  }

  async login(params: ParamsLogin): Promise<ProfileResponse> {
    if (!this.request) {
      return Promise.reject(new Error('Something went wrong'));
    }
    const response: ApiResponse<unknown> = await this.request?.post(
      `${END_POINT.login}`,
      params,
    );
    if (response.status && response.status >= 200 && response.status <= 204) {
      return response.data as ProfileResponse;
    } else {
      return Promise.resolve(AuthDataMock as ProfileResponse);
    }
    // return Promise.reject(response.problem);
  }
}

export default new AuthService();
