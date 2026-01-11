'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 z-30">
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-2xl px-4 py-2 w-96 group focus-within:border-blue-500/50 transition-all">
              <Search size={18} className="text-gray-500 group-focus-within:text-blue-400" />
              <input 
                type="text" 
                placeholder="Search across medicines, logs..." 
                className="bg-transparent border-0 focus:ring-0 text-sm text-white placeholder-gray-500 w-full ml-3"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-gray-400 hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0a0a0a]"></span>
              </button>
            </div>
            <div className="h-10 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-semibold text-white">UP Central Pharmacy</span>
              <span className="text-xs text-blue-400 font-medium">Verified Facility</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
