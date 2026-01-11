'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { AlertCircle } from 'lucide-react';
import { ROLES } from '@/constants';

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    
    try {
      await authService.register({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        full_name: formData.full_name,
        role: ROLES.OWNER
      });
      
      // Redirect to OTP verification
      router.push(`/verify-otp?email=${encodeURIComponent(formData.email)}`);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Registration failed. Please try again.');
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
        <label className="text-sm font-medium text-gray-300">Full Name</label>
        <Input
          type="text"
          placeholder="John Doe"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Username</label>
        <Input
          type="text"
          placeholder="johndoe"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
      </div>
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
        <label className="text-sm font-medium text-gray-300">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          minLength={8}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Confirm Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" isLoading={loading}>
        Create Account
      </Button>
    </form>
  );
}
