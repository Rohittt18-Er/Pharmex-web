'use client';

import { Suspense } from 'react';
import { VerifyOTPForm } from '@/components/features/auth/VerifyOTPForm';

export default function VerifyOTPPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-4">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Verification</h2>
        </div>
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
          <VerifyOTPForm />
        </Suspense>
      </div>
    </div>
  );
}
