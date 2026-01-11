import api from './api';
import { 
  LoginRequest, 
  RegisterRequest, 
  TokenResponse, 
  OTPResponse, 
  VerifyOTPRequest, 
  ResendOTPRequest, 
  User 
} from '@/types';
import { AUTH_TOKEN_KEY } from '@/constants';

export const authService = {
  async register(data: RegisterRequest): Promise<OTPResponse> {
    const response = await api.post<OTPResponse>('auth/register', data);
    return response.data;
  },

  async verifyOTP(data: VerifyOTPRequest): Promise<OTPResponse> {
    const response = await api.post<OTPResponse>('auth/verify-otp', data);
    return response.data;
  },

  async login(data: LoginRequest): Promise<TokenResponse> {
    const response = await api.post<TokenResponse>('auth/login', data);
    if (response.data.access_token) {
      localStorage.setItem(AUTH_TOKEN_KEY, response.data.access_token);
    }
    return response.data;
  },

  async resendOTP(data: ResendOTPRequest): Promise<OTPResponse> {
    const response = await api.post<OTPResponse>('auth/resend-otp', data);
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('auth/me');
    return response.data;
  },
  
  logout() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    // window.location.href = '/login'; // Let the component handle redirect
  }
};
