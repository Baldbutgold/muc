"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo - reduced size */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="MonetizeUrContent Logo" 
            width={75}
            height={16}
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation - using design guidelines */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/case-studies" className="text-gray-800 hover:text-[#9381FF] font-medium text-sm">
            Case Studies
          </Link>
          <Link href="/about-us" className="text-gray-800 hover:text-[#9381FF] font-medium text-sm">
            About Us
          </Link>
          <Link href="/resources" className="text-gray-800 hover:text-[#9381FF] font-medium text-sm">
            Resources
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-[#9381FF] font-medium text-sm">
            Blog
          </Link>
        </nav>

        {/* CTA Button - using design accent colors */}
        <div className="hidden md:block">
          <Link 
            href="/book-call" 
            className="bg-[#9381FF] hover:bg-[#B8B8FF] text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
          >
            Book Your Free Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="p-2 text-gray-800 hover:text-[#9381FF] transition-colors"
            onClick={() => {
              const drawer = document.getElementById('mobile-menu-drawer');
              if (drawer) {
                (drawer as HTMLInputElement).checked = !(drawer as HTMLInputElement).checked;
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className="drawer drawer-end md:hidden">
        <input id="mobile-menu-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-50">
          <label htmlFor="mobile-menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 min-h-full bg-white text-base-content">
            <div className="flex justify-between items-center mb-6 pb-2 border-b">
              <Image 
                src="/images/logo.png" 
                alt="MonetizeUrContent Logo" 
                width={65}
                height={14}
                className="h-auto"
              />
              <label htmlFor="mobile-menu-drawer" className="btn btn-sm btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
            <ul className="space-y-3">
              <li><Link href="/case-studies" className="block py-2 text-gray-800 hover:text-[#9381FF]">Case Studies</Link></li>
              <li><Link href="/about-us" className="block py-2 text-gray-800 hover:text-[#9381FF]">About Us</Link></li>
              <li><Link href="/resources" className="block py-2 text-gray-800 hover:text-[#9381FF]">Resources</Link></li>
              <li><Link href="/blog" className="block py-2 text-gray-800 hover:text-[#9381FF]">Blog</Link></li>
              <li className="pt-6">
                <Link href="/book-call" className="bg-[#9381FF] hover:bg-[#B8B8FF] text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm block text-center transition-colors">
                  Book Your Free Call
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;