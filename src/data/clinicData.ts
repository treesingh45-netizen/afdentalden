export interface DoctorProfile {
  id: string;
  number: string;
  name: string;
  displayName: string;
  specialty: string;
  specialtySlug: string;
  qualifications: string[];
  portraitUrl?: string; // Populated when official doctor portraits are supplied by the clinic
}

export interface DentalSpecialty {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  specialists: string[];
  image: string;
  imageAlt: string;
  seoKeyword: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Dental Team' | 'Treatments' | 'Smile Transformations';
  caption: string;
  image?: string;
  alt: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  isPlaceholder?: boolean;
  placeholderNote?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: 'A.F Dental Den',
  tagline: 'BE PROUD OF YOUR SMILE',
  signatureTagline: 'Be Proud of Your Smile',
  logoPath: '/assets/aistudio/a_clean_vector_logo_on_a_transparent_background_c_045d9bb8.png',
  phoneDisplay: '0337-5914872',
  phoneHref: 'tel:+923375914872',
  whatsappNumber: '923375914872',
  email: 'Afdentalden@gmail.com',
  emailHref: 'mailto:Afdentalden@gmail.com',
  city: 'Rawalpindi, Pakistan',
  addressLine: 'Shop No. 3, Basement, Cantt Plaza (Opposite KFC), Chaklala Scheme 3',
  fullLocation: 'Cantt Plaza, Chaklala Scheme 3, Rawalpindi, Pakistan',
  websiteUrl: 'https://afdentalden.pk/',
  // Editable Google Maps embed URL: kept empty until clinic supplies verified Google Maps embed coordinates
  verifiedGoogleMapsEmbedUrl: '',
  socialLinks: {
    facebook: '', // Editable once clinic confirms official Facebook URL
    instagram: 'https://www.instagram.com/afdentalden/',
    whatsapp: 'https://wa.me/923375914872',
    youtube: '', // Editable once clinic confirms official YouTube URL
  },
} as const;

export const HOMEPAGE_SECTION_IMAGES = {
  hero: '/images/clinic/hero-clinic.jpg',
  about: '/images/clinic/modern-reception.jpg',
  whyChoose: '/images/clinic/clinic-consultation.jpg',
  appointment: '/images/clinic/appointment-welcome.jpg',
} as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Doctors', path: '/doctors' },
  { label: 'Smile Gallery', path: '/gallery' },
  { label: 'Patient Guide', path: '/patient-guide' },
  { label: 'Contact', path: '/contact' },
] as const;

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'dr-ali-baqar',
    number: '01',
    name: 'DR. ALI BAQAR',
    displayName: 'Dr. Ali Baqar',
    specialty: 'GENERAL DENTIST',
    specialtySlug: 'General Dentistry',
    qualifications: ['B.D.S (GOLD MEDALIST)', 'R.D.S', 'C-ENDO'],
    portraitUrl: '/assets/aistudio/DR._ALI_BAQAR_d66a4b1e.jpg',
  },
  {
    id: 'dr-fatema-khozema',
    number: '02',
    name: 'DR. FATEMA KHOZEMA',
    displayName: 'Dr. Fatema Khozema',
    specialty: 'GENERAL DENTIST',
    specialtySlug: 'General Dentistry',
    qualifications: ['B.D.S', 'R.D.S', 'MSPH'],
    portraitUrl: '/assets/aistudio/DR._FATEMA_KHOZEMA_c8ca2850.jpg',
  },
  {
    id: 'dr-sarrah',
    number: '03',
    name: 'DR. SARRAH',
    displayName: 'Dr. Sarrah',
    specialty: 'ORTHODONTIST',
    specialtySlug: 'Orthodontics',
    qualifications: ['B.D.S', 'R.D.S', 'FCPS (ORTHO)'],
    portraitUrl: '/assets/aistudio/DR._SARRAH_c48151f5.jpg',
  },
  {
    id: 'dr-rana-muhammad-ahmad',
    number: '04',
    name: 'DR. RANA MUHAMMAD AHMAD',
    displayName: 'Dr. Rana Muhammad Ahmad',
    specialty: 'ENDODONTIST',
    specialtySlug: 'Endodontics',
    qualifications: [
      'B.D.S',
      'R.D.S',
      'FCPS (OPERATIVE DENTISTRY & ENDODONTICS)',
    ],
    portraitUrl: '/assets/aistudio/DR._RANA_MUHAMMAD_AHMAD_4fc30e0b.jpg',
  },
  {
    id: 'dr-ahsanullah',
    number: '05',
    name: 'DR. AHSANULLAH',
    displayName: 'Dr. Ahsanullah',
    specialty: 'ORAL & MAXILLOFACIAL SURGEON',
    specialtySlug: 'Oral & Maxillofacial Surgery',
    qualifications: [
      'B.D.S',
      'R.D.S',
      'FCPS (OMFS)',
      'HOD OMFS (SCHOOL OF DENTISTRY)',
    ],
    portraitUrl: '/assets/aistudio/DR._AHSANULLAH_bfcb8f57.jpg',
  },
  {
    id: 'dr-ghulam-mustafa',
    number: '06',
    name: 'DR. GHULAM MUSTAFA',
    displayName: 'Dr. Ghulam Mustafa',
    specialty: 'PROSTHODONTIST',
    specialtySlug: 'Prosthodontics',
    qualifications: ['B.D.S', 'R.D.S', 'MDS (PROSTHO)', '(SCHOOL OF DENTISTRY)'],
    portraitUrl: '/assets/aistudio/DR._GHULAM_MUSTAFA_9ac53a2c.jpg',
  },
];

export const DENTAL_SPECIALTIES: DentalSpecialty[] = [
  {
    id: 'general-dentistry',
    number: '01',
    title: 'General Dentistry',
    shortDescription:
      'Our general dentists provide comprehensive oral health evaluations, preventive guidance, and routine dental care tailored to each patient.',
    description:
      'General dentistry focuses on maintaining oral health, evaluating dental concerns, and supporting patients with their routine dental care needs.',
    specialists: ['Dr. Ali Baqar', 'Dr. Fatema Khozema'],
    image: '/images/clinic/consultation-care.jpg',
    imageAlt: 'Welcoming dental consultation in a bright clinical room at A.F Dental Den in Rawalpindi',
    seoKeyword: 'General Dentist Rawalpindi',
  },
  {
    id: 'orthodontics',
    number: '02',
    title: 'Orthodontics',
    shortDescription:
      'Orthodontic care focuses on the alignment of teeth and jaws alongside the clinical assessment of bite-related concerns.',
    description:
      'Orthodontics focuses on the alignment of teeth and jaws and the assessment of bite-related concerns.',
    specialists: ['Dr. Sarrah'],
    image: '/images/clinic/orthodontics-aligner.jpg',
    imageAlt: 'Clear orthodontic aligner appliance representing orthodontic care in Rawalpindi',
    seoKeyword: 'Orthodontist in Rawalpindi',
  },
  {
    id: 'endodontics',
    number: '03',
    title: 'Endodontics',
    shortDescription:
      'Endodontic care focuses on the diagnosis and treatment of conditions affecting the dental pulp and surrounding root tissues.',
    description:
      'Endodontics is a specialized area of dentistry focused on the diagnosis and treatment of conditions affecting the dental pulp and tissues surrounding the roots of teeth.',
    specialists: ['Dr. Rana Muhammad Ahmad'],
    image: '/images/clinic/routine-checkup.jpg',
    imageAlt: 'Precision operative and endodontic dental care equipment during clinical treatment',
    seoKeyword: 'Endodontist in Rawalpindi',
  },
  {
    id: 'oral-maxillofacial-surgery',
    number: '04',
    title: 'Oral & Maxillofacial Surgery',
    shortDescription:
      'Oral and maxillofacial surgery addresses the diagnosis and surgical management of conditions involving the mouth, jaws, and face.',
    description:
      'Oral and maxillofacial surgery deals with the diagnosis and surgical management of conditions involving the mouth, jaws, face, and related structures.',
    specialists: ['Dr. Ahsanullah'],
    image: '/images/clinic/dentist-care.jpg',
    imageAlt: 'Modern surgical-grade dental operatory chair and clinical lighting suite',
    seoKeyword: 'Oral and Maxillofacial Surgeon Rawalpindi',
  },
  {
    id: 'prosthodontics',
    number: '05',
    title: 'Prosthodontics',
    shortDescription:
      'Prosthodontic care focuses on restoring damaged teeth, replacing missing teeth, and rehabilitating comfortable oral function.',
    description:
      'Prosthodontics focuses on the restoration and replacement of missing or damaged teeth and the rehabilitation of oral function.',
    specialists: ['Dr. Ghulam Mustafa'],
    image: '/images/clinic/dental-implants-model.jpg',
    imageAlt: 'Prosthodontic dental restoration and implant model demonstration',
    seoKeyword: 'Prosthodontist Rawalpindi',
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    id: 'specialties',
    title: 'Multiple Dental Specialties',
    description:
      'Patients can access general dentistry, orthodontics, endodontics, oral and maxillofacial surgery, and prosthodontics within one coordinated clinic in Rawalpindi.',
    iconName: 'layers' as const,
  },
  {
    id: 'professionals',
    title: 'Qualified Dental Professionals',
    description:
      'Every consultation is led by qualified clinicians holding recognized B.D.S, R.D.S, FCPS, MDS, and MSPH academic and clinical credentials.',
    iconName: 'award' as const,
  },
  {
    id: 'patient-focused',
    title: 'Patient-Focused Approach',
    description:
      'We prioritize clear communication, attentive consultations, and thoughtful guidance so you understand every dental care option available.',
    iconName: 'heart' as const,
  },
  {
    id: 'convenient-enquiries',
    title: 'Convenient Appointment Enquiries',
    description:
      'You can reach our clinic directly by phone, WhatsApp, email, or our online enquiry form to connect with the appropriate dental specialist.',
    iconName: 'calendar' as const,
  },
];

export const GALLERY_CATEGORIES = [
  'All Photos',
  'Clinic',
  'Dental Team',
  'Treatments',
  'Smile Transformations',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const HOME_GALLERY_PREVIEW_ITEMS: GalleryItem[] = [
  {
    id: 'home-gal-1',
    title: 'Daylight Treatment Suite',
    category: 'Clinic',
    caption:
      'Our dental treatment suites feature natural daylight and ergonomic clinical chairs to support calm, comfortable visits.',
    image: '/images/clinic/treatment-room.jpg',
    alt: 'Daylight dental treatment chair and organized instrument tray at A.F Dental Den',
    aspectRatio: 'landscape',
  },
  {
    id: 'home-gal-2',
    title: 'Private Consultation & Operatory Room',
    category: 'Clinic',
    caption:
      'Each private operatory room is arranged to support attentive, one-on-one consultations and specialist dental care.',
    image: '/images/clinic/modern-centre.jpg',
    alt: 'Private dental operatory suite with warm wood flooring and modern dental equipment',
    aspectRatio: 'landscape',
  },
  {
    id: 'home-gal-3',
    title: 'Sterile Diagnostic Instruments',
    category: 'Treatments',
    caption:
      'Diagnostic and clinical instruments are carefully prepared and organized in accordance with strict dental hygiene standards.',
    image: '/images/clinic/dental-instruments.jpg',
    alt: 'Sterile dental examination instruments arranged neatly on a clinical tray',
    aspectRatio: 'landscape',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-clinic-1',
    title: 'Sunlit Clinical Suite',
    category: 'Clinic',
    caption: 'Bright, calm dental operatory environment designed for comfortable consultations.',
    image: '/images/clinic/hero-clinic.jpg',
    alt: 'Bright modern dental clinic treatment room with natural window light',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-clinic-2',
    title: 'Reception & Patient Welcome Area',
    category: 'Clinic',
    caption: 'Clean, welcoming reception environment with private frosted-glass operatory access.',
    image: '/images/clinic/modern-reception.jpg',
    alt: 'Modern dental clinic reception desk and patient waiting lounge',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-clinic-3',
    title: 'Dental Chair & Diagnostic Unit',
    category: 'Clinic',
    caption: 'Ergonomic dental chair and overhead clinical illumination unit.',
    image: '/images/clinic/dentist-care.jpg',
    alt: 'Minimalist modern dental chair and LED examination lamp',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-clinic-4',
    title: 'Daylight Treatment Room',
    category: 'Clinic',
    caption: 'Organized dental treatment space prepared for routine and specialist consultations.',
    image: '/images/clinic/treatment-room.jpg',
    alt: 'Daylight dental treatment chair and organized instrument tray',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-clinic-5',
    title: 'Private Consultation & Operatory Suite',
    category: 'Clinic',
    caption: 'Dedicated clinical room supporting attentive, one-on-one dental care.',
    image: '/images/clinic/modern-centre.jpg',
    alt: 'Private dental operatory suite with warm wood flooring',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-treatments-1',
    title: 'Sterile Diagnostic Instruments',
    category: 'Treatments',
    caption: 'Prepared examination tray following clinical hygiene and sterilization standards.',
    image: '/images/clinic/dental-instruments.jpg',
    alt: 'Sterile dental examination instruments arranged on a clinical tray',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-treatments-2',
    title: 'Digital Dentition & Care Planning',
    category: 'Treatments',
    caption: 'Visual dentition assessment to help patients understand their dental care options.',
    image: '/images/clinic/clinic-consultation.jpg',
    alt: 'Dental professional reviewing digital dentition scan during consultation',
    aspectRatio: 'square',
  },
  {
    id: 'gal-treatments-3',
    title: 'Prosthodontic & Restorative Planning',
    category: 'Treatments',
    caption: 'Educational dental model demonstrating tooth replacement and crown restoration.',
    image: '/images/clinic/dental-implants-model.jpg',
    alt: 'Prosthodontic implant and crown model held during treatment explanation',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-treatments-4',
    title: 'Orthodontic Alignment Assessment',
    category: 'Treatments',
    caption: 'Clear orthodontic aligner appliance used in teeth alignment consultations.',
    image: '/images/clinic/orthodontics-aligner.jpg',
    alt: 'Clear orthodontic aligner on a clean white surface',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-team-1',
    title: 'Multi-Specialty Dental Team Portraits',
    category: 'Dental Team',
    caption: 'Reserved for official A.F Dental Den individual doctor and clinical team portraits.',
    alt: 'Placeholder reserved for verified A.F Dental Den team photography',
    aspectRatio: 'landscape',
    isPlaceholder: true,
    placeholderNote: 'Official Clinic Team Portrait Slot — Ready for Approved Photography',
  },
  {
    id: 'gal-team-2',
    title: 'Clinical Specialist Consultations',
    category: 'Dental Team',
    caption: 'Warm, patient-centered interaction during routine oral healthcare visits.',
    image: '/images/clinic/consultation-care.jpg',
    alt: 'Smiling dentist speaking with a young patient in a bright consultation room',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-smile-1',
    title: 'Consent-Verified Smile Case Archive (Case 01)',
    category: 'Smile Transformations',
    caption: 'Reserved exclusively for genuine patient before-and-after clinical cases with written informed consent.',
    alt: 'Reserved slot for patient-consented clinical smile documentation',
    aspectRatio: 'landscape',
    isPlaceholder: true,
    placeholderNote: 'Reserved for Patient-Consented Clinical Photography',
  },
  {
    id: 'gal-smile-2',
    title: 'Consent-Verified Restorative Case Archive (Case 02)',
    category: 'Smile Transformations',
    caption: 'Reserved exclusively for approved prosthodontic and orthodontic case documentation.',
    alt: 'Reserved slot for patient-consented restorative documentation',
    aspectRatio: 'landscape',
    isPlaceholder: true,
    placeholderNote: 'Reserved for Patient-Consented Clinical Photography',
  },
];

export const PATIENT_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Q1. How can I book an appointment?',
    answer:
      'You can contact A.F Dental Den through the provided phone number (0337-5914872), WhatsApp, or our online appointment enquiry form to enquire about appointments.',
  },
  {
    id: 'faq-2',
    question: 'Q2. Where is A.F Dental Den located?',
    answer:
      'A.F Dental Den is located in Rawalpindi, Pakistan (Shop No. 3, Basement, Cantt Plaza, Opposite KFC, Chaklala Scheme 3). Contact the clinic directly for detailed directions prior to your visit.',
  },
  {
    id: 'faq-3',
    question: 'Q3. Which dental specialists are available?',
    answer:
      'The team includes general dentists, an orthodontist, an endodontist, an oral and maxillofacial surgeon, and a prosthodontist.',
  },
  {
    id: 'faq-4',
    question: 'Q4. Can I contact the clinic before visiting?',
    answer:
      'Yes. You can call, WhatsApp, or email the clinic to ask questions and enquire about appointments before your visit.',
  },
  {
    id: 'faq-5',
    question: 'Q5. How do I know which dental specialist I need?',
    answer:
      'Contact the clinic and explain your dental concern. The clinic can guide you about the appropriate specialist for your needs.',
  },
  {
    id: 'faq-6',
    question: "Q6. What are the clinic's opening hours?",
    answer:
      'Please contact the clinic directly at 0337-5914872 to confirm current opening hours and individual specialist availability.',
  },
  {
    id: 'faq-7',
    question: 'Q7. Can I enquire about a particular treatment?',
    answer:
      'Yes. Contact the clinic and share the treatment or dental service you would like to enquire about.',
  },
];
