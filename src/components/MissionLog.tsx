import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, Monitor } from 'lucide-react';

const phases = [
  {
    id: '01',
    label: 'Phase 01 – The Drop Era',
    title: 'Launch exclusive high-impact graphic collections.',
    icon: Rocket,
    color: 'bg-brand-pink'
  },
  {
    id: '02',
    label: 'Phase 02 – Creator Collabs',
    title: 'Partner with digital artists and designers worldwide.',
    icon: Users,
    color: 'bg-brand-blue'
  },
  {
    id: '03',
    label: 'Phase 03 – Digital Fashion',
    title: 'Augmented reality pieces and digital wearables.',
    icon: Monitor,
    color: 'bg-brand-yellow'
  }
];

export const MissionLog = () => {
  return (
    <section className="py-32 px-4 bg-black text-white overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full comic-border border-white/20 mb-8"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em]">What’s Next</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-black mb-4 uppercase tracking-tighter"
          >
            THE ROADMAP.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[50px] comic-border border-zinc-700 shadow-cartoon p-12 h-full flex flex-col items-start group-hover:bg-zinc-800 transition-all duration-500">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`${phase.color} w-20 h-20 rounded-3xl comic-border shadow-cartoon flex items-center justify-center mb-10`}
                >
                  <phase.icon className="text-white w-10 h-10" />
                </motion.div>
                
                <span className="text-brand-yellow font-black text-sm uppercase tracking-[0.2em] mb-6">{phase.label}</span>
                <h3 className="text-3xl font-display font-black leading-tight uppercase tracking-tight">
                  {phase.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
