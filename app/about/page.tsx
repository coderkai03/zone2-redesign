import Link from "next/link";
import Button from "@/components/Button";
import { FeatureCard } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zone 2 Optometry",
  description: "Learn about Zone 2 Optometry, formerly Dr. Milton Nakano Optometry. Meet Dr. Eugene Kim and our dedicated team committed to exceptional eye care.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Patient-Centered Care",
    description: "Your comfort and satisfaction are our top priorities in every visit.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation & Technology",
    description: "We use the latest diagnostic equipment for accurate assessments.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Family-Oriented",
    description: "We provide comprehensive care for patients of all ages.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Prompt Service",
    description: "Quick turnaround times for glasses and contact lens orders.",
  },
];

const timeline = [
  {
    year: "1984",
    title: "Dr. Nakano Opens Practice",
    description: "Dr. Milton Nakano establishes his optometry practice in Anaheim, beginning a legacy of exceptional eye care.",
  },
  {
    year: "2007",
    title: "Dr. Kim Graduates",
    description: "Dr. Eugene Kim earns his Doctor of Optometry degree from Southern California College of Optometry.",
  },
  {
    year: "2007-2022",
    title: "15 Years of Experience",
    description: "Dr. Kim practices in Riverside, CA, building extensive experience in comprehensive eye care.",
  },
  {
    year: "2024",
    title: "Zone 2 Optometry",
    description: "Dr. Kim returns to Anaheim to continue Dr. Nakano's legacy, rebranding as Zone 2 Optometry.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--light-blue)] via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
              Your Vision, Our Legacy
            </h1>
            <p className="text-lg text-[var(--text-gray)] leading-relaxed">
              Formerly Dr. Milton Nakano Optometry, Zone 2 Optometry continues over 40 years of dedicated patient care with a commitment to excellence in eye health.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
                A Legacy of Excellence in Eye Care
              </h2>
              <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                For over four decades, our practice has been a cornerstone of eye care in the Anaheim community. What began as Dr. Milton Nakano&apos;s vision to provide exceptional, personalized eye care has grown into Zone 2 Optometry.
              </p>
              <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                Today, under the leadership of Dr. Eugene Kim, we continue this tradition while embracing modern technology and techniques. Our commitment remains unchanged: to provide the highest quality eye care with a personal touch.
              </p>
              <p className="text-[var(--text-gray)] leading-relaxed">
                At Zone 2, we believe that every patient deserves individualized attention. Whether you&apos;re visiting for a routine exam, selecting new frames, or seeking specialized care, we&apos;re here to ensure your experience exceeds expectations.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--light-blue)]" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="relative pl-20 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <div className="absolute left-4 w-8 h-8 bg-[var(--primary-blue)] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="bg-[var(--muted)] rounded-xl p-5">
                      <span className="text-[var(--primary-blue)] font-bold">{item.year}</span>
                      <h3 className="text-lg font-semibold text-[var(--navy)] mt-1 mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--text-gray)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Kim */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-[var(--navy)] to-[var(--primary-blue)] rounded-3xl overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="w-32 h-32 mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-[var(--font-heading)]">Dr. Eugene Kim</h3>
                  <p className="text-white/70">Optometrist</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--light-blue)] rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Meet Our Doctor</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
                Dr. Eugene Kim, O.D.
              </h2>
              <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                Dr. Kim holds a Bachelor of Science degree in Psychobiology from UCLA and earned his Doctor of Optometry degree from the Southern California College of Optometry in Fullerton, CA (now Marshall B. Ketchum University) in 2007.
              </p>
              <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                With over 15 years of practice in Riverside, CA, Dr. Kim brings extensive experience in comprehensive eye care, including routine exams, contact lens fittings, and management of ocular conditions.
              </p>
              <p className="text-[var(--text-gray)] leading-relaxed mb-8">
                Dr. Kim is excited to return to his roots in Anaheim to take over for Dr. Nakano, continuing the tradition of exceptional patient care that has served the community for decades.
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--navy)] shadow-sm">
                  UCLA Graduate
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--navy)] shadow-sm">
                  O.D. - SCCO 2007
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--navy)] shadow-sm">
                  15+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-4 font-[var(--font-heading)]">
              What Sets Us Apart
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
              Our commitment to these core values guides everything we do at Zone 2 Optometry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <FeatureCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--light-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-6 font-[var(--font-heading)]">
            Experience the Zone 2 Difference
          </h2>
          <p className="text-[var(--text-gray)] text-lg mb-8 max-w-2xl mx-auto">
            Schedule your visit today and discover why families have trusted us with their vision for over 40 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments">
              <Button variant="primary" size="lg">
                Book an Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

