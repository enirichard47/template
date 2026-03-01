import React from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto bg-brand-yellow rounded-[60px] comic-border shadow-cartoon p-12 md:p-20 relative overflow-hidden text-center">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="newsletter-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" fill="black" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#newsletter-dots)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full comic-border shadow-cartoon mb-8">
            <Sparkles className="w-4 h-4 text-brand-pink" />
            <span className="text-xs font-black uppercase tracking-widest">Join the Vibe Club</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-none">
            GET 15% OFF <br /> YOUR FIRST ORDER
          </h2>
          
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
            Be the first to know about new drops, exclusive sales, and secret events. No spam, just vibes.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address..."
              className="flex-1 px-8 py-5 bg-white comic-border rounded-2xl font-bold text-lg focus:outline-none focus:ring-4 focus:ring-brand-pink/20 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-black text-xl rounded-2xl comic-border shadow-cartoon hover:bg-brand-pink transition-colors flex items-center justify-center gap-3"
            >
              SUBSCRIBE <Send className="w-6 h-6" />
            </motion.button>
          </form>
          
          <p className="mt-8 text-sm font-bold opacity-60">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
