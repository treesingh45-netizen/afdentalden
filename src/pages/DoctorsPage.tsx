import { useState } from 'react';
import PageSEO from '../components/PageSEO';
import PageHero from '../components/PageHero';
import DoctorCard from '../components/DoctorCard';
import CTASection from '../components/CTASection';
import { DOCTORS } from '../data/clinicData';

const SPECIALTY_FILTERS = [
  'All Specialists',
  'General Dentistry',
  'Orthodontics',
  'Endodontics',
  'Oral & Maxillofacial Surgery',
  'Prosthodontics',
] as const;

export default function DoctorsPage() {
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof SPECIALTY_FILTERS)[number]>('All Specialists');

  const visibleDoctors = DOCTORS.filter((doc) => {
    if (selectedFilter === 'All Specialists') return true;
    return doc.specialtySlug === selectedFilter;
  });

  return (
    <>
      <PageSEO
        title="Meet Our Dental Specialists | Doctors at A.F Dental Den Rawalpindi"
        description="Meet the dental specialists at A.F Dental Den in Rawalpindi: Dr. Ali Baqar, Dr. Fatema Khozema, Dr. Sarrah, Dr. Rana Muhammad Ahmad, Dr. Ahsanullah, and Dr. Ghulam Mustafa."
        path="/doctors"
      />

      <PageHero
        pageTitle="MEET OUR DENTAL SPECIALISTS"
        heading="Experienced Dental Professionals Across Multiple Specialties"
        supportingText="Meet the dental professionals at A.F Dental Den and explore their respective qualifications and areas of expertise."
        signaturePhrase="Be Proud of Your Smile"
        backgroundVariant="beige"
      />

      <section className="bg-[#FAF8F4] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Interactive Specialty Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter doctors by specialty"
            className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-[#E8E6E1] rounded-xl max-w-fit mx-auto"
          >
            {SPECIALTY_FILTERS.map((filter) => {
              const active = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-sm font-body rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#8ABDD0] text-[#242C31] font-medium'
                      : 'text-[#5C666E] hover:text-[#39434A] hover:bg-[#FAF8F4]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Profile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="blue"
        heading="Schedule an Appointment Enquiry With Our Team"
        supportingText="Reach out to A.F Dental Den to enquire about consulting a specific dental specialist in Rawalpindi."
        primaryLabel="Book an Appointment"
        primaryTo="/contact#appointment-form"
        showCallButton
        showWhatsAppButton
      />
    </>
  );
}
