import React from 'react';
import { motion } from 'motion/react';

export const NewArrivalsBanner = () => {
  return (
    <section id="new-arrivals" className="py-20 px-4 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 comic-border rounded-[40px] overflow-hidden shadow-cartoon bg-white">
          {/* Panel 1 */}
          <div className="p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <span className="text-brand-pink font-black text-xl mb-2 uppercase italic">Boom!</span>
            <h3 className="text-5xl font-display font-black leading-none mb-6">NEW SEASON <br /> DROPPED.</h3>
            <p className="text-gray-600 font-medium mb-8">The freshest threads for your daily adventures.</p>
            <button className="w-fit px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-brand-pink transition-colors">
              Explore Now
            </button>
          </div>

          {/* Panel 2 */}
          <div className="relative h-[400px] lg:h-auto border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden">
            <img 
              src="https://picsum.photos/seed/model1/800/800" 
              alt="Model" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-brand-yellow px-4 py-2 comic-border rotate-[-4deg] font-black text-xl">
              POW!
            </div>
          </div>

          {/* Panel 3 */}
          <div className="p-12 bg-brand-blue flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
            <h3 className="text-6xl font-display font-black mb-6 relative z-10">UP TO <br /> 50% OFF</h3>
            <p className="text-xl font-bold mb-8 relative z-10">ON ALL SUMMER ESSENTIALS</p>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-10 py-4 bg-white text-brand-blue font-black text-2xl rounded-2xl comic-border shadow-cartoon relative z-10"
            >
              GRAB IT!
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
