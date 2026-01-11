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

export const authService = {
  async register(data: RegisterRequest): Promise<OTPResponse> {
    const response = await api.post<OTPResponse>('/register', data);
    return response.data;
  },

  async verifyOTP(data: VerifyOTPRequest): Promise<OTPResponse> {
    const response = await api.post<OTPResponse>('/verify-otp', data);
    return response.data;
  },

  async login(data: LoginRequest): Promise<TokenResponse> {
    const response = await api.post<TokenResponse>('/login', data);
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },

  async resendOTP(data: ResendOTPRequest): Promise<OTPResponse> {
    const response = await api.post<OTPResponse>('/resend-otp', data);
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/me');
    return response.data;
  },
  
  logout() {
    localStorage.removeItem('token');
    // window.location.href = '/login'; // Let the component handle redirect
  }
};
