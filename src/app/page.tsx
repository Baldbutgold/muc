import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Use the reusable Header component */}
      <Header />
      
      <main className="pt-24">
        {/* Placeholder - all other content removed as requested */}
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-gray-500">Header only - other content sections will be added later</p>
        </div>
      </main>
    </div>
  );
}
