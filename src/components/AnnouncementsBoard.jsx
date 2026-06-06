import React from 'react';
import { AlertCircle, Calendar, Clock, Bell } from 'lucide-react';

export default function AnnouncementsBoard() {
  const announcements = [
    {
      id: 1,
      title: 'Visa Extension Window - Critical Deadline',
      type: 'deadline',
      priority: 'high',
      date: 'June 15, 2026',
      description: 'Last date to submit visa extension applications to Immigration Office before Eid holidays. Processed submissions received by this date will be completed by July 30, 2026. After this date, expect 3-4 week delays.',
      details: [
        'Submit NOC and required documents by June 15',
        'Expected processing completion: July 30, 2026',
        'After this date: 3-4 week delays expected',
        'Plan your Bonafide Certificate collection accordingly',
      ],
    },
    {
      id: 2,
      title: 'HEC NOC Processing Update',
      type: 'update',
      priority: 'high',
      date: 'June 1, 2026',
      description: 'HEC is currently processing NOC applications with 10-15 working day turnaround. ISS submitted 12 applications on May 28. All students should check status via ISS office by June 15.',
      details: [
        'Current HEC processing time: 10-15 working days',
        'Last batch submitted: May 28, 2026',
        'Expected completion: June 10-15, 2026',
        'Contact ISS for individual status updates',
      ],
    },
    {
      id: 3,
      title: 'Embassy NOC Office Hours Change',
      type: 'notice',
      priority: 'medium',
      date: 'May 29, 2026',
      description: 'Effective June 1, the Afghan Embassy in Islamabad will adjust office hours for the summer season. Walk-in submissions are by appointment only.',
      details: [
        'New hours: Monday-Friday, 8:30 AM - 12:00 PM',
        'Appointment bookings: Call +92-51-2107500 between 9-11 AM',
        'Appointments typically available within 3 days',
        'Emergency cases: Contact via email vc@mofa.gov.af',
      ],
    },
    {
      id: 4,
      title: 'ASU Orientation & Support Session',
      type: 'event',
      priority: 'medium',
      date: 'June 10, 2026',
      description: 'Afghan Student Union is hosting a support session to help new students navigate bureaucratic procedures. Free refreshments and one-on-one guidance from ASU officers.',
      details: [
        'When: June 10, 2026, 3:00 PM - 5:00 PM',
        'Where: UOH Student Center, Hall-B',
        'Topics: NOC procedures, Bonafide applications, HEC processes',
        'RSVP: uoh.asu@gmail.com',
      ],
    },
    {
      id: 5,
      title: 'Bonafide Certificate Processing - Fee Update',
      type: 'notice',
      priority: 'low',
      date: 'May 25, 2026',
      description: 'Starting June 1, 2026, the Bonafide Certificate processing fee increases from PKR 500 to PKR 750. This is a one-time administrative charge.',
      details: [
        'New fee effective: June 1, 2026',
        'Previous fee: PKR 500',
        'New fee: PKR 750',
        'Processing time unchanged: 2-3 working days',
        'Multiple copies available at no additional cost',
      ],
    },
    {
      id: 6,
      title: 'From the Office of Academic Secretary',
      type: 'message',
      priority: 'medium',
      date: 'June 5, 2026',
      description: 'Dear students, as we enter the peak visa season, ensure all your documentation is complete and accurate. Do not delay HEC or Embassy applications. Contact the ISS office immediately if you face any issues.',
      details: [
        'Act promptly on all visa-related documents',
        'Verify all information before submission',
        'Reach out to ISS at first sign of delay',
        'The ASU is here to support you through this process',
      ],
    },
  ];

  const priorityColors = {
    high: 'border-red-500 bg-red-50',
    medium: 'border-amber-500 bg-amber-50',
    low: 'border-green-500 bg-green-50',
  };

  const priorityBadgeColors = {
    high: 'bg-red-500 text-white',
    medium: 'bg-amber-500 text-white',
    low: 'bg-green-500 text-white',
  };

  const typeIcons = {
    deadline: <Calendar className="text-red-600" size={20} />,
    update: <Bell className="text-blue-600" size={20} />,
    notice: <AlertCircle className="text-amber-600" size={20} />,
    event: <Clock className="text-emerald-600" size={20} />,
    message: <Bell className="text-teal-600" size={20} />,
  };

  return (
    <section id="announcements" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="heading-lg">Announcements & Important Deadlines</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with critical deadlines, procedural changes, and important notices from the Academic Secretary and UOH administration.
          </p>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map(announcement => (
            <div
              key={announcement.id}
              className={`rounded-lg border-l-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow ${
                priorityColors[announcement.priority]
              }`}
            >
              {/* Header with Type and Priority */}
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  {typeIcons[announcement.type]}
                  <h3 className="heading-sm text-navy-800">{announcement.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      priorityBadgeColors[announcement.priority]
                    }`}
                  >
                    {announcement.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <Clock size={16} />
                <span>{announcement.date}</span>
              </div>

              {/* Description */}
              <p className="text-slate-700 mb-4">{announcement.description}</p>

              {/* Details List */}
              <div className="bg-white/50 rounded p-4 space-y-2">
                {announcement.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="text-teal-600 font-bold mt-0.5">•</span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 12th Grade Equivalence Request Card */}
        <div className="mt-12 card-elevated bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
          <h3 className="heading-md text-emerald-700 mb-4">🎓 Get 12th Grade Equivalence Certificate</h3>
          <p className="text-slate-700 mb-6">
            Request your equivalence certificate for 12th grade to facilitate admissions and credential evaluation processes internationally.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Student Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Student ID/CNIC</label>
              <input
                type="text"
                placeholder="Your Student ID or CNIC"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <button className="btn-primary w-full sm:w-auto">Request Equivalence Certificate</button>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            <strong>Processing Time:</strong> 3-5 working days after submission. You will receive the certificate via email.
          </p>
        </div>

        {/* Critical Note */}
        <div className="mt-8 bg-red-50 border-2 border-red-300 rounded-lg p-6">
          <h4 className="flex items-center gap-2 text-red-900 font-bold mb-3">
            <AlertCircle size={24} />
            🚨 Critical Reminder
          </h4>
          <p className="text-red-800 mb-3">
            During visa extension season (April-August), processing times are significantly longer. Submit all applications as early as possible to avoid missing critical deadlines.
          </p>
          <div className="bg-white rounded p-3 border border-red-200">
            <p className="text-sm text-red-700">
              <strong>Action Item:</strong> Check your visa expiry date NOW. If it expires within 4 months, begin your NOC and visa extension process immediately through the UOH International Student Office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
