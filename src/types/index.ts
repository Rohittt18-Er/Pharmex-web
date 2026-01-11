// User Roles
export const ROLE_OWNER = 'owner';
export const ROLE_ADMIN = 'admin';
export const ROLE_STAFF = 'staff';

export type UserRole = typeof ROLE_OWNER | typeof ROLE_ADMIN | typeof ROLE_STAFF;

export interface User {
  _id: string;
  email: string;
  full_name?: string;
  role: UserRole;
  is_active: boolean;
  is_verified: boolean;
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  created_at?: string;
  updated_at?: string;
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  full_name?: string;
  role: 'owner'; // Only owners register publicly
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  user: User; // Assuming backend returns user info with token or we fetch it separately
}

export interface OTPResponse {
  message: string;
  email: string;
}

export interface VerifyOTPRequest {
  email: string;
  otp: string;
}

export interface ResendOTPRequest {
  email: string;
}
