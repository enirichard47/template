import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Plus } from 'lucide-react';

const products = [
  { id: 1, name: 'Main Character Hoodie', tagline: 'Built for spotlight moments', price: '0.15 ETH', color: 'bg-brand-blue', image: 'https://picsum.photos/seed/hoodie/600/800' },
  { id: 2, name: 'Comic Burst Tee', tagline: 'Say it without speaking', price: '0.08 ETH', color: 'bg-brand-pink', image: 'https://picsum.photos/seed/tee/600/800' },
  { id: 3, name: 'Digital Sticker Pack NFT', tagline: 'Own your vibe online', price: '0.04 ETH', color: 'bg-brand-yellow', image: 'https://picsum.photos/seed/sticker/600/800' },
];

export const FeaturedProducts = () => {
  return (
    <section id="collections" className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink rounded-full comic-border mb-6">
              <span className="text-xs font-black uppercase tracking-widest">Fresh Drop</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter leading-none">THE “MAIN CHARACTER” <br /> COLLECTION</h2>
            <p className="text-2xl text-gray-600 font-medium max-w-2xl leading-relaxed">
              This drop celebrates bold personalities and expressive graphic aesthetics. Oversized fits. Premium cotton. Loud prints. Limited quantities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-10">
                <motion.div
                  whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className={`aspect-[4/5] rounded-[50px] comic-border shadow-cartoon overflow-hidden ${product.color} relative group/img cursor-pointer`}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-black font-black px-8 py-4 rounded-2xl comic-border shadow-cartoon flex items-center gap-3"
                    >
                      MINT NOW <Plus className="w-6 h-6" />
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Sticker Price Tag */}
                <motion.div 
                  animate={{ rotate: [-12, -8, -12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white comic-border rounded-full w-28 h-28 flex items-center justify-center shadow-cartoon group-hover:rotate-0 transition-transform z-20"
                >
                  <div className="text-center">
                    <span className="block text-[10px] font-black opacity-40 leading-none uppercase tracking-tighter mb-1">MINT PRICE</span>
                    <span className="font-display font-black text-xl leading-none">{product.price}</span>
                  </div>
                </motion.div>

                <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-20">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white comic-border rounded-2xl shadow-cartoon hover:bg-brand-pink hover:text-white transition-colors"
                  >
                    <Heart className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-black mb-1 uppercase tracking-tight">{product.name}</h3>
                  <p className="text-gray-500 font-bold text-sm mb-3">{product.tagline}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="w-2.5 h-2.5 bg-brand-yellow comic-border rounded-full" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Limited Drop</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
