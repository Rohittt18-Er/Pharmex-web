'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Pharmex</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-300 hover:text-white">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-500/25">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
