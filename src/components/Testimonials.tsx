import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    author: "Rohan Mehta",
    role: "Marathon Runner",
    content: "Nutrify transformed my performance. My personal chef adjusted my carb-loading perfectly based on my weekly training logs from my nutritionist."
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
    <section id="testimonials" className="bg-stone-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-sm mb-6"
          >
            Success Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-[0.9]"
          >
            Real results. <br />
            <span className="text-stone-300">Measured weekly.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-12 bg-white rounded-[60px] border border-stone-100 shadow-xl shadow-stone-200/50 flex flex-col justify-between"
            >
              <div className="mb-12">
                <div className="flex gap-1 mb-8">
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="w-2 h-2 rounded-full bg-emerald-500" />
                   ))}
                </div>
                <p className="text-2xl font-medium text-stone-800 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>
              
              <div>
                <p className="text-xl font-bold text-stone-900 tracking-tight">{t.author}</p>
                <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
