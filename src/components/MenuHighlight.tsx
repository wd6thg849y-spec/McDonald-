import { motion } from 'motion/react';
import { MENU_ITEMS } from '../lib/data';
import { Flame, Plus } from 'lucide-react';
import { useState } from 'react';

export default function MenuHighlight() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="menu" className="py-24 px-6 relative z-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              SIGNATURE<br/>COLLECTION
            </h2>
            <p className="text-white/60 max-w-md">Our chef-crafted burgers made with premium ingredients and bold flavors.</p>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
             {['Burgers', 'Chicken', 'Fries', 'Drinks'].map((category, i) => (
                <button 
                  key={category}
                  className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${i === 0 ? 'bg-white text-brand-dark' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                >
                  {category}
                </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-[#141414] rounded-3xl p-4 border border-white/5 hover:border-brand-red/50 transition-colors cursor-pointer"
            >
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-brand-red text-white backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-brand-gray flex items-center justify-center">
                 <motion.img 
                   src={item.image} 
                   alt={item.name}
                   animate={{ scale: hoveredId === item.id ? 1.05 : 1 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent opacity-60" />
              </div>

              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-display leading-tight">{item.name}</h3>
                  <span className="font-bold text-brand-yellow font-mono">${item.price}</span>
                </div>
                
                <p className="text-sm text-white/50 mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/40 font-mono">
                    <span>{item.calories} CAL</span>
                    {item.spicy > 0 && (
                      <span className="flex items-center text-brand-red">
                        {[...Array(item.spicy)].map((_, idx) => (
                           <Flame key={idx} className="w-3 h-3 fill-current" />
                        ))}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-red hover:scale-110 transition-all">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
