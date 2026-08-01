import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChefHat,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Flame
} from 'lucide-react';
import { CHEFS, DISH_COMPARISON } from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

// The centerpiece proof point: not an invented "wellness score" dashboard, but the exact
// same before/after dish comparison used later in the product (BlueprintResult.tsx) —
// real numbers, reused consistently, so it reads as a real mechanism rather than a mockup.
const STANDARD = DISH_COMPARISON.standard;
const NUTRICHEF = DISH_COMPARISON.nutriChef;

export const CinematicStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  // Respect prefers-reduced-motion: skip the pinned 700%-scroll GSAP sequence entirely
  // and show the end state directly, rather than trapping motion-sensitive users in it.
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const chefFirstName = CHEFS[0].name.split(' ')[1];

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=700%',
          scrub: 1.2,
          pin: true,
        }
      });

      // Scene 1: The hook — same dish, shown in its ordinary/standard form
      tl.fromTo('.scene-1',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5, ease: 'power3.out' }
      )
      .fromTo(cardRef.current,
        { scale: 0.85, opacity: 0, filter: 'blur(20px)', y: 40 },
        { scale: 1, opacity: 1, filter: 'blur(0px)', y: 0, duration: 3, ease: 'power3.out' },
        '-=2'
      );

      // Scene 2: Personalization — biomarkers analyzed, dish still in standard state
      tl.to('.scene-1', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.scene-2',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.scene-2-tag', { opacity: 1, scale: 1, stagger: 0.15, duration: 2, ease: 'back.out(1.2)' }, '-=1');

      // Scene 3: Chef gets the plan — the transformation happens here, live
      tl.to('.scene-2', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.scene-3',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.label-standard', { opacity: 0, duration: 1.2 }, '-=1.5')
      .to('.label-nutrichef', { opacity: 1, duration: 1.2 }, '<')
      .to('.dish-photo', { filter: 'grayscale(0) brightness(1.05) saturate(1.3)', duration: 2.2, ease: 'power2.out' }, '<')
      .to('.compare-calories', { textContent: NUTRICHEF.calories, duration: 2.5, snap: { textContent: 1 }, ease: 'power2.inOut' }, '-=1.2')
      .to('.compare-gi-value', { textContent: parseInt(NUTRICHEF.glycemicIndex.match(/\d+/)?.[0] || '0', 10), duration: 2.5, snap: { textContent: 1 } }, '<')
      .to('.gi-badge', { backgroundColor: 'rgba(209, 250, 229, 1)', color: '#065f46', duration: 2 }, '<')
      .to('.gi-label', { textContent: 'Low GI', duration: 0.1 }, '-=1');

      // Scene 4: In-home cooking — ingredients flip from processed to real
      tl.to('.scene-3', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.scene-4',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.ingredients-standard', { opacity: 0, duration: 1.2 }, '-=1.5')
      .to('.ingredients-nutrichef', { opacity: 1, duration: 1.2 }, '<');

      // Scene 5: The result — health score climbs, clinical proof line reveals
      tl.to('.scene-4', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.scene-5',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.compare-score', {
        textContent: NUTRICHEF.healthScore,
        duration: 3,
        snap: { textContent: 0.1 },
        ease: 'power2.inOut'
      })
      .to('.compare-score', { color: '#065f46' }, '<')
      .to('.result-banner', { opacity: 1, y: 0, duration: 2, ease: 'back.out(1.2)' }, '-=1.5')
      .to('.card-bg', {
        background: 'linear-gradient(135deg, rgba(236, 253, 245, 0.9), rgba(240, 253, 250, 0.9))',
        duration: 2.5
      }, '-=2.5');

      // Scene 6: Closing brand statement
      tl.to('.scene-5', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.scene-6',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      );

    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Reduced-motion users get the end state directly — no pinned 700%-scroll sequence to sit through.
  if (reducedMotion) {
    return (
      <div className="relative bg-[#FAF8F5] py-24 px-6">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Same Rice, Different You
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-[0.95] mb-6">
              One Dish. <br />
              <span className="text-emerald-700 italic">Two Completely Different Outcomes.</span>
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed max-w-lg">
              Chef {chefFirstName} rebuilds the exact same dish you already eat — same comfort, same flavor — engineered to hit your actual health targets instead of working against them.
            </p>
          </div>
          <StaticComparisonCard />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-screen bg-[#FAF8F5] overflow-hidden flex items-center">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* LEFT COLUMN: Narrative */}
        <div className="relative w-full h-[480px] flex items-center">

          <div className="scene-1 absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <Zap className="w-3.5 h-3.5 text-rose-600" />
              Same Rice, Different You
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-semibold text-stone-900 tracking-tight leading-[1] mb-6">
              Looks Identical. <br />
              <span className="text-rose-600 italic">Isn't Even Close.</span>
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              The paneer makhani you order tonight and the one your chef cooks tomorrow can look the same on the plate — and land nowhere near the same on your blood sugar.
            </p>
          </div>

          <div className="scene-2 absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Step 01 — We Learn You
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6 leading-tight">
              Every body deserves <br /> its own plan.
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed max-w-lg mb-8">
              We translate your health conditions, goals, and taste preferences into a menu built only for you.
            </p>
            <div className="flex flex-wrap gap-3 max-w-md">
              {['Your Conditions, Understood', 'Your Goals, Mapped', 'Your Taste, Respected', 'Your Schedule, Fit'].map((q, i) => (
                <div key={i} className="scene-2-tag opacity-0 scale-90 px-4 py-2 bg-white rounded-xl border border-stone-200/80 text-xs font-bold text-stone-800 shadow-sm">
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="scene-3 absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <ChefHat className="w-3.5 h-3.5 text-emerald-600" />
              Step 02 — Chef {chefFirstName} Rebuilds It
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6 leading-tight">
              Watch the numbers <br /> change in real time.
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              A2 paneer instead of processed cream. Foxtail millet instead of refined rice. Same dish. Different chemistry.
            </p>
          </div>

          <div className="scene-4 absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <ChefHat className="w-3.5 h-3.5 text-emerald-600" />
              Step 03 — Cooked In Your Kitchen
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-semibold text-stone-900 tracking-tight mb-6 leading-tight">
              Culinary Luxury. <br />
              <span className="text-emerald-700 italic">In Your Kitchen.</span>
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Chef {chefFirstName} arrives with real, prepped ingredients and cooks it fresh — right on your stove, while you watch.
            </p>
          </div>

          <div className="scene-5 absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Step 04 — The Result
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6 leading-tight">
              A dish you already <br /> love. Working for you.
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              This is one dish. Every meal on your weekly menu gets rebuilt the same way.
            </p>
          </div>

          <div className="scene-6 absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              NutriChef Standard
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-semibold text-stone-900 tracking-tight leading-[0.95] mb-6">
              Your Personal <br />
              <span className="text-emerald-700 italic">Nutrition Chef.</span>
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Supported by medical nutritionists. Prepared by dedicated chefs. Driven by your health.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: The living proof — same dish, before and after */}
        <div className="relative w-full flex items-center justify-center">
          <div
            ref={cardRef}
            className="w-full max-w-lg bg-white/90 backdrop-blur-2xl rounded-[48px] border border-stone-200/80 p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.06)] flex flex-col opacity-0 card-bg relative overflow-hidden"
          >
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] mb-6">
              <img
                src={DISH_COMPARISON.image}
                alt={DISH_COMPARISON.dishName}
                className="dish-photo w-full h-full object-cover [animation:kenburns_18s_ease-in-out_infinite_alternate]"
                style={{ filter: 'grayscale(0.55) brightness(0.85) saturate(0.7)' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-transparent to-transparent flex items-end p-5">
                <div className="relative h-10">
                  <p className="text-white font-bold text-lg mb-0.5">{DISH_COMPARISON.dishName}</p>
                  <span className="label-standard absolute text-rose-300 text-xs font-black uppercase tracking-widest">Standard Hotel Execution</span>
                  <span className="label-nutrichef absolute opacity-0 text-emerald-300 text-xs font-black uppercase tracking-widest">NutriChef Personalized</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-4 bg-stone-50/80 rounded-[24px] border border-stone-200/60 text-center">
                <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
                  <Flame className="w-3 h-3" /> Calories
                </p>
                <p className="compare-calories text-2xl font-black text-stone-900 tracking-tighter">{STANDARD.calories}</p>
              </div>
              <div className="p-4 bg-stone-50/80 rounded-[24px] border border-stone-200/60 text-center">
                <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1">Glycemic Load</p>
                <p className="gi-badge inline-flex items-baseline gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-sm font-black">
                  <span className="gi-label">High GI</span> (<span className="compare-gi-value">{STANDARD.glycemicIndex.match(/\d+/)?.[0]}</span>)
                </p>
              </div>
              <div className="p-4 bg-stone-50/80 rounded-[24px] border border-stone-200/60 text-center">
                <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1">Health Score</p>
                <p className="compare-score text-2xl font-black text-rose-600 tracking-tighter">{STANDARD.healthScore}</p>
              </div>
            </div>

            <div className="relative mb-6" style={{ minHeight: '84px' }}>
              <div className="ingredients-standard absolute inset-0">
                <p className="text-[10px] font-black uppercase tracking-wider text-stone-400 mb-2">Standard Ingredients</p>
                <ul className="grid grid-cols-2 gap-1.5 text-[11px] font-medium text-stone-500">
                  {STANDARD.ingredients.map(ing => (
                    <li key={ing} className="flex items-center gap-1.5 bg-stone-50 px-2 py-1.5 rounded-lg border border-stone-200/60">
                      <span className="w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                      <span className="truncate">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ingredients-nutrichef absolute inset-0 opacity-0">
                <p className="text-[10px] font-black uppercase tracking-wider text-stone-400 mb-2">Cooked In Your Kitchen With</p>
                <ul className="grid grid-cols-2 gap-1.5 text-[11px] font-bold text-stone-700">
                  {NUTRICHEF.ingredients.map(ing => (
                    <li key={ing} className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-lg border border-stone-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="result-banner opacity-0 translate-y-4 p-5 bg-emerald-800 text-white rounded-[28px] flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
              <p className="text-sm font-bold leading-snug">{NUTRICHEF.clinicalNotes}</p>
            </div>

            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-emerald-200/20 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};

const StaticComparisonCard = () => (
  <div className="w-full max-w-lg mx-auto bg-white/90 rounded-[48px] border border-stone-200/80 p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
    <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] mb-6">
      <img
        src={DISH_COMPARISON.image}
        alt={DISH_COMPARISON.dishName}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-transparent to-transparent flex items-end p-5">
        <div>
          <p className="text-white font-bold text-lg mb-0.5">{DISH_COMPARISON.dishName}</p>
          <span className="text-emerald-300 text-xs font-black uppercase tracking-widest">NutriChef Personalized</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-6">
      <div className="p-4 bg-stone-50/80 rounded-[24px] border border-stone-200/60 text-center">
        <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1">Calories</p>
        <p className="text-2xl font-black text-stone-900 tracking-tighter">{NUTRICHEF.calories}</p>
      </div>
      <div className="p-4 bg-stone-50/80 rounded-[24px] border border-stone-200/60 text-center">
        <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1">Glycemic Load</p>
        <p className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-black">{NUTRICHEF.glycemicIndex}</p>
      </div>
      <div className="p-4 bg-stone-50/80 rounded-[24px] border border-stone-200/60 text-center">
        <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest mb-1">Health Score</p>
        <p className="text-2xl font-black text-emerald-700 tracking-tighter">{NUTRICHEF.healthScore}</p>
      </div>
    </div>
    <div className="p-5 bg-emerald-800 text-white rounded-[28px] flex items-center gap-3">
      <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
      <p className="text-sm font-bold leading-snug">{NUTRICHEF.clinicalNotes}</p>
    </div>
  </div>
);
