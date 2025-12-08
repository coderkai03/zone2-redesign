import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Zone 2 Optometry",
  description: "Comprehensive eye care services including eye exams, contact lens fittings, designer eyewear, prescription sunglasses, pediatric eye care, and digital eye strain solutions.",
};

const services = [
  {
    id: "eye-exams",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Comprehensive Eye Exams",
    description: "Our thorough eye examinations go beyond just checking your vision. Using advanced diagnostic technology, we assess your overall eye health, screen for conditions like glaucoma and macular degeneration, and ensure your prescription is accurate.",
    features: [
      "Complete vision assessment",
      "Glaucoma screening",
      "Retinal examination",
      "Digital eye strain evaluation",
      "Personalized recommendations",
    ],
  },
  {
    id: "eyewear",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 0a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zm-3 0v6m0 0H9m3 0h3" />
      </svg>
    ),
    title: "Designer Eyewear Consultation",
    description: "Discover a world of elegance and functionality with our curated collection of designer frames. Our experienced staff will help you find the perfect eyewear that complements your style and meets your visual needs.",
    features: [
      "Premium brand selection",
      "Expert frame fitting",
      "Lens customization options",
      "Style consultation",
      "Adjustments and repairs",
    ],
  },
  {
    id: "contact-lenses",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
      </svg>
    ),
    title: "Contact Lens Fitting",
    description: "We provide comprehensive contact lens services, from initial fittings to follow-up care. Our hands-on training covers insertion, removal, and maintenance, ensuring you can enjoy contact lenses with confidence.",
    features: [
      "Comprehensive fitting evaluation",
      "Multiple lens options",
      "Insertion and removal training",
      "Care and maintenance guidance",
      "Follow-up appointments",
    ],
  },
  {
    id: "sunglasses",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Prescription Sunglasses",
    description: "Protect your eyes while looking stylish with our range of prescription sunglasses. We offer various lens options including polarized, photochromic, and specialty tints to suit your lifestyle and activities.",
    features: [
      "Polarized lens options",
      "UV protection",
      "Sport-specific designs",
      "Fashion-forward styles",
      "Transition lenses available",
    ],
  },
  {
    id: "pediatric",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pediatric Eye Care",
    description: "Children's eye health is crucial for their development and learning. Our gentle, child-friendly approach ensures comprehensive eye exams that detect vision problems early, setting your child up for success.",
    features: [
      "Age-appropriate examinations",
      "Vision development monitoring",
      "Learning-related vision assessment",
      "Kid-friendly frame selection",
      "Parent education and guidance",
    ],
  },
  {
    id: "digital-strain",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Digital Eye Strain Solutions",
    description: "In today's digital world, screen time can take a toll on your eyes. We offer specialized assessments and solutions to combat digital eye strain, helping you work and play comfortably.",
    features: [
      "Blue light assessment",
      "Computer glasses",
      "Ergonomic recommendations",
      "Eye exercise guidance",
      "Screen time management tips",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--light-blue)] via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
              Comprehensive Eye Care Services
            </h1>
            <p className="text-lg text-[var(--text-gray)] leading-relaxed">
              At Zone 2, we are committed to professional services to enhance your eye health and visual well-being. Explore our full range of eye care solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 bg-[var(--light-blue)] rounded-2xl flex items-center justify-center text-[var(--primary-blue)] mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4 font-[var(--font-heading)]">
                    {service.title}
                  </h2>
                  <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[var(--primary-blue)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--dark-gray)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/appointments">
                    <Button variant="primary">
                      Book This Service
                    </Button>
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="bg-gradient-to-br from-[var(--light-blue)] to-white" padding="lg" hover={false}>
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center text-[var(--primary-blue)]">
                          {service.icon}
                        </div>
                        <p className="text-[var(--navy)] font-semibold">{service.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Insurance</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-4 font-[var(--font-heading)]">
              Insurance & Payment Options
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
              We accept most major vision insurance plans and offer flexible payment options to ensure quality eye care is accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--light-blue)] rounded-xl flex items-center justify-center text-[var(--primary-blue)]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--navy)] mb-2">Major Insurance</h3>
              <p className="text-sm text-[var(--text-gray)]">
                We accept VSP, EyeMed, and most major vision plans
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--light-blue)] rounded-xl flex items-center justify-center text-[var(--primary-blue)]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--navy)] mb-2">Flexible Payment</h3>
              <p className="text-sm text-[var(--text-gray)]">
                Cash, credit cards, and payment plans available
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--light-blue)] rounded-xl flex items-center justify-center text-[var(--primary-blue)]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--navy)] mb-2">Questions?</h3>
              <p className="text-sm text-[var(--text-gray)]">
                Contact us to verify your coverage
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--primary-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[var(--font-heading)]">
            Ready to Experience Quality Eye Care?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and let our expert team take care of your vision needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-[var(--primary-blue)] hover:bg-[var(--light-blue)]"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

