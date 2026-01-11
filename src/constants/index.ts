export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8002/api/v1';

export const ROLES = {
  ADMIN: 'admin',
  OWNER: 'owner',
  STAFF: 'staff',
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const AUTH_TOKEN_KEY = 'token';
export const USER_INFO_KEY = 'user_info';
