'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../styles/header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   <header
      className={`header  ${scrolled ? "sticky" : "normal"}`} >
      <div className="container max-w-7xl mx-auto py-4">
        <div className="flex items-center space-x-1 group cursor-pointer">
            <img
              src="/logo.png"
              alt="Jenlor"
              className={` logo-img transition-all duration-300 ${
                scrolled
                  ? "large"
                  : "small"
              }`}
            />
          </div>

        {/* Desktop Nav */}
        <nav className="nav desktop">
          <Link href="/">Home</Link>
          <Link href="#">Tabs</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`nav mobile ${isOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}