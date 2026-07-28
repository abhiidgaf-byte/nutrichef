import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Calendar, 
  Utensils, 
  User, 
  Clock, 
  Star, 
  CheckCircle2, 
  Flame, 
  Dumbbell, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  MessageSquare,
  Award,
  Video,
  ThumbsUp,
  RotateCcw,
  Bell,
  Heart
} from 'lucide-react';
import { UserProfile, VisitSchedule } from '../types';
import { CHEFS, SAMPLE_WEEKLY_MEALS } from '../data/mockData';

interface CustomerDashboardProps {
  userProfile: UserProfile;
  schedule: VisitSchedule;
  onRestartFlow: () => void;
}

export const CustomerDashboard: React.FC<CustomerDashboardProps> = ({
  userProfile,
  schedule,
  onRestartFlow
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'plan' | 'schedule' | 'profile'>('home');
  const [ratingSubmitted, setRatingSubmitted] = useState<boolean>(false);
  const [selectedStars, setSelectedStars] = useState<number>(5);
  const [ratedEmoji, setRatedEmoji] = useState<string>('😋 Delicious');

  const chef = CHEFS[0]; // Chef Arjun
  const calories = userProfile.goals.includes('Fat Loss & Body Recomp') ? 1850 : 2200;
  const protein = userProfile.goals.includes('Lean Muscle & Strength') ? '160g' : '135g';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-28 pt-20">
      
      {/* Top Header */}
      <div className="bg-white border-b border-stone-200/80 sticky top-0 z-40 shadow-sm px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-800/20">
              N
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Customer Dashboard</p>
              <h2 className="text-lg font-bold text-stone-900 leading-tight">Welcome back, {userProfile.name || 'Abhinav'} 👋</h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onRestartFlow}
            className="px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all border border-stone-200 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden sm:inline">Reset Prototype</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-6">

        {/* TAB 1: HOME OVERVIEW */}
        {activeTab === 'home' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Countdown / Next Scheduled Visit Card */}
            <div className="bg-stone-900 text-white rounded-[32px] p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    Next Scheduled Visit
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Chef {chef.name.split(' ')[1]} Arrives Tomorrow
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-medium">
                    Wednesday at {schedule.timeSlot.split(' ')[0]} • {userProfile.neighborhood || 'Koramangala'}
                  </p>
                </div>

                <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/80 text-center shrink-0">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Countdown</span>
                  <span className="text-2xl font-black text-amber-400">14h : 22m</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs border-t border-stone-800 pt-5">
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fresh Spices & Millets Prepped</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hygiene Certified 5/5</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Low GI Protocol Verified</span>
                </div>
              </div>
            </div>

            {/* Consistency / Progress Tracker Card */}
            <div className="bg-white rounded-[28px] border border-stone-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex items-center justify-center text-2xl font-bold shrink-0">
                  🔥
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Nutrition Streak
                  </span>
                  <h4 className="text-xl font-bold text-stone-900 mt-1">14 Days Clean Compliance</h4>
                  <p className="text-xs text-stone-500 font-medium">98% biomarker goal adherence this month</p>
                </div>
              </div>

              {/* Progress Meters */}
              <div className="flex gap-4 w-full sm:w-auto text-center border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-6">
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase">Target Cal</p>
                  <p className="text-lg font-black text-stone-900">{calories}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase">Target Protein</p>
                  <p className="text-lg font-black text-emerald-800">{protein}</p>
                </div>
              </div>
            </div>

            {/* "Rate Your Last Meal" Feedback Prompt */}
            <div className="bg-white rounded-[28px] border border-stone-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-emerald-800 font-bold uppercase tracking-widest text-[10px] flex items-center gap-1">
                    <Utensils className="w-3 h-3" />
                    Meal Feedback Loop
                  </span>
                  <h4 className="text-lg font-bold text-stone-900">Rate Monday's Palak Paneer & Jowar Rotis</h4>
                </div>
                <span className="text-xs font-bold text-stone-400">Chef Arjun</span>
              </div>

              {!ratingSubmitted ? (
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-3">
                  <p className="text-xs text-stone-600 font-medium">How did the spice & portion size feel for your diabetes management plan?</p>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSelectedStars(star)}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= selectedStars ? 'fill-amber-400 text-amber-500' : 'text-stone-300'}`} />
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {['😋 Delicious', '🌶️ Perfect Spice', '👌 Great Portion'].map(tag => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setRatedEmoji(tag)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          ratedEmoji === tag ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-sm' : 'bg-white text-stone-600 border-stone-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setRatingSubmitted(true)}
                    className="w-full py-2.5 bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-md hover:bg-emerald-900 transition-all"
                  >
                    Submit Feedback to Chef & RD
                  </button>
                </div>
              ) : (
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Feedback Recorded! Chef Arjun notified for next visit.</span>
                  </div>
                  <button type="button" onClick={() => setRatingSubmitted(false)} className="text-[10px] text-emerald-800 underline">Edit</button>
                </div>
              )}
            </div>

            {/* Upcoming RD Check-in Banner */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-[28px] p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-900 flex items-center justify-center font-bold shrink-0">
                  <Video className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-900">Bi-Weekly RD Consultation</span>
                  <h4 className="text-base font-bold text-stone-900">Video Check-in with Dr. Ananya Sharma</h4>
                  <p className="text-xs text-stone-600 font-medium">Friday, July 31 at 5:00 PM • Review Blood Sugar Logs</p>
                </div>
              </div>

              <button type="button" className="hidden sm:block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md">
                Join Call Link
              </button>
            </div>

          </motion.div>
        )}

        {/* TAB 2: MEAL PLAN */}
        {activeTab === 'plan' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-stone-900">This Week's Meal Blueprint</h3>
                <p className="text-xs text-stone-500 font-medium">Tailored for Diabetes & Muscle Gain Targets</p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Low Glycemic Load
              </span>
            </div>

            <div className="space-y-4">
              {SAMPLE_WEEKLY_MEALS.map((meal) => (
                <div key={meal.id} className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="font-bold text-stone-900 text-lg">{meal.dayName}</span>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {meal.dateStr}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Lunch Meal</p>
                      <p className="font-bold text-stone-900 text-sm">{meal.lunch.title}</p>
                      <p className="text-xs text-stone-500">{meal.lunch.description}</p>
                      <div className="pt-2 flex gap-3 text-[10px] font-bold text-stone-700">
                        <span>{meal.lunch.calories} kcal</span>
                        <span>{meal.lunch.protein}g Protein</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Dinner Prep</p>
                      <p className="font-bold text-stone-900 text-sm">{meal.dinner.title}</p>
                      <p className="text-xs text-stone-500">{meal.dinner.description}</p>
                      <div className="pt-2 flex gap-3 text-[10px] font-bold text-stone-700">
                        <span>{meal.dinner.calories} kcal</span>
                        <span>{meal.dinner.protein}g Protein</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 3: SCHEDULE */}
        {activeTab === 'schedule' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Your Subscription & Cook Details</h3>
                  <p className="text-xs text-stone-500">Health-Condition Plan (₹6,500/mo)</p>
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  Active Subscription
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <img src={chef.photo} alt={chef.name} className="w-14 h-14 rounded-2xl object-cover border border-emerald-700" />
                <div>
                  <h4 className="font-bold text-stone-900">{chef.name}</h4>
                  <p className="text-xs text-emerald-800 font-bold">{chef.title}</p>
                  <p className="text-[10px] text-stone-500">Assigned for {userProfile.neighborhood || 'Koramangala'} visits</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <p className="font-bold uppercase tracking-wider text-stone-400 text-[10px]">Active Kitchen Visit Days</p>
                <div className="flex gap-2">
                  {schedule.days.map(d => (
                    <span key={d} className="px-3 py-1.5 rounded-xl bg-emerald-800 text-white font-bold">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: PROFILE & RD CHAT */}
        {activeTab === 'profile' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-stone-900">Health & Biomarker Profile</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl">
                  <p className="text-stone-400 font-bold">Name</p>
                  <p className="font-bold text-stone-900 text-sm">{userProfile.name}</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl">
                  <p className="text-stone-400 font-bold">Location</p>
                  <p className="font-bold text-stone-900 text-sm">{userProfile.neighborhood}</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl">
                  <p className="text-stone-400 font-bold">Health Conditions</p>
                  <p className="font-bold text-emerald-800 text-sm">{userProfile.healthConditions.join(', ')}</p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl">
                  <p className="text-stone-400 font-bold">Diet Style</p>
                  <p className="font-bold text-stone-900 text-sm">{userProfile.dietType} ({userProfile.spiceLevel})</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* BOTTOM NAVIGATION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-stone-200 px-6 py-3 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center justify-around">
          
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-all ${
              activeTab === 'home' ? 'text-emerald-800 scale-105' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'home' ? 'bg-emerald-50 text-emerald-800' : ''}`}>
              <Home className="w-5 h-5" />
            </div>
            <span>Home</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('plan')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-all ${
              activeTab === 'plan' ? 'text-emerald-800 scale-105' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'plan' ? 'bg-emerald-50 text-emerald-800' : ''}`}>
              <Utensils className="w-5 h-5" />
            </div>
            <span>Meal Plan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('schedule')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-all ${
              activeTab === 'schedule' ? 'text-emerald-800 scale-105' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'schedule' ? 'bg-emerald-50 text-emerald-800' : ''}`}>
              <Calendar className="w-5 h-5" />
            </div>
            <span>Schedule & Cook</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-all ${
              activeTab === 'profile' ? 'text-emerald-800 scale-105' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'profile' ? 'bg-emerald-50 text-emerald-800' : ''}`}>
              <User className="w-5 h-5" />
            </div>
            <span>Profile & RD</span>
          </button>

        </div>
      </div>

    </div>
  );
};
