import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download, ExternalLink } from 'lucide-react';

export default function EquivalenceCertificatePathway() {
  const [activeSubTab, setActiveSubTab] = useState('ibcc'); // 'ibcc' or 'hec'

  // Checklist for IBCC
  const [ibccChecklist, setIbccChecklist] = useState({
    shahadatnama: false,
    transcripts: false,
    translation: false,
    afghanMofa: false,
    afghanEmbassy: false,
    pakMofa: false,
    passportCopy: false,
  });

  // Checklist for HEC
  const [hecChecklist, setHecChecklist] = useState({
    originalDegree: false,
    transcripts: false,
    ibccEquiv: false,
    afghanMofa: false,
    afghanEmbassy: false,
    pakMofa: false,
    passportCopy: false,
  });

  // Steps active state
  const [steps, setSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });

  const toggleIbccChecklist = (key) => {
    setIbccChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleHecChecklist = (key) => {
    setHecChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleStep = (key) => {
    setSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const ibccChecklistItems = [
    { key: 'shahadatnama', label: 'Original Shahadatnama (Grade 12 Certificate)' },
    { key: 'transcripts', label: 'Original Transcripts/Grade Sheets (Grades 10, 11, 12)' },
    { key: 'translation', label: 'Certified English/Urdu translation of Shahadatnama (if original is in Dari/Pashto)' },
    { key: 'afghanMofa', label: 'Attestation stamp by Ministry of Foreign Affairs (MoFA) Kabul' },
    { key: 'afghanEmbassy', label: 'Attestation stamp by Afghan Embassy or Consulate in Pakistan' },
    { key: 'pakMofa', label: 'Attestation stamp by Ministry of Foreign Affairs (MoFA) of Pakistan' },
    { key: 'passportCopy', label: 'Photocopy of Passport (biographic + visa page) OR Proof of Registration (PoR) Card' },
  ];

  const hecChecklistItems = [
    { key: 'originalDegree', label: 'Original Bachelor\'s / Master\'s Degree Certificate' },
    { key: 'transcripts', label: 'Original official transcripts (semester-wise/year-wise)' },
    { key: 'ibccEquiv', label: 'Copy of IBCC Equivalence Certificate for Grade 12 (Shahadatnama)' },
    { key: 'afghanMofa', label: 'Attestation stamp by Ministry of Foreign Affairs (MoFA) Kabul' },
    { key: 'afghanEmbassy', label: 'Attestation stamp by Afghan Embassy or Consulate in Pakistan' },
    { key: 'pakMofa', label: 'Attestation stamp by Ministry of Foreign Affairs (MoFA) of Pakistan' },
    { key: 'passportCopy', label: 'Photocopy of Passport (biographic + visa page) OR PoR Card' },
  ];

  const ibccSteps = [
    {
      key: 'step1',
      title: 'Chain Attestation & Certified Translation',
      description: 'Get all your high school documents translated and fully attested through the official diplomatic chain.',
      tasks: [
        'Obtain certified English translations of your Shahadatnama and transcript sheets if they are not already in English/Urdu.',
        'Get the original papers attested by the Ministry of Foreign Affairs (MoFA) in Kabul/Afghanistan.',
        'Visit the Afghan Embassy or consulate in Pakistan (Islamabad, Peshawar, Karachi, Quetta) to get their official attestation seal.',
        'Submit the documents to the Pakistani MoFA (Ministry of Foreign Affairs) in Islamabad or its liaison offices for final security clearance and validation stamps.',
      ],
    },
    {
      key: 'step2',
      title: 'Online Application on IBCC Portal',
      description: 'Register and apply on the official Inter Boards Coordination Commission (IBCC) equivalence portal.',
      tasks: [
        'Go to equivalence.ibcc.edu.pk and register a student account.',
        'Fill in the online application, selecting "Equivalence Certificate" for Grade 12.',
        'Enter details of your school qualification (Shahadatnama, year of completion, board/authority in Afghanistan).',
        'Upload clear, scanned PDFs of all original documents and their corresponding attestation stamps.',
      ],
    },
    {
      key: 'step3',
      title: 'Fee Payment & Document Submission',
      description: 'Pay the prescribed processing fee and submit your physical documents.',
      tasks: [
        'Generate the fee voucher/challan on the IBCC portal.',
        'Pay the equivalence fee (via 1-Link, online banking, or designated bank branches).',
        'Select your submission mode: Walk-in (requires appointment booking on the portal) or Courier (submit through designated TCS/courier offices).',
        'Hand over or dispatch your complete application folder, including original documents (or certified copies), photocopies, fee receipt, and online application printout.',
      ],
    },
    {
      key: 'step4',
      title: 'Verification & Equivalence Issuance',
      description: 'IBCC evaluates your school credentials and issues your equivalence certificate.',
      tasks: [
        'IBCC verifies document authenticity with Afghan authorities and coordinates with MoFA.',
        'Standard processing takes 10-15 working days. Express service takes 3-5 days (additional charges apply).',
        'Once approved, your Equivalence Certificate (stating your qualification is equivalent to HSSC/Intermediate in Pakistan) will be printed.',
        'Collect in person (for Walk-in mode) or receive via courier at your address.',
      ],
    },
  ];

  const hecSteps = [
    {
      key: 'step1',
      title: 'Diplomatic Attestations & Prerequisites',
      description: 'Verify your foreign university degree through the embassy chain and obtain your IBCC school equivalence.',
      tasks: [
        'Verify your degree and transcript with the Afghan MoFA and the Afghan Embassy in Islamabad.',
        'Submit to Pakistani MoFA for the final diplomatic attestation stamp.',
        'Ensure you already hold a valid IBCC Equivalence Certificate for your High School/Shahadatnama; HEC will reject applications without this prerequisite.',
      ],
    },
    {
      key: 'step2',
      title: 'Online Application on HEC e-Services Portal',
      description: 'Create an account and submit your degree details on the HEC portal.',
      tasks: [
        'Log in to eservices.hec.gov.pk (create an account if you do not have one).',
        'Complete your academic profile from Matric/Grade 10 all the way to your highest qualification.',
        'Navigate to the "Degree Equivalence" tab and start a new application.',
        'Specify details of your foreign university (name, country, major, duration of study) and upload scanned PDFs of degrees and transcripts.',
      ],
    },
    {
      key: 'step3',
      title: 'HEC Online Evaluation & Fee Payment',
      description: 'HEC will review your online application and generate a payment link.',
      tasks: [
        'Wait for HEC to perform the initial online scrutiny (takes 2-5 days).',
        'Once HEC approves the online review, you will receive an SMS/Email to pay the equivalence fee.',
        'Generate the 1-Link consumer ID from the portal and pay the fee through online banking, ATM, or banking apps.',
      ],
    },
    {
      key: 'step4',
      title: 'Document Dispatch & Collection',
      description: 'Submit physical documents for final verification and receive your equivalence letter.',
      tasks: [
        'Print the application form and the paid challan/receipt.',
        'Mail your physical documents (attested photocopies or originals as instructed on the portal) to HEC Headquarters in Sector H-9, Islamabad, or present them via a walk-in appointment if selected.',
        'HEC verifies the recognition of your foreign university and the authenticity of the degree.',
        'Upon validation, HEC issues an official Degree Equivalence Certificate confirming your degree is equivalent to a corresponding Pakistani Bachelor\'s/Master\'s level.',
      ],
    },
  ];

  const currentChecklist = activeSubTab === 'ibcc' ? ibccChecklist : hecChecklist;
  const currentChecklistItems = activeSubTab === 'ibcc' ? ibccChecklistItems : hecChecklistItems;
  const currentSteps = activeSubTab === 'ibcc' ? ibccSteps : hecSteps;
  const toggleChecklistItem = activeSubTab === 'ibcc' ? toggleIbccChecklist : toggleHecChecklist;

  const completionPercent = Math.round(
    (Object.values(currentChecklist).filter(Boolean).length / currentChecklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="card-elevated bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
        <h3 className="heading-md text-indigo-900">Equivalence Certificate Guidelines</h3>
        <p className="text-slate-700 mb-4">
          Afghan students studying in Pakistan must obtain equivalence certificates to validate their foreign qualification credentials. High school certificates (Shahadatnama) are evaluated by the **IBCC**, while university-level degrees are verified by the **HEC**.
        </p>
        <div className="bg-white rounded-lg p-4 border border-indigo-200">
          <p className="text-sm text-slate-600">
            <strong>Critical Note:</strong> All foreign certificates must undergo a complete chain of attestation (Afghan MoFA → Afghan Embassy/Consulate in Pakistan → Pakistani MoFA) before IBCC or HEC will process your equivalence request.
          </p>
        </div>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="flex border-b-2 border-slate-200 gap-6">
        <button
          onClick={() => {
            setActiveSubTab('ibcc');
            setSteps({ step1: false, step2: false, step3: false, step4: false });
          }}
          className={`pb-3 text-lg font-bold transition-all ${
            activeSubTab === 'ibcc'
              ? 'text-indigo-600 border-b-4 border-indigo-600'
              : 'text-slate-500 hover:text-indigo-500'
          }`}
        >
          High School / Shahadatnama (IBCC)
        </button>
        <button
          onClick={() => {
            setActiveSubTab('hec');
            setSteps({ step1: false, step2: false, step3: false, step4: false });
          }}
          className={`pb-3 text-lg font-bold transition-all ${
            activeSubTab === 'hec'
              ? 'text-indigo-600 border-b-4 border-indigo-600'
              : 'text-slate-500 hover:text-indigo-500'
          }`}
        >
          University Degree (HEC)
        </button>
      </div>

      {/* Required Documents Section */}
      <div className="card-elevated">
        <h3 className="heading-md text-teal-700 mb-6 flex items-center gap-2">
          <AlertCircle className="text-amber-500" size={24} />
          {activeSubTab === 'ibcc' ? 'IBCC' : 'HEC'} Required Documents Checklist
        </h3>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-slate-700">Documents Gathered</span>
            <span className="text-sm font-bold text-teal-600">{completionPercent}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-teal-500 to-emerald-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist Items */}
        <div className="space-y-3">
          {currentChecklistItems.map(item => (
            <button
              key={item.key}
              onClick={() => toggleChecklistItem(item.key)}
              className="w-full flex items-start gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left group"
            >
              <div className="mt-1">
                {currentChecklist[item.key] ? (
                  <CheckCircle2 className="text-emerald-500" size={24} />
                ) : (
                  <Circle className="text-slate-400 group-hover:text-slate-600" size={24} />
                )}
              </div>
              <span
                className={`text-base font-medium ${
                  currentChecklist[item.key]
                    ? 'text-slate-500 line-through'
                    : 'text-navy-800'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="btn-small flex items-center gap-2 w-full sm:w-auto justify-center">
            <Download size={18} />
            Download {activeSubTab === 'ibcc' ? 'IBCC' : 'HEC'} Document Checklist (PDF)
          </button>
          <a
            href={activeSubTab === 'ibcc' ? 'https://equivalence.ibcc.edu.pk/' : 'https://eservices.hec.gov.pk/'}
            target="_blank"
            rel="noreferrer"
            className="btn-small btn-primary inline-flex items-center justify-center w-full sm:w-auto gap-2"
          >
            Open Official Portal <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Process Steps Section */}
      <div className="card-elevated">
        <h3 className="heading-md text-teal-700 mb-6">Step-by-Step {activeSubTab === 'ibcc' ? 'IBCC' : 'HEC'} Process</h3>
        <div className="space-y-6">
          {currentSteps.map((step, index) => (
            <div key={step.key} className="border-l-4 border-amber-400 pl-6 pb-6 relative">
              {/* Step Circle Number */}
              <div className="absolute -left-5 top-0 w-8 h-8 bg-amber-500 text-white font-bold rounded-full flex items-center justify-center text-sm">
                {index + 1}
              </div>

              {/* Step Header */}
              <button
                onClick={() => toggleStep(step.key)}
                className="w-full text-left mb-4 group"
              >
                <h4 className="heading-sm text-navy-800 group-hover:text-teal-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm mt-1">{step.description}</p>
              </button>

              {/* Step Details */}
              {steps[step.key] && (
                <div className="mt-4 bg-slate-50 rounded-lg p-4 animate-slide-down">
                  <ul className="space-y-2">
                    {step.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="text-emerald-600 font-bold mt-0.5">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h4 className="font-bold text-amber-900 mb-3">⚠️ Important Notes</h4>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>• <strong>Do not use fake credentials:</strong> IBCC and HEC perform rigorous verification. Finding of forged or altered documents leads to blacklisting and potential legal/criminal actions.</li>
          <li>• <strong>Original stamps:</strong> Ensure all attestation stamps on the back of your certificates are completely clear and dry before submitting them, as faded seals may result in deferral.</li>
          <li>• <strong>Correct Translation:</strong> Any official translation must be issued by a registered body (such as NUML or the Embassy) with a clear seal.</li>
        </ul>
      </div>
    </div>
  );
}
