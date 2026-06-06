import React from 'react';
import EmbassyNOCPathway from './EmbassyNOCPathway';
import BonafideLetterPathway from './BonafideLetterPathway';
import HECNOCPathway from './HECNOCPathway';
import EquivalenceCertificatePathway from './EquivalenceCertificatePathway';
import VisaExtensionPathway from './VisaExtensionPathway';
import PoliceRegistrationPathway from './PoliceRegistrationPathway';
import DegreeAttestationPathway from './DegreeAttestationPathway';
import { FileText, Award, Building2, GraduationCap, Globe, Fingerprint, FileCheck } from 'lucide-react';

export default function BureaucracyHub({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'embassy', label: 'Embassy NOC', icon: FileText },
    { id: 'bonafide', label: 'Bonafide Letter', icon: Award },
    { id: 'hec', label: 'HEC NOC', icon: Building2 },
    { id: 'equivalence', label: 'Equivalence Certificate', icon: GraduationCap },
    { id: 'visa', label: 'Visa Extension', icon: Globe },
    { id: 'police', label: 'Police Registration', icon: Fingerprint },
    { id: 'attestation', label: 'Degree Attestation', icon: FileCheck },
  ];

  return (
    <section id="hub" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="heading-lg">International Bureaucracy Hub</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Essential procedural pathways for Afghan students studying in Pakistan. Select a pathway below to view step-by-step requirements and document checklists.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 flex-wrap">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-navy-700 border-2 border-slate-300 hover:border-teal-500'
              }`}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'embassy' && <EmbassyNOCPathway />}
          {activeTab === 'bonafide' && <BonafideLetterPathway />}
          {activeTab === 'hec' && <HECNOCPathway />}
          {activeTab === 'equivalence' && <EquivalenceCertificatePathway />}
          {activeTab === 'visa' && <VisaExtensionPathway />}
          {activeTab === 'police' && <PoliceRegistrationPathway />}
          {activeTab === 'attestation' && <DegreeAttestationPathway />}
        </div>
      </div>
    </section>
  );
}

