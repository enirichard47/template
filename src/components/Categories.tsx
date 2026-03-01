import React from 'react';
import { motion } from 'motion/react';

const categories = [
  { name: 'TOPS', count: '120+ Items', color: 'bg-brand-pink', image: 'https://picsum.photos/seed/tops/600/600' },
  { name: 'BOTTOMS', count: '85+ Items', color: 'bg-brand-blue', image: 'https://picsum.photos/seed/bottoms/600/600' },
  { name: 'ACCESSORIES', count: '45+ Items', color: 'bg-brand-yellow', image: 'https://picsum.photos/seed/acc/600/600' },
  { name: 'OUTERWEAR', count: '30+ Items', color: 'bg-brand-purple', image: 'https://picsum.photos/seed/outer/600/600' },
];

export const Categories = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-4">SHOP BY VIBE</h2>
          <p className="text-gray-600 font-medium text-lg">Find your perfect fit in our curated collections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={cat.color + " rounded-[40px] comic-border shadow-cartoon overflow-hidden aspect-[4/5] relative"}>
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent">
                  <h3 className="text-white font-display font-black text-3xl mb-1">{cat.name}</h3>
                  <p className="text-white/80 font-bold">{cat.count}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
