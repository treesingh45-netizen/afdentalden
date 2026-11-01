import { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface SocialPlatform {
  id: 'facebook' | 'instagram' | 'whatsapp' | 'youtube';
  label: string;
  href: string;
  hoverRingClass: string;
  iconColorClass: string;
}

export default function SocialMediaSection() {
  const [pendingPlatform, setPendingPlatform] = useState<string | null>(null);

  const platforms: SocialPlatform[] = [
    {
      id: 'facebook',
      label: 'Facebook',
      href: CLINIC_INFO.socialLinks.facebook,
      hoverRingClass: 'hover:border-[#8ABDD0] hover:bg-[#EEF6F8]',
      iconColorClass: 'text-[#1877F2]',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: CLINIC_INFO.socialLinks.instagram,
      hoverRingClass: 'hover:border-[#CDB090] hover:bg-[#F5EFE7]',
      iconColorClass: 'text-[#C13584]',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: CLINIC_INFO.socialLinks.whatsapp,
      hoverRingClass: 'hover:border-[#8ABDD0] hover:bg-[#EEF6F8]',
      iconColorClass: 'text-[#1DA851]',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: CLINIC_INFO.socialLinks.youtube,
      hoverRingClass: 'hover:border-[#CDB090] hover:bg-[#F5EFE7]',
      iconColorClass: 'text-[#D32F2F]',
    },
  ];

  const renderIcon = (id: SocialPlatform['id'], colorClass: string) => {
    switch (id) {
      case 'facebook':
        return (
          <svg
            className={`w-5 h-5 ${colorClass} transition-transform duration-200 group-hover:scale-110`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg
            className={`w-5 h-5 ${colorClass} transition-transform duration-200 group-hover:scale-110`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg
            className={`w-5 h-5 ${colorClass} transition-transform duration-200 group-hover:scale-110`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.031 2c-5.516 0-9.999 4.486-10 10.004a9.96 9.96 0 0 0 1.498 5.275L2 22l4.868-1.469a9.978 9.978 0 0 0 5.161 1.425h.004c5.515 0 9.998-4.486 10-10.004A9.963 9.963 0 0 0 19.105 4.93 9.936 9.936 0 0 0 12.031 2Zm5.822 14.129c-.246.693-1.434 1.325-1.988 1.408-.509.076-1.153.108-1.86-.117-.429-.136-.98-.318-1.685-.622-2.965-1.28-4.901-4.265-5.049-4.462-.147-.197-1.206-1.605-1.206-3.061 0-1.456.763-2.172 1.034-2.468.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.666.508.246.592.837 2.048.911 2.196.074.148.123.321.025.518-.099.198-.148.321-.296.494-.148.173-.311.386-.444.518-.148.148-.302.309-.13.605.173.296.766 1.264 1.644 2.047 1.13 1.007 2.082 1.319 2.378 1.467.295.148.468.123.64-.074.173-.197.739-.863.936-1.159.197-.296.394-.247.665-.148.271.099 1.724.814 2.019.962.296.148.493.222.567.345.074.123.074.715-.172 1.409Z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg
            className={`w-5 h-5 ${colorClass} transition-transform duration-200 group-hover:scale-110`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
          </svg>
        );
    }
  };

  return (
    <section
      aria-label="Connect with A.F Dental Den on Social Media"
      className="bg-[#FAF8F4] py-14 sm:py-16 border-t border-[#E8E6E1]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        <div className="space-y-2.5">
          <p className="text-xs tracking-[0.18em] uppercase text-[#778087] font-body">
            Stay Connected
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#39434A]">
            Connect With A.F Dental Den Online
          </h2>
          <p className="text-sm sm:text-[15px] text-[#5C666E] max-w-2xl mx-auto leading-relaxed text-balance">
            Follow our clinic updates or send us a direct message on WhatsApp and social media.
          </p>
        </div>

        {/* Single Horizontal Row of 4 Social Media Icons (Facebook, Instagram, WhatsApp, YouTube) */}
        <div className="grid grid-cols-4 gap-2.5 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-5 max-w-md sm:max-w-none mx-auto">
          {platforms.map((platform) => {
            const baseClasses = `group inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 px-2 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white border border-[#E8E6E1] shadow-[0_2px_10px_rgba(57,67,74,0.03)] ${platform.hoverRingClass} transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ABDD0] cursor-pointer`;

            if (platform.href) {
              return (
                <a
                  key={platform.id}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit A.F Dental Den on ${platform.label}`}
                  onClick={() => setPendingPlatform(null)}
                  className={baseClasses}
                >
                  {renderIcon(platform.id, platform.iconColorClass)}
                  <span className="text-[11px] sm:text-sm font-medium text-[#39434A] whitespace-nowrap">
                    {platform.label}
                  </span>
                </a>
              );
            }

            return (
              <button
                key={platform.id}
                type="button"
                aria-label={`${platform.label} — official clinic page information`}
                onClick={() =>
                  setPendingPlatform((prev) =>
                    prev === platform.label ? null : platform.label
                  )
                }
                className={baseClasses}
              >
                {renderIcon(platform.id, platform.iconColorClass)}
                <span className="text-[11px] sm:text-sm font-medium text-[#39434A] whitespace-nowrap">
                  {platform.label}
                </span>
              </button>
            );
          })}
        </div>

        {pendingPlatform && (
          <p
            role="status"
            aria-live="polite"
            className="text-sm text-[#5C666E] max-w-xl mx-auto pt-1"
          >
            Our verified {pendingPlatform} page link will be connected once confirmed by
            the clinic. In the meantime, connect with us directly on{' '}
            <a
              href={CLINIC_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39434A] font-medium underline decoration-[#8ABDD0] underline-offset-4"
            >
              WhatsApp
            </a>{' '}
            or{' '}
            <a
              href={CLINIC_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39434A] font-medium underline decoration-[#CDB090] underline-offset-4"
            >
              Instagram (@afdentalden)
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
