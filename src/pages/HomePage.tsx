import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Layers,
  Award,
  HeartHandshake,
  CalendarCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import PageSEO from '../components/PageSEO';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import GalleryGrid from '../components/GalleryGrid';
import ResilientImage from '../components/ResilientImage';
import SocialMediaSection from '../components/SocialMediaSection';
import {
  CLINIC_INFO,
  DENTAL_SPECIALTIES,
  DOCTORS,
  HOME_GALLERY_PREVIEW_ITEMS,
  HOMEPAGE_SECTION_IMAGES,
  WHY_CHOOSE_FEATURES,
} from '../data/clinicData';

const FEATURE_ICONS = {
  layers: Layers,
  award: Award,
  heart: HeartHandshake,
  calendar: CalendarCheck,
};

export default function HomePage() {
  return (
    <>
      <PageSEO
        title="A.F Dental Den | Multi-Specialty Dental Clinic in Rawalpindi"
        description="Discover professional dental care at A.F Dental Den in Rawalpindi with general dentists and specialists in orthodontics, endodontics, oral surgery, and prosthodontics."
        path="/"
      />

      {/* 1. Full-Screen Background Hero Section — Perfectly Centered Horizontally & Vertically */}
      <section
        aria-label="Welcome to A.F Dental Den"
        className="relative w-full min-h-[calc(100svh-76px)] sm:min-h-[calc(100svh-88px)] flex items-center justify-center overflow-hidden bg-[#1D252B]"
      >
        {/* Full-Width High-Resolution Realistic Dental Clinic Cover Photograph */}
        <img
          src={HOMEPAGE_SECTION_IMAGES.hero}
          alt="Modern sunlit dental clinic suite at A.F Dental Den in Rawalpindi"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Measured Architectural Contrast Overlay for Effortless Readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1B2329]/72 via-[#1B2329]/62 to-[#1B2329]/76"
          aria-hidden="true"
        />

        {/* Centered Hero Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6"
          >
            <p className="text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#EEF6F8] font-body font-medium">
              A.F DENTAL DEN — RAWALPINDI
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.08] tracking-[0.01em] text-white max-w-3xl text-balance">
              A Healthier Smile Begins With the Right Care.
            </h1>

            <p className="font-body text-base sm:text-lg md:text-[19px] text-[#FAF8F4]/95 max-w-2xl leading-relaxed">
              Discover professional dental care with a team of specialists dedicated to
              supporting your oral health and helping you feel confident about your smile.
            </p>

            <p className="font-signature text-3xl sm:text-4xl text-[#E5CEB3] pt-1 select-none">
              Be Proud of Your Smile
            </p>

            <div className="pt-3 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
              <Link
                to="/contact#appointment-form"
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-colors duration-150 whitespace-nowrap"
              >
                BOOK AN APPOINTMENT
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-colors duration-150 whitespace-nowrap"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About / Clinic Introduction — Split Layout (Image Left, Editorial Copy Right) */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ResilientImage
                src={HOMEPAGE_SECTION_IMAGES.about}
                alt="Welcoming reception and patient lounge interior at A.F Dental Den in Rawalpindi"
                containerClassName="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E6E1] shadow-[0_14px_36px_rgba(57,67,74,0.06)]"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                kicker="About Our Clinic"
                title="Your Smile Deserves Thoughtful Dental Care"
                signatureText="Designed Around Your Smile"
              />

              <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
                At A.F Dental Den, we bring together dental professionals from multiple
                clinical disciplines to support a wide range of oral healthcare needs under
                one roof. Our team includes general dentists alongside specialists in
                orthodontics, endodontics, oral and maxillofacial surgery, and
                prosthodontics.
              </p>

              <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
                Located in Chaklala Scheme 3, Rawalpindi, our clinic focuses on clear
                guidance and attentive consultations so every patient can understand their
                dental care options and connect with the right specialist.
              </p>

              {/* Quiet Factual Summary Row */}
              <div className="pt-3 pb-2 border-y border-[#E8E6E1] grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#39434A] tabular-nums">
                    5
                  </p>
                  <p className="text-xs sm:text-sm text-[#5C666E] mt-0.5">
                    Dental Specialties
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#39434A] tabular-nums">
                    6
                  </p>
                  <p className="text-xs sm:text-sm text-[#5C666E] mt-0.5">
                    Qualified Clinicians
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#39434A]">
                    Rawalpindi
                  </p>
                  <p className="text-xs sm:text-sm text-[#5C666E] mt-0.5">
                    Chaklala Scheme 3
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>DISCOVER OUR CLINIC</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dental Specialties — Asymmetric 6-Column Grid With 5 Distinct Treatment Photos */}
      <section className="bg-[#EEF6F8] py-20 lg:py-28 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            kicker="Our Dental Specialties"
            title="Complete Dental Care Under One Roof"
            subtitle="Explore our five areas of clinical dental care and connect with the specialist dedicated to your oral health needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7">
            {DENTAL_SPECIALTIES.map((specialty, index) => {
              const spanClasses =
                index < 3
                  ? 'lg:col-span-2'
                  : index === 3
                    ? 'lg:col-span-3'
                    : 'md:col-span-2 lg:col-span-3';
              return (
                <ServiceCard
                  key={specialty.id}
                  specialty={specialty}
                  className={spanClasses}
                />
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg transition-colors whitespace-nowrap"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Dental Specialists — Editorial Header Bar + 6-Doctor Directory */}
      <section className="bg-[#FAF8F4] py-20 lg:py-28 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              align="left"
              kicker="Our Dental Specialists"
              title="Meet the Professionals Behind Your Smile"
              subtitle="Review the clinical specialties and academic qualifications of the doctors practicing at A.F Dental Den."
            />
            <div className="shrink-0">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>MEET OUR FULL TEAM</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose A.F Dental Den — Alternating Split (Features Left, Consultation Photo Right) */}
      <section className="bg-[#F5EFE7] py-20 lg:py-28 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
              <SectionHeading
                align="left"
                kicker="Why Choose A.F Dental Den"
                title="Care That Puts Your Smile First"
                signatureText="Your Smile, Our Passion"
                subtitle="We combine multi-specialty clinical expertise with calm, respectful communication at every stage of your visit."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {WHY_CHOOSE_FEATURES.map((feature) => {
                  const IconComponent = FEATURE_ICONS[feature.iconName];
                  return (
                    <div
                      key={feature.id}
                      className="bg-white rounded-2xl border border-[#E8E6E1] p-6 space-y-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EEF6F8] flex items-center justify-center">
                        <IconComponent
                          className="w-5 h-5 text-[#39434A]"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="font-display text-2xl font-medium text-[#39434A]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#5C666E] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <ResilientImage
                src={HOMEPAGE_SECTION_IMAGES.whyChoose}
                alt="Dentist discussing digital dentition assessment with a patient during consultation"
                containerClassName="relative w-full min-h-[340px] sm:min-h-[420px] lg:h-full rounded-2xl overflow-hidden border border-[#E8E6E1] shadow-[0_14px_36px_rgba(57,67,74,0.06)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery Preview — 3 Distinct Genuine Clinic Photographs With Lightbox */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            kicker="Clinic & Care Spaces"
            title="Every Smile Has Its Own Story"
            subtitle="Step inside our treatment rooms, private operatory suites, and hygienically prepared clinical spaces."
          />

          <GalleryGrid
            items={HOME_GALLERY_PREVIEW_ITEMS}
            previewLimit={3}
            enableFilters={false}
          />

          <div className="text-center pt-2">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
            >
              EXPLORE OUR GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Warm Appointment Section — Architectural Split Card With Dedicated Dental Care Photo */}
      <section className="bg-[#EEF6F8] py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E8E6E1] overflow-hidden shadow-[0_16px_40px_rgba(57,67,74,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 flex">
                <ResilientImage
                  src={HOMEPAGE_SECTION_IMAGES.appointment}
                  alt="Warm and welcoming dental care visit with a smiling patient"
                  className="w-full h-full object-cover object-[65%_20%]"
                  containerClassName="relative w-full min-h-[300px] sm:min-h-[380px] lg:h-full overflow-hidden bg-[#FAF8F4]"
                />
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <p className="font-signature text-3xl sm:text-[34px] text-[#9E7E5B] select-none">
                    Be Proud of Your Smile
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.15] text-[#39434A] text-balance">
                    Ready to Take the Next Step Toward a Healthier Smile?
                  </h2>
                  <p className="text-base sm:text-[17px] text-[#5C666E] leading-relaxed max-w-2xl">
                    Contact A.F Dental Den to enquire about appointments, specialist
                    availability, or guidance on the right dental care for your needs.
                  </p>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Link
                    to="/contact#appointment-form"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
                  >
                    BOOK AN APPOINTMENT
                  </Link>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>CALL {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                </div>

                {/* Direct Clinic Contact Strip */}
                <div className="pt-6 border-t border-[#E8E6E1] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Phone
                      className="w-4 h-4 text-[#8ABDD0] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-xs text-[#778087]">Phone &amp; WhatsApp</span>
                      <a
                        href={CLINIC_INFO.phoneHref}
                        className="font-medium text-[#39434A] hover:underline decoration-[#8ABDD0] underline-offset-4 tabular-nums"
                      >
                        {CLINIC_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail
                      className="w-4 h-4 text-[#CDB090] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-xs text-[#778087]">Email</span>
                      <a
                        href={CLINIC_INFO.emailHref}
                        className="font-medium text-[#39434A] hover:underline decoration-[#CDB090] underline-offset-4 break-all"
                      >
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin
                      className="w-4 h-4 text-[#8ABDD0] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-xs text-[#778087]">Clinic Location</span>
                      <span className="font-medium text-[#39434A]">
                        {CLINIC_INFO.city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Social Media Icons Section — Facebook, Instagram, WhatsApp, YouTube (No Gmail Icon) */}
      <SocialMediaSection />
    </>
  );
}
