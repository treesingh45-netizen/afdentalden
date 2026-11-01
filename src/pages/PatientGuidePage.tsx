import { Link } from 'react-router-dom';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { CLINIC_INFO, PATIENT_FAQS } from '../data/clinicData';
import { getDefaultWhatsAppUrl } from '../utils/appointmentUtils';

const APPOINTMENT_STEPS = [
  {
    step: '01',
    title: 'Contact by Phone or WhatsApp',
    description:
      'Contact the clinic directly through our phone number (0337-5914872), WhatsApp, or online enquiry form.',
  },
  {
    step: '02',
    title: 'Share Your Name & Enquiry',
    description:
      'Provide your full name, contact number, and preferred date or time window for visiting.',
  },
  {
    step: '03',
    title: 'Mention Your Dental Concern',
    description:
      'Share the dental concern you are experiencing or specify the dental specialist you wish to consult.',
  },
  {
    step: '04',
    title: 'Availability & Confirmation',
    description:
      'The clinic team can guide you regarding specialist schedules, appointment availability, and confirmation.',
  },
];

const SPECIALIST_GUIDE = [
  {
    specialty: 'General Dentistry',
    doctors: 'Dr. Ali Baqar and Dr. Fatema Khozema',
    focus:
      'Routine oral evaluations, general dental consultations, and ongoing preventive dental care.',
    link: '/services#general-dentistry',
  },
  {
    specialty: 'Orthodontics',
    doctors: 'Dr. Sarrah',
    focus:
      'Assessment of teeth alignment, jaw harmony, and bite-related concerns.',
    link: '/services#orthodontics',
  },
  {
    specialty: 'Endodontics',
    doctors: 'Dr. Rana Muhammad Ahmad',
    focus:
      'Diagnosis and management of conditions affecting the dental pulp and tissues surrounding tooth roots.',
    link: '/services#endodontics',
  },
  {
    specialty: 'Oral & Maxillofacial Surgery',
    doctors: 'Dr. Ahsanullah',
    focus:
      'Diagnosis and surgical management of conditions involving the mouth, jaws, face, and related structures.',
    link: '/services#oral-maxillofacial-surgery',
  },
  {
    specialty: 'Prosthodontics',
    doctors: 'Dr. Ghulam Mustafa',
    focus:
      'Restoration and replacement of missing or damaged teeth and rehabilitation of oral function.',
    link: '/services#prosthodontics',
  },
];

export default function PatientGuidePage() {
  return (
    <>
      <PageSEO
        title="Patient Guide & FAQs | Visiting A.F Dental Den Rawalpindi"
        description="Helpful patient information on making appointment enquiries, choosing the right dental specialist, and frequently asked questions at A.F Dental Den."
        path="/patient-guide"
      />

      <PageHero
        pageTitle="PATIENT INFORMATION"
        heading="Everything You Need to Know Before Your Visit"
        supportingText="Find helpful information about contacting A.F Dental Den, enquiring about appointments, and choosing the right dental specialty."
        signaturePhrase="Your Smile, Our Passion"
        imageSrc="/images/clinic/clinic-consultation.jpg"
        imageAlt="Dental specialist explaining dentition care options during patient consultation"
        backgroundVariant="blue"
      />

      {/* Section 1: Making an Appointment */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            kicker="Appointment Process"
            title="Making an Appointment"
            subtitle="Enquiring about a dental consultation at A.F Dental Den is straightforward and guided by our clinic team."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPOINTMENT_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#FAF8F4] rounded-2xl border border-[#E8E6E1] p-7 space-y-3"
              >
                <span className="font-display text-3xl font-semibold text-[#8ABDD0] tabular-nums">
                  {item.step}.
                </span>
                <h3 className="font-display text-2xl font-medium text-[#39434A]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C666E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href={getDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Enquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Finding the Right Specialist */}
      <section className="bg-[#FAF8F4] py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Specialty Directory"
            title="Finding the Right Specialist"
            subtitle="Review our five dental specialties and the clinicians associated with each area of care."
          />

          <div className="bg-white rounded-2xl border border-[#E8E6E1] divide-y divide-[#E8E6E1] overflow-hidden">
            {SPECIALIST_GUIDE.map((entry) => (
              <div
                key={entry.specialty}
                className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center"
              >
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl font-semibold text-[#39434A]">
                    {entry.specialty}
                  </h3>
                  <p className="text-sm font-medium text-[#9E7E5B] mt-1">
                    {entry.doctors}.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-[15px] text-[#5C666E] leading-relaxed">
                    {entry.focus}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <Link
                    to={entry.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#39434A] hover:underline decoration-[#8ABDD0] decoration-2 underline-offset-4 whitespace-nowrap"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 text-[#8ABDD0]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#F5EFE7] border border-[#E8E6E1] text-center max-w-3xl mx-auto">
            <p className="text-[15px] text-[#39434A]">
              Not sure which area applies to your concern? Please contact the clinic
              directly for guidance on which dental specialist may be most appropriate for
              your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Frequently Asked Questions */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Common Enquiries"
            title="Frequently Asked Questions"
            subtitle="Clear answers to common questions about contacting A.F Dental Den and planning your appointment."
          />

          <FAQAccordion items={PATIENT_FAQS} />
        </div>
      </section>

      {/* Section 4: Helpful Contact CTA */}
      <section className="bg-[#EEF6F8] py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="font-signature text-3xl text-[#9E7E5B]">Be Proud of Your Smile</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#39434A]">
            Have More Questions?
          </h2>
          <p className="text-base sm:text-lg text-[#5C666E] max-w-2xl mx-auto">
            Our team can help you with appointment enquiries and general clinic information.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CLINIC_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call the Clinic</span>
            </a>

            <a
              href={getDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
