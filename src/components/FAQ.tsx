import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const TypingText = ({ text, speed = 20 }: { text: string; speed?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < text.length) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return prevCount;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{text.slice(0, count)}</span>;
};

const faqs = [
  { question: "How long does shipping take?", answer: "Usually 2-5 business days depending on your location. We ship from our hub in California!" },
  { question: "Can I return items?", answer: "Absolutely! If the piece isn't right, you have 30 days to return it for a full refund or exchange." },
  { question: "Are your materials sustainable?", answer: "Yes! We use 100% organic cotton and recycled polyester for all our apparel. Good for you, good for the planet." },
  { question: "Do you ship internationally?", answer: "We currently ship to US, Canada, UK, and Australia. More countries coming soon!" },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-[#FFF9F2]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-black mb-4">GOT QUESTIONS?</h2>
          <p className="text-gray-600 font-medium">We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[24px] comic-border shadow-cartoon overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-yellow/10 transition-colors"
              >
                <span className="text-xl font-display font-bold">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full comic-border flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'bg-brand-pink rotate-180' : 'bg-white'}`}>
                  {openIndex === idx ? <Minus className="text-white w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 font-medium leading-relaxed min-h-[4em]">
                      <TypingText text={faq.answer} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
