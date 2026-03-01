import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Philosophy = () => {
  return (
    <section className="py-32 px-4 bg-brand-purple text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="philosophy-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="3" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#philosophy-dots)" />
        </svg>
      </div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full comic-border mb-10">
              <span className="text-xs font-black uppercase tracking-widest">Why We Exist</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-none tracking-tighter">
              FASHION SHOULD <br /> FEEL LIKE YOU.
            </h2>
            <div className="relative mb-10">
              <Quote className="absolute -top-6 -left-10 w-16 h-16 text-brand-yellow opacity-30" />
              <p className="text-3xl md:text-5xl font-display font-black italic text-brand-yellow leading-tight">
                "You’re not basic. So why wear basic?"
              </p>
            </div>
            <p className="text-2xl font-medium leading-relaxed opacity-80 max-w-xl">
              We believe identity isn’t neutral — it’s expressive, bold, alive. 
              Locomotive blends creativity with high-impact aesthetics to give you clothing that feels like a statement in your own story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] comic-border shadow-cartoon bg-white overflow-hidden rotate-3">
              <img 
                src="https://picsum.photos/seed/philosophy/800/800" 
                alt="Philosophy" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-pink rounded-full comic-border shadow-cartoon flex items-center justify-center animate-bounce">
              <span className="font-display font-black text-4xl text-white">!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
