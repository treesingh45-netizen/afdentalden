import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import PageSEO from '../components/PageSEO';

export default function NotFoundPage() {
  return (
    <>
      <PageSEO
        title="Page Not Found | A.F Dental Den Rawalpindi"
        description="The page you requested could not be found. Return to A.F Dental Den home or explore our dental services in Rawalpindi."
        path="/404"
      />

      <section className="bg-[#FAF8F4] py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#778087] tabular-nums">
            Error 404
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium text-[#39434A]">
            Page Not Found
          </h1>
          <p className="font-signature text-3xl text-[#9E7E5B]">Be Proud of Your Smile</p>
          <p className="text-base text-[#5C666E] leading-relaxed">
            The page you are looking for may have moved or is unavailable. Use the links
            below to return to A.F Dental Den or enquire about an appointment.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              to="/contact#appointment-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#242C31] bg-[#CDB090] hover:bg-[#C0A07C] rounded-lg transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
