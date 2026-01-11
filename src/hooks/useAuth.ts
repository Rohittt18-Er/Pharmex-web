'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth';
import { AUTH_TOKEN_KEY, USER_INFO_KEY } from '@/constants';

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userInfo = await authService.getCurrentUser();
        setUser(userInfo);
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
      } catch (error) {
        console.error('Failed to fetch user info', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_INFO_KEY);
    setUser(null);
    router.push('/login');
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated: !!user,
  };
}
