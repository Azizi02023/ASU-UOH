import React from 'react';
import { BookOpen, Shield, Users } from 'lucide-react';

export default function SecretaryAddress() {
  return (
    <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-navy-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero */}
        <div className="text-center mb-12">
          <img src="./logo.png" alt="ASU-UOH Logo" className="w-32 h-32 mx-auto mb-6 object-contain bg-white rounded-full p-2 border-4 border-amber-500 shadow-xl animate-fade-in" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Afghan Student Union
          </h1>
          <p className="text-xl sm:text-2xl text-teal-100 mb-2">
            University of Haripur (ASU-UOH)
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Secretary Address Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-4">
            <Shield className="text-amber-400 flex-shrink-0 mt-1" size={28} />
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
              From the Desk of the Academic Secretary
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-teal-50">
            Welcome to the official ASU-UOH Student Portal. Our mission is to empower Afghan students by demystifying bureaucratic procedures and streamlining compliance documentation. Whether you need an Embassy NOC, University Bonafide Letter, or HEC verification—this portal guides you through each step with clarity and precision.
          </p>
          <p className="text-lg leading-relaxed text-teal-50 mt-4">
            Navigating Pakistan's educational and administrative landscape is complex. Missteps can delay your visa, disrupt your studies, or create legal complications. We have consolidated the most critical procedures, document checklists, and submission workflows into one authoritative resource to protect your academic journey.
          </p>
        </div>

        {/* Quick Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <BookOpen className="text-amber-400 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold mb-2">7 Core Pathways</h3>
            <p className="text-teal-100 text-sm">
              NOC, Bonafide, HEC, Equivalence, Visa, and more
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <Shield className="text-amber-400 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold mb-2">Complete Checklists</h3>
            <p className="text-teal-100 text-sm">
              Every document requirement clearly outlined
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <Users className="text-amber-400 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold mb-2">Direct Support</h3>
            <p className="text-teal-100 text-sm">
              Contact info for UOH International Student Office
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
