'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService } from '@/services/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { AlertCircle } from 'lucide-react';
import { ROLES } from '@/constants';

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await authService.login(formData);
      const user = response?.user;
      
      if (user?.role === ROLES.ADMIN) {
        router.push('/dashboard');
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.detail || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start space-x-2 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Email</label>
        <Input
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
            Forgot password?
          </Link>
        </div>
        <Input
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" isLoading={loading}>
        Sign In
      </Button>
    </form>
  );
}
