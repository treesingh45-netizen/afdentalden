import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  hoverZoom?: boolean;
  priority?: boolean;
}

export default function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#EEF6F8]',
  hoverZoom = false,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EEF6F8] to-[#F5EFE7] border border-[#E8E6E1]`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-10 h-10 text-[#8ABDD0] mb-3"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <path d="M10.5 5C7.2 5 5 7.7 5 11.2c0 3.2 1.4 5.8 2.3 8.8.8 2.8 1.5 7 3.4 7 1.6 0 2.2-3.6 3.5-5.3.5-.6 1.1-.9 1.8-.9s1.3.3 1.8.9c1.3 1.7 1.9 5.3 3.5 5.3 1.9 0 2.6-4.2 3.4-7 .9-3 2.3-5.6 2.3-8.8C27 7.7 24.8 5 21.5 5c-2.2 0-3.8 1.3-5.5 1.3S12.7 5 10.5 5Z" />
        </svg>
        <span className="font-display text-base text-[#39434A] max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`${className} ${
          hoverZoom
            ? 'transition-transform duration-500 ease-out group-hover:scale-[1.03]'
            : ''
        }`}
      />
    </div>
  );
}
