import PageSEO from '../components/PageSEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import DoctorCard from '../components/DoctorCard';
import CTASection from '../components/CTASection';
import ResilientImage from '../components/ResilientImage';
import { DOCTORS } from '../data/clinicData';

const APPROACH_PILLARS = [
  {
    number: '01',
    title: 'Patient-Focused Care',
    description:
      "We believe that every patient's dental needs deserve careful attention and clear communication.",
  },
  {
    number: '02',
    title: 'Specialist Expertise',
    description:
      'Our dental team covers several areas of dentistry, allowing patients to explore different specialties within one clinic.',
  },
  {
    number: '03',
    title: 'Informed Decisions',
    description:
      'We encourage patients to understand their dental concerns and discuss appropriate care options with their dental professional.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageSEO
        title="About A.F Dental Den | Dental Clinic in Rawalpindi"
        description="Learn about A.F Dental Den in Rawalpindi, Pakistan — our patient-focused approach, multi-specialty dental team, and commitment to healthier smiles."
        path="/about"
      />

      <PageHero
        pageTitle="ABOUT A.F DENTAL DEN"
        heading="A Commitment to Healthier, Happier Smiles."
        supportingText="Bringing together dedicated dental clinicians across multiple specialties in Rawalpindi, Pakistan."
        signaturePhrase="Your Smile, Our Passion"
        imageSrc="/images/clinic/modern-reception.jpg"
        imageAlt="Modern dental clinic reception and consultation interior at A.F Dental Den"
        backgroundVariant="offwhite"
      />

      {/* Section 1: Our Introduction */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                kicker="Our Clinic Identity"
                title="Get to Know A.F Dental Den"
              />

              <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
                A.F Dental Den is a dental clinic based in Rawalpindi, Pakistan, bringing
                together dental professionals from several areas of dentistry.
              </p>

              <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
                Our team includes general dentists and specialists in orthodontics,
                endodontics, oral and maxillofacial surgery, and prosthodontics.
              </p>

              <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
                We aim to make dental care approachable by helping patients understand their
                available care options and connect with the appropriate dental specialist.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResilientImage
                src="/images/clinic/dental-instruments.jpg"
                alt="Prepared sterile dental examination tray in daylight clinical room"
                containerClassName="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E6E1]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Approach */}
      <section className="bg-[#EEF6F8] py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            kicker="Our Clinical Approach"
            title="Thoughtful Care, Professional Expertise"
            subtitle="Every consultation is guided by attentive listening, specialist collaboration, and clear communication."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {APPROACH_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white rounded-2xl border border-[#E8E6E1] p-8 space-y-4"
              >
                <span className="font-display text-2xl font-semibold text-[#9E7E5B] tabular-nums">
                  {pillar.number}.
                </span>
                <h3 className="font-display text-2xl sm:text-[26px] font-medium text-[#39434A]">
                  {pillar.title}
                </h3>
                <div className="w-10 h-[1.5px] bg-[#8ABDD0]" aria-hidden="true" />
                <p className="text-[15px] text-[#5C666E] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Dental Team */}
      <section className="bg-[#FAF8F4] py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            kicker="Our Dental Team"
            title="Different Specialties. One Shared Purpose."
            subtitle="Meet the six dental clinicians who collaborate to support patients across routine and specialized oral healthcare."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Brand Philosophy */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs tracking-[0.2em] uppercase text-[#778087]">
            Our Brand Philosophy
          </p>
          <p className="font-signature text-5xl sm:text-6xl lg:text-7xl text-[#9E7E5B] leading-tight py-2">
            Be Proud of Your Smile
          </p>
          <div className="w-16 h-[1.5px] bg-[#8ABDD0] mx-auto" aria-hidden="true" />
          <p className="font-display text-2xl sm:text-3xl text-[#39434A] max-w-2xl mx-auto leading-snug pt-2">
            A confident smile begins with understanding your dental health and finding the
            right care.
          </p>
        </div>
      </section>

      {/* Section 5: Appointment CTA */}
      <CTASection
        variant="beige"
        heading="Let's Take Care of Your Smile."
        supportingText="Contact A.F Dental Den in Rawalpindi to enquire about consultations and specialist availability."
        primaryLabel="Book Your Appointment"
        primaryTo="/contact#appointment-form"
        showCallButton
      />
    </>
  );
}
