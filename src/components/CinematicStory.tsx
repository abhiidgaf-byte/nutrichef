import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChefHat, 
  Gift, 
  Activity, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const CinematicStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning & Smooth Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=700%',
          scrub: 1.2,
          pin: true,
        }
      });

      // Scene 1: Initial Reveal (Text 1 + Dashboard)
      tl.fromTo('.order-text', 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5, ease: 'power3.out' }
      )
      .fromTo(dashboardRef.current, 
        { scale: 0.85, opacity: 0, filter: 'blur(20px)', y: 40 }, 
        { scale: 1, opacity: 1, filter: 'blur(0px)', y: 0, duration: 3, ease: 'power3.out' }, 
        '-=2'
      );

      // Scene 2: Personalization (Text 1 out -> Text 2 in)
      tl.to('.order-text', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.journey-content', 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.dashboard-data-1', { background: 'rgba(236, 253, 245, 0.9)', borderColor: 'rgba(16, 185, 129, 0.3)', duration: 2 }, '-=2')
      .to('.journey-question', { opacity: 1, scale: 1, stagger: 0.15, duration: 2, ease: 'back.out(1.2)' }, '-=1');

      // Scene 3: Chef Assignment (Text 2 out -> Text 3 in)
      tl.to('.journey-content', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.chef-content', 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.dashboard-status', { textContent: 'Chef Assigned', color: '#059669', duration: 1.5 })
      .to('.dashboard-progress-1', { width: '100%', duration: 2.5, ease: 'power2.inOut' }, '-=1.5');

      // Scene 4: Daily Delivery (Text 3 out -> Text 4 in)
      tl.to('.chef-content', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.delivery-content', 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.dashboard-delivery', { opacity: 1, y: 0, duration: 2, ease: 'back.out(1.2)' }, '-=1.5');

      // Scene 5: Clinical Results (Text 4 out -> Text 5 in)
      tl.to('.delivery-content', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.progress-content', 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      )
      .to('.dashboard-score', { 
        textContent: 9.6, 
        duration: 3, 
        snap: { textContent: 0.1 },
        ease: 'power2.inOut'
      })
      .to('.dashboard-bg', { 
        background: 'linear-gradient(135deg, rgba(236, 253, 245, 0.8), rgba(240, 253, 250, 0.8))', 
        duration: 2.5
      }, '-=2.5');

      // Scene 6: Longevity Vision (Text 5 out -> Text 6 in)
      tl.to('.progress-content', { opacity: 0, y: -40, filter: 'blur(10px)', duration: 2 })
      .fromTo('.final-statement', 
        { opacity: 0, y: 40, filter: 'blur(10px)' }, 
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5 }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen bg-[#FAF8F5] overflow-hidden flex items-center">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Two-Column Container - Zero Overlap Layout */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* LEFT COLUMN: Stage for Narrative Text Blocks */}
        <div className="relative w-full h-[480px] flex items-center">
          
          {/* Scene 1 Text */}
          <div className="order-text absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              The Transformation
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter leading-[0.9] mb-6">
              Stop Managing. <br />
              <span className="text-emerald-700">Start Living.</span>
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Nutrition simplified into a seamless, high-performance daily ritual designed around your metabolic needs.
            </p>
          </div>

          {/* Scene 2: Personalization */}
          <div className="journey-content absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Step 01 — Biomarker Analysis
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-6 leading-tight">
              Every body is <br /> uniquely engineered.
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed max-w-lg mb-8">
              We translate your metabolic biomarkers, clinical goals, and taste preferences into custom macro targets.
            </p>
            <div className="flex flex-wrap gap-3 max-w-md">
              {['Condition: Tailored', 'Goal: Longevity', 'Preference: Organic', 'Activity: Optimized'].map((q, i) => (
                <div key={i} className="journey-question opacity-0 scale-90 px-4 py-2 bg-white rounded-xl border border-stone-200/80 text-xs font-bold text-stone-800 shadow-sm">
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Scene 3: Chef Integration */}
          <div className="chef-content absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <ChefHat className="w-3.5 h-3.5 text-emerald-600" />
              Step 02 — Culinary Precision
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-6 leading-tight">
              Chef receives <br /> the clinical signal.
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Your biometric data transforms directly into gourmet meals, meticulously prepared by your dedicated culinary team.
            </p>
          </div>

          {/* Scene 4: Daily Delivery */}
          <div className="delivery-content absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <Gift className="w-3.5 h-3.5 text-emerald-600" />
              Step 03 — Seamless Delivery
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter mb-6 leading-tight">
              Culinary Luxury. <br />
              <span className="text-emerald-700">Arriving Daily.</span>
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Fresh, organic, temperature-controlled meals delivered straight to your doorstep every morning.
            </p>
          </div>

          {/* Scene 5: Progress & Optimization */}
          <div className="progress-content absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Step 04 — Continuous Feedback
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-6 leading-tight">
              Optimization <br /> in Motion.
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Weekly clinical consultations adjust your menu to ensure your nutrition dynamically adapts as your body improves.
            </p>
          </div>

          {/* Scene 6: Final Statement */}
          <div className="final-statement absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-6 w-fit shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              NutriChef Standard
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter leading-[0.85] mb-6">
              Your Personal <br />
              <span className="text-emerald-700">Nutrition Chef.</span>
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-lg">
              Supported by medical nutritionists. Prepared by executive chefs. Driven by your health.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: The Evolving Dashboard Engine Card */}
        <div className="relative w-full flex items-center justify-center">
          <div 
            ref={dashboardRef}
            className="order-dashboard w-full max-w-lg bg-white/90 backdrop-blur-2xl rounded-[48px] border border-stone-200/80 p-10 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.06)] flex flex-col justify-between opacity-0 dashboard-bg relative overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-stone-400 text-[10px] uppercase tracking-[0.5em] mb-3 font-black">Metabolic Engine</p>
                <h3 className="text-3xl font-bold tracking-tighter dashboard-status text-stone-500">Calibrating...</h3>
              </div>
              <div className="w-14 h-14 bg-stone-50 rounded-2xl border border-stone-200/80 flex items-center justify-center shadow-sm">
                <Activity className="w-7 h-7 text-emerald-600" />
              </div>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-stone-50/80 rounded-[32px] border border-stone-200/60 dashboard-data-1 flex flex-col justify-center">
                <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Calibration</p>
                <div className="h-2 bg-stone-200/60 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 dashboard-progress-1 w-0" />
                </div>
              </div>
              
              <div className="p-6 bg-stone-50/80 rounded-[32px] border border-stone-200/60 flex flex-col justify-center">
                <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Longevity Score</p>
                <p className="text-stone-900 text-5xl font-black tracking-tighter dashboard-score">8.4</p>
              </div>
            </div>

            {/* Delivery Alert Panel */}
            <div className="p-6 bg-emerald-50/80 rounded-[32px] border border-emerald-200/80 opacity-0 dashboard-delivery translate-y-6 mb-8 flex items-center justify-between">
              <div>
                <p className="text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-1">Logistics</p>
                <p className="text-stone-900 text-xl font-bold tracking-tight">Daily Pack Delivered</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            {/* Live Telemetry Bar */}
            <div className="p-5 bg-emerald-50/60 border border-emerald-200/60 rounded-[28px] flex items-center gap-4">
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-ping shrink-0" />
              <p className="text-stone-700 text-xs font-medium tracking-tight">
                All systems operational. Nutritional parameters locked.
              </p>
            </div>

            {/* Soft Interior Glow */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-emerald-200/20 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};

