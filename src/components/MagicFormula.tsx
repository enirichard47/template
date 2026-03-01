import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Printer } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Imagine',
    icon: Sparkles,
    color: 'bg-brand-pink',
    desc: 'Tell us your vibe. Loud? Chill? Rebel? Dreamer? Your personality becomes the blueprint for your unique style.'
  },
  {
    id: '02',
    title: 'Design',
    icon: Zap,
    color: 'bg-brand-blue',
    desc: 'Our design engine transforms your energy into bold graphic artwork and wearable designs.'
  },
  {
    id: '03',
    title: 'Print & Rock',
    icon: Printer,
    color: 'bg-brand-yellow',
    desc: 'We turn your design into high-quality fashion pieces delivered to your real-world wardrobe.'
  }
];

export const MagicFormula = () => {
  return (
    <section id="the-lab" className="py-24 px-4 bg-mesh/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full comic-border mb-6"
          >
            <span className="text-xs font-black uppercase tracking-widest">The Process</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tighter"
          >
            IMAGINE. DESIGN. WEAR.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Three playful steps to bring your unique style to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass-cartoon rounded-[40px] p-12 h-full flex flex-col items-center text-center group-hover:bg-white transition-all duration-500">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-black text-white rounded-2xl comic-border shadow-cartoon flex items-center justify-center font-display font-black text-2xl rotate-[-10deg] group-hover:rotate-0 transition-transform z-20">
                  {step.id}
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${step.color} w-28 h-28 rounded-[35px] comic-border shadow-cartoon flex items-center justify-center mb-10 transition-transform`}
                >
                  <step.icon className="text-white w-14 h-14" />
                </motion.div>

                <h3 className="text-3xl font-display font-black mb-6 uppercase tracking-tight">Step {step.id} – {step.title}</h3>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
