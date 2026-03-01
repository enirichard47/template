import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MagicFormula } from './components/MagicFormula';
import { Philosophy } from './components/Philosophy';
import { IdentityEngineering } from './components/IdentityEngineering';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Lookbook } from './components/Lookbook';
import { NewArrivalsBanner } from './components/NewArrivalsBanner';
import { MissionLog } from './components/MissionLog';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-mesh relative selection:bg-brand-yellow selection:text-black">
      {/* Grain Overlay */}
      <div className="grain" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-brand-pink z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <MagicFormula />

        {/* Marquee Section */}
        <div className="bg-brand-purple py-6 border-y-4 border-black overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-white font-display font-black text-4xl italic uppercase">Express Your Identity</span>
                <div className="w-8 h-8 bg-brand-yellow rounded-full comic-border" />
                <span className="text-white font-display font-black text-4xl italic uppercase">The Identity Studio</span>
                <div className="w-8 h-8 bg-brand-pink rounded-full comic-border" />
              </div>
            ))}
          </motion.div>
        </div>

        <Philosophy />
        <IdentityEngineering />
        <Categories />
        <FeaturedProducts />
        <Lookbook />
        <NewArrivalsBanner />

        {/* The Archive Section */}
        <section id="community" className="py-24 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-full comic-border mb-6">
              <span className="text-xs font-black uppercase tracking-widest">Style Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-4 uppercase">THE COLLECTIVE.</h2>
            <p className="text-gray-600 font-medium text-xl">Real personalities. Real designs. Real style.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'The Dream Builder', seed: 'dream' },
              { name: 'The Silent Storm', seed: 'storm' },
              { name: 'The Loud Visionary', seed: 'vision' },
              { name: 'The Digital Samurai', seed: 'samurai' }
            ].map((char, i) => (
              <motion.div
                key={char.name}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[40px] comic-border shadow-cartoon overflow-hidden relative mb-4">
                  <img 
                    src={`https://picsum.photos/seed/${char.seed}/600/800`} 
                    alt={char.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-display font-black text-xl uppercase tracking-tight">{char.name}</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-black text-center uppercase tracking-tight">{char.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <MissionLog />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />

      {/* Floating Sparkles Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [0.5, 1.5, 0.5],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full blur-3xl pointer-events-none ${
              i % 3 === 0 ? 'bg-brand-pink/20 w-64 h-64' : 
              i % 3 === 1 ? 'bg-brand-blue/20 w-96 h-96' : 
              'bg-brand-yellow/20 w-80 h-80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
