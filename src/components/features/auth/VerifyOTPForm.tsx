'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { authService } from '@/services/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export function VerifyOTPForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await authService.verifyOTP({ email, otp });
      setSuccess('Account verified successfully! Redirecting...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Invalid OTP. Please try again.');
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await authService.resendOTP({ email });
      setSuccess('OTP resent successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to resend OTP.');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Verify Email</CardTitle>
        <CardDescription>
          Enter the 6-digit code sent to <span className="text-white">{email}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start space-x-2 text-sm text-red-400">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-start space-x-2 text-sm text-green-400">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Enter OTP (e.g. 123456)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="text-center text-2xl tracking-widest"
              maxLength={6}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" isLoading={loading}>
            Verify Account
          </Button>
          <div className="text-center">
            <button
              type="button"
              onClick={handleResend}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Resend OTP
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
