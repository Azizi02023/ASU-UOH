import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download } from 'lucide-react';

export default function BonafideLetterPathway() {
  const [checklist, setChecklist] = useState({
    application: false,
    transcript: false,
    passport: false,
    photos: false,
    studentid: false,
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
    { key: 'application', label: 'Official Application Letter (addressed to Registrar/HOD)' },
    { key: 'transcript', label: 'Copy of Previous Semester Transcript' },
    { key: 'passport', label: 'Passport Photocopy' },
    { key: 'photos', label: '2-4 Passport-Size Photographs' },
    { key: 'studentid', label: 'Active Student ID Card Copy' },
  ];

  const processSteps = [
    {
      key: 'step1',
      title: 'Department HOD Signature',
      description: 'Obtain official signature and stamp from your Department Head of Department.',
      tasks: [
        'Prepare formal application letter on department letterhead or plain paper',
        'Application must be addressed to "The Registrar, University of Haripur"',
        'Include your full name, roll number, enrollment date, and program name',
        'Request signature and official department seal',
        'Visit HOD office during official hours (typically 10 AM - 2 PM, Monday-Friday)',
      ],
    },
    {
      key: 'step2',
      title: 'Academic Branch Submission',
      description: 'Submit signed application and documents to the University\'s Academic Branch.',
      tasks: [
        'Compile all required documents in order: application, transcript, passport copy, photos, student ID',
        'Visit Academic Branch (Main Campus Building, Ground Floor)',
        'Submit to the designated Bonafide Certificate Counter',
        'Pay applicable processing fee (typically PKR 500-1,000)',
        'Obtain receipt with reference number and expected completion date',
      ],
    },
    {
      key: 'step3',
      title: 'Fee Verification & Processing',
      description: 'Academic Branch verifies your enrollment and processes the Bonafide Certificate.',
      tasks: [
        'Processing typically takes 2-3 working days',
        'University verifies your active enrollment status',
        'Academic history is checked for any outstanding issues',
        'Contact Academic Branch if urgent (ask for expedited processing)',
        'Keep reference number for inquiries',
      ],
    },
    {
      key: 'step4',
      title: 'Card/Certificate Issuance',
      description: 'Collect your Bonafide Certificate from the Academic Branch.',
      tasks: [
        'Return to Academic Branch with receipt on collection date',
        'Verify all details on certificate: name, enrollment date, current status',
        'Request multiple certified copies if needed (usually available same-day)',
        'Store original in safe location; carry photocopies for official submissions',
        'Bonafide Certificates are typically valid for 6 months from issue date',
      ],
    },
  ];

  const completionPercent = Math.round(
    (Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="card-elevated bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500">
        <h3 className="heading-md text-purple-900">University Bonafide Letter</h3>
        <p className="text-slate-700 mb-4">
          A Bonafide Certificate is an official letter from the University of Haripur certifying that you are a bona fide (genuine) student enrolled in an academic program. This letter is required for bank account openings, scholarship applications, insurance policies, visa extensions, and other bureaucratic processes in Pakistan.
        </p>
        <div className="bg-white rounded-lg p-4 border border-purple-200">
          <p className="text-sm text-slate-600">
            <strong>Validity:</strong> Most institutions accept Bonafide Certificates issued within the last 3-6 months. Check with your specific institution for their validity requirements.
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

      {/* Sample Application Letter Template */}
      <div className="card-outline border-teal-200">
        <h4 className="heading-sm text-teal-700 mb-4">📝 Sample Application Letter</h4>
        <div className="bg-slate-50 p-4 rounded-lg text-sm font-mono text-slate-700 overflow-x-auto mb-4">
          <pre className="whitespace-pre-wrap">{`[Date]

The Registrar,
University of Haripur,
Haripur, Pakistan

Subject: Request for Bonafide Certificate

Dear Sir/Madam,

I, [Your Full Name], Roll Number [Your Roll Number], 
am a bona fide student of the [Program Name] program in 
the Department of [Department Name], University of Haripur.

I have been enrolled in this institution since [Enrollment Date] 
and am currently in my [Semester/Year] of studies.

I respectfully request you to issue me a Bonafide Certificate 
for [Purpose of Certificate, e.g., bank account opening, visa extension].

I have enclosed the following documents:
- Photocopy of valid passport
- Copy of student ID card
- Previous semester transcript
- Passport-size photographs

Thanking you for your kind consideration.

Yours respectfully,

[Your Full Name]
[Your Roll Number]
[Your Phone Number]
[Your Email Address]`}</pre>
        </div>
        <button className="btn-small flex items-center gap-2 w-full sm:w-auto justify-center">
          <Download size={18} />
          Copy Template to Clipboard
        </button>
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
          <li>• Application letter must be formal and clearly state your purpose for requesting the certificate</li>
          <li>• All documents must include your current roll number and enrollment year</li>
          <li>• Most banks and government institutions accept only official copies with university seal</li>
          <li>• Keep copies for your records; institutions often request multiple copies</li>
          <li>• Processing fee is non-refundable. Check current fee rates at Academic Branch counter</li>
          <li>• UOH Academic Branch: Ground Floor, Main Campus Building | Phone: +92-995-616555</li>
          <li>• For urgent requests, visit in person and ask about expedited processing options</li>
        </ul>
      </div>
    </div>
  );
}
