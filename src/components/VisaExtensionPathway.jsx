import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download } from 'lucide-react';

export default function VisaExtensionPathway() {
  const [checklist, setChecklist] = useState({
    passport: false,
    currentVisa: false,
    photo: false,
    bonafide: false,
    hecNoc: false,
    admissionLetter: false,
  });

  const [steps, setSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleStep = (key) => {
    setSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistItems = [
    { key: 'passport', label: 'Valid Passport (biographic page scan, must be valid for at least 6 months)' },
    { key: 'currentVisa', label: 'Active/Current Pakistani Visa copy (or entry stamp page)' },
    { key: 'photo', label: 'Recent passport-sized photograph (white background, JPEG format under 350KB)' },
    { key: 'bonafide', label: 'Official Bonafide Letter from UOH Registrar Office (issued recently)' },
    { key: 'hecNoc', label: 'HEC NOC (or UOH ISS recommended clearance letter)' },
    { key: 'admissionLetter', label: 'University Admission/Selection Letter' },
  ];

  const processSteps = [
    {
      key: 'step1',
      title: 'Obtain UOH Supporting Documents',
      description: 'Request the necessary university letters required for visa extension from the Academic Branch and International Student Office (ISS).',
      tasks: [
        'Apply for and collect your recent Bonafide Certificate from the UOH Academic Branch.',
        'Submit a request to the UOH ISS to route your NOC application to HEC.',
        'Ensure the issued Bonafide Letter specifies your duration of study and visa extension request.',
      ],
    },
    {
      key: 'step2',
      title: 'Register on Pakistan Online Visa Portal',
      description: 'Create an account on the official Ministry of Interior visa portal run by NADRA.',
      tasks: [
        'Go to visa.nadra.gov.pk and click on "Apply Now".',
        'Create a new account using a valid email address and verify the registration.',
        'Log in to the dashboard and start a "New Application".',
      ],
    },
    {
      key: 'step3',
      title: 'Fill out the Application Form Online',
      description: 'Fill in application details under the Student Visa Extension category.',
      tasks: [
        'Select Application Type: "Visa Extension" and Category: "Student Visa".',
        'Fill in your personal, passport, and sponsor (University of Haripur) details.',
        'State your reason for extension (e.g., "Continuation of studies at UOH").',
      ],
    },
    {
      key: 'step4',
      title: 'Upload Documents & Submit Payment',
      description: 'Upload high-resolution scans of all required documents and pay the online fee.',
      tasks: [
        'Upload your photograph (white background) and passport scans.',
        'Upload UOH Bonafide Letter, HEC NOC, and previous Pakistani visa.',
        'Pay the visa extension fee using a credit/debit card (fee varies depending on nationality, often free or nominal for Afghan student packages).',
        'Submit the application and download the PDF submission receipt containing your tracking ID.',
      ],
    },
    {
      key: 'step5',
      title: 'Application Review & Visa Collection',
      description: 'Monitor your visa portal dashboard for updates, and download your e-visa once approved.',
      tasks: [
        'The Ministry of Interior (MoI) will process the application (typically takes 2-4 weeks).',
        'Check your portal daily for any "Deferral" notices (if any document is rejected, re-upload it immediately).',
        'Once approved, you will receive an email. Log in to download and print your E-Visa Grant Notice.',
      ],
    },
  ];

  const completionPercent = Math.round(
    (Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="card-elevated bg-gradient-to-br from-teal-50 to-emerald-50 border-l-4 border-teal-500">
        <h3 className="heading-md text-teal-900">Student Visa Extension</h3>
        <p className="text-slate-700 mb-4">
          All Afghan students studying in Pakistan must maintain a valid student visa. Visa extensions must be requested online through the official Pakistan Online Visa System (NADRA) portal before your current visa expires.
        </p>
        <div className="bg-white rounded-lg p-4 border border-teal-200">
          <p className="text-sm text-slate-600">
            <strong>Pro Tip:</strong> Start your visa extension process at least <strong>45 days before</strong> your current visa expires to avoid overstay fines or legal issues.
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
            href="https://visa.nadra.gov.pk/"
            target="_blank"
            rel="noreferrer"
            className="btn-small btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            Go to NADRA Visa Portal
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
          <li>• <strong>Overstay Fines:</strong> Staying in Pakistan on an expired visa can lead to significant fines and deportation. Always apply before expiry.</li>
          <li>• <strong>Deferrals:</strong> Check your registered email daily. NADRA often asks for clarifications or document re-uploads; delay in responding can reject your application.</li>
          <li>• <strong>Verification:</strong> Do not upload fake or blurry documents. The Ministry of Interior cross-checks academic letters with UOH and HEC.</li>
          <li>• <strong>Inquiries:</strong> If your visa application is stuck for more than 4 weeks, visit the UOH International Student Office (ISS) with your tracking receipt.</li>
        </ul>
      </div>
    </div>
  );
}
