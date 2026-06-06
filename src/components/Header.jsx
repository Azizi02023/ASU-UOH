import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-teal-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="ASU-UOH Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5 border border-teal-500" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-navy-900">ASU-UOH</h1>
            <p className="text-xs text-slate-600">Student Portal</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('hub')}
            className="text-navy-700 font-semibold hover:text-teal-600 transition-colors"
          >
            Procedures
          </button>
          <button
            onClick={() => scrollToSection('toolkit')}
            className="text-navy-700 font-semibold hover:text-teal-600 transition-colors"
          >
            Documents
          </button>
          <button
            onClick={() => scrollToSection('announcements')}
            className="text-navy-700 font-semibold hover:text-teal-600 transition-colors"
          >
            Deadlines
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-navy-700 font-semibold hover:text-teal-600 transition-colors"
          >
            Support
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-navy-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-200 px-4 py-3 space-y-2 animate-slide-down">
          <button
            onClick={() => scrollToSection('hub')}
            className="block w-full text-left px-4 py-2 text-navy-700 font-semibold hover:bg-teal-50 rounded transition-colors"
          >
            Procedures
          </button>
          <button
            onClick={() => scrollToSection('toolkit')}
            className="block w-full text-left px-4 py-2 text-navy-700 font-semibold hover:bg-teal-50 rounded transition-colors"
          >
            Documents
          </button>
          <button
            onClick={() => scrollToSection('announcements')}
            className="block w-full text-left px-4 py-2 text-navy-700 font-semibold hover:bg-teal-50 rounded transition-colors"
          >
            Deadlines
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left px-4 py-2 text-navy-700 font-semibold hover:bg-teal-50 rounded transition-colors"
          >
            Support
          </button>
        </div>
      )}
    </header>
  );
}
