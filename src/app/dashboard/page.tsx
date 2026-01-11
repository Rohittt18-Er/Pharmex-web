'use client';

import { useEffect, useState } from 'react';
import { authService } from '@/services/auth';
import { User } from '@/types';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { 
  Pill, 
  Receipt, 
  Users, 
  TrendingUp, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  Package2,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    authService.getCurrentUser()
      .then(setUser)
      .catch(() => router.push('/login'));
  }, [router]);

  if (!user) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-gray-400 font-medium animate-pulse">Initializing Dashboard...</p>
      </div>
    </div>
  );

  const stats = [
    { 
      label: 'Monthly Revenue', 
      value: '₹1,24,500', 
      change: '+12.5%', 
      isUp: true, 
      icon: TrendingUp, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-500/10' 
    },
    { 
      label: 'Medicine Stock', 
      value: '2,450', 
      sub: 'Items available', 
      icon: Pill, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/10' 
    },
    { 
      label: 'Active Billing', 
      value: '42', 
      sub: 'Transactions today', 
      icon: Receipt, 
      color: 'text-purple-400', 
      bg: 'bg-purple-500/10' 
    },
    { 
      label: 'Total Staff', 
      value: '8', 
      sub: 'Members on duty', 
      icon: Users, 
      color: 'text-orange-400', 
      bg: 'bg-orange-500/10' 
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Welcome Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-blue-500">{user.full_name?.split(' ')[0]}</span> 👋
          </h1>
          <p className="text-gray-400">Here's what's happening with your pharmacy today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-white/5 border-white/5 hover:border-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl ${stat.bg}`}>
                    <stat.icon size={24} className={stat.color} />
                  </div>
                  {stat.change && (
                    <div className={cn(
                      "flex items-center space-x-1 text-xs font-bold px-2 py-1 rounded-full",
                      stat.isUp ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                    )}>
                      {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      <span>{stat.change}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                {stat.sub && <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <Activity size={20} className="text-blue-400" />
                <span>Recent Activities</span>
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Receipt size={22} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">New Bill Generated</h4>
                      <p className="text-sm text-gray-400">Transaction ID: #PHX-9021{item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">₹1,250</p>
                    <p className="text-xs text-gray-500">2 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Inventory */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <AlertCircle size={20} className="text-red-400" />
              <span>Low Inventory</span>
            </h2>
            <div className="p-1 rounded-2xl bg-red-500/5 border border-red-500/10">
              {[
                { name: 'Paracetamol 500mg', stock: 12, min: 50 },
                { name: 'Cetirizine Syrup', stock: 5, min: 20 },
                { name: 'Vitamin C Tabs', stock: 8, min: 40 },
              ].map((med, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-red-500/5 rounded-xl transition-colors">
                  <div className="flex items-center space-x-3">
                    <Package2 size={18} className="text-red-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{med.name}</p>
                      <p className="text-xs text-gray-500">Min. required: {med.min}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-red-400 px-2 py-1 bg-red-500/10 rounded-lg">
                    {med.stock} left
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all mt-4">
              Restock All Items
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
