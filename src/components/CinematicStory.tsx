import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShoppingBag, 
  Pizza, 
  Coffee, 
  ClipboardList, 
  Utensils, 
  Package, 
  Salad,
  User,
  Scale,
  Target,
  Stethoscope,
  ChefHat,
  Flame,
  Soup,
  Gift,
  Activity,
  CheckCircle2,
  TrendingUp,
  Brain
} from 'lucide-react';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export const CinematicStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Scene Pinning & Dashboard Evolution
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=800%', // Increased scroll length for smoother pacing
          scrub: 1.5, // Slightly slower scrub for cinematic feel
          pin: true,
        }
      });

      // Scene 1: Chaos to Order
      tl.to('.chaos-item', {
        x: (i) => (i % 2 === 0 ? -800 : 800),
        y: (i) => (Math.random() - 0.5) * 600,
        opacity: 0,
        scale: 0.2,
        rotation: () => (Math.random() - 0.5) * 180,
        duration: 3,
        ease: 'power2.inOut',
        stagger: { amount: 1.5 }
      })
      .fromTo('.order-text', { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 2, ease: 'expo.out' }, '-=1.5')
      .fromTo(dashboardRef.current, { scale: 0.4, opacity: 0, filter: 'blur(30px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 3, ease: 'expo.out' }, '-=1.5');

      // Scene 2: Journey / Silhouette
      tl.to('.order-text', { opacity: 0, y: -100, filter: 'blur(10px)', duration: 1.5 })
      .fromTo('.journey-content', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2 })
      .to('.dashboard-data-1', { background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', duration: 1.5 }, '-=1')
      .to('.journey-question', { opacity: 1, scale: 1, stagger: 0.15, duration: 1.5, ease: 'back.out(1.7)' });

      // Scene 3: Chef Integration
      tl.to('.journey-content', { opacity: 0, scale: 0.9, filter: 'blur(10px)', duration: 1.5 })
      .fromTo('.chef-content', { opacity: 0, x: 100, filter: 'blur(20px)' }, { opacity: 1, x: 0, filter: 'blur(0px)', duration: 2 })
      .to('.dashboard-status', { textContent: 'Chef Assigned', duration: 1, ease: 'none' })
      .to('.dashboard-progress-1', { width: '100%', duration: 2, ease: 'power2.inOut' }, '-=1');

      // Scene 4: Delivery / Packaging
      tl.to('.chef-content', { opacity: 0, y: -100, filter: 'blur(20px)', duration: 1.5 })
      .fromTo('.delivery-content', { opacity: 0, scale: 0.8, filter: 'blur(30px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 2.5, ease: 'expo.out' })
      .to('.dashboard-delivery', { opacity: 1, y: 0, duration: 1.5, ease: 'back.out' });

      // Scene 5: Progress & Optimization
      tl.to('.delivery-content', { opacity: 0, y: 50, filter: 'blur(20px)', duration: 1.5 })
      .fromTo('.progress-content', { opacity: 0, y: 100, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2 })
      .to('.dashboard-score', { 
        textContent: 9.4, 
        duration: 2.5, 
        snap: { textContent: 0.1 },
        ease: 'power1.inOut'
      })
      .to('.dashboard-bg', { 
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))', 
        duration: 2 
      }, '-=2');

      // Scene 6: Zoom Out / Final Ecosystem
      tl.to('.progress-content', { opacity: 0, filter: 'blur(10px)', duration: 1.5 })
      .to(dashboardRef.current, { scale: 0.5, y: -150, opacity: 0.4, filter: 'blur(10px)', duration: 3, ease: 'power2.inOut' })
      .fromTo('.final-statement', { opacity: 0, scale: 0.8, y: 100 }, { opacity: 1, scale: 1, y: 0, duration: 2, ease: 'expo.out' }, '-=2');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      {/* Background Chaos Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="chaos-item absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 5 === 0 && <ShoppingBag className="w-16 h-16 text-white/10" />}
            {i % 5 === 1 && <Pizza className="w-16 h-16 text-white/10" />}
            {i % 5 === 2 && <ClipboardList className="w-16 h-16 text-white/10" />}
            {i % 5 === 3 && <Package className="w-16 h-16 text-white/10" />}
            {i % 5 === 4 && <Utensils className="w-16 h-16 text-white/10" />}
          </div>
        ))}
      </div>

      {/* Persistent Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          ref={dashboardRef}
          className="order-dashboard w-[90%] max-w-4xl aspect-[16/9] bg-white/[0.02] backdrop-blur-3xl rounded-[64px] border border-white/10 p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col justify-between opacity-0 dashboard-bg"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-4xl font-bold tracking-tighter dashboard-status"></h3>
            </div>
            <div className="w-16 h-16 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
              <Activity className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 dashboard-data-1">
               <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-emerald-500 dashboard-progress-1 w-0" />
               </div>
            </div>
            <div className="p-8 bg-white/5 rounded-[32px] border border-white/10">
               <p className="text-white text-6xl font-black tracking-tighter dashboard-score"></p>
            </div>
            <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 opacity-0 dashboard-delivery translate-y-10">
               <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Delivery</p>
               <p className="text-white text-2xl font-bold tracking-tight">In Transit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Content Layers */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* Scene 1 Text */}
        <div className="order-text absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
            Stop Managing. <br />
            <span className="text-emerald-400">Start Living.</span>
          </h2>
        </div>

        {/* Scene 2: Journey */}
        <div className="journey-content absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Every body is unique.</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
            {['Condition: None', 'Goal: Longevity', 'Preference: Organic', 'Daily Activity: High'].map((q, i) => (
              <div key={i} className="journey-question opacity-0 scale-50 px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-bold">
                {q}
              </div>
            ))}
          </div>
        </div>

        {/* Scene 3: Chef */}
        <div className="chef-content absolute inset-y-0 right-20 flex flex-col justify-center max-w-md opacity-0">
           <div className="p-10 bg-white/5 backdrop-blur-2xl rounded-[48px] border border-white/10">
              <ChefHat className="w-16 h-16 text-emerald-400 mb-8" />
              <h2 className="text-4xl font-bold tracking-tighter mb-6">Chef receives <br /> the signal.</h2>
              <p className="text-white/40 text-xl font-light">Your data transforms into ingredients, meticulously sourced and clinically prepared.</p>
           </div>
        </div>

        {/* Scene 4: Delivery */}
        <div className="delivery-content absolute inset-0 flex flex-col items-center justify-center text-center opacity-0">
           <Gift className="w-32 h-32 text-emerald-400 mb-12" />
           <h2 className="text-6xl md:text-8xl font-black tracking-tighter">Luxury. <br /> Arriving Daily.</h2>
        </div>

        {/* Scene 5: Progress */}
        <div className="progress-content absolute inset-y-0 left-20 flex flex-col justify-center max-w-md opacity-0">
           <TrendingUp className="w-16 h-16 text-emerald-400 mb-8" />
           <h2 className="text-4xl font-bold tracking-tighter mb-6">Optimization <br /> in Motion.</h2>
           <p className="text-white/40 text-xl font-light">Weekly clinical reviews ensure your nutrition evolves as your body improves.</p>
        </div>

        {/* Scene 6: Final */}
        <div className="final-statement absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0">
           <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12">
              Your Personal <br />
              <span className="text-emerald-400">Nutrition Chef.</span>
           </h2>
           <p className="text-white/40 text-2xl font-light max-w-2xl">Supported by experts. Guided by data. <br /> Built for better health.</p>
        </div>

      </div>
    </div>
  );
};
