import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: "Personal Chef", traditional: false, nutrify: true },
  { feature: "Dedicated Nutritionist", traditional: false, nutrify: true },
  { feature: "Physician Consultations", traditional: false, nutrify: true },
  { feature: "Weekly Progress Reviews", traditional: false, nutrify: true },
  { feature: "Plan Adjustments", traditional: false, nutrify: true },
  { feature: "Medical Condition Focus", traditional: false, nutrify: true },
  { feature: "Fresh Daily Preparation", traditional: true, nutrify: true },
];

export const ComparisonTable = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-[0.9] mb-8"
          >
            Not a Delivery App. <br />
            <span className="text-stone-300">A Health Partner.</span>
          </motion.h2>
          <p className="text-stone-500 text-xl font-medium">Compare the Nutrify experience with traditional meal delivery.</p>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-stone-100 shadow-2xl shadow-stone-100 bg-stone-50/50">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-stone-50">
                <th className="p-8 text-left text-sm font-bold text-stone-400 uppercase tracking-widest">Experience</th>
                <th className="p-8 text-center text-sm font-bold text-stone-400 uppercase tracking-widest bg-stone-100/50">Traditional Apps</th>
                <th className="p-8 text-center text-sm font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50">Nutrify</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {comparisons.map((row) => (
                <tr key={row.feature} className="group hover:bg-white transition-colors">
                  <td className="p-8 text-lg font-bold text-stone-900">{row.feature}</td>
                  <td className="p-8 text-center bg-stone-100/30">
                    <div className="flex justify-center">
                      {row.traditional ? (
                        <div className="p-2 bg-emerald-100 rounded-full">
                          <Check className="w-5 h-5 text-emerald-600" />
                        </div>
                      ) : (
                        <div className="p-2 bg-stone-100 rounded-full">
                          <X className="w-5 h-5 text-stone-300" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-8 text-center bg-emerald-50/30">
                    <div className="flex justify-center">
                      {row.nutrify && (
                        <div className="p-2 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
