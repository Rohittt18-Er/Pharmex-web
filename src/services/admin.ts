import api from './api';
import { User } from '@/types';

export const adminService = {
  async getAllUsers(role?: string, status?: string): Promise<User[]> {
    const params = new URLSearchParams();
    if (role) params.append('role', role);
    if (status) params.append('status', status);
    
    const response = await api.get<User[]>(`/admin/users?${params.toString()}`);
    return response.data;
  },

  async updateUserStatus(userId: string, status: 'approved' | 'rejected' | 'suspended'): Promise<User> {
    const response = await api.put<User>(`/admin/users/${userId}/status`, { status });
    return response.data;
  },

  async deleteUser(userId: string): Promise<void> {
    await api.delete(`/admin/users/${userId}`);
  }
};
