'use client';
import { useEffect, useState } from 'react';
import { authService } from '@/services/auth';
import { User } from '@/types';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    authService.getCurrentUser()
      .then(setUser)
      .catch(() => router.push('/login'));
  }, [router]);

  if (!user) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen p-8 text-white space-y-6">
      <header className="flex justify-between items-center border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <span>{user.full_name} ({user.role})</span>
          <Button variant="outline" onClick={() => {
            authService.logout();
            router.push('/login');
          }}>
            Logout
          </Button>
        </div>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-2">My Profile</h3>
          <p className="text-gray-400">Manage your account settings</p>
        </div>
        
        {user.role === 'owner' && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">Staff Management</h3>
            <p className="text-gray-400">Add or remove staff members</p>
          </div>
        )}

        {user.role === 'admin' && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">User Administration</h3>
            <p className="text-gray-400">Approve or reject verification requests</p>
          </div>
        )}
      </main>
    </div>
  );
}
