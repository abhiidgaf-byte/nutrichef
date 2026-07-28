import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const stats = [
  { label: 'Success Rate', value: '98%' },
  { label: 'Active Subscriptions', value: '12,400+' },
  { label: 'Personal Chefs', value: '450+' },
  { label: 'Meals Delivered', value: '1.2M+' },
];

export const TrustBar = () => {
  return (
    <section className="bg-stone-50 py-12 border-y border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <p className="text-stone-900 font-bold text-lg tracking-tight">
              Helping people eat better every single day.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl font-bold text-stone-900 tracking-tighter mb-1">{stat.value}</p>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
