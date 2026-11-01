import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getDefaultWhatsAppUrl } from '../utils/appointmentUtils';

interface CTASectionProps {
  heading: string;
  supportingText?: string;
  signaturePhrase?: string;
  primaryLabel?: string;
  primaryTo?: string;
  showCallButton?: boolean;
  showWhatsAppButton?: boolean;
  variant?: 'blue' | 'beige';
}

export default function CTASection({
  heading,
  supportingText,
  signaturePhrase,
  primaryLabel = 'Book an Appointment',
  primaryTo = '/contact#appointment-form',
  showCallButton = false,
  showWhatsAppButton = false,
  variant = 'blue',
}: CTASectionProps) {
  const bgClass = variant === 'blue' ? 'bg-[#EEF6F8]' : 'bg-[#F5EFE7]';

  return (
    <section className={`${bgClass} border-t border-[#E8E6E1] py-16 sm:py-20 lg:py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {signaturePhrase && (
          <p className="font-signature text-3xl text-[#9E7E5B]">{signaturePhrase}</p>
        )}

        <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#39434A] leading-[1.15] text-balance">
          {heading}
        </h2>

        {supportingText && (
          <p className="text-base sm:text-lg text-[#5C666E] max-w-2xl mx-auto leading-relaxed">
            {supportingText}
          </p>
        )}

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
          >
            {primaryLabel}
          </Link>

          {showCallButton && (
            <a
              href={CLINIC_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Our Clinic ({CLINIC_INFO.phoneDisplay})</span>
            </a>
          )}

          {showWhatsAppButton && (
            <a
              href={getDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#39434A] bg-white border border-[#CDB090] hover:bg-[#FAF8F4] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#8ABDD0]" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
