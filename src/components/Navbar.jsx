import React, { useState, useEffect } from 'react';
import { Headphones, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Experience', href: '#interactive-experience' },
    { name: 'Anatomy', href: '#fittings-and-details' },
    { name: 'Philosophy', href: '#design-philosophy' },
    { name: 'Showcase', href: '#final-showcase' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-md shadow-slate-900/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:border-slate-400 transition-all duration-300 group-hover:scale-105 shadow-sm">
            <Headphones className="w-5 h-5 text-slate-800 group-hover:text-black transition-colors" />
          </div>
          <span className="text-xl font-extrabold tracking-[0.2em] text-slate-950">
            SONIQ
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-slate-950 transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-slate-900 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#interactive-experience"
            onClick={(e) => handleLinkClick(e, '#interactive-experience')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-slate-900/10 active:scale-95 cursor-pointer"
          >
            <span>Explore Experience</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-base font-medium text-slate-700 hover:text-slate-950 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#interactive-experience"
            onClick={(e) => handleLinkClick(e, '#interactive-experience')}
            className="block w-full text-center py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-slate-900 text-white mt-4 shadow-md"
          >
            Explore Experience
          </a>
        </div>
      )}
    </header>
  );
}
