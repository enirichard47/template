import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const Lookbook = () => {
  return (
    <section className="py-32 px-4 bg-mesh/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-brand-purple font-black text-xl mb-6 uppercase tracking-[0.3em]">Summer '24</span>
            <h2 className="text-6xl md:text-8xl font-display font-black mb-10 leading-[0.85] tracking-tighter">
              THE <br />
              <span className="text-stroke text-white">DREAMSCAPE</span> <br />
              COLLECTION
            </h2>
            <p className="text-2xl text-gray-600 font-medium mb-12 max-w-md leading-relaxed">
              A surreal journey into color and form. Inspired by graphic art and modern street culture.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-full bg-brand-purple comic-border shadow-cartoon flex items-center justify-center group-hover:bg-brand-pink transition-all duration-500">
                <ArrowUpRight className="text-white w-10 h-10" />
              </div>
              <span className="text-3xl font-display font-black uppercase tracking-tight">Explore Lookbook</span>
            </motion.button>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="rounded-[40px] comic-border shadow-cartoon overflow-hidden aspect-[3/4]"
            >
              <img 
                src="https://picsum.photos/seed/look1/800/1200" 
                alt="Look 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-4 pt-12">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="rounded-[40px] comic-border shadow-cartoon overflow-hidden aspect-square bg-brand-yellow p-4"
              >
                <img 
                  src="https://picsum.photos/seed/look2/600/600" 
                  alt="Look 2" 
                  className="w-full h-full object-cover rounded-[32px] comic-border"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="rounded-[40px] comic-border shadow-cartoon overflow-hidden aspect-[4/5]"
              >
                <img 
                  src="https://picsum.photos/seed/look3/600/800" 
                  alt="Look 3" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
