"use client";

import { useState } from "react";
import Button from "./Button";

const services = [
  "Comprehensive Eye Exam",
  "Designer Eyewear Consultation",
  "Contact Lens Fitting",
  "Digital Eye Strain Solutions",
  "Prescription Sunglasses",
  "Pediatric Eye Care",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--navy)] mb-2 font-[var(--font-heading)]">
          Appointment Requested!
        </h3>
        <p className="text-[var(--text-gray)] mb-6 max-w-md mx-auto">
          Thank you, {formData.firstName}! We&apos;ve received your appointment request for{" "}
          <strong>{formData.service}</strong> on <strong>{formData.date}</strong> at{" "}
          <strong>{formData.time}</strong>. We&apos;ll contact you shortly to confirm.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              service: "",
              date: "",
              time: "",
              notes: "",
            });
          }}
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                s === step
                  ? "bg-[var(--primary-blue)] text-white"
                  : s < step
                  ? "bg-green-500 text-white"
                  : "bg-[var(--light-gray)] text-[var(--text-gray)]"
              }`}
            >
              {s < step ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            {s < 3 && (
              <div
                className={`w-12 h-1 mx-1 rounded ${
                  s < step ? "bg-green-500" : "bg-[var(--light-gray)]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Service & Date */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
              Select Service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
            >
              <option value="">Choose a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
            >
              <option value="">Select a time...</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 2: Personal Info */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all"
              placeholder="(714) 555-0123"
            />
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-[var(--light-blue)] rounded-xl p-6">
            <h4 className="font-semibold text-[var(--navy)] mb-4">Appointment Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--text-gray)]">Service:</span>
                <span className="font-medium text-[var(--dark-gray)]">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-gray)]">Date:</span>
                <span className="font-medium text-[var(--dark-gray)]">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-gray)]">Time:</span>
                <span className="font-medium text-[var(--dark-gray)]">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-gray)]">Name:</span>
                <span className="font-medium text-[var(--dark-gray)]">
                  {formData.firstName} {formData.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-gray)]">Email:</span>
                <span className="font-medium text-[var(--dark-gray)]">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-gray)]">Phone:</span>
                <span className="font-medium text-[var(--dark-gray)]">{formData.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--dark-gray)] focus:outline-none focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-all resize-none"
              placeholder="Any special requests or information we should know?"
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button
            type="button"
            variant="primary"
            onClick={nextStep}
            className="flex-1"
            disabled={
              (step === 1 && (!formData.service || !formData.date || !formData.time)) ||
              (step === 2 &&
                (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
            }
          >
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            className="flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Confirm Appointment"
            )}
          </Button>
        )}
      </div>
    </form>
  );
}

