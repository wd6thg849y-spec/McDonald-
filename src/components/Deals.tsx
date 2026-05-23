import { motion } from 'motion/react';
import { DEALS } from '../lib/data';
import { Timer, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState(3600 * 2); // 2 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="deals" className="py-24 px-6 bg-brand-dark relative z-20">
       <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
             <div className="w-12 h-1 bg-brand-red rounded-full" />
             <h2 className="text-3xl font-display font-bold tracking-tight">FLASH DEALS</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {DEALS.map((deal, i) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative rounded-3xl overflow-hidden group bg-brand-gray h-[400px] border border-white/10 p-8 flex flex-col justify-end"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={deal.image} 
                      alt={deal.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity group-hover:scale-105 duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
                  </div>

                  <div className="relative z-10 w-full md:w-2/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/20 border border-brand-red text-brand-red text-sm font-bold mb-4 backdrop-blur-md">
                      <Timer className="w-4 h-4" />
                      Ends in: {formatTime(timeLeft)}
                    </div>

                    <h3 className="text-4xl font-display font-bold mb-2 leading-tight">
                      {deal.title}
                    </h3>
                    
                    <div className="text-2xl font-bold text-brand-yellow mb-4">
                      {deal.discount}
                    </div>

                    <p className="text-white/70 mb-6 line-clamp-2">
                       {deal.description}
                    </p>

                    <button className="flex items-center gap-2 text-white font-bold hover:text-brand-red transition-colors group/btn">
                      Claim Offer 
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
