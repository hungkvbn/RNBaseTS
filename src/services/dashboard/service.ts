import {ApiResponse, ApisauceInstance} from 'apisauce';
import {END_POINT} from '../../constants/enpoint';
import {ProfileResponse} from './types';

class DashboardService {
  private request?: ApisauceInstance;
  set httpInstance(httpInstance: ApisauceInstance) {
    this.request = httpInstance;
  }

  async getUserProfile(param: {
    accessToken: string;
  }): Promise<{results: ProfileResponse[]}> {
    if (!this.request) {
      return Promise.reject(new Error('Something went wrong'));
    }
    const response: ApiResponse<unknown> = await this.request?.get(
      `${END_POINT.getUsers}`,
      param,
    );
    if (response.status && response.status >= 200 && response.status <= 204) {
      return response.data as {results: ProfileResponse[]};
    }
    return Promise.reject(response.problem);
  }
}

export default new DashboardService();
