import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const TrustBar = () => {
  return (
    <section className="bg-stone-50 py-16 border-y border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-emerald-500 text-emerald-500" />
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-stone-900 font-bold text-2xl md:text-3xl tracking-tight">
              The future of personalized nutrition is almost here.
            </h3>
            <p className="text-stone-400 font-medium text-lg uppercase tracking-widest text-sm">
              Helping people eat better every single day.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-stone-600 font-bold text-sm uppercase tracking-wider">Waitlist Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-stone-600 font-bold text-sm uppercase tracking-wider">Early Access Phase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
