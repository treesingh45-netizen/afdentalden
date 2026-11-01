import { motion } from 'motion/react';
import ResilientImage from './ResilientImage';

interface PageHeroProps {
  pageTitle: string;
  heading: string;
  supportingText: string;
  signaturePhrase?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundVariant?: 'offwhite' | 'blue' | 'beige';
}

export default function PageHero({
  pageTitle,
  heading,
  supportingText,
  signaturePhrase,
  imageSrc,
  imageAlt,
  backgroundVariant = 'offwhite',
}: PageHeroProps) {
  const bgMap = {
    offwhite: 'bg-[#FAF8F4]',
    blue: 'bg-[#EEF6F8]',
    beige: 'bg-[#F5EFE7]',
  };

  return (
    <section className={`${bgMap[backgroundVariant]} border-b border-[#E8E6E1] py-14 sm:py-20 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {imageSrc ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-5"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[#778087] font-body">
                {pageTitle}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.12] text-[#39434A] text-balance">
                {heading}
              </h1>
              {signaturePhrase && (
                <p className="font-signature text-3xl text-[#9E7E5B] pt-1">
                  {signaturePhrase}
                </p>
              )}
              <div className="w-16 h-[1.5px] bg-[#8ABDD0]" aria-hidden="true" />
              <p className="text-base sm:text-lg text-[#5C666E] max-w-2xl leading-relaxed">
                {supportingText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <ResilientImage
                src={imageSrc}
                alt={imageAlt || heading}
                priority
                containerClassName="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E6E1] shadow-[0_12px_32px_rgba(57,67,74,0.06)]"
              />
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center space-y-5"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#778087] font-body">
              {pageTitle}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.12] text-[#39434A] text-balance">
              {heading}
            </h1>
            {signaturePhrase && (
              <p className="font-signature text-3xl text-[#9E7E5B] pt-1">
                {signaturePhrase}
              </p>
            )}
            <div className="w-16 h-[1.5px] bg-[#8ABDD0] mx-auto" aria-hidden="true" />
            <p className="text-base sm:text-lg text-[#5C666E] leading-relaxed">
              {supportingText}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
