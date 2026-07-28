import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    author: "Rohan Mehta",
    role: "Marathon Runner",
    content: "NutriChef transformed my performance. My personal chef adjusted my carb-loading perfectly based on my weekly training logs from my nutritionist."
  },
  {
    author: "Ananya Sharma",
    role: "Marketing Director",
    content: "For a busy professional with PCOS, this is a lifesaver. Having a medically-trained chef who understands my insulin sensitivity is a game changer."
  },
  {
    author: "Vikram Singh",
    role: "Tech Lead",
    content: "I lost 12kg in 4 months without ever feeling like I was 'on a diet'. The food is five-star hotel quality, but optimized for my body."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-40 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-emerald-50/30 -translate-y-1/2 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            Clinical Proof
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-10"
          >
            Measured Results. <br />
            <span className="text-stone-300">Unmatched Quality.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-stone-400 text-xl font-medium max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from those who optimized their lives with NutriChef.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-white rounded-[64px] border border-stone-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col justify-between group"
            >
              <div className="mb-16">
                <div className="flex gap-1.5 mb-10">
                   {[...Array(5)].map((_, i) => (
                     <motion.div 
                       key={i} 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       transition={{ delay: 0.5 + (i * 0.1) }}
                       className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm" 
                     />
                   ))}
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-stone-800 leading-tight tracking-tight italic group-hover:text-stone-950 transition-colors">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-6 pt-10 border-t border-stone-50">
                <div className="w-16 h-16 bg-stone-100 rounded-3xl flex items-center justify-center border border-stone-200 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                   <span className="text-stone-300 text-2xl font-black italic">{t.author[0]}</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-stone-900 tracking-tight leading-none mb-2">{t.author}</p>
                  <p className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
