import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download } from 'lucide-react';

export default function HECNOCPathway() {
  const [checklist, setChecklist] = useState({
    univletter: false,
    hecform: false,
    visapage: false,
    passportdata: false,
  });

  const [steps, setSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleStep = (key) => {
    setSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistItems = [
    { key: 'univletter', label: 'University Confirmation Letter (from International Student Office)' },
    { key: 'hecform', label: 'HEC Foreign Student Information Sheet (duly stamped by UOH)' },
    { key: 'visapage', label: 'Copy of Student Visa Page (from Passport)' },
    { key: 'passportdata', label: 'Valid Passport Data Page Copy' },
  ];

  const processSteps = [
    {
      key: 'step1',
      title: 'Contact UOH International Student Office',
      description: 'Initiate the HEC NOC process through the official channel at UOH.',
      tasks: [
        'Visit the International Student Office (ISS Building, UOH Main Campus)',
        'Bring your original passport and current student ID',
        'Inform office that you need HEC NOC for visa extension or degree verification',
        'Request the HEC Foreign Student Information Sheet form',
        'Office staff will provide guidance on required documents',
      ],
    },
    {
      key: 'step2',
      title: 'Compile & Submit Documents to ISS',
      description: 'Gather all required documents and submit to the International Student Office.',
      tasks: [
        'Obtain University Confirmation Letter from ISS (confirms active enrollment)',
        'Complete HEC Foreign Student Information Sheet (form provided by ISS)',
        'Gather copy of your student visa page and passport data page',
        'All documents must be in clear, legible photocopies or originals',
        'Submit complete package to ISS with your contact information',
      ],
    },
    {
      key: 'step3',
      title: 'University Reviews & Stamps',
      description: 'UOH International Student Office reviews and officially stamps your documents.',
      tasks: [
        'ISS verifies your enrollment status and academic records',
        'Documents are reviewed for completeness and accuracy',
        'Official university seal and signature are affixed to the HEC form',
        'This typically takes 2-3 working days',
        'ISS will notify you when documents are ready',
      ],
    },
    {
      key: 'step4',
      title: 'Submit to HEC & Await NOC',
      description: 'ISS forwards your application to the Higher Education Commission or you submit directly.',
      tasks: [
        'CRITICAL: Applications MUST be routed through UOH ISS—HEC does NOT accept direct walk-ins from students',
        'Confirm with ISS whether they will forward to HEC or if you collect documents for postal submission',
        'HEC processes NOC applications within 5-15 working days',
        'Keep your reference number safe for tracking',
        'Contact ISS regularly for status updates',
        'Once approved, HEC issues the NOC electronically or by mail',
      ],
    },
  ];

  const completionPercent = Math.round(
    (Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card - CRITICAL NOTICE */}
      <div className="card-elevated bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 shadow-lg">
        <h3 className="heading-md text-red-900">🚨 HEC NOC Application Workflow</h3>
        <p className="text-slate-700 mb-4">
          The Higher Education Commission (HEC) NOC is essential for visa extensions and formal degree verification. It certifies to Pakistani immigration authorities that HEC has no objection to your continued study in Pakistan.
        </p>
        <div className="bg-white rounded-lg p-4 border-2 border-red-300 mb-4">
          <p className="text-sm text-red-800 font-bold">
            ⚠️ CRITICAL ROUTING RULE: HEC does NOT accept direct student applications or walk-ins. All applications MUST be routed through the UOH International Student Office (ISS). Direct submissions will be rejected.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-200">
          <p className="text-sm text-slate-600">
            <strong>Processing Timeline:</strong> 5-15 working days via HEC after ISS submission. Plan ahead, especially before visa expiration dates.
          </p>
        </div>
      </div>

      {/* Required Documents Section */}
      <div className="card-elevated">
        <h3 className="heading-md text-teal-700 mb-6 flex items-center gap-2">
          <AlertCircle className="text-amber-500" size={24} />
          Required Documents Checklist
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
          {checklistItems.map(item => (
            <button
              key={item.key}
              onClick={() => toggleChecklistItem(item.key)}
              className="w-full flex items-start gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left group"
            >
              <div className="mt-1">
                {checklist[item.key] ? (
                  <CheckCircle2 className="text-emerald-500" size={24} />
                ) : (
                  <Circle className="text-slate-400 group-hover:text-slate-600" size={24} />
                )}
              </div>
              <span
                className={`text-base font-medium ${
                  checklist[item.key]
                    ? 'text-slate-500 line-through'
                    : 'text-navy-800'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <button className="mt-6 btn-small flex items-center gap-2 w-full sm:w-auto justify-center">
          <Download size={18} />
          Download Document Checklist (PDF)
        </button>
      </div>

      {/* ISS Contact Information */}
      <div className="card-outline border-teal-200 bg-teal-50/30">
        <h4 className="heading-sm text-teal-700 mb-4">📞 UOH International Student Office</h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-navy-800">Location:</p>
            <p className="text-slate-700">ISS Building, University of Haripur Main Campus</p>
          </div>
          <div>
            <p className="font-semibold text-navy-800">Phone:</p>
            <p className="text-slate-700">+92-995-616555 (Ext: International Student Office)</p>
          </div>
          <div>
            <p className="font-semibold text-navy-800">Email:</p>
            <p className="text-slate-700">iss@uoh.edu.pk</p>
          </div>
          <div>
            <p className="font-semibold text-navy-800">Office Hours:</p>
            <p className="text-slate-700">Monday-Friday, 10:00 AM - 3:00 PM (Local Time)</p>
          </div>
          <div>
            <p className="font-semibold text-navy-800">Best Time to Visit:</p>
            <p className="text-slate-700">Tuesday-Thursday (fewer queue times)</p>
          </div>
        </div>
      </div>

      {/* Process Steps Section */}
      <div className="card-elevated">
        <h3 className="heading-md text-teal-700 mb-6">Step-by-Step Process</h3>
        <div className="space-y-6">
          {processSteps.map((step, index) => (
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

      {/* HEC Contact Information */}
      <div className="card-outline border-orange-200 bg-orange-50/30">
        <h4 className="heading-sm text-orange-700 mb-4">📋 Higher Education Commission (HEC) Contact</h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-navy-800">HEC Main Office:</p>
            <p className="text-slate-700">Sector H-9, Islamabad, Pakistan</p>
          </div>
          <div>
            <p className="font-semibold text-navy-800">Phone:</p>
            <p className="text-slate-700">+92-51-90402000</p>
          </div>
          <div>
            <p className="font-semibold text-navy-800">Website:</p>
            <p className="text-slate-700">www.hec.gov.pk</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded p-3 mt-3">
            <p className="text-xs text-orange-800">
              <strong>Note:</strong> Always communicate with HEC through UOH ISS. Personal inquiries are not typically processed.
            </p>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h4 className="font-bold text-amber-900 mb-3">⚠️ Important Notes</h4>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>• NEVER attempt to submit directly to HEC as an individual—applications will be rejected</li>
          <li>• All communication regarding HEC NOC must go through UOH ISS</li>
          <li>• Keep all original documents and receipts for your records</li>
          <li>• NOC validity is typically 6-12 months; check with ISS for current validity period</li>
          <li>• If your visa expires before HEC NOC approval, contact ISS immediately about expedited processing</li>
          <li>• HEC NOC is also required for degree attestation and foreign verification purposes</li>
          <li>• Processing times may vary during visa season (Apr-Aug); submit applications early</li>
        </ul>
      </div>
    </div>
  );
}
