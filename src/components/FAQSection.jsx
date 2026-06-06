import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What happens if my visa expires before the NOC is issued?',
      category: 'Visa & NOC',
      answer: 'This is a serious situation requiring immediate action. Contact the UOH International Student Office immediately. They can issue an interim letter confirming that your NOC is under processing through official channels. Additionally, you may be able to apply for a brief extension or an Amended/Extension Visa while the NOC is being processed. Do not delay—visit ISS at +92-995-616555 on the same day you discover this issue.',
    },
    {
      id: 2,
      question: 'Who do I contact at the UOH International Student Office?',
      category: 'Contact Info',
      answer: 'UOH International Student Office (ISS) is located in the ISS Building on the main campus. Phone: +92-995-616555 (ask for International Student Office extension). Email: iss@uoh.edu.pk. Office hours: Monday-Friday, 10:00 AM - 3:00 PM. Best time to visit: Tuesday-Thursday to avoid long queues. For urgent matters, call during office hours before 11 AM to schedule a priority appointment.',
    },
    {
      id: 3,
      question: 'Can I submit my HEC NOC application directly?',
      category: 'HEC NOC',
      answer: 'NO. HEC does not accept direct applications from individual students. All HEC NOC applications MUST be routed through the UOH International Student Office. Direct submissions will be immediately rejected. Always work through ISS to ensure your application is properly prepared and officially forwarded to HEC by the university.',
    },
    {
      id: 4,
      question: 'How long does it take to get a Bonafide Certificate?',
      category: 'Bonafide Certificate',
      answer: 'The University of Haripur typically processes Bonafide Certificates within 2-3 working days after submission to the Academic Branch. The processing fee is PKR 750 (as of June 1, 2026). You can request expedited processing by speaking with the counter staff—urgent requests may be processed within 1 day. Multiple certified copies can be obtained at no additional cost during the same visit.',
    },
    {
      id: 5,
      question: 'What documents do I need to bring to get a Bonafide Certificate?',
      category: 'Bonafide Certificate',
      answer: 'You need: (1) A formal application letter addressed to the Registrar, (2) Copy of your active student ID card, (3) Passport photocopy, (4) Previous semester transcript or academic record, (5) 2-4 passport-size photographs. The application must be signed and stamped by your Department Head before submitting to the Academic Branch counter.',
    },
    {
      id: 6,
      question: 'Where is the Afghan Embassy in Islamabad and what are their office hours?',
      category: 'Embassy NOC',
      answer: 'Embassy of Afghanistan is located in Sector F-5/1, Islamabad, Pakistan. Office hours: Monday-Friday, 8:30 AM - 12:00 PM (as of June 1, 2026). Phone: +92-51-2107500 (General) | +92-51-2109211 (Fax). Walk-in submissions are by appointment only. Call between 9-11 AM to book an appointment. Appointments are typically available within 3 days.',
    },
    {
      id: 7,
      question: 'How long does the Embassy take to issue an NOC?',
      category: 'Embassy NOC',
      answer: 'The Afghan Embassy typically processes NOC applications within 5-10 working days from the date of submission. During the visa peak season (April-August), processing may take up to 15 days. Keep your reference number safe to track progress. You can call the Embassy to check status using your reference number. After processing, collect in person or arrange courier delivery (contact Embassy for postal service details).',
    },
    {
      id: 8,
      question: 'What is the difference between Bonafide, NOC, and HEC NOC?',
      category: 'General Information',
      answer: 'BONAFIDE CERTIFICATE: Confirms you are an enrolled student at UOH. Used for: bank accounts, scholarships, general authentication. Issued by: UOH Academic Branch. EMBASSY NOC: Certifies the Afghan Embassy has no objection to your study in Pakistan. Used for: visa extensions, compliance with embassy. Issued by: Afghan Embassy. HEC NOC: Certifies HEC has no objection to your continued study; required for formal visa extensions and degree verification. Used for: visa extensions, degree attestation. Issued by: Higher Education Commission.',
    },
    {
      id: 9,
      question: 'Can I get multiple copies of these documents?',
      category: 'General Information',
      answer: 'Yes. For Bonafide Certificates: Unlimited certified copies available at no additional cost. For Embassy NOC and HEC NOC: Original documents are typically single issue. However, you can photocopy the originals for personal use. For official submissions, institutions may require original documents or certified copies—check with the specific institution.',
    },
    {
      id: 10,
      question: 'What should I do if there\'s an error on my NOC or certificate?',
      category: 'Problem Resolution',
      answer: 'Contact the issuing institution immediately. For Bonafide Certificates: Contact UOH Academic Branch to request a corrected version. For Embassy NOC: Call the Embassy with your reference number and request a corrected document to be issued. For HEC NOC: Contact UOH ISS and they will reach out to HEC to correct the document. Do not use documents with incorrect information—errors can create visa complications.',
    },
    {
      id: 11,
      question: 'Is there a fee for Embassy NOC or HEC NOC?',
      category: 'Fees',
      answer: 'Embassy NOC: The Afghan Embassy does not charge a fee for NOC issuance. Postal courier charges (if applicable) are your responsibility. HEC NOC: No fee charged by HEC. Bonafide Certificate: UOH charges PKR 750 (as of June 1, 2026). ISS may charge a nominal coordination fee (contact for current rates). Always ask for official receipts for any payments.',
    },
    {
      id: 12,
      question: 'How often do I need to renew my NOC or Bonafide Certificate?',
      category: 'Validity',
      answer: 'Embassy NOC: Valid for 6-12 months (check with Embassy). Many institutions prefer NOCs issued within the last 3 months. Bonafide Certificate: Valid for 6 months from issue date (check with your specific institution). HEC NOC: Valid for 12 months. You should plan to renew documents 2-3 months before expiry if you anticipate needing them for extended study.',
    },
    {
      id: 13,
      question: 'What should I do if I\'m unsure about the next step in any process?',
      category: 'Support',
      answer: 'Contact the UOH International Student Office first. They are the primary point of contact for all visa-related and bureaucratic issues. If they cannot resolve your issue, they will direct you to the appropriate office (Academic Branch, Ambassador\'s office, etc.). The ASU also provides peer support—attend our monthly orientation sessions or email uoh.asu@gmail.com with your question.',
    },
    {
      id: 14,
      question: 'Can family members or friends submit documents on my behalf?',
      category: 'Procedures',
      answer: 'For most procedures, you can authorize a representative to submit on your behalf with a signed authorization letter and a photocopy of your ID. However, signature-required processes (like Department HOD approval for Bonafide) may require your personal presence. Contact the specific office (Academic Branch, ISS, Embassy) to confirm whether representatives are accepted for your particular application.',
    },
    {
      id: 15,
      question: 'What resources are available if I face visa rejection or complications?',
      category: 'Emergency Support',
      answer: 'Contact the UOH International Student Office immediately—they have experience navigating visa complications and can advise on next steps. Consult the ASU leadership for peer support and guidance. In severe situations, contact the Afghan Embassy in Islamabad via +92-51-2107500. Document all your actions and keep copies of all communications. Consider reaching out to international student advisory services if complications persist.',
    },
  ];

  const categories = ['All', 'Visa & NOC', 'HEC NOC', 'Bonafide Certificate', 'Embassy NOC', 'Contact Info', 'General Information', 'Fees', 'Validity', 'Support', 'Procedures', 'Problem Resolution', 'Emergency Support'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about visa procedures, document requirements, and bureaucratic processes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-teal-300 transition-colors"
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full p-6 text-left bg-white hover:bg-slate-50 transition-colors flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-left">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`text-teal-600 flex-shrink-0 mt-1 transition-transform ${
                    expandedFAQ === faq.id ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {/* Expanded Answer */}
              {expandedFAQ === faq.id && (
                <div className="px-6 pb-6 bg-slate-50 border-t-2 border-slate-200 animate-slide-down">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No FAQs found in this category.</p>
          </div>
        )}

        {/* Still Need Help Card */}
        <div className="mt-12 card-elevated bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200">
          <h3 className="heading-md text-teal-700 mb-4">Still Need Help?</h3>
          <p className="text-slate-700 mb-6">
            If you didn't find the answer you need, reach out directly to the UOH International Student Office or the Afghan Student Union leadership.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* ISS Contact */}
            <div className="bg-white rounded-lg p-4 border border-teal-200">
              <h4 className="font-bold text-navy-800 mb-3">📱 International Student Office</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Phone:</strong> +92-995-616555</p>
                <p><strong>Email:</strong> iss@uoh.edu.pk</p>
                <p><strong>Hours:</strong> Mon-Fri, 10 AM - 3 PM</p>
                <p><strong>Location:</strong> ISS Building, Main Campus</p>
              </div>
            </div>

            {/* ASU Contact */}
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <h4 className="font-bold text-navy-800 mb-3">👥 Afghan Student Union</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Phone:</strong> +92 315 5651859</p>
                <p><strong>Email:</strong> uoh.asu@gmail.com</p>
                <p><strong>Events:</strong> Monthly orientation sessions</p>
                <p><strong>Support:</strong> Peer guidance & community support</p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/923155651859" target="_blank" rel="noreferrer" className="text-teal-600 underline">+92 315 5651859</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
