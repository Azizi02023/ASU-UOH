import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download } from 'lucide-react';

export default function PoliceRegistrationPathway() {
  const [checklist, setChecklist] = useState({
    passport: false,
    visaCopy: false,
    photo: false,
    bonafide: false,
    hostelLetter: false,
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
    { key: 'passport', label: 'Original Passport (plus copy of biodata page and Pakistani entry stamp)' },
    { key: 'visaCopy', label: 'Photocopy of current valid Pakistani Visa' },
    { key: 'photo', label: '4 passport-sized recent photographs (blue or white background)' },
    { key: 'bonafide', label: 'Active Bonafide Letter from UOH Registrar Office' },
    { key: 'hostelLetter', label: 'Hostel warden letter (if living on campus) OR notarized rent agreement (if living off-campus)' },
  ];

  const processSteps = [
    {
      key: 'step1',
      title: 'Gather Documents & Verification',
      description: 'Prepare your identity documents and proof of residence in Haripur.',
      tasks: [
        'Request a fresh Bonafide letter from UOH Academic counter specifying your current address.',
        'If staying in UOH hostel, get an official residency confirmation letter from the Hostel Warden.',
        'If living outside campus, get a copy of your tenancy/rent agreement signed by the landlord.',
      ],
    },
    {
      key: 'step2',
      title: 'Visit District Police Headquarters (DPO)',
      description: 'Locate and visit the Security Branch / Foreigner Registration desk at the Haripur DPO Office.',
      tasks: [
        'Head to the District Police Office (DPO) Haripur during office hours (9:00 AM - 3:00 PM).',
        'Request the Foreigners Registration Forms (Form-A) from the desk officer.',
        'Fill out the form with your personal details, emergency contact, passport details, and local address.',
      ],
    },
    {
      key: 'step3',
      title: 'Biometrics & Submission',
      description: 'Submit your physical files and undergo biometric verification.',
      tasks: [
        'Hand over your compiled documents and photocopies along with the filled Form-A.',
        'The security officer will verify original documents (passport and visa).',
        'Your biometrics (fingerprints) and digital photo will be recorded in the security database.',
      ],
    },
    {
      key: 'step4',
      title: 'Receive Police Registration Certificate',
      description: 'Collect your card/certificate confirming registration.',
      tasks: [
        'Upon successful verification, the officer will stamp your Form-A or issue a "Temporary Police Registration Card/Certificate".',
        'Verify that your name, passport number, and address are spelled correctly.',
        'Keep this card with your passport. You must present it during visa extensions or when traveling out of the district.',
      ],
    },
  ];

  const completionPercent = Math.round(
    (Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="card-elevated bg-gradient-to-br from-blue-50 to-slate-100 border-l-4 border-slate-500">
        <h3 className="heading-md text-navy-900">Police Registration (Foreigner Desk)</h3>
        <p className="text-slate-700 mb-4">
          All foreign nationals, including Afghan students, are legally required to register their presence with the local police (Special Branch / DPO Office) within <strong>14 days of arrival</strong> in Pakistan. Registration must also be updated whenever you change your local address or renew your visa.
        </p>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-sm text-slate-600">
            <strong>Important:</strong> A Police Registration Card (PRC) or stamped registration form is a mandatory prerequisite for most student visa extensions.
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
          <li>• <strong>14-Day Deadline:</strong> Do not miss the 14-day registration window after entering Pakistan. Unregistered stay can cause legal issues or hinder your studies.</li>
          <li>• <strong>Travel Notification:</strong> If you plan to travel outside Haripur for more than 1 week or leave Pakistan, you are technically required to notify the security branch desk.</li>
          <li>• <strong>Address Changes:</strong> If you move from the hostel to private lodging (or change apartments), you must register your new address at the DPO within 7 days.</li>
        </ul>
      </div>
    </div>
  );
}
