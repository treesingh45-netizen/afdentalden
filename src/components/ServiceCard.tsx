import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DentalSpecialty } from '../data/clinicData';
import ResilientImage from './ResilientImage';

interface ServiceCardProps {
  specialty: DentalSpecialty;
  className?: string;
}

export default function ServiceCard({ specialty, className = '' }: ServiceCardProps) {
  return (
    <article
      className={`group bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden flex flex-col transition-all duration-200 hover:border-[#8ABDD0] hover:shadow-[0_12px_32px_rgba(57,67,74,0.06)] ${className}`}
    >
      <ResilientImage
        src={specialty.image}
        alt={specialty.imageAlt}
        hoverZoom
        containerClassName="relative aspect-[16/10] overflow-hidden bg-[#EEF6F8]"
      />
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#778087] mb-2.5">
            <span className="tabular-nums font-medium text-[#9E7E5B]">
              {specialty.number}.
            </span>
            <span aria-hidden="true">·</span>
            <span>{specialty.specialists.join(' & ')}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-[26px] font-medium text-[#39434A] mb-3">
            {specialty.title}
          </h3>

          <p className="text-[15px] text-[#5C666E] leading-relaxed">
            {specialty.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E8E6E1]">
          <Link
            to={`/services#${specialty.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#39434A] hover:underline decoration-[#8ABDD0] decoration-2 underline-offset-4 transition-colors whitespace-nowrap"
          >
            <span>Learn More About {specialty.title}</span>
            <ArrowRight
              className="w-4 h-4 text-[#8ABDD0] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
