import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, ShoppingBag, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/5 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="md:hidden p-2 text-white/80 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            CRAVE
            <span className="text-brand-red">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-white/70">
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#deals" className="hover:text-white transition-colors">Deals</a>
          <a href="#rewards" className="hover:text-white transition-colors flex items-center gap-1">
            Rewards <span className="px-1.5 py-0.5 rounded-full bg-brand-red/20 text-brand-red text-[10px] font-bold">NEW</span>
          </a>
          <a href="#locations" className="hover:text-white transition-colors">Locations</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <User className="w-4 h-4 text-white/80" />
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-brand-red text-white font-medium hover:bg-red-600 transition-colors relative group overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
