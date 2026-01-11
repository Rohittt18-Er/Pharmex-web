'use client';

import Link from 'next/link';
import { RegisterForm } from '@/components/features/auth/RegisterForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-4">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Create an account</h2>
          <p className="text-gray-400 mt-2">Start managing your pharmacy today</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your details to create your owner account</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
