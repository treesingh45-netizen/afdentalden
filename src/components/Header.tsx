import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E6E1] shadow-[0_2px_16px_rgba(57,67,74,0.04)]'
          : 'bg-white border-b border-[#E8E6E1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] sm:h-[88px] flex items-center justify-between gap-6">
        {/* Zone 1: Brand Logo */}
        <Link
          to="/"
          aria-label="A.F Dental Den — Home"
          className="flex items-center shrink-0 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ABDD0]"
        >
          <img
            src={CLINIC_INFO.logoPath}
            alt="A.F Dental Den — Be Proud of Your Smile"
            className="h-13 sm:h-16 w-auto object-contain logo-blend"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7"
        >
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative py-1.5 text-[14px] xl:text-[15px] font-body whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ABDD0] ${
                  isActive
                    ? 'text-[#39434A] font-medium after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#8ABDD0]'
                    : 'text-[#5C666E] hover:text-[#39434A] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-[#CDB090] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Button */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact#appointment-form"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39434A]"
          >
            Book Appointment
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E8E6E1] text-[#39434A] hover:bg-[#FAF8F4] transition-colors focus-visible:outline-2 focus-visible:outline-[#8ABDD0]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="lg:hidden bg-white border-b border-[#E8E6E1] shadow-lg"
          >
            <nav
              aria-label="Mobile Primary Navigation"
              className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1"
            >
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg text-base font-body transition-colors ${
                      isActive
                        ? 'bg-[#EEF6F8] text-[#39434A] font-medium'
                        : 'text-[#5C666E] hover:bg-[#FAF8F4] hover:text-[#39434A]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3 mt-2 border-t border-[#E8E6E1] flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact#appointment-form"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#242C31] bg-[#8ABDD0] hover:bg-[#79B0C5] rounded-lg transition-colors"
                >
                  Book Appointment
                </Link>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#39434A] bg-[#F5EFE7] hover:bg-[#EAE0D3] rounded-lg transition-colors"
                >
                  Call {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
