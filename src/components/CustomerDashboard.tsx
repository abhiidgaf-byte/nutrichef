import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import {
  Home,
  Calendar,
  Utensils,
  User,
  Clock,
  Star,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Video,
  RotateCcw
} from 'lucide-react';
import { UserProfile, VisitSchedule } from '../types';
import { CHEFS, SAMPLE_WEEKLY_MEALS, SUBSCRIPTION_PLANS } from '../data/mockData';
import ncLogo from '../assets/images/nc-logo.png';

interface CustomerDashboardProps {
  userProfile: UserProfile;
  schedule: VisitSchedule;
  selectedPlanId?: string;
  onRestartFlow: () => void;
}

const MEAL_TAGS = ['Delicious', 'Perfect Spice', 'Great Portion'];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts up from 0 to `value` on mount using Motion's imperative animate() —
// the numbers are the emotional payoff of the tracker, so they should arrive, not just appear.
const AnimatedNumber: React.FC<{ value: number; delay?: number }> = ({ value, delay = 0 }) => {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, latest => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    const controls = animate(motionVal, value, {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsubscribe = rounded.on('change', setDisplay);
    return () => {
      controls.stop();
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{display}</>;
};

export const CustomerDashboard: React.FC<CustomerDashboardProps> = ({
  userProfile,
  schedule,
  selectedPlanId,
  onRestartFlow
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'plan' | 'schedule' | 'profile'>('home');
  const [ratingSubmitted, setRatingSubmitted] = useState<boolean>(false);
  const [selectedStars, setSelectedStars] = useState<number>(5);
  const [ratedTag, setRatedTag] = useState<string>('Delicious');

  const activePlan = SUBSCRIPTION_PLANS.find(p => p.id === selectedPlanId) ?? SUBSCRIPTION_PLANS[1];
  const chef = CHEFS.find(c => c.neighborhoods.includes(userProfile.neighborhood)) ?? CHEFS[0];
  const calories = userProfile.goals.includes('Fat Loss & Body Recomp') ? 1850 : 2200;
  const protein = userProfile.goals.includes('Lean Muscle & Strength') ? '160g' : '135g';

  // Macro targets derived from the calorie/protein targets above, so the numbers
  // stay internally consistent (protein*4 + fat*9 + carbs*4 = total calories).
  const targetProteinG = parseInt(protein, 10);
  const targetFatG = Math.round((calories * 0.3) / 9);
  const targetCarbsG = Math.round((calories - targetProteinG * 4 - targetFatG * 9) / 4);

  // Illustrative "so far today" progress — same prototype convention as the streak card above.
  const dayProgress = 0.47;
  const consumedCalories = Math.round(calories * dayProgress);
  const remainingCalories = calories - consumedCalories;
  const consumedProteinG = Math.round(targetProteinG * 0.55);
  const consumedFatG = Math.round(targetFatG * 0.58);
  const consumedCarbsG = Math.round(targetCarbsG * 0.42);

  const RING_RADIUS = 52;
  const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

  const macros = [
    { label: 'Protein', current: consumedProteinG, target: targetProteinG, color: '#c2542f' },
    { label: 'Fat', current: consumedFatG, target: targetFatG, color: '#a6853a' },
    { label: 'Carbs', current: consumedCarbsG, target: targetCarbsG, color: '#0f5c3f' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-28 pt-20">

      {/* Top Header */}
      <div className="bg-white border-b border-stone-200/80 sticky top-0 z-40 shadow-sm px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ncLogo} alt="NutriChef" className="w-10 h-10 rounded-2xl object-cover shadow-md shadow-stone-900/10" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Customer Dashboard</p>
              <h2 className="font-serif text-lg font-semibold text-stone-900 leading-tight">Welcome back, {userProfile.name || 'Abhinav'}</h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onRestartFlow}
            className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors duration-200 border border-stone-200 flex items-center gap-1.5 cursor-pointer"
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
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-stone-200 text-[10px] font-black uppercase tracking-widest border border-white/10 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    Next Scheduled Visit
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight">
                    Chef {chef.name.split(' ')[1]} Arrives Tomorrow
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-medium">
                    Wednesday at {schedule.timeSlot.split(' ')[0]} • {userProfile.neighborhood || 'Koramangala'}
                  </p>
                </div>

                <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/80 text-center shrink-0">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Countdown</span>
                  <span className="text-2xl font-black text-white">14h : 22m</span>
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
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Low GI Protocol Verified</span>
                </div>
              </div>
            </div>

            {/* Macro Tracker Card */}
            <div className="bg-white rounded-[28px] border border-stone-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Today's Food Log</span>
                  <h4 className="font-serif text-lg font-semibold text-stone-900 mt-0.5">Macro Tracker</h4>
                </div>
                <span className="text-xs font-semibold text-stone-400">Friday, Aug 1</span>
              </div>

              <div className="flex items-center justify-center gap-5 sm:gap-10 mb-8">
                <div className="text-center shrink-0">
                  <p className="text-xl sm:text-2xl font-black text-stone-900">
                    <AnimatedNumber value={remainingCalories} />
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400">Remaining</p>
                </div>

                <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r={RING_RADIUS} stroke="#e4e2dc" strokeWidth="10" fill="none" />
                    <motion.circle
                      cx="60" cy="60" r={RING_RADIUS}
                      stroke="#0f5c3f" strokeWidth="10" fill="none"
                      strokeLinecap="round"
                      strokeDasharray={RING_CIRCUMFERENCE}
                      initial={{ strokeDashoffset: prefersReducedMotion() ? RING_CIRCUMFERENCE * (1 - dayProgress) : RING_CIRCUMFERENCE }}
                      animate={{ strokeDashoffset: RING_CIRCUMFERENCE * (1 - dayProgress) }}
                      transition={prefersReducedMotion() ? { duration: 0 } : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
                    <span className="text-2xl sm:text-3xl font-black text-stone-900">
                      <AnimatedNumber value={consumedCalories} />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wide text-stone-400 leading-tight mt-0.5">Calories<br />Consumed</span>
                  </div>
                </div>

                <div className="text-center shrink-0">
                  <p className="text-xl sm:text-2xl font-black text-stone-900">{calories}</p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400">Target</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {macros.map((m, i) => (
                  <div key={m.label}>
                    <p className="text-xs font-semibold text-stone-600 mb-1.5">{m.label}</p>
                    <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden mb-1.5">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: m.color }}
                        initial={{ width: prefersReducedMotion() ? `${Math.min(100, (m.current / m.target) * 100)}%` : '0%' }}
                        animate={{ width: `${Math.min(100, (m.current / m.target) * 100)}%` }}
                        transition={prefersReducedMotion() ? { duration: 0 } : { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <p className="text-xs font-bold text-stone-900">
                      <AnimatedNumber value={m.current} delay={0.2 + i * 0.12} /> / {m.target}g
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Consistency / Progress Tracker Card */}
            <div className="bg-white rounded-[28px] border border-stone-200 p-6 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-center shrink-0">
                <Flame className="w-6 h-6 text-stone-700" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-600 bg-stone-100 px-2 py-0.5 border border-stone-200">
                  Nutrition Streak
                </span>
                <h4 className="font-serif text-xl font-semibold text-stone-900 mt-1">14 Days Clean Compliance</h4>
                <p className="text-xs text-stone-500 font-medium">98% biomarker goal adherence this month</p>
              </div>
            </div>

            {/* "Rate Your Last Meal" Feedback Prompt */}
            <div className="bg-white rounded-[28px] border border-stone-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-stone-500 font-semibold uppercase tracking-widest text-[10px] flex items-center gap-1">
                    <Utensils className="w-3 h-3" />
                    Meal Feedback Loop
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-stone-900">Rate Monday's Palak Paneer & Jowar Rotis</h4>
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
                        className="p-1 cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${star <= selectedStars ? 'fill-amber-400 text-amber-500' : 'text-stone-300'}`} />
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {MEAL_TAGS.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setRatedTag(tag)}
                        className={`px-3 py-1.5 text-xs font-semibold border transition-colors duration-200 cursor-pointer ${
                          ratedTag === tag ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setRatingSubmitted(true)}
                    className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-[0.1em] transition-colors duration-200 cursor-pointer"
                  >
                    Submit Feedback to Chef & RD
                  </button>
                </div>
              ) : (
                <div className="bg-stone-900 p-4 text-white text-xs font-semibold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Feedback Recorded! Chef Arjun notified for next visit.</span>
                  </div>
                  <button type="button" onClick={() => setRatingSubmitted(false)} className="text-[10px] underline cursor-pointer">Edit</button>
                </div>
              )}
            </div>

            {/* Upcoming RD Check-in Banner */}
            <div className="bg-white border border-stone-200 rounded-[28px] p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Bi-Weekly RD Consultation</span>
                  <h4 className="font-serif text-base font-semibold text-stone-900">Video Check-in with Dr. Ananya Sharma</h4>
                  <p className="text-xs text-stone-600 font-medium">Friday, July 31 at 5:00 PM • Review Blood Sugar Logs</p>
                </div>
              </div>

              <button type="button" className="hidden sm:block px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer">
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
                <h3 className="font-serif text-2xl font-semibold text-stone-900">This Week's Meal Blueprint</h3>
                <p className="text-xs text-stone-500 font-medium">Tailored for Diabetes & Muscle Gain Targets</p>
              </div>
              <span className="text-xs font-bold text-stone-700 bg-stone-100 px-3 py-1 border border-stone-200">
                Low Glycemic Load
              </span>
            </div>

            <div className="space-y-4">
              {SAMPLE_WEEKLY_MEALS.map((meal) => (
                <div key={meal.id} className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="font-serif font-semibold text-stone-900 text-lg">{meal.dayName}</span>
                    <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1 border border-stone-200">
                      {meal.dateStr}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Lunch Meal</p>
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
                  <h3 className="font-serif text-xl font-semibold text-stone-900">Your Subscription & Cook Details</h3>
                  <p className="text-xs text-stone-500">{activePlan.name} ({activePlan.priceDisplay}/mo)</p>
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-stone-700 bg-stone-100 px-3 py-1.5 border border-stone-200">
                  Active Subscription
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <img src={chef.photo} alt={chef.name} className="w-14 h-14 rounded-2xl object-cover border border-stone-300" />
                <div>
                  <h4 className="font-semibold text-stone-900">{chef.name}</h4>
                  <p className="text-xs text-stone-500 font-semibold">{chef.title}</p>
                  <p className="text-[10px] text-stone-500">Assigned for {userProfile.neighborhood || 'Koramangala'} visits</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <p className="font-bold uppercase tracking-wider text-stone-400 text-[10px]">Active Kitchen Visit Days</p>
                <div className="flex gap-2">
                  {schedule.days.map(d => (
                    <span key={d} className="px-3 py-1.5 rounded-xl bg-stone-900 text-white font-bold">{d}</span>
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
              <h3 className="font-serif text-xl font-semibold text-stone-900">Health & Biomarker Profile</h3>
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
                  <p className="font-bold text-stone-900 text-sm">{userProfile.healthConditions.join(', ')}</p>
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
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors duration-200 cursor-pointer ${
              activeTab === 'home' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'home' ? 'bg-stone-100 text-stone-900' : ''}`}>
              <Home className="w-5 h-5" />
            </div>
            <span>Home</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('plan')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors duration-200 cursor-pointer ${
              activeTab === 'plan' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'plan' ? 'bg-stone-100 text-stone-900' : ''}`}>
              <Utensils className="w-5 h-5" />
            </div>
            <span>Meal Plan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('schedule')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors duration-200 cursor-pointer ${
              activeTab === 'schedule' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'schedule' ? 'bg-stone-100 text-stone-900' : ''}`}>
              <Calendar className="w-5 h-5" />
            </div>
            <span>Schedule & Cook</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors duration-200 cursor-pointer ${
              activeTab === 'profile' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'profile' ? 'bg-stone-100 text-stone-900' : ''}`}>
              <User className="w-5 h-5" />
            </div>
            <span>Profile & RD</span>
          </button>

        </div>
      </div>

    </div>
  );
};
