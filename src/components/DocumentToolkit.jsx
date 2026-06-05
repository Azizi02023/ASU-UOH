import React, { useState } from 'react';
import { Search, Copy, CheckCircle2, FileText, Download } from 'lucide-react';

export default function DocumentToolkit() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDoc, setExpandedDoc] = useState(null);
  const [copied, setCopied] = useState(null);

  const documents = [
    {
      id: 1,
      title: 'Sample Bonafide Application Letter',
      category: 'Bonafide Letter',
      description: 'Formal application letter template for requesting Bonafide Certificate from the Registrar.',
      template: `[Your Name]
[Your Roll Number]
[Your Phone Number]
[Your Email]

[Date]

The Registrar,
University of Haripur,
Haripur, Khyber Pakhtunkhwa, Pakistan

Subject: Request for Bonafide Certificate

Dear Sir/Madam,

I, [YOUR FULL NAME], bearing Roll Number [YOUR ROLL NUMBER], am a bona fide student of the [PROGRAM NAME] program at the Department of [DEPARTMENT NAME], University of Haripur.

I have been actively enrolled in this institution since [ENROLLMENT DATE] and am currently pursuing my [SEMESTER/YEAR] of studies. My current semester fee slip is enclosed herewith.

I respectfully request you to issue me an official Bonafide Certificate certifying my enrollment status for [PURPOSE - e.g., bank account opening, visa extension, scholarship application]. This certificate will be used for official purposes with [ORGANIZATION/INSTITUTION NAME].

The required supporting documents are attached:
- Photocopy of valid passport
- Copy of student ID card
- Previous semester academic transcript
- Passport-size photographs (4 copies)

I shall be grateful for your kind consideration and prompt action in this matter.

Yours respectfully,

[YOUR NAME]
[YOUR ROLL NUMBER]

Enclosures:
1. Passport photocopy
2. Student ID photocopy
3. Transcript
4. Passport-size photographs`,
    },
    {
      id: 2,
      title: 'HEC Foreign Student Information Sheet Checklist',
      category: 'HEC NOC',
      description: 'Checklist ensuring all required fields on HEC Foreign Student Information Sheet are completed.',
      template: `HEC Foreign Student Information Sheet - Completion Checklist

STUDENT INFORMATION SECTION:
☐ Full Name (as per passport)
☐ Father\'s Name
☐ Date of Birth (DD/MM/YYYY)
☐ Passport Number
☐ Nationality: Afghanistan
☐ Contact Phone Number (with country code: +92...)
☐ Email Address
☐ Current Mailing Address in Pakistan

ACADEMIC INFORMATION SECTION:
☐ Roll Number / Registration Number
☐ University Name: University of Haripur
☐ Faculty/Department Name
☐ Program Title (e.g., BS, MS, PhD)
☐ Semester/Year of Study
☐ Program Start Date
☐ Expected Completion Date
☐ Current GPA/CGPA

VISA INFORMATION SECTION:
☐ Student Visa Number
☐ Visa Issue Date
☐ Visa Expiry Date
☐ Visa Category: Student

UNIVERSITY OFFICIAL CERTIFICATION:
☐ International Student Office seal/stamp
☐ ISS Director/Officer signature
☐ Date of certification
☐ ISS official contact information

DOCUMENTS TO ATTACH:
☐ Copy of valid passport (data page)
☐ Copy of student visa page
☐ University enrollment confirmation letter
☐ Previous semester transcript`,
    },
    {
      id: 3,
      title: 'Embassy NOC Submission Checklist',
      category: 'Embassy NOC',
      description: 'Complete checklist for preparing Embassy NOC application package.',
      template: `Embassy of Afghanistan, Islamabad - NOC Application Checklist

REQUIRED DOCUMENTS:
☐ Original passport (will be returned)
☐ Passport photocopy (color if possible)
☐ Tazkira (Afghan National ID) photocopy (both sides)
☐ University admission/selection letter (original or certified copy)
☐ Current semester fee slip from UOH
☐ Application form (provided by Embassy)

COMPLETED FORM FIELDS:
☐ Full name matches passport
☐ Passport number clearly written
☐ Tazkira number included
☐ Current address in Pakistan
☐ University name and program
☐ Current semester/year of study
☐ Contact phone number
☐ Email address (if available)

PHYSICAL PREPARATION:
☐ All documents organized in order
☐ Photocopies are clear and legible
☐ No pages are bent or damaged
☐ All seals and stamps are visible
☐ Documents placed in labeled folder

SUBMISSION DETAILS:
Embassy Address: Embassy of Afghanistan
                Sector F-5/1, Islamabad, Pakistan
Phone: +92-51-2107500 | +92-51-2109211
Office Hours: Monday-Friday, 9:00 AM - 12:30 PM

☐ Appointment scheduled (if required)
☐ Receipt number noted
☐ Reference number recorded
☐ Processing timeline noted`,
    },
    {
      id: 4,
      title: 'University Confirmation Letter Request Format',
      category: 'Bonafide Letter',
      description: 'Format for requesting official university confirmation letter for international purposes.',
      template: `[Date]

The Registrar / Head of Department,
University of Haripur,
Haripur, KPK, Pakistan

Subject: Request for Official University Confirmation Letter

Dear Sir/Madam,

This letter is to request an official confirmation letter from the University of Haripur confirming my status as a bona fide enrolled student.

My Details:
Full Name: [YOUR FULL NAME]
Roll Number: [YOUR ROLL NUMBER]
Program: [PROGRAM NAME] - [DEGREE LEVEL]
Department: [DEPARTMENT NAME]
Enrollment Date: [DATE]
Current Semester: [SEMESTER/YEAR]

This letter is required for the following purpose:
[SELECT PURPOSE]:
☐ Visa extension application
☐ Passport renewal
☐ Bank account opening
☐ Government attestation services
☐ International application
☐ Other: [SPECIFY]

The confirmation letter should include:
- My full name and enrollment status
- Program title and department
- Current academic standing
- Duration of enrollment at UOH
- University official seal and signature
- Date of issuance

I have enclosed the following supporting documents:
- Copy of my student ID
- Copy of my valid passport (data page)
- Current semester registration proof
- Any relevant fee receipts

Please provide [NUMBER] official copies with official seal and signature. I can collect them personally or arrange for courier delivery.

Thank you for your assistance. Please contact me at [PHONE] or [EMAIL] if you require any additional information.

Sincerely,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]
[YOUR ROLL NUMBER]
[YOUR PHONE NUMBER]`,
    },
    {
      id: 5,
      title: 'Document Submission Template (UOH ISS)',
      category: 'HEC NOC',
      description: 'Template for submitting documents package to UOH International Student Office.',
      template: `UOH International Student Office - Document Submission Form

STUDENT INFORMATION:
Name: ___________________________
Roll Number: _____________________
Department: ______________________
Program: _________________________
Current Semester: ________________
Phone Number: ____________________
Email Address: ___________________

PURPOSE OF APPLICATION:
☐ HEC NOC (Visa Extension/Degree Verification)
☐ Bonafide Certificate
☐ Enrollment Confirmation
☐ Other: _________________________

DOCUMENTS SUBMITTED:
☐ University Confirmation Letter (original or photocopy)
☐ HEC Foreign Student Information Sheet (completed)
☐ Photocopy of student visa page
☐ Photocopy of passport data page
☐ Copy of student ID
☐ Previous semester transcript
☐ Passport-sized photograph (2 copies)

DOCUMENT VERIFICATION:
All documents reviewed and certified as copies of originals:
ISS Staff Name: ____________________
ISS Staff Signature: ________________
Date: ____________________________
Stamp/Seal: [OFFICIAL UOH ISS STAMP]

PROCESSING INFORMATION:
Application ID/Reference Number: ___________
Expected Completion Date: ________________
Collection Method:
☐ In-person at ISS office
☐ Courier delivery
☐ Email notification

ISS Contact Information:
Phone: +92-995-616555
Email: iss@uoh.edu.pk
Office: ISS Building, Main Campus

Notes/Special Requests:
_________________________________
_________________________________`,
    },
    {
      id: 6,
      title: 'Visa Expiry Contingency Letter',
      category: 'Emergency Reference',
      description: 'Letter template if visa expires before NOC processing completes.',
      template: `[Date]

The Office of the Academic Secretary,
University of Haripur,
Haripur, Pakistan

Subject: URGENT - Visa Expiry Before NOC Issuance

Dear Sir/Madam,

I am writing to notify you of an urgent situation regarding my visa status and pending NOC application.

My Details:
Full Name: [YOUR FULL NAME]
Roll Number: [YOUR ROLL NUMBER]
Program: [PROGRAM NAME]
Passport Number: [PASSPORT NUMBER]

SITUATION:
My student visa will expire on [EXPIRY DATE]. However, my HEC NOC application submitted on [SUBMISSION DATE] is still under processing (Reference: [REFERENCE NUMBER]).

The processing is expected to complete by [EXPECTED DATE], which is AFTER my visa expiry. This creates an urgent situation regarding my legal status in Pakistan.

REQUEST FOR URGENT ACTION:
I respectfully request the International Student Office to:
1. Contact HEC to expedite the NOC processing
2. Issue an interim university letter confirming continuous enrollment
3. Provide documentation that the NOC is under processing through official channels

I remain committed to my studies at UOH and await your immediate assistance in resolving this matter.

Contact Information:
Phone: [YOUR PHONE]
Email: [YOUR EMAIL]
Available Time: [AVAILABLE TIMES]

I am available to meet in person if required for urgent discussion.

Respectfully submitted,

[YOUR SIGNATURE]
[YOUR PRINTED NAME]
[YOUR ROLL NUMBER]

Attachments:
- Copy of passport showing expiry date
- Copy of NOC application receipt
- Reference number from ISS`,
    },
  ];

  const filteredDocs = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const categoryColors = {
    'Bonafide Letter': 'bg-purple-100 text-purple-700',
    'Embassy NOC': 'bg-blue-100 text-blue-700',
    'HEC NOC': 'bg-orange-100 text-orange-700',
    'Emergency Reference': 'bg-red-100 text-red-700',
  };

  return (
    <section id="toolkit" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="heading-lg">Student Document Toolkit</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive collection of document templates, application formats, and checklists. Copy any template to customize it with your information.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search templates by name, category, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center text-slate-600">
          {filteredDocs.length} template{filteredDocs.length !== 1 ? 's' : ''} found
        </div>

        {/* Documents Grid */}
        <div className="grid gap-6">
          {filteredDocs.length > 0 ? (
            filteredDocs.map(doc => (
              <div
                key={doc.id}
                className={`card-elevated cursor-pointer transition-all duration-300 ${
                  expandedDoc === doc.id ? 'ring-2 ring-teal-500' : ''
                }`}
                onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="text-teal-600 flex-shrink-0" size={24} />
                      <h3 className="heading-sm text-navy-800">{doc.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          categoryColors[doc.category] || 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {doc.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{doc.description}</p>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedDoc === doc.id && (
                  <div className="mt-6 pt-6 border-t border-slate-200 animate-slide-down">
                    <div className="mb-4">
                      <pre className="bg-slate-50 p-4 rounded-lg text-xs overflow-x-auto font-mono text-slate-700 whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
                        {doc.template}
                      </pre>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(doc.template, doc.id);
                        }}
                        className="flex items-center gap-2 btn-small"
                      >
                        {copied === doc.id ? (
                          <>
                            <CheckCircle2 size={18} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={18} />
                            Copy to Clipboard
                          </>
                        )}
                      </button>
                      <button className="flex items-center gap-2 btn-secondary">
                        <Download size={18} />
                        Download as Text
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <FileText className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-600 text-lg">No templates found matching your search.</p>
              <p className="text-slate-500 text-sm mt-2">Try different keywords or browse all templates.</p>
            </div>
          )}
        </div>

        {/* Guidelines Card */}
        <div className="mt-12 card-outline border-teal-200 bg-teal-50/30">
          <h3 className="heading-sm text-teal-700 mb-4">📋 How to Use These Templates</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">1.</span>
              <span>Click on any template to expand it and view the full content.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">2.</span>
              <span>Use "Copy to Clipboard" to copy the template into a text editor (Word, Google Docs, etc.).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">3.</span>
              <span>Replace all <code className="bg-slate-100 px-2 py-1 rounded">[BRACKETED SECTIONS]</code> with your personal information.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">4.</span>
              <span>Customize the template to match official institution letterhead if submitting formally.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">5.</span>
              <span>Print, sign, and attach required supporting documents before submission.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
