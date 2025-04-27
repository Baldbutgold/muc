"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="MonetizeUrContent Logo" 
            width={75}
            height={16}
            className="h-auto"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/book-call" 
          className="btn btn-primary text-primary-content"
        >
          Book Your Free Call
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;