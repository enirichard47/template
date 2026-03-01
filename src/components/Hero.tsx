import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center bg-mesh/30">
      {/* Background Blobs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-[150px]" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-40 right-[10%] hidden lg:block"
      >
        <div className="w-16 h-8 bg-white rounded-full comic-border shadow-cartoon flex items-center justify-center">
          <div className="w-4 h-4 bg-brand-yellow rounded-full animate-sparkle" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow rounded-full comic-border shadow-cartoon mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Welcome to the Identity Studio</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.82] mb-10 tracking-tighter">
            WEAR YOUR <br />
            <span className="text-brand-pink relative inline-block">
              STORY.
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-4 text-brand-yellow" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </motion.svg>
            </span> <br />
            <span className="text-brand-blue">LIVE IN COLOR.</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-lg font-medium leading-relaxed">
            Locomotive transforms your personality into bold, graphic, high-impact fashion. Design your identity. Print your vibe. Rock your world.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-pink text-white font-black text-xl rounded-2xl comic-border shadow-cartoon hover:shadow-cartoon-hover transition-all flex items-center gap-2"
            >
              Start Creating <ArrowRight className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-black text-xl rounded-2xl comic-border shadow-cartoon hover:shadow-cartoon-hover transition-all"
            >
              Explore Drops
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          {/* Mascot Placeholder with Cartoon Style */}
          <div className="relative z-10 animate-float">
            <div className="relative group">
              <img 
                src="https://picsum.photos/seed/mascot/800/800" 
                alt="Mascot" 
                className="w-full h-auto rounded-[60px] comic-border shadow-cartoon group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-[60px] bg-gradient-to-tr from-brand-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Floating Labels */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white comic-border px-4 py-2 rounded-xl shadow-cartoon rotate-[-12deg] z-20"
            >
              <span className="text-xs font-black uppercase tracking-widest">Limited Drop</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-brand-yellow comic-border px-4 py-2 rounded-xl shadow-cartoon rotate-[12deg] z-20"
            >
              <span className="text-xs font-black uppercase tracking-widest">100% Organic</span>
            </motion.div>

            {/* Shopping Bag Overlays */}
            <motion.div 
              animate={{ rotate: [-5, 5, -5], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-10 -left-16 w-32 h-32 bg-brand-yellow rounded-2xl comic-border shadow-cartoon flex items-center justify-center p-4 z-20"
            >
              <ShoppingBag className="w-full h-full text-white" />
            </motion.div>
            <motion.div 
              animate={{ rotate: [5, -5, 5], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-16 right-10 w-24 h-24 bg-brand-blue rounded-2xl comic-border shadow-cartoon flex items-center justify-center p-4 z-20"
            >
              <Sparkles className="w-full h-full text-white" />
            </motion.div>
          </div>
          
          {/* Abstract Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20 fill-brand-purple">
              <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.1,-0.6C85.1,14.5,79.7,29,71.4,41.4C63.1,53.8,51.9,64.1,38.8,71.1C25.7,78.1,10.7,81.8,-3.8,88.4C-18.3,95,-36.6,104.5,-51.1,100.1C-65.6,95.7,-76.3,77.4,-83.4,59.8C-90.5,42.2,-94,25.3,-93.2,8.8C-92.4,-7.7,-87.3,-23.8,-78.9,-37.6C-70.5,-51.4,-58.8,-62.9,-45.4,-70.1C-32,-77.3,-16,-80.2,-0.2,-79.9C15.6,-79.6,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
