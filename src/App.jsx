import React, { useState } from 'react';
import Header from './components/Header';
import SecretaryAddress from './components/SecretaryAddress';
import BureaucracyHub from './components/BureaucracyHub';
import DocumentToolkit from './components/DocumentToolkit';
import AnnouncementsBoard from './components/AnnouncementsBoard';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('embassy');

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section with Secretary Address */}
      <SecretaryAddress />

      {/* Main Bureaucracy Hub */}
      <BureaucracyHub activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Document Toolkit */}
      <DocumentToolkit />

      {/* Announcements Board */}
      <AnnouncementsBoard />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
