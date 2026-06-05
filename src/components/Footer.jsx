import React from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-teal-600">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h3 className="text-lg font-bold">ASU-UOH</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              Afghan Student Union at the University of Haripur. Empowering Afghan students through clear guidance on bureaucratic procedures and administrative support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#hub" className="text-teal-200 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <span>→</span> Procedures
              </a>
              <a href="#toolkit" className="text-teal-200 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <span>→</span> Documents
              </a>
              <a href="#announcements" className="text-teal-200 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <span>→</span> Deadlines
              </a>
              <a href="#faq" className="text-teal-200 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <span>→</span> Support
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact ISS</h4>
            <div className="space-y-3">
              <a
                href="tel:+92-995-616555"
                className="text-teal-200 hover:text-white transition-colors flex items-start gap-2 text-sm"
              >
                <Phone className="flex-shrink-0 mt-1" size={16} />
                +92-995-616555
              </a>
              <a
                href="mailto:iss@uoh.edu.pk"
                className="text-teal-200 hover:text-white transition-colors flex items-start gap-2 text-sm break-all"
              >
                <Mail className="flex-shrink-0 mt-1" size={16} />
                iss@uoh.edu.pk
              </a>
              <div className="text-teal-200 flex items-start gap-2 text-sm">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <span>ISS Building, UOH Main Campus</span>
              </div>
            </div>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Support</h4>
            <div className="space-y-3">
              <a
                href="mailto:uoh.asu@gmail.com"
                className="text-teal-200 hover:text-white transition-colors flex items-start gap-2 text-sm"
              >
                <Mail className="flex-shrink-0 mt-1" size={16} />
                ASU Email
              </a>
              <button className="text-teal-200 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <span>📋</span> Download Guide (PDF)
              </button>
              <button className="text-teal-200 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <span>💬</span> WhatsApp Support
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-teal-200">
          {/* Copyright */}
          <div>
            <p>
              © {currentYear} Afghan Student Union, University of Haripur. All rights reserved.
            </p>
          </div>

          {/* GitHub Link */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/asu-uoh/student-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              <span>View on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-navy-900/50 border border-navy-700 rounded-lg p-4 text-xs text-teal-100">
          <p>
            <strong>Disclaimer:</strong> This portal provides information based on current procedures as of {new Date().toLocaleDateString()}. 
            Administrative procedures, fees, and timelines may change. Always verify current requirements with the respective offices 
            (UOH International Student Office, Afghan Embassy, HEC). This site is maintained by the Afghan Student Union and is not 
            an official government or university publication.
          </p>
        </div>

        {/* Accessibility Notice */}
        <div className="mt-4 text-xs text-slate-400 text-center">
          <p>This website is optimized for mobile devices. For accessibility support, contact uoh.asu@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
