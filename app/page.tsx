import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { ServiceCard, FeatureCard } from "@/components/Card";
import TestimonialCarousel from "@/components/TestimonialCarousel";

// Service icons as SVG components
const EyeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const GlassesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zm-3 0v6m0 0H9m3 0h3" />
  </svg>
);

const ContactLensIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
);

const services = [
  {
    icon: <EyeIcon />,
    title: "Comprehensive Eye Exams",
    description: "Thorough eye examinations using advanced diagnostic technology to ensure your vision and eye health are at their best.",
  },
  {
    icon: <GlassesIcon />,
    title: "Stylish Eyewear Selection",
    description: "Discover a world of elegance and functionality with our designer eyewear collection. Your eyewear is an expression of your style.",
  },
  {
    icon: <ContactLensIcon />,
    title: "Contact Lens Expertise",
    description: "We provide hands-on training, covering insertion, removal, and maintenance, so you can enjoy contact lenses with confidence.",
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Experienced Doctors",
    description: "Our commitment to early detection and personalized care sets us apart.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Designer Options",
    description: "Your eyewear is an expression of your style and personality.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Prompt Service",
    description: "We go the extra mile for quick turnaround on glasses and contact lens orders.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--light-blue)] via-white to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 opacity-0 animate-fade-in-up">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-[var(--text-gray)]">Now Accepting New Patients</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 font-[var(--font-heading)] leading-tight opacity-0 animate-fade-in-up animation-delay-100">
                Zone 2{" "}
                <span className="text-[var(--primary-blue)]">Optometry</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[var(--text-gray)] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                Experience coastal clarity with exceptional eye care. Your vision is our priority. With over 40 years of dedicated patient care, we continue our commitment to excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-300">
                <Link href="/appointments">
                  <Button variant="primary" size="lg">
                    Book an Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Our Services
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 pt-10 border-t border-[var(--border)] opacity-0 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--navy)]">40+</div>
                  <div className="text-sm text-[var(--text-gray)]">Years Legacy</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--navy)]">15+</div>
                  <div className="text-sm text-[var(--text-gray)]">Years Dr. Kim</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--navy)]">5★</div>
                  <div className="text-sm text-[var(--text-gray)]">Patient Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--navy)] rounded-full opacity-10" />
                
                {/* Image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/girl-exam.png"
                    alt="Patient receiving eye examination"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-fade-in animation-delay-200">
                  <svg className="w-8 h-8 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute bottom-20 left-0 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-fade-in animation-delay-300">
                  <svg className="w-10 h-10 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dr. Kim Exam Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative bg-gradient-to-br from-[var(--light-blue)] to-[var(--primary-blue)]/20">
                <Image
                  src="/images/dr-kim-exam.png"
                  alt="Dr. Kim performing an eye exam"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Accent shape */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--primary-blue)] rounded-2xl -z-10 opacity-20" />
            </div>

            {/* Content */}
            <div>
              <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
                Family-Oriented Care at Zone 2 Optometry
              </h2>
              <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                Formerly Dr. Milton Nakano Optometry, we provide comprehensive eyecare services. With over 40 years of dedicated patient care, Dr. Nakano&apos;s legacy continues to inspire our commitment to excellence.
              </p>
              <p className="text-[var(--text-gray)] leading-relaxed mb-8">
                At Zone 2, we are dedicated to your eye health as well as those of your family. We provide a blend of professionalism, style, and innovation. Visit us today and experience the difference in personalized and comprehensive eye care services.
              </p>
              <Link href="/about">
                <Button variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-4 font-[var(--font-heading)]">
              Our Services
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
              At Zone 2 we are committed to professional services to enhance your eye health and visual well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
                Your Eyes Deserve Nothing Less Than Exceptional Care
              </h2>
              <p className="text-[var(--text-gray)] leading-relaxed mb-8">
                Our specialized eye care services include comprehensive eye exams, vision screenings, and the fitting of contact lenses. We combine expertise with compassion to deliver the best care for you and your family.
              </p>

              <div className="space-y-6">
                {features.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>

            {/* Image/Stats Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--primary-blue)] rounded-3xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6 font-[var(--font-heading)]">
                  Meet Dr. Eugene Kim
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Dr. Kim holds a Bachelor of Science degree in Psychobiology from UCLA and earned his Doctor of Optometry degree from the Southern California College of Optometry in Fullerton, CA (now Marshall B. Ketchum University) in 2007.
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  With over 15 years of practice in Riverside, CA, Dr. Kim is excited to return to his roots in Anaheim to take over for Dr. Nakano.
                </p>
                <Link href="/about">
                  <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--light-blue)] rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--primary-blue)]/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-4 font-[var(--font-heading)]">
              What Our Patients Say
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our patients have to say about their experience at Zone 2 Optometry.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--primary-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[var(--font-heading)]">
            Ready to See the Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your comprehensive eye exam today and experience personalized care from our expert team. Your vision is our priority.
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
