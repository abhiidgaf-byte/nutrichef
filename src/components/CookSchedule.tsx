import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  MapPin,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CHEFS } from '../data/mockData';
import { UserProfile, VisitSchedule } from '../types';

interface CookScheduleProps {
  userProfile: UserProfile;
  schedule: VisitSchedule;
  setSchedule: React.Dispatch<React.SetStateAction<VisitSchedule>>;
  onConfirm: () => void;
  onBack: () => void;
}

const AVAILABLE_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const TIME_SLOTS = [
  'Morning (7:30 AM - 9:30 AM)',
  'Mid-day (11:30 AM - 1:30 PM)',
  'Evening (5:00 PM - 7:00 PM)'
];

export const CookSchedule: React.FC<CookScheduleProps> = ({
  userProfile,
  schedule,
  setSchedule,
  onConfirm,
  onBack
}) => {
  // Select matched chef based on neighborhood or default
  const chef = CHEFS[0]; // Chef Arjun Sharma

  const handleDayToggle = (day: string) => {
    setSchedule(prev => {
      if (prev.days.includes(day)) {
        if (prev.days.length === 1) return prev; // keep at least 1
        return { ...prev, days: prev.days.filter(d => d !== day) };
      } else {
        return { ...prev, days: [...prev.days, day] };
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800 text-amber-300 text-xs font-bold uppercase tracking-widest border border-emerald-700 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Neighborhood Matched Chef
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Your Personal NutriChef
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-lg mx-auto">
            Matched for <strong className="text-stone-900 font-bold">{userProfile.neighborhood || 'Koramangala'}</strong> based on your health biomarkers & diet preferences.
          </p>
        </motion.div>

        {/* Cook Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] border border-stone-200 p-6 sm:p-8 shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Chef Photo & Rating */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
              <div className="relative w-36 h-36 rounded-3xl overflow-hidden border-2 border-emerald-700/30 shadow-lg">
                <img 
                  src={chef.photo} 
                  alt={chef.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-emerald-800 text-white p-1 rounded-full shadow">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">{chef.name}</h3>
                <p className="text-emerald-800 text-xs font-bold">{chef.title}</p>
              </div>

              <div className="flex items-center gap-1 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 text-amber-900 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{chef.rating} ({chef.reviewCount} households served)</span>
              </div>
            </div>

            {/* Chef Bio & Certifications */}
            <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Same Certified Cook Every Visit • 100% Background Verified</span>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-medium">
                "{chef.bio}"
              </p>

              {/* Badges */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">Specialization Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {chef.specializations.map(spec => (
                    <span key={spec} className="px-3 py-1 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-stone-500">
                <strong className="text-stone-900 font-bold">Signature Speciality:</strong> {chef.favoriteDishToCook}
              </div>

            </div>
          </div>
        </motion.div>

        {/* Weekly Calendar Visit Picker */}
        <div className="bg-white rounded-[32px] border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="text-emerald-800 font-bold uppercase tracking-widest text-xs flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              Visit Frequency & Schedule
            </span>
            <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
              Set Your Weekly Kitchen Days
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm">
              Chef {chef.name.split(' ')[1]} will arrive at your home on these days to cook fresh meals for the week.
            </p>
          </div>

          {/* Select Visit Days */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
              Select Visit Days (3 Days / Week)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
              {AVAILABLE_DAYS.map((day) => {
                const isSelected = schedule.days.includes(day);
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayToggle(day)}
                    className={`py-3 px-2 rounded-2xl text-xs font-bold border transition-all text-center flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-md'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span>{day.substring(0, 3)}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Select Preferred Time Slot */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              Preferred Cooking Time Window
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TIME_SLOTS.map((slot) => {
                const isSelected = schedule.timeSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSchedule({ ...schedule, timeSlot: slot })}
                    className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex items-center justify-between ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span>{slot}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3.5 border border-stone-200 rounded-2xl text-stone-700 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-stone-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tiers
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-2xl font-black text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Confirm & Start Subscription
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
