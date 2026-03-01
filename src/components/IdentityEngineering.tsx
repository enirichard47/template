import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Custom Graphic Designs',
  'Bold Typography',
  'Sticker-Inspired Graphics',
  'Vibrant Color Systems',
  'Limited Edition Drops'
];

export const IdentityEngineering = () => {
  return (
    <section className="py-32 px-4 bg-mesh/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full comic-border mb-10">
              <span className="text-xs font-black uppercase tracking-widest">Inside The Studio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-none tracking-tighter">
              WHERE PERSONALITIES BECOME STYLE.
            </h2>
            <p className="text-2xl text-gray-600 font-medium mb-12 leading-relaxed">
              Every design starts with your energy. We generate expressive logos, graphic prints, and vibrant color systems — all tailored to your unique vibe.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 glass-cartoon rounded-2xl hover:bg-white transition-all duration-300"
                >
                  <CheckCircle2 className="text-brand-green w-7 h-7 flex-shrink-0" />
                  <span className="font-black text-sm uppercase tracking-widest">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-[40px] comic-border shadow-cartoon bg-brand-yellow overflow-hidden">
                  <img src="https://picsum.photos/seed/lab1/400/600" alt="Lab 1" className="w-full h-full object-cover mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-[40px] comic-border shadow-cartoon bg-brand-pink overflow-hidden">
                  <img src="https://picsum.photos/seed/lab2/400/400" alt="Lab 2" className="w-full h-full object-cover mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-[40px] comic-border shadow-cartoon bg-brand-blue overflow-hidden">
                  <img src="https://picsum.photos/seed/lab3/400/400" alt="Lab 3" className="w-full h-full object-cover mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-[40px] comic-border shadow-cartoon bg-brand-purple overflow-hidden">
                  <img src="https://picsum.photos/seed/lab4/400/600" alt="Lab 4" className="w-full h-full object-cover mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
