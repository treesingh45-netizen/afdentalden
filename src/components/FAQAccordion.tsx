import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQItem } from '../data/clinicData';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#E8E6E1] border-y border-[#E8E6E1]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id} className="py-5">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between gap-4 text-left py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ABDD0] group"
              >
                <span className="font-display text-xl sm:text-2xl font-medium text-[#39434A] group-hover:text-[#242C31] transition-colors">
                  {item.question}
                </span>
                <span
                  className={`w-9 h-9 rounded-full border border-[#E8E6E1] flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#EEF6F8] border-[#8ABDD0]' : 'bg-white group-hover:bg-[#FAF8F4]'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown
                    className={`w-4 h-4 text-[#39434A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 pr-10 text-[15px] sm:text-base text-[#5C666E] leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
