import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Download } from 'lucide-react';

export default function DegreeAttestationPathway() {
  const [checklist, setChecklist] = useState({
    originalDegree: false,
    transcripts: false,
    passportCopy: false,
    metricEquiv: false,
    challan: false,
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
    { key: 'originalDegree', label: 'Original Degree/Diploma Certificate (must be clean, unlaminated)' },
    { key: 'transcripts', label: 'Original semester-wise Transcripts or Mark Sheets' },
    { key: 'passportCopy', label: 'Photocopy of Passport and active student visa' },
    { key: 'metricEquiv', label: 'Copy of IBCC Equivalence Certificate (for higher education attestation)' },
    { key: 'challan', label: 'Paid HEC/IBCC fee challan or online bill payment proof' },
  ];

  const processSteps = [
    {
      key: 'step1',
      title: 'Portal Registration & Online Profile',
      description: 'Create accounts and complete your profile on HEC or IBCC portals depending on your degree level.',
      tasks: [
        'For High School/Diplomas (Grade 10/12): Register on the IBCC Attestation Portal (attest.ibcc.edu.pk).',
        'For University Degrees (Bachelors, Masters, PhD): Register on the HEC e-Services Portal (eservices.hec.gov.pk).',
        'Fill in your profile completely, uploading scans of all certificates, degrees, transcripts, and your passport.',
      ],
    },
    {
      key: 'step2',
      title: 'Application Submission & Fee Payment',
      description: 'Submit the application online and pay the processing fees.',
      tasks: [
        'Select the "Document Attestation" option on the dashboard.',
        'Choose the specific documents you want to get attested.',
        'Generate the fee challan (or 1Bill/1Link customer ID) and pay online or at designated banks (e.g. HBL or National Bank of Pakistan).',
        'Save the paid receipt/challan to attach to your physical application folder.',
      ],
    },
    {
      key: 'step3',
      title: 'Choose Verification Mode',
      description: 'Decide whether to submit in person via walk-in appointment or send documents via authorized courier.',
      tasks: [
        'Walk-In Mode: Book an appointment slot on the portal, print the application form/challan, and visit the HEC/IBCC office (e.g., Peshawar or Islamabad regional centers) in person.',
        'Courier Mode (Recommended): Choose the courier option (like TCS, OCS, or Leopard Courier) on the portal. Bring your folder to a designated courier office. They will dispatch it to HEC/IBCC on your behalf.',
      ],
    },
    {
      key: 'step4',
      title: 'Attestation & Collection',
      description: 'Your documents are stamped with holograms and returned to you.',
      tasks: [
        'HEC/IBCC officers will verify the authenticity of your documents with your university/board records.',
        'Approved documents will receive an official security stamp and a hologram sticker on the back of the original.',
        'If you chose Walk-in, you collect your documents on the same day. If you chose Courier, they will be delivered back to your local address within 7-10 working days.',
      ],
    },
  ];

  const completionPercent = Math.round(
    (Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="card-elevated bg-gradient-to-br from-indigo-50 to-teal-50 border-l-4 border-indigo-500">
        <h3 className="heading-md text-indigo-900">Document & Degree Attestation</h3>
        <p className="text-slate-700 mb-4">
          Educational documents obtained in Pakistan (or foreign documents being validated for use here) must be attested by official authorities. The **Inter Boards Coordination Commission (IBCC)** attests matric/intermediate school certificates, while the **Higher Education Commission (HEC)** attests university-level degrees and transcripts.
        </p>
        <div className="bg-white rounded-lg p-4 border border-indigo-200">
          <p className="text-sm text-slate-600">
            <strong>When is this needed?</strong> Attestation is required for higher studies, government/private employment verification, or when translating and validating your Pakistani qualifications for international use.
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
            href="https://eservices.hec.gov.pk/"
            target="_blank"
            rel="noreferrer"
            className="btn-small btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            HEC e-Services Portal
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
          <li>• <strong>Lamination Warning:</strong> Never laminate your original degrees or transcripts. The HEC and IBCC cannot apply the secure hologram stamps on laminated surfaces, and you may be forced to apply for duplicate degrees.</li>
          <li>• <strong>Prerequisites:</strong> Before HEC can attest your university degrees, you must have your Matric (SSC) and Intermediate (HSSC) certificates/equivalences attested by the IBCC.</li>
          <li>• <strong>Verification of Foreign Degrees:</strong> If you are verifying a degree obtained outside Pakistan, you must apply for **Equivalence** first, rather than direct attestation.</li>
        </ul>
      </div>
    </div>
  );
}
