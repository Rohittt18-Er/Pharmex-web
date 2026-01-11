'use client';

import Link from 'next/link';
import { LoginForm } from '@/components/features/auth/LoginForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-4">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Welcome back</h2>
          <p className="text-gray-400 mt-2">Sign in to your account to continue</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-400 hover:text-blue-300 font-medium">
                Create Account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
