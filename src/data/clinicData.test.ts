import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  CLINIC_INFO,
  DOCTORS,
  DENTAL_SPECIALTIES,
  PATIENT_FAQS,
  NAV_LINKS,
  HOMEPAGE_SECTION_IMAGES,
  HOME_GALLERY_PREVIEW_ITEMS,
} from './clinicData';

test('contains all 7 separate page navigation routes', () => {
  assert.equal(NAV_LINKS.length, 7);
  assert.deepEqual(
    NAV_LINKS.map((n) => n.path),
    ['/', '/about', '/services', '/doctors', '/gallery', '/patient-guide', '/contact']
  );
});

test('verifies exact contact details for A.F Dental Den', () => {
  assert.equal(CLINIC_INFO.name, 'A.F Dental Den');
  assert.equal(CLINIC_INFO.phoneDisplay, '0337-5914872');
  assert.equal(CLINIC_INFO.phoneHref, 'tel:+923375914872');
  assert.equal(CLINIC_INFO.email, 'Afdentalden@gmail.com');
  assert.equal(CLINIC_INFO.emailHref, 'mailto:Afdentalden@gmail.com');
  assert.equal(CLINIC_INFO.city, 'Rawalpindi, Pakistan');
});

test('verifies all 6 doctors, exact qualifications, and exact 1-to-1 official portrait matching', () => {
  assert.equal(DOCTORS.length, 6);

  const expectedDoctors = [
    {
      number: '01',
      name: 'DR. ALI BAQAR',
      specialty: 'GENERAL DENTIST',
      qualificationsText: 'B.D.S (GOLD MEDALIST), R.D.S, C-ENDO',
      portraitUrl: '/assets/aistudio/DR._ALI_BAQAR_d66a4b1e.jpg',
    },
    {
      number: '02',
      name: 'DR. FATEMA KHOZEMA',
      specialty: 'GENERAL DENTIST',
      qualificationsText: 'B.D.S, R.D.S, MSPH',
      portraitUrl: '/assets/aistudio/DR._FATEMA_KHOZEMA_c8ca2850.jpg',
    },
    {
      number: '03',
      name: 'DR. SARRAH',
      specialty: 'ORTHODONTIST',
      qualificationsText: 'B.D.S, R.D.S, FCPS (ORTHO)',
      portraitUrl: '/assets/aistudio/DR._SARRAH_c48151f5.jpg',
    },
    {
      number: '04',
      name: 'DR. RANA MUHAMMAD AHMAD',
      specialty: 'ENDODONTIST',
      qualificationsText: 'B.D.S, R.D.S, FCPS (OPERATIVE DENTISTRY & ENDODONTICS)',
      portraitUrl: '/assets/aistudio/DR._RANA_MUHAMMAD_AHMAD_4fc30e0b.jpg',
    },
    {
      number: '05',
      name: 'DR. AHSANULLAH',
      specialty: 'ORAL & MAXILLOFACIAL SURGEON',
      qualificationsText: 'B.D.S, R.D.S, FCPS (OMFS), HOD OMFS (SCHOOL OF DENTISTRY)',
      portraitUrl: '/assets/aistudio/DR._AHSANULLAH_bfcb8f57.jpg',
    },
    {
      number: '06',
      name: 'DR. GHULAM MUSTAFA',
      specialty: 'PROSTHODONTIST',
      qualificationsText: 'B.D.S, R.D.S, MDS (PROSTHO), (SCHOOL OF DENTISTRY)',
      portraitUrl: '/assets/aistudio/DR._GHULAM_MUSTAFA_9ac53a2c.jpg',
    },
  ];

  expectedDoctors.forEach((expected, index) => {
    const actual = DOCTORS[index];
    assert.equal(actual.number, expected.number);
    assert.equal(actual.name, expected.name);
    assert.equal(actual.specialty, expected.specialty);
    assert.equal(actual.qualifications.join(', '), expected.qualificationsText);
    assert.equal(actual.portraitUrl, expected.portraitUrl);

    const diskPath = path.join(process.cwd(), 'public', actual.portraitUrl!);
    assert.equal(
      fs.existsSync(diskPath),
      true,
      `Missing portrait file on disk: ${diskPath}`
    );
    assert.ok(fs.statSync(diskPath).size > 100_000);
  });

  // Verify zero duplicate portraits across all 6 doctors
  const portraitSet = new Set(DOCTORS.map((d) => d.portraitUrl));
  assert.equal(portraitSet.size, 6);
});

test('verifies all 5 dental specialties and 7 patient FAQs', () => {
  assert.equal(DENTAL_SPECIALTIES.length, 5);
  assert.equal(PATIENT_FAQS.length, 7);
});

test('ensures every homepage photograph and doctor portrait is 100% unique with zero duplicates', () => {
  const homepageImages = [
    HOMEPAGE_SECTION_IMAGES.hero,
    HOMEPAGE_SECTION_IMAGES.about,
    ...DENTAL_SPECIALTIES.map((s) => s.image),
    ...DOCTORS.map((d) => d.portraitUrl!),
    HOMEPAGE_SECTION_IMAGES.whyChoose,
    ...HOME_GALLERY_PREVIEW_ITEMS.map((g) => g.image!),
    HOMEPAGE_SECTION_IMAGES.appointment,
  ];

  assert.equal(homepageImages.length, 18);
  const uniqueSet = new Set(homepageImages);
  assert.equal(uniqueSet.size, homepageImages.length);
});

test('ensures socialLinks contains only Facebook, Instagram, WhatsApp, and YouTube (no Gmail)', () => {
  const keys = Object.keys(CLINIC_INFO.socialLinks);
  assert.deepEqual(keys, ['facebook', 'instagram', 'whatsapp', 'youtube']);
  assert.equal(keys.includes('gmail'), false);
  assert.equal(CLINIC_INFO.socialLinks.instagram, 'https://www.instagram.com/afdentalden/');
  assert.equal(CLINIC_INFO.socialLinks.whatsapp, 'https://wa.me/923375914872');
});
