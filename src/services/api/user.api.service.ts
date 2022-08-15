import RestApiService, { ApiResponse } from './rest.api.service';

export interface IUser {
  email: string;
  updatedAt: string;
  userId: string;
  username: string;
  __v: number;
  _id: string;
  createdAt: string;
}

class UserAPIService extends RestApiService {
  constructor() {
    super();
    super.authorized = true;
    super.updateContextPath('auth');
  }

  async me(): Promise<ApiResponse<IUser>> {
    const response = await this.get('me');
    return response;
  }
}

export const userAPIService = new UserAPIService();