interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  signatureText?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  signatureText,
  align = 'center',
}: SectionHeadingProps) {
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`max-w-3xl flex flex-col ${alignmentClasses}`}>
      {kicker && (
        <span className="text-xs tracking-[0.18em] uppercase text-[#778087] font-body mb-3">
          {kicker}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.15] text-[#39434A] text-balance">
        {title}
      </h2>
      {signatureText && (
        <p className="font-signature text-2xl sm:text-3xl text-[#9E7E5B] mt-2 select-none">
          {signatureText}
        </p>
      )}
      <div
        className={`w-14 h-[1.5px] bg-[#CDB090] mt-5 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-5 text-base sm:text-[17px] text-[#5C666E] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
