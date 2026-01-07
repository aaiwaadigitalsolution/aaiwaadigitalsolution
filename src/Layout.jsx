import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <ScrollToTop /> {/* 🔥 THIS FIXES THE ISSUE */}

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
