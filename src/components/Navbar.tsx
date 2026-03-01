import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, User, Search, Menu } from 'lucide-react';
import { cn } from '../utils';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-cartoon rounded-[40px] px-8 py-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center comic-border shadow-cartoon group-hover:shadow-none transition-all"
            >
              <ShoppingBag className="text-white w-6 h-6" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tighter leading-none uppercase">LOCOMOTIVE</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">The Identity Studio</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold uppercase text-sm tracking-widest">
            {['Home', 'The Lab', 'Collections', 'Community'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ y: -2 }}
                className="hover:text-brand-pink transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-yellow group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 hover:bg-brand-yellow/20 rounded-2xl transition-all"
              >
                <Search className="w-6 h-6" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-3 hover:bg-brand-pink/20 rounded-2xl transition-all"
              >
                <Heart className="w-6 h-6" />
              </motion.button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-brand-yellow comic-border rounded-2xl shadow-cartoon hover:shadow-none transition-all flex items-center gap-2 relative"
            >
              <span className="font-black text-sm tracking-widest uppercase">ENTER THE LAB</span>
            </motion.button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
