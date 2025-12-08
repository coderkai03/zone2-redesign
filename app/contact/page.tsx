import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Zone 2 Optometry",
  description: "Contact Zone 2 Optometry in Anaheim, CA. Call (714) 527-5060 or visit us at 2795 W Lincoln Ave. Ste L. We're here to help with all your eye care needs.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Us",
    content: "2795 W Lincoln Ave. Ste L\nAnaheim, CA 92801",
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=2795+W+Lincoln+Ave+Ste+L+Anaheim+CA+92801",
    },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    content: "(714) 527-5060",
    action: {
      label: "Call Now",
      href: "tel:+17145275060",
    },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    content: "contact@zone2optometry.com",
    action: {
      label: "Send Email",
      href: "mailto:contact@zone2optometry.com",
    },
  },
];

const hours = [
  { day: "Monday", hours: "10:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
  { day: "Friday", hours: "10:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--light-blue)] via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
              Get in Touch
            </h1>
            <p className="text-lg text-[var(--text-gray)] leading-relaxed">
              Have questions about our services or need to schedule an appointment? We&apos;re here to help. Reach out to us using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <Card className="text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[var(--light-blue)] rounded-xl flex items-center justify-center text-[var(--primary-blue)]">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--navy)] mb-2">{info.title}</h3>
                  <p className="text-[var(--text-gray)] whitespace-pre-line mb-4">{info.content}</p>
                  <a
                    href={info.action.href}
                    target={info.action.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[var(--primary-blue)] font-medium hover:underline"
                  >
                    {info.action.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-2 font-[var(--font-heading)]">
                  Send Us a Message
                </h2>
                <p className="text-[var(--text-gray)] mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </Card>
            </div>

            {/* Office Hours */}
            <div className="lg:col-span-2">
              <Card padding="lg" className="bg-[var(--navy)] text-white" hover={false}>
                <h2 className="text-2xl font-bold text-white mb-6 font-[var(--font-heading)]">
                  Office Hours
                </h2>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 border-b border-white/10 last:border-0 ${
                        item.day === today ? "text-[var(--light-blue)]" : "text-white/80"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day === today && (
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                        {item.day}
                      </span>
                      <span className={item.hours === "Closed" ? "text-white/50" : ""}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60">
                    *Closed for lunch 1:00 PM - 2:00 PM
                  </p>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+17145275060"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--primary-blue)] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[var(--light-blue)] rounded-lg flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--navy)]">Call Us</p>
                    <p className="text-sm text-[var(--text-gray)]">(714) 527-5060</p>
                  </div>
                </a>
                
                <a
                  href="/appointments"
                  className="flex items-center gap-3 p-4 bg-[var(--primary-blue)] rounded-xl text-white hover:bg-[var(--primary-blue-hover)] transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Book Appointment</p>
                    <p className="text-sm text-white/80">Schedule your visit online</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Location</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-4 font-[var(--font-heading)]">
              Find Us
            </h2>
            <p className="text-[var(--text-gray)]">
              Conveniently located in the Lincoln Plaza shopping center
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-[16/9] lg:aspect-[21/9] bg-[var(--muted)] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-[var(--light-blue)] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Zone 2 Optometry</h3>
                <p className="text-[var(--text-gray)] mb-4">
                  2795 W Lincoln Ave. Ste L<br />
                  Anaheim, CA 92801
                </p>
                <a
                  href="https://maps.google.com/?q=2795+W+Lincoln+Ave+Ste+L+Anaheim+CA+92801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-blue)] text-white rounded-full font-semibold hover:bg-[var(--primary-blue-hover)] transition-colors"
                >
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Decorative map-like background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--navy)] rounded-lg" />
              <div className="absolute top-1/3 right-1/3 w-48 h-24 border border-[var(--navy)] rounded-lg" />
              <div className="absolute bottom-1/4 left-1/3 w-40 h-20 border border-[var(--navy)] rounded-lg" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-[var(--navy)]" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-[var(--navy)]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

