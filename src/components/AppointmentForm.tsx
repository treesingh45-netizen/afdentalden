import { useState, useEffect, useRef, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, AlertCircle, MessageSquare, RotateCcw } from 'lucide-react';
import {
  AppointmentFormValues,
  AppointmentValidationErrors,
  SPECIALTY_OPTIONS,
  PREFERRED_TIME_OPTIONS,
  validateAppointmentForm,
  buildWhatsAppEnquiryUrl,
} from '../utils/appointmentUtils';
import { CLINIC_INFO } from '../data/clinicData';

export default function AppointmentForm() {
  const [searchParams] = useSearchParams();
  const confirmationRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState<AppointmentFormValues>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    specialty: '',
    message: '',
  });

  const [errors, setErrors] = useState<AppointmentValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    confirmationMessage: string;
    whatsappUrl: string;
    referenceId?: string;
  } | null>(null);

  useEffect(() => {
    if (submittedData && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submittedData]);

  useEffect(() => {
    const paramSpecialty = searchParams.get('specialty');
    const paramDoctor = searchParams.get('doctor');

    if (paramSpecialty || paramDoctor) {
      setValues((prev) => ({
        ...prev,
        specialty:
          paramSpecialty &&
          SPECIALTY_OPTIONS.includes(paramSpecialty as (typeof SPECIALTY_OPTIONS)[number])
            ? paramSpecialty
            : prev.specialty,
        message:
          paramDoctor && !prev.message
            ? `I would like to enquire about an appointment with ${paramDoctor}.`
            : prev.message,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    field: keyof AppointmentFormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateAppointmentForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const fallbackWhatsApp = buildWhatsAppEnquiryUrl(values);
    const defaultConfirmation =
      'Thank you for contacting A.F Dental Den. Your appointment request has been received for enquiry. Please contact the clinic directly for confirmation of availability.';

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmittedData({
          confirmationMessage: result.confirmationMessage || defaultConfirmation,
          whatsappUrl: result.whatsappUrl || fallbackWhatsApp,
          referenceId: result.referenceId,
        });
      } else {
        setSubmittedData({
          confirmationMessage: defaultConfirmation,
          whatsappUrl: fallbackWhatsApp,
        });
      }
    } catch {
      setSubmittedData({
        confirmationMessage: defaultConfirmation,
        whatsappUrl: fallbackWhatsApp,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setValues({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      specialty: '',
      message: '',
    });
    setErrors({});
  };

  const todayIso = new Date().toISOString().split('T')[0];

  if (submittedData) {
    return (
      <div
        ref={confirmationRef}
        role="status"
        aria-live="polite"
        className="bg-white rounded-2xl border border-[#8ABDD0] p-8 sm:p-10 space-y-6 scroll-mt-28"
      >
        <div className="w-12 h-12 rounded-full bg-[#EEF6F8] flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-[#39434A]" aria-hidden="true" />
        </div>

        <div className="space-y-3">
          {submittedData.referenceId && (
            <p className="text-xs tracking-[0.14em] uppercase text-[#778087] tabular-nums">
              Enquiry Reference: {submittedData.referenceId}
            </p>
          )}
          <h3 className="font-display text-3xl font-medium text-[#39434A]">
            Appointment Enquiry Recorded
          </h3>
          <p className="text-base text-[#39434A] leading-relaxed">
            {submittedData.confirmationMessage}
          </p>
        </div>

        <div className="pt-5 border-t border-[#E8E6E1] space-y-1.5 text-sm text-[#5C666E]">
          <p className="font-medium text-[#39434A]">
            Send Directly to Clinic Reception on WhatsApp
          </p>
          <p>
            For prompt coordination of specialist availability, you can also send your
            formatted enquiry details directly to our clinic WhatsApp ({CLINIC_INFO.phoneDisplay}).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={submittedData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Forward Enquiry on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#39434A] bg-[#F5EFE7] hover:bg-[#EAE0D3] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-[#E8E6E1] p-6 sm:p-10 space-y-6"
    >
      <div className="space-y-1.5 border-b border-[#E8E6E1] pb-5">
        <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#39434A]">
          Request an Appointment Enquiry
        </h3>
        <p className="text-sm text-[#5C666E]">
          Complete the details below. Our clinic team will guide you regarding specialist
          schedules and appointment confirmation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* 1. Full Name */}
        <div>
          <label
            htmlFor="appt-fullName"
            className="block text-sm font-medium text-[#39434A] mb-1.5"
          >
            Full Name <span className="text-[#9E7E5B]">*</span>
          </label>
          <input
            id="appt-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
            className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] placeholder:text-[#778087] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
              errors.fullName ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.fullName && (
            <p id="err-fullName" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* 2. Phone Number */}
        <div>
          <label
            htmlFor="appt-phone"
            className="block text-sm font-medium text-[#39434A] mb-1.5"
          >
            Phone Number <span className="text-[#9E7E5B]">*</span>
          </label>
          <input
            id="appt-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="e.g., 0337-5914872"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] placeholder:text-[#778087] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
              errors.phone ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.phone && (
            <p id="err-phone" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* 3. Email Address */}
        <div>
          <label
            htmlFor="appt-email"
            className="block text-sm font-medium text-[#39434A] mb-1.5"
          >
            Email Address <span className="text-[#9E7E5B]">*</span>
          </label>
          <input
            id="appt-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'err-email' : undefined}
            className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] placeholder:text-[#778087] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
              errors.email ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.email && (
            <p id="err-email" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* 6. Select Dental Specialty */}
        <div>
          <label
            htmlFor="appt-specialty"
            className="block text-sm font-medium text-[#39434A] mb-1.5"
          >
            Select Dental Specialty <span className="text-[#9E7E5B]">*</span>
          </label>
          <select
            id="appt-specialty"
            name="specialty"
            value={values.specialty}
            onChange={(e) => handleChange('specialty', e.target.value)}
            aria-invalid={Boolean(errors.specialty)}
            aria-describedby={errors.specialty ? 'err-specialty' : undefined}
            className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
              errors.specialty ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
            }`}
          >
            <option value="">Choose a dental specialty...</option>
            {SPECIALTY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <p id="err-specialty" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.specialty}</span>
            </p>
          )}
        </div>

        {/* 4. Preferred Appointment Date */}
        <div>
          <label
            htmlFor="appt-date"
            className="block text-sm font-medium text-[#39434A] mb-1.5"
          >
            Preferred Appointment Date <span className="text-[#9E7E5B]">*</span>
          </label>
          <input
            id="appt-date"
            name="preferredDate"
            type="date"
            min={todayIso}
            value={values.preferredDate}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? 'err-preferredDate' : undefined}
            className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
              errors.preferredDate ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.preferredDate && (
            <p id="err-preferredDate" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>

        {/* 5. Preferred Appointment Time */}
        <div>
          <label
            htmlFor="appt-time"
            className="block text-sm font-medium text-[#39434A] mb-1.5"
          >
            Preferred Appointment Time <span className="text-[#9E7E5B]">*</span>
          </label>
          <select
            id="appt-time"
            name="preferredTime"
            value={values.preferredTime}
            onChange={(e) => handleChange('preferredTime', e.target.value)}
            aria-invalid={Boolean(errors.preferredTime)}
            aria-describedby={errors.preferredTime ? 'err-preferredTime' : undefined}
            className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
              errors.preferredTime ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
            }`}
          >
            <option value="">Select preferred time window...</option>
            {PREFERRED_TIME_OPTIONS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p id="err-preferredTime" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.preferredTime}</span>
            </p>
          )}
        </div>
      </div>

      {/* 7. Message / Dental Concern */}
      <div>
        <label
          htmlFor="appt-message"
          className="block text-sm font-medium text-[#39434A] mb-1.5"
        >
          Message / Dental Concern <span className="text-[#9E7E5B]">*</span>
        </label>
        <textarea
          id="appt-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Briefly share your dental concern or the specialist you wish to consult..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'err-message' : undefined}
          className={`w-full px-4 py-3 rounded-lg border bg-[#FAF8F4] text-[#39434A] placeholder:text-[#778087] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8ABDD0] transition-colors ${
            errors.message ? 'border-[#B85C5C]' : 'border-[#E8E6E1]'
          }`}
        />
        {errors.message && (
          <p id="err-message" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E3B3B]">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-7 py-3.5 text-sm font-medium tracking-wide text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
        >
          {submitting ? 'Submitting Enquiry...' : 'Request an Appointment'}
        </button>

        <p className="text-xs text-[#778087]">
          Submitting sends an appointment enquiry; availability is confirmed directly by our clinic.
        </p>
      </div>
    </form>
  );
}
