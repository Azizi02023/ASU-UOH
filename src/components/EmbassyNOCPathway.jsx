import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download } from 'lucide-react';

export default function EmbassyNOCPathway() {
  const [checklist, setChecklist] = useState({
    photo: false,
    passportPdf: false,
    studentCard: false,
    bonafide: false,
    educationDoc: false,
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
    { key: 'photo', label: 'Passport-sized recent photo (color)' },
    { key: 'passportPdf', label: 'Passport copy (PDF of biographic page)' },
    { key: 'studentCard', label: 'Student ID / UOH Student Card' },
    { key: 'bonafide', label: 'Bonafide certificate or Admission/Selection letter' },
    { key: 'educationDoc', label: 'Educational documents (Shahadatnama or Bachelor degree for Masters)' },
  ];

  const processSteps = [
    {
      key: 'step1',
      title: 'Document Compilation',
      description: 'Gather all required documents listed above. Ensure photocopies are clear and legible.',
      tasks: [
        'Verify all documents are originals or certified copies',
        'Ensure date stamps and official seals are visible',
        'Create organized folder for submission',
      ],
    },
    {
      key: 'step2',
      title: 'In-Person/Online Submission to Embassy',
      description: 'Submit documents to the Afghan Embassy in Islamabad. Contact details provided in FAQ section.',
      tasks: [
        'Call or visit the Embassy to schedule appointment (if required)',
        'Submit all compiled documents in person or via post',
        'Obtain official receipt and reference number',
        'Note submission date for tracking',
      ],
    },
    {
      key: 'step3',
      title: 'Embassy Review & Processing',
      description: 'The Embassy typically processes NOC applications within 5-10 working days.',
      tasks: [
        'Keep your reference number safe for inquiries',
        'Standard processing time: 5-10 working days',
        'Embassy may contact you if additional documents needed',
        'Check status via Embassy phone line using reference number',
      ],
    },
    {
      key: 'step4',
      title: 'NOC Collection',
      description: 'Collect your No Objection Certificate once processing is complete.',
      tasks: [
        'Contact Embassy to confirm readiness',
        'Collect NOC in person or receive via courier',
        'Verify NOC details match your passport information',
        'Make photocopies for record and submission to UOH',
      ],
    },
  ];

  const completionPercent = Math.round(
    (Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="card-elevated bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
        <h3 className="heading-md text-blue-900">Embassy NOC (No Objection Certificate)</h3>
        <p className="text-slate-700 mb-4">
          The Afghan Embassy in Islamabad issues NOCs to confirm that the Embassy has no objection to an Afghan student's continued study in Pakistan. This is a critical document for visa extensions and regulatory compliance.
        </p>
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-slate-600">
            <strong>Key Point:</strong> Many visa extension processes require a recent NOC (typically issued within the last 3 months). Plan accordingly if your NOC is expiring.
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
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="btn-small flex items-center gap-2 w-full sm:w-auto justify-center">
            <Download size={18} />
            Download Document Checklist (PDF)
          </button>
          <a
            href="https://forms.gle/Wh7ieiaawskyqcz37"
            target="_blank"
            rel="noreferrer"
            className="btn-small btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            Open Submission Form
          </a>
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

      {/* Important Notes */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h4 className="font-bold text-amber-900 mb-3">⚠️ Important Notes</h4>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>• NOC processing typically takes 5-10 working days; plan ahead for visa extensions</li>
          <li>• Always carry the original NOC and photocopies to formal meetings</li>
          <li>• If details on NOC are incorrect (name spelling, passport number), contact Embassy immediately</li>
          <li>• Embassy contact: +92-51-2107500 (General) | Fax: +92-51-2109211</li>
          <li>• Office hours: Monday-Friday, 9:00 AM - 12:30 PM (Local Time)</li>
        </ul>
      </div>

      {/* Submission Instructions */}
      <div className="card-elevated">
        <h3 className="heading-md text-teal-700 mb-3">How to Submit</h3>
        <p className="text-sm text-slate-700 mb-3">
          Fill the Google Form and attach scanned copies/photos of the documents listed above. Use PDF for multi-page documents and JPG/PNG for photos. Combine multi-page scans into a single PDF when possible.
        </p>
        <p className="text-sm text-slate-700 mb-4">
          Submission link: <a href="https://forms.gle/Wh7ieiaawskyqcz37" target="_blank" rel="noreferrer" className="text-teal-600 underline">https://forms.gle/Wh7ieiaawskyqcz37</a>
        </p>
        <p className="text-sm text-slate-600">
          After you submit the form you will receive a confirmation email from the Embassy. Once processed, the Embassy will send the NOC to your email or provide collection instructions.
        </p>
      </div>
    </div>
  );
}
