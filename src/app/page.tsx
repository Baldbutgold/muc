import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Use the reusable Header component */}
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="bg-white py-20 md:py-32 relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          
          {/* Main content container */}
          <div className="container mx-auto px-4 relative z-10">
            {/* Company badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 border border-gray-200 text-gray-800 rounded-full px-4 py-1 flex items-center gap-1 text-sm">
                <span className="text-amber-500">✨</span> Transform your knowledge into revenue <span className="text-amber-500">✨</span>
              </div>
            </div>
            
            {/* Main headline */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-tight">
                Turn your expertise into 
                <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full my-3">profitable courses</div>
              </h1>
            </div>
            
            {/* Supporting text */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg md:text-xl text-gray-600">
                Done-for-you course creation and digital product services for creators, coaches and B2B SaaS businesses. 
                Launch your knowledge business without the stress of DIY production.
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
              <button className="btn btn-primary btn-lg px-10 text-white">Book a Strategy Call</button>
              <button className="btn btn-outline btn-lg px-10">See Our Process</button>
            </div>
            
            {/* Social proof */}
            <div className="mt-20 mb-6 text-center">
              <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-6">Trusted by experts in</p>
            </div>
            
            {/* Expert avatars row */}
            <div className="grid grid-cols-3 md:grid-cols-7 gap-4 max-w-5xl mx-auto">
              {[
                "SaaS", "Coaching", "Marketing", "Finance", 
                "Education", "Health", "Technology"
              ].map((expertise, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="aspect-square w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xs text-gray-600 font-medium">{expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat interface mock - optional addition to the right side */}
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-80 h-96 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="h-12 bg-gray-100 border-b flex items-center px-4">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
              <span className="text-sm text-gray-600 font-medium">Course Builder</span>
            </div>
            <div className="p-4 h-full bg-white">
              <div className="flex flex-col gap-3">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] text-sm">
                  How can we help you launch your course?
                </div>
                <div className="bg-blue-100 rounded-lg p-3 max-w-[80%] self-end text-sm">
                  I need help creating my first digital product!
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] text-sm">
                  We can definitely help with that. Our team specializes in course creation...
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Section - Placeholder */}
        <section id="pain" className="bg-base-200 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              If You Don't Act Now...
            </h2>
            {/* Pain points will be implemented in the next phase */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Support Tickets Keep Piling Up</h3>
                  <p>Placeholder for pain point description</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Customer Onboarding Takes Too Long</h3>
                  <p>Placeholder for pain point description</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Missed Revenue Opportunities</h3>
                  <p>Placeholder for pain point description</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections will be implemented in future phases */}

        {/* Footer - Simple version */}
        <footer className="bg-neutral text-neutral-content p-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="mb-4">
                  <Image 
                    src="/images/logo.png" 
                    alt="MonetizeUrContent Logo" 
                    width={160} 
                    height={35} 
                    className="h-auto brightness-[2]" 
                  />
                </div>
                <p className="max-w-xs mt-2">
                  Transform your product knowledge into revenue with our done-for-you content system.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="footer-title">Get Started</span>
                <button className="btn btn-primary mt-2">Book a Strategy Call</button>
              </div>
            </div>
            <div className="mt-8 border-t border-base-300 pt-6">
              <p>&copy; {new Date().getFullYear()} MonetizeUrContent. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
