import { Link } from 'react-router-dom';
import { Calendar, UserCheck } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ResilientImage from '../components/ResilientImage';
import { DENTAL_SPECIALTIES, DOCTORS } from '../data/clinicData';

export default function ServicesPage() {
  return (
    <>
      <PageSEO
        title="Our Dental Services | General, Orthodontics & Surgery in Rawalpindi"
        description="Explore General Dentistry, Orthodontics, Endodontics, Oral & Maxillofacial Surgery, and Prosthodontics at A.F Dental Den in Rawalpindi."
        path="/services"
      />

      <PageHero
        pageTitle="OUR DENTAL SERVICES"
        heading="Professional Dental Care Across Multiple Specialties"
        supportingText="Explore the different areas of dentistry represented by the A.F Dental Den team."
        signaturePhrase="Designed Around Your Smile"
        imageSrc="/images/clinic/dentist-care.jpg"
        imageAlt="Modern dental operatory room at A.F Dental Den"
        backgroundVariant="blue"
      />

      {/* Quick Anchor Navigation Bar */}
      <div className="bg-white border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {DENTAL_SPECIALTIES.map((spec) => (
            <a
              key={spec.id}
              href={`#${spec.id}`}
              className="text-[#5C666E] hover:text-[#39434A] hover:underline decoration-[#8ABDD0] underline-offset-4 py-1 whitespace-nowrap"
            >
              <span className="text-[#9E7E5B] tabular-nums mr-1.5">{spec.number}.</span>
              {spec.title}
            </a>
          ))}
        </div>
      </div>

      {/* Alternating Specialty Sections */}
      <div className="divide-y divide-[#E8E6E1]">
        {DENTAL_SPECIALTIES.map((specialty, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? 'bg-[#FAF8F4]' : 'bg-white';
          const associatedDoctors = DOCTORS.filter(
            (doc) => doc.specialtySlug === specialty.title
          );

          return (
            <section
              key={specialty.id}
              id={specialty.id}
              className={`${bgClass} py-16 sm:py-20 lg:py-24 scroll-mt-24`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <ResilientImage
                      src={specialty.image}
                      alt={specialty.imageAlt}
                      containerClassName="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8E6E1] shadow-[0_12px_28px_rgba(57,67,74,0.05)]"
                    />
                  </div>

                  {/* Text & Associated Specialist Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#778087]">
                      <span className="text-[#9E7E5B] font-semibold tabular-nums">
                        Service {specialty.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>A.F Dental Den</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#39434A] leading-tight">
                      {specialty.title}
                    </h2>

                    <div className="w-12 h-[1.5px] bg-[#CDB090]" aria-hidden="true" />

                    <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
                      {specialty.description}
                    </p>

                    {/* Associated Doctor Information */}
                    <div className="pt-5 border-t border-[#E8E6E1] space-y-3">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#778087]">
                        <UserCheck className="w-4 h-4 text-[#8ABDD0]" aria-hidden="true" />
                        <span>
                          {associatedDoctors.length > 1 ? 'Specialists' : 'Specialist'}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {associatedDoctors.map((doc) => (
                          <div
                            key={doc.id}
                            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                          >
                            <Link
                              to={`/doctors#${doc.id}`}
                              className="font-display text-xl font-semibold text-[#39434A] hover:underline decoration-[#8ABDD0] underline-offset-4"
                            >
                              {doc.displayName}
                            </Link>
                            <span className="text-xs text-[#5C666E]">
                              {doc.qualifications.join(' · ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/contact?specialty=${encodeURIComponent(
                          specialty.title
                        )}#appointment-form`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
                      >
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>Book Appointment for {specialty.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        variant="beige"
        signaturePhrase="Be Proud of Your Smile"
        heading="Not Sure Which Dental Specialty You Need?"
        supportingText="Contact A.F Dental Den and describe your dental concern. Our clinic team can guide you toward the appropriate specialist."
        primaryLabel="Enquire About an Appointment"
        primaryTo="/contact?specialty=Not%20Sure%20%2F%20Need%20Guidance#appointment-form"
        showCallButton
        showWhatsAppButton
      />
    </>
  );
}
