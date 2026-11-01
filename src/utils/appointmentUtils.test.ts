import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidPhone,
  isValidEmail,
  validateAppointmentForm,
  buildWhatsAppEnquiryUrl,
  getDefaultWhatsAppUrl,
} from './appointmentUtils';

test('validates Pakistani and international phone formats accurately', () => {
  assert.equal(isValidPhone('0337-5914872'), true);
  assert.equal(isValidPhone('+92 337 5914872'), true);
  assert.equal(isValidPhone('03001234567'), true);
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('abc-def-ghij'), false);
  assert.equal(isValidPhone(''), false);
});

test('validates email addresses accurately', () => {
  assert.equal(isValidEmail('Afdentalden@gmail.com'), true);
  assert.equal(isValidEmail('patient.name@domain.pk'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('missing@tld'), false);
  assert.equal(isValidEmail(''), false);
});

test('returns field errors when required fields are empty or invalid', () => {
  const errors = validateAppointmentForm({
    fullName: '',
    phone: '123',
    email: 'not-an-email',
    preferredDate: '',
    preferredTime: '',
    specialty: '',
    message: 'Hi',
  });

  assert.ok(errors.fullName);
  assert.ok(errors.phone);
  assert.ok(errors.email);
  assert.ok(errors.preferredDate);
  assert.ok(errors.preferredTime);
  assert.ok(errors.specialty);
  assert.ok(errors.message);
});

test('passes validation when all fields are properly filled', () => {
  const errors = validateAppointmentForm({
    fullName: 'Ayesha Khan',
    phone: '0337-5914872',
    email: 'ayesha@example.com',
    preferredDate: '2026-11-10',
    preferredTime: 'Afternoon (2:00 PM – 4:30 PM)',
    specialty: 'Orthodontics',
    message: 'I would like to consult Dr. Sarrah regarding teeth alignment.',
  });

  assert.equal(Object.keys(errors).length, 0);
});

test('builds properly encoded WhatsApp URLs with all form fields', () => {
  const url = buildWhatsAppEnquiryUrl({
    fullName: 'Ayesha Khan',
    phone: '0337-5914872',
    email: 'ayesha@example.com',
    preferredDate: '2026-11-10',
    preferredTime: 'Afternoon (2:00 PM – 4:30 PM)',
    specialty: 'Orthodontics',
    message: 'Consultation for braces.',
  });

  assert.ok(url.startsWith('https://wa.me/923375914872?text='));
  assert.ok(decodeURIComponent(url).includes('Ayesha Khan'));
  assert.ok(decodeURIComponent(url).includes('Orthodontics'));
  assert.equal(
    getDefaultWhatsAppUrl(),
    'https://wa.me/923375914872?text=Hello%20A.F%20Dental%20Den%2C%20I%20would%20like%20to%20enquire%20about%20a%20dental%20appointment.'
  );
});
