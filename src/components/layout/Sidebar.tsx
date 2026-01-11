'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Receipt, 
  Pill, 
  Users, 
  History, 
  Wallet, 
  BarChart3, 
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { authService } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Receipt, label: 'Billing', href: '/dashboard/billing' },
  { icon: Pill, label: 'Medicines', href: '/dashboard/medicines' },
  { icon: Users, label: 'Staff', href: '/dashboard/staff' },
  { icon: History, label: 'Purchase Record', href: '/dashboard/purchases' },
  { icon: Wallet, label: 'Expenses', href: '/dashboard/expenses' },
  { icon: BarChart3, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    authService.getCurrentUser().then(setUser).catch(() => {});
  }, []);

  const handleLogout = () => {
    authService.logout();
    router.push('/login');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a0a] border-r border-white/10 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Pharmex</span>
            </div>
            <button 
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
                    isActive 
                      ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                  )}
                  onClick={() => {
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} className={cn(
                      isActive ? "text-blue-400" : "group-hover:text-white"
                    )} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight size={14} className="text-blue-400" />}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-white/5">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold uppercase">
                    {user?.full_name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-semibold text-white truncate">{user?.full_name || 'Loading...'}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{user?.role || 'User'}</p>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full flex items-center justify-start space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/5 rounded-xl border border-transparent"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              <span className="font-medium">Logout System</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
