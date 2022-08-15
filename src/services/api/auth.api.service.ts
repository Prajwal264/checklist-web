import RestApiService, { ApiResponse } from './rest.api.service';
import type { IUser } from './user.api.service';

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
};

interface RegisterResponse {
  success: string;
};

type LoginResponse = {
  success: string;
}

class AuthAPIService extends RestApiService {

  constructor() {
    super();
    super.updateContextPath('auth')
  }

  register(payload: RegisterPayload): Promise<ApiResponse<RegisterResponse>> {
    return this.post('register', payload)
  }

  login(payload: LoginPayload): Promise<ApiResponse<LoginResponse>> {
    return this.post('verify', payload);
  }
};

const authApiService = new AuthAPIService();
export default authApiService;