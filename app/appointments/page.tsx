import Card from "@/components/Card";
import AppointmentForm from "@/components/AppointmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | Zone 2 Optometry",
  description: "Schedule your eye exam or consultation at Zone 2 Optometry in Anaheim, CA. Easy online booking for comprehensive eye exams, contact lens fittings, and more.",
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quick & Easy",
    description: "Book your appointment in under 2 minutes",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Flexible Scheduling",
    description: "Choose a time that works for you",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Confirmation Email",
    description: "Receive instant confirmation details",
  },
];

const faqs = [
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring your current glasses or contact lenses, a list of medications you're taking, your vision insurance card (if applicable), and any previous eye exam records if available.",
  },
  {
    question: "How long does an eye exam take?",
    answer: "A comprehensive eye exam typically takes 30-60 minutes, depending on the services needed. Contact lens fittings may require additional time.",
  },
  {
    question: "Do you accept walk-ins?",
    answer: "While we welcome walk-ins, we recommend scheduling an appointment to minimize wait times and ensure you receive our full attention.",
  },
  {
    question: "What insurance do you accept?",
    answer: "We accept most major vision insurance plans including VSP, EyeMed, and others. Please contact us to verify your specific coverage.",
  },
];

export default function AppointmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--light-blue)] via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Book Online</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
              Schedule Your Appointment
            </h1>
            <p className="text-lg text-[var(--text-gray)] leading-relaxed">
              Book your eye exam or consultation in just a few clicks. We&apos;ll confirm your appointment and send you all the details you need.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-center gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 bg-[var(--light-blue)] rounded-xl flex items-center justify-center text-[var(--primary-blue)] flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)]">{benefit.title}</h3>
                  <p className="text-sm text-[var(--text-gray)]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-2 font-[var(--font-heading)]">
                  Request an Appointment
                </h2>
                <p className="text-[var(--text-gray)] mb-6">
                  Fill out the form below and we&apos;ll contact you to confirm your appointment.
                </p>
                <AppointmentForm />
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Card */}
              <Card className="bg-[var(--navy)] text-white" hover={false}>
                <h3 className="text-xl font-bold text-white mb-4 font-[var(--font-heading)]">
                  Prefer to Call?
                </h3>
                <p className="text-white/70 mb-4">
                  Our friendly staff is ready to help you schedule your appointment.
                </p>
                <a
                  href="tel:+17145275060"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">(714) 527-5060</p>
                    <p className="text-sm text-white/60">Mon-Sat during office hours</p>
                  </div>
                </a>
              </Card>

              {/* Office Hours */}
              <Card>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-4 font-[var(--font-heading)]">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Monday</span>
                    <span className="text-[var(--dark-gray)]">10am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Tuesday</span>
                    <span className="text-[var(--dark-gray)]">10am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Wednesday</span>
                    <span className="text-[var(--text-gray)]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Thursday</span>
                    <span className="text-[var(--dark-gray)]">10am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Friday</span>
                    <span className="text-[var(--dark-gray)]">10am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Saturday</span>
                    <span className="text-[var(--dark-gray)]">9am - 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-gray)]">Sunday</span>
                    <span className="text-[var(--text-gray)]">Closed</span>
                  </div>
                </div>
                <p className="mt-4 pt-4 border-t border-[var(--border)] text-xs text-[var(--text-gray)]">
                  *Closed for lunch 1pm - 2pm
                </p>
              </Card>

              {/* Location */}
              <Card>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-4 font-[var(--font-heading)]">
                  Location
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[var(--light-blue)] rounded-lg flex items-center justify-center text-[var(--primary-blue)] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--dark-gray)]">
                      2795 W Lincoln Ave. Ste L<br />
                      Anaheim, CA 92801
                    </p>
                    <a
                      href="https://maps.google.com/?q=2795+W+Lincoln+Ave+Ste+L+Anaheim+CA+92801"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--primary-blue)] font-medium hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-4 font-[var(--font-heading)]">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-gray)]">
              Have questions about your visit? Find answers to common questions below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 flex items-start gap-3">
                    <span className="w-6 h-6 bg-[var(--light-blue)] rounded-full flex items-center justify-center text-[var(--primary-blue)] text-sm flex-shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-[var(--text-gray)] pl-9">
                    {faq.answer}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--text-gray)] mb-4">
              Still have questions? We&apos;re happy to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--primary-blue)] font-semibold hover:underline"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

