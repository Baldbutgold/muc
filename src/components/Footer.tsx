"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <div className="mb-3">
            <Image 
              src="/images/logo.png" 
              alt="MonetizeUrContent Logo" 
              width={100} 
              height={30} 
              className="h-auto"
            />
          </div>
          <p>
            Transform your product knowledge into<br />
            revenue with our done-for-you course<br />
            system.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <Link href="/blog" className="link link-hover">Blog</Link>
          <Link href="/case-studies" className="link link-hover">Case Studies</Link>
          <Link href="/free-guides" className="link link-hover">Free Guides</Link>
          <Link href="/podcast" className="link link-hover">Podcast</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/content-production" className="link link-hover">Content Production</Link>
          <Link href="/course-creation" className="link link-hover">Course Creation</Link>
          <Link href="/strategy-sessions" className="link link-hover">Strategy Sessions</Link>
          <Link href="/coaching" className="link link-hover">Coaching</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about-us" className="link link-hover">About Us</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
          <Link href="/terms" className="link link-hover">Terms of Service</Link>
          <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
        </nav>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© {new Date().getFullYear()} MonetizeUrContent. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;