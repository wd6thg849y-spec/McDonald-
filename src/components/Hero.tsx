import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Mesh Gradient / Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark z-10" />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-medium text-sm mb-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          Trending: The Inferno Burger is back
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-6"
        >
          CRAVING<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-red">
             ELEVATED.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 font-medium"
        >
          Cinematic flavors. Chef-crafted perfection. Delivered to your door in under 30 minutes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-dark font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Order Now <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-md">
            <MapPin className="w-5 h-5" />
            Find Nearby
          </button>
        </motion.div>
        
        {/* Live Delivery Estimate */}
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-yellow to-brand-red flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-xs text-white/60 font-medium">Estimated Delivery</p>
            <p className="text-sm font-bold text-white">25-35 min <span className="font-normal text-white/40">to your location</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
