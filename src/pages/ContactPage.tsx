import { Building2, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import AppointmentForm from '../components/AppointmentForm';
import { CLINIC_INFO } from '../data/clinicData';
import { getDefaultWhatsAppUrl } from '../utils/appointmentUtils';

export default function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact & Appointments | A.F Dental Den Rawalpindi"
        description="Contact A.F Dental Den in Rawalpindi at 0337-5914872 or Afdentalden@gmail.com to enquire about dental appointments across five specialties."
        path="/contact"
      />

      <PageHero
        pageTitle="CONTACT A.F DENTAL DEN"
        heading="Your Next Step Toward a Healthier Smile Starts Here."
        supportingText="Get in touch with our clinic to enquire about appointments and dental services."
        signaturePhrase="Be Proud of Your Smile"
        backgroundVariant="offwhite"
      />

      {/* Section 1: Four Contact Information Blocks */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Block 1: Business Name */}
            <div className="bg-[#FAF8F4] rounded-2xl border border-[#E8E6E1] p-7 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#EEF6F8] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#39434A]" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#778087]">
                Business Name
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#39434A]">
                {CLINIC_INFO.name}
              </h2>
              <p className="text-sm text-[#5C666E]">Multi-Specialty Dental Clinic</p>
            </div>

            {/* Block 2: Phone Number */}
            <div className="bg-[#FAF8F4] rounded-2xl border border-[#E8E6E1] p-7 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#EEF6F8] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#39434A]" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#778087]">
                Phone Number
              </p>
              <a
                href={CLINIC_INFO.phoneHref}
                className="block font-display text-2xl font-semibold text-[#39434A] hover:underline decoration-[#8ABDD0] underline-offset-4 tabular-nums"
              >
                {CLINIC_INFO.phoneDisplay}
              </a>
              <p className="text-sm text-[#5C666E]">Tap to call directly</p>
            </div>

            {/* Block 3: Email Address */}
            <div className="bg-[#FAF8F4] rounded-2xl border border-[#E8E6E1] p-7 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#F5EFE7] flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#39434A]" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#778087]">
                Email Address
              </p>
              <a
                href={CLINIC_INFO.emailHref}
                className="block font-body text-base font-medium text-[#39434A] hover:underline decoration-[#CDB090] underline-offset-4 break-all"
              >
                {CLINIC_INFO.email}
              </a>
              <p className="text-sm text-[#5C666E]">General &amp; appointment enquiries</p>
            </div>

            {/* Block 4: Location */}
            <div className="bg-[#FAF8F4] rounded-2xl border border-[#E8E6E1] p-7 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#F5EFE7] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#39434A]" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#778087]">Location</p>
              <h2 className="font-display text-2xl font-semibold text-[#39434A]">
                {CLINIC_INFO.city}
              </h2>
              <p className="text-sm text-[#5C666E] leading-snug">
                {CLINIC_INFO.addressLine}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3 & 4: Appointment Request Form + Direct WhatsApp / Phone / Email */}
      <section
        id="appointment-form"
        className="bg-[#FAF8F4] py-20 lg:py-24 border-b border-[#E8E6E1] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Appointment Form */}
            <div className="lg:col-span-8">
              <AppointmentForm />
            </div>

            {/* Section 3 & 4: WhatsApp, Phone & Email Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* WhatsApp Contact Card */}
              <div className="bg-[#EEF6F8] rounded-2xl border border-[#E8E6E1] p-7 space-y-5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E8E6E1] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#39434A]" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-medium text-[#39434A]">
                    Direct WhatsApp Enquiry
                  </h3>
                  <p className="text-sm text-[#5C666E] leading-relaxed">
                    Prefer messaging directly? Start a WhatsApp conversation with our clinic
                    team to enquire about appointments and specialist availability.
                  </p>
                </div>
                <a
                  href={getDefaultWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

              {/* Phone & Email Direct CTA Card */}
              <div className="bg-white rounded-2xl border border-[#E8E6E1] p-7 space-y-5">
                <h3 className="font-display text-2xl font-medium text-[#39434A]">
                  Call or Email Our Clinic
                </h3>
                <p className="text-sm text-[#5C666E] leading-relaxed">
                  Reach A.F Dental Den directly by telephone or email for clinic directions
                  and appointment enquiries.
                </p>

                <div className="space-y-3">
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {CLINIC_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={CLINIC_INFO.emailHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#39434A] bg-[#FAF8F4] border border-[#E8E6E1] hover:bg-[#F5EFE7] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4 text-[#8ABDD0]" aria-hidden="true" />
                    <span>Email Clinic</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 5: Location and Editable Google Maps */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Visit Our Clinic"
            title="Location & Directions"
            subtitle="A.F Dental Den serves patients in Rawalpindi, Pakistan."
          />

          {CLINIC_INFO.verifiedGoogleMapsEmbedUrl ? (
            <div className="rounded-2xl overflow-hidden border border-[#E8E6E1] aspect-[16/7] bg-[#EEF6F8]">
              <iframe
                title="A.F Dental Den Verified Google Maps Location"
                src={CLINIC_INFO.verifiedGoogleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-[#E8E6E1] bg-gradient-to-br from-[#EEF6F8] via-[#FAF8F4] to-[#F5EFE7] p-8 sm:p-12 lg:p-14">
              <div className="max-w-2xl mx-auto text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E8E6E1] flex items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5 text-[#8ABDD0]" aria-hidden="true" />
                </div>

                <h3 className="font-display text-3xl font-medium text-[#39434A]">
                  {CLINIC_INFO.city}
                </h3>

                <p className="text-base text-[#39434A] font-medium">
                  {CLINIC_INFO.addressLine}, {CLINIC_INFO.city}
                </p>

                <p className="text-sm text-[#5C666E] leading-relaxed">
                  Interactive Google Maps Embed Ready — Once the clinic's verified Google
                  Maps pin URL is confirmed, it connects directly into this location frame.
                  In the meantime, please call or message our reception for exact landmark
                  directions.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call for Directions</span>
                  </a>
                  <a
                    href={getDefaultWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#39434A] bg-white border border-[#E8E6E1] hover:bg-[#FAF8F4] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-[#CDB090]" aria-hidden="true" />
                    <span>Request Pin on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="bg-[#F5EFE7] py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="font-signature text-3xl text-[#9E7E5B]">Be Proud of Your Smile</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#39434A] text-balance">
            We Look Forward to Helping You Smile with Confidence.
          </h2>
          <div className="pt-2">
            <a
              href="#appointment-form"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
            >
              Contact Our Clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
