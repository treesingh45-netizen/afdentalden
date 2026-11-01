export interface AppointmentFormValues {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  specialty: string;
  message: string;
}

export interface AppointmentValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  specialty?: string;
  message?: string;
}

export const SPECIALTY_OPTIONS = [
  'General Dentistry',
  'Orthodontics',
  'Endodontics',
  'Oral & Maxillofacial Surgery',
  'Prosthodontics',
  'Not Sure / Need Guidance',
] as const;

export const PREFERRED_TIME_OPTIONS = [
  'Afternoon (2:00 PM – 4:30 PM)',
  'Early Evening (4:30 PM – 7:00 PM)',
  'Evening (7:00 PM – 9:00 PM)',
  'Flexible / Any Available Slot',
] as const;

/**
 * Validates Pakistani and international phone numbers (7 to 15 digits, allowing +, spaces, hyphens, parentheses).
 */
export function isValidPhone(phone: string): boolean {
  const trimmed = phone.trim();
  if (!trimmed) return false;
  if (!/^[+\d\s\-()]+$/.test(trimmed)) return false;
  const digitsOnly = trimmed.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Validates standard email format when provided or required.
 */
export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

/**
 * Validates all required fields of the A.F Dental Den appointment enquiry form.
 */
export function validateAppointmentForm(
  values: AppointmentFormValues
): AppointmentValidationErrors {
  const errors: AppointmentValidationErrors = {};

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter a valid phone or WhatsApp number.';
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid 10 to 15 digit phone number (e.g., 0337-5914872).';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address (e.g., name@example.com).';
  }

  if (!values.preferredDate.trim()) {
    errors.preferredDate = 'Please select your preferred appointment date.';
  }

  if (!values.preferredTime.trim()) {
    errors.preferredTime = 'Please select a preferred appointment time window.';
  }

  if (!values.specialty.trim()) {
    errors.specialty = 'Please select a dental specialty or guidance option.';
  }

  if (!values.message.trim() || values.message.trim().length < 5) {
    errors.message = 'Please briefly describe your dental concern or enquiry.';
  }

  return errors;
}

/**
 * Formats an appointment enquiry into a clean WhatsApp URL for A.F Dental Den (+923375914872).
 */
export function buildWhatsAppEnquiryUrl(
  values: AppointmentFormValues,
  whatsappNumber = '923375914872'
): string {
  const lines = [
    'Hello A.F Dental Den, I would like to enquire about a dental appointment.',
    '',
    `Name: ${values.fullName.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Email: ${values.email.trim()}`,
    `Preferred Date: ${values.preferredDate.trim()}`,
    `Preferred Time: ${values.preferredTime.trim()}`,
    `Dental Specialty: ${values.specialty.trim()}`,
    `Dental Concern: ${values.message.trim()}`,
  ];

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/**
 * Default WhatsApp quick-contact URL with the exact prompt-specified greeting.
 */
export function getDefaultWhatsAppUrl(whatsappNumber = '923375914872'): string {
  const greeting =
    'Hello A.F Dental Den, I would like to enquire about a dental appointment.';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(greeting)}`;
}
