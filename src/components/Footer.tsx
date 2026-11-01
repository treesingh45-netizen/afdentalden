import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS, DENTAL_SPECIALTIES } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E6E1] text-[#39434A]">
      {/* Subtle dual-tone brand accent hairline */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#8ABDD0] via-[#EEF6F8] to-[#CDB090]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              aria-label="A.F Dental Den Home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#8ABDD0]"
            >
              <img
                src={CLINIC_INFO.logoPath}
                alt="A.F Dental Den — Be Proud of Your Smile"
                className="h-20 w-auto object-contain logo-blend"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-[15px] text-[#5C666E] leading-relaxed max-w-sm">
              A.F Dental Den brings together dental professionals across multiple specialties
              to support your oral health and help you make informed decisions about dental care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#39434A]">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[15px] text-[#5C666E] hover:text-[#39434A] hover:underline decoration-[#8ABDD0] underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Specialties */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#39434A]">
              Our Specialties
            </h2>
            <ul className="space-y-2.5">
              {DENTAL_SPECIALTIES.map((specialty) => (
                <li key={specialty.id}>
                  <Link
                    to={`/services#${specialty.id}`}
                    className="text-[15px] text-[#5C666E] hover:text-[#39434A] hover:underline decoration-[#CDB090] underline-offset-4 transition-colors"
                  >
                    {specialty.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#39434A]">
              Contact Details
            </h2>
            <ul className="space-y-3.5 text-[15px] text-[#5C666E]">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8ABDD0] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#778087]">Phone &amp; WhatsApp</span>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="text-[#39434A] hover:underline decoration-[#8ABDD0] underline-offset-4"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#CDB090] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#778087]">Email</span>
                  <a
                    href={CLINIC_INFO.emailHref}
                    className="text-[#39434A] hover:underline decoration-[#CDB090] underline-offset-4 break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8ABDD0] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#778087]">Location</span>
                  <span className="text-[#39434A]">{CLINIC_INFO.city}</span>
                  <span className="block text-xs text-[#778087] mt-0.5">
                    {CLINIC_INFO.addressLine}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-14 pt-8 border-t border-[#E8E6E1] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#778087]">
          <p>Copyright &copy; 2026 A.F Dental Den. All Rights Reserved.</p>
          <p className="font-display tracking-[0.18em] text-xs font-semibold text-[#39434A]">
            {CLINIC_INFO.tagline}.
          </p>
        </div>
      </div>
    </footer>
  );
}
