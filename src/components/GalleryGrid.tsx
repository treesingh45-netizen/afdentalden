import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
  GalleryItem,
} from '../data/clinicData';
import ResilientImage from './ResilientImage';

interface GalleryGridProps {
  items?: GalleryItem[];
  previewLimit?: number;
  enableFilters?: boolean;
}

export default function GalleryGrid({
  items = GALLERY_ITEMS,
  previewLimit,
  enableFilters = true,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All Photos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] = items.filter((item) => {
    if (previewLimit && item.isPlaceholder) return false;
    if (activeCategory === 'All Photos') return true;
    return item.category === activeCategory;
  });

  const visibleItems = previewLimit
    ? filteredItems.slice(0, previewLimit)
    : filteredItems;

  const viewableItems = visibleItems.filter((item) => !item.isPlaceholder && item.image);

  const openLightbox = (item: GalleryItem) => {
    if (item.isPlaceholder || !item.image) return;
    const idx = viewableItems.findIndex((v) => v.id === item.id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || viewableItems.length === 0) return null;
      return (prev - 1 + viewableItems.length) % viewableItems.length;
    });
  }, [viewableItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || viewableItems.length === 0) return null;
      return (prev + 1) % viewableItems.length;
    });
  }, [viewableItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const currentLightboxItem =
    lightboxIndex !== null ? viewableItems[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      {/* Interactive Filter Controls */}
      {enableFilters && (
        <div
          role="tablist"
          aria-label="Gallery photo categories"
          className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#FAF8F4] border border-[#E8E6E1] rounded-xl max-w-fit mx-auto"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-sm font-body rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#8ABDD0] text-[#242C31] font-medium shadow-xs'
                    : 'text-[#5C666E] hover:text-[#39434A] hover:bg-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Balanced Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item) => {
          if (item.isPlaceholder || !item.image) {
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#E8E6E1] bg-gradient-to-br from-[#FAF8F4] via-white to-[#F5EFE7] p-7 flex flex-col justify-between aspect-[4/3]"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.14em] text-[#778087]">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-[#39434A]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C666E] leading-relaxed">{item.caption}</p>
                </div>
                <div className="pt-4 border-t border-[#E8E6E1]">
                  <span className="text-xs text-[#9E7E5B] font-medium">
                    {item.placeholderNote || 'Ready for Clinic Photography Upload'}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(item)}
              aria-label={`View larger image: ${item.title}`}
              className="group relative text-left rounded-2xl overflow-hidden border border-[#E8E6E1] bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ABDD0] cursor-pointer"
            >
              <ResilientImage
                src={item.image}
                alt={item.alt}
                hoverZoom
                containerClassName="relative aspect-[4/3] overflow-hidden bg-[#EEF6F8]"
              />
              <div className="p-5 bg-white border-t border-[#E8E6E1] flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs text-[#778087]">{item.category}</span>
                  <h3 className="font-display text-xl font-medium text-[#39434A] mt-0.5">
                    {item.title}
                  </h3>
                </div>
                <span
                  className="w-8 h-8 rounded-lg bg-[#FAF8F4] border border-[#E8E6E1] flex items-center justify-center shrink-0 text-[#5C666E] group-hover:bg-[#EEF6F8] group-hover:text-[#39434A] transition-colors"
                  aria-hidden="true"
                >
                  <Expand className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Click-to-Expand Accessible Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && currentLightboxItem.image && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={currentLightboxItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#242C31]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden border border-[#E8E6E1] shadow-2xl"
            >
              <div className="relative bg-[#242C31] aspect-[16/10] flex items-center justify-center">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-full h-full object-contain"
                />

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close gallery lightbox"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-[#39434A] hover:bg-white flex items-center justify-center shadow-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {viewableItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Previous gallery photo"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-[#39434A] hover:bg-white flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next gallery photo"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-[#39434A] hover:bg-white flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-[#778087]">
                    {currentLightboxItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-[#39434A]">
                    {currentLightboxItem.title}
                  </h3>
                  <p className="text-sm text-[#5C666E] mt-1">
                    {currentLightboxItem.caption}
                  </p>
                </div>
                <span className="text-xs text-[#778087] tabular-nums shrink-0">
                  {(lightboxIndex ?? 0) + 1} / {viewableItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
