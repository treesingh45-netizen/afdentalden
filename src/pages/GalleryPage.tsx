import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import CTASection from '../components/CTASection';
import ResilientImage from '../components/ResilientImage';
import { DOCTORS } from '../data/clinicData';

export default function GalleryPage() {
  return (
    <>
      <PageSEO
        title="Clinic & Smile Gallery | A.F Dental Den Rawalpindi"
        description="Explore our dental clinic environment, treatment rooms, consultation spaces, and dental care gallery at A.F Dental Den in Rawalpindi."
        path="/gallery"
      />

      <PageHero
        pageTitle="OUR CLINIC & SMILE GALLERY"
        heading="A Closer Look at A.F Dental Den"
        supportingText="Explore our clinic environment and get to know the people and spaces behind our dental care."
        signaturePhrase="Designed Around Your Smile"
        imageSrc="/images/clinic/hero-clinic.jpg"
        imageAlt="Modern sunlit dental treatment room at A.F Dental Den"
        backgroundVariant="offwhite"
      />

      {/* Section 1: Clinic Environment */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Spaces & Comfort"
            title="Clinic Environment"
            subtitle="From our reception lounge to private treatment suites, every space is arranged to keep dental visits calm, organized, and welcoming."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <ResilientImage
                src="/images/clinic/modern-reception.jpg"
                alt="Reception and waiting area with private frosted-glass operatory entrance"
                containerClassName="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8E6E1]"
              />
              <p className="mt-3 text-sm text-[#5C666E]">
                Reception &amp; Waiting Lounge — Calm patient arrival environment
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div>
                <ResilientImage
                  src="/images/clinic/dentist-care.jpg"
                  alt="Dental chair and overhead clinical light unit"
                  containerClassName="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8E6E1]"
                />
                <p className="mt-3 text-sm text-[#5C666E]">
                  Dental Chairs &amp; Equipment — Ergonomic clinical operatory
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#EEF6F8] border border-[#E8E6E1] space-y-2">
                <h3 className="font-display text-2xl font-medium text-[#39434A]">
                  Prepared for Attentive Consultations
                </h3>
                <p className="text-sm text-[#5C666E] leading-relaxed">
                  Our treatment rooms and consultation spaces support routine oral checkups
                  as well as specialist assessments across five areas of dentistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Dental Team */}
      <section className="bg-[#F5EFE7] py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                kicker="People Behind Our Care"
                title="Our Dental Team"
                subtitle="A.F Dental Den brings together six qualified clinicians across General Dentistry, Orthodontics, Endodontics, Oral & Maxillofacial Surgery, and Prosthodontics."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {DOCTORS.map((doc) => (
                  <Link
                    key={doc.id}
                    to={`/doctors#${doc.id}`}
                    className="p-4 rounded-xl bg-white border border-[#E8E6E1] hover:border-[#8ABDD0] transition-colors"
                  >
                    <p className="font-display text-lg font-semibold text-[#39434A]">
                      {doc.displayName}
                    </p>
                    <p className="text-xs text-[#778087] mt-0.5">{doc.specialty}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <ResilientImage
                src="/images/clinic/consultation-care.jpg"
                alt="Friendly dentist speaking with a patient in a bright clinical room"
                containerClassName="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E6E1]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Dental Care Gallery */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Browse By Category"
            title="Dental Care Gallery"
            subtitle="Select a category below to filter clinical spaces, consultation photography, and reserved patient-consented case archives. Click any photograph to expand."
          />

          <GalleryGrid enableFilters />
        </div>
      </section>

      <CTASection
        variant="blue"
        signaturePhrase="Be Proud of Your Smile"
        heading="Plan Your Visit to A.F Dental Den"
        supportingText="Get in touch with our Rawalpindi clinic to enquire about appointments and consultations."
        primaryLabel="Book an Appointment"
        primaryTo="/contact#appointment-form"
        showCallButton
      />
    </>
  );
}
