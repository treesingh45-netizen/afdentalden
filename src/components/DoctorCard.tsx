import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { DoctorProfile } from '../data/clinicData';
import ResilientImage from './ResilientImage';

interface DoctorCardProps {
  doctor: DoctorProfile;
  compact?: boolean;
}

export default function DoctorCard({ doctor, compact = false }: DoctorCardProps) {
  const initials = doctor.displayName
    .replace(/^Dr\.\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <article
      id={doctor.id}
      className="group bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden flex flex-col justify-between shadow-[0_8px_28px_rgba(57,67,74,0.04)] transition-all duration-200 hover:border-[#CDB090] hover:shadow-[0_14px_36px_rgba(57,67,74,0.08)]"
    >
      <div className="flex flex-col flex-1">
        {/* 1. Doctor's Photograph at the Top — Consistent 1:1 Portrait Frame Without Face Cropping */}
        <div className="p-3.5 sm:p-4 pb-0">
          {doctor.portraitUrl ? (
            <ResilientImage
              src={doctor.portraitUrl}
              alt={`${doctor.name} — ${doctor.specialty} at A.F Dental Den`}
              hoverZoom
              className="w-full h-full object-cover object-top"
              containerClassName="relative aspect-square rounded-xl overflow-hidden border border-[#E8E6E1] bg-[#FAF8F4]"
            />
          ) : (
            <div
              className="relative aspect-square rounded-xl bg-gradient-to-b from-[#EEF6F8] via-[#FAF8F4] to-[#F5EFE7] border border-[#E8E6E1] flex flex-col items-center justify-center p-5 text-center overflow-hidden"
              role="img"
              aria-label={`Specialist profile emblem for ${doctor.displayName}`}
            >
              <div className="w-18 h-18 rounded-full bg-white/95 border border-[#E8E6E1] flex flex-col items-center justify-center shadow-[0_4px_16px_rgba(57,67,74,0.04)]">
                <span className="font-display text-lg font-semibold tracking-wider text-[#39434A]">
                  {initials}
                </span>
              </div>
              <span className="mt-2.5 text-[11px] tracking-[0.14em] uppercase text-[#778087]">
                Pending Verification
              </span>
            </div>
          )}
        </div>

        {/* 2. Doctor's Full Name -> 3. Specialty -> 4. Complete Qualifications */}
        <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
          <h3 className="font-display text-[22px] sm:text-2xl font-semibold text-[#39434A] leading-snug tracking-[0.01em]">
            {doctor.name}
          </h3>

          <p className="mt-1.5 font-body text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#3F6F82]">
            {doctor.specialty}
          </p>

          {/* Subtle Warm Beige Brand Divider */}
          <div className="w-12 h-[1.5px] bg-[#CDB090] my-4" aria-hidden="true" />

          {/* Complete Qualifications in Lora */}
          <div aria-label={`Qualifications for ${doctor.displayName}`}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#778087] font-body mb-1.5">
              Qualifications
            </p>
            <p className="text-[15px] font-body text-[#39434A] leading-relaxed">
              {doctor.qualifications.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="px-6 pb-6 pt-4 border-t border-[#E8E6E1]/80 flex items-center justify-between gap-3">
        {compact ? (
          <Link
            to={`/doctors#${doctor.id}`}
            aria-label={`View profile of ${doctor.displayName}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#39434A] hover:underline decoration-[#8ABDD0] decoration-2 underline-offset-4 whitespace-nowrap"
          >
            <span>View Specialist Profile</span>
            <ArrowUpRight className="w-4 h-4 text-[#8ABDD0]" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to={`/contact?specialty=${encodeURIComponent(
              doctor.specialtySlug
            )}&doctor=${encodeURIComponent(doctor.displayName)}#appointment-form`}
            aria-label={`Book consultation with ${doctor.displayName}`}
            className="w-full inline-flex items-center justify-center px-5 py-3 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
          >
            BOOK CONSULTATION
          </Link>
        )}
      </div>
    </article>
  );
}
