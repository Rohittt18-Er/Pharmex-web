import api from './api';
import { User } from '@/types';

export interface CreateStaffRequest {
  email: string;
  password: string;
  username: string;
  full_name?: string;
}

export const ownerService = {
  async createStaff(data: CreateStaffRequest): Promise<User> {
    const response = await api.post<User>('/owner/staff', data);
    return response.data;
  },

  async getStaff(): Promise<User[]> {
    const response = await api.get<User[]>('/owner/staff');
    return response.data;
  }
};
