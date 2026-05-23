import { motion } from 'motion/react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

export default function AppPromo() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A] relative z-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm mb-8"
            >
              <Smartphone className="w-4 h-4 text-brand-yellow" />
              Download the Crave App
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6"
            >
              SKIP THE LINE.<br/>
              <span className="text-brand-red">EARN REWARDS.</span>
            </motion.h2>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-4 mb-10"
            >
              {[
                'Free signature burger on your first order',
                'Earn points on every dollar spent',
                'Exclusive app-only hidden menu items',
                '1-tap reordering of your favorites'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 rounded-xl bg-white text-brand-dark font-bold hover:bg-white/90 transition-colors flex items-center gap-2">
                Download on iOS
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-bold hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm">
                Get it on Android
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full h-[500px] flex justify-center items-center"
          >
             {/* Abstract Phone Representation */}
             <div className="relative w-[280px] h-[580px] bg-brand-dark rounded-[3rem] border-[8px] border-[#2A2A2A] shadow-2xl flex flex-col overflow-hidden rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-in-out">
                {/* Dynamic Island fake */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
                
                {/* Phone screen UI mock */}
                <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-brand-dark p-6 pt-16 flex flex-col relative z-10">
                  <div className="w-full h-32 rounded-2xl bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center mb-4" />
                  <div className="w-2/3 h-6 rounded-md bg-white/10 mb-2" />
                  <div className="w-1/3 h-4 rounded-md bg-white/5 mb-8" />
                  
                  <div className="flex gap-4 mb-4">
                     <div className="w-16 h-16 rounded-xl bg-white/10" />
                     <div className="w-16 h-16 rounded-xl bg-white/10" />
                     <div className="w-16 h-16 rounded-xl bg-white/10" />
                  </div>
                  
                  <div className="mt-auto w-full h-12 rounded-full bg-brand-red flex items-center justify-center font-bold text-sm">
                    Reorder Now
                  </div>
                </div>

                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-yellow/20 blur-[50px] rounded-full z-0" />
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
