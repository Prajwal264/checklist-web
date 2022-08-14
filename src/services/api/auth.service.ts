import RestApiService, { ApiResponse, ErrorResponse } from './rest.service';

interface RegisterPayload {
  email: string;
  password: string;
}

interface LoginPayload extends RegisterPayload {};

interface RegisterResponse {
  success: string;
};

type LoginResponse = {
  success: string;
}

class AuthService extends RestApiService {

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

const authService = new AuthService();
export default authService;