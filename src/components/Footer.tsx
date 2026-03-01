import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center comic-border">
                <span className="text-white font-black text-xl">L</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">LOCOMOTIVE</span>
            </div>
            <p className="text-gray-600 font-medium mb-8">
              The Identity Studio. We transform your personality into bold, expressive fashion.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white comic-border rounded-xl shadow-cartoon flex items-center justify-center hover:bg-brand-yellow transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-xl mb-6">SHOP</h4>
            <ul className="space-y-4 font-medium text-gray-600">
              <li><a href="#" className="hover:text-brand-pink">All Products</a></li>
              <li><a href="#" className="hover:text-brand-pink">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-pink">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-pink">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-xl mb-6">HELP</h4>
            <ul className="space-y-4 font-medium text-gray-600">
              <li><a href="#" className="hover:text-brand-pink">Shipping Info</a></li>
              <li><a href="#" className="hover:text-brand-pink">Returns</a></li>
              <li><a href="#" className="hover:text-brand-pink">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-pink">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-xl mb-6">NEWSLETTER</h4>
            <p className="text-gray-600 font-medium mb-6">Join the vibe and get 10% off your first order!</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-6 py-4 bg-[#FFF9F2] comic-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-pink font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-brand-pink text-white rounded-xl comic-border shadow-cartoon hover:shadow-cartoon-hover transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-gray-100">
          <p className="text-sm font-bold text-gray-400">© 2024 VIBECHECK APPAREL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
