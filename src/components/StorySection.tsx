import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { 
  ShoppingBag, 
  ChefHat, 
  Clock, 
  UtensilsCrossed, 
  Smartphone, 
  Heart, 
  Activity, 
  CheckCircle2, 
  User,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const Scene1 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0, 0.1, 0.15], [0, 1, 0]);
  const scale = useTransform(progress, [0, 0.1, 0.15], [0.8, 1, 1.2]);
  
  // Floating icons
  const icon1Pos = useTransform(progress, [0, 0.15], [0, 200]);
  const icon2Pos = useTransform(progress, [0, 0.15], [0, -150]);
  const icon3Pos = useTransform(progress, [0, 0.15], [0, -100]);
  const iconRotate = useTransform(progress, [0, 0.15], [0, 360]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
        <motion.div style={{ rotate: iconRotate }} className="absolute inset-0">
          <motion.div style={{ x: icon1Pos, y: icon1Pos }} className="absolute top-0 left-0 p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
            <ShoppingBag className="w-8 h-8 text-white/60" />
          </motion.div>
          <motion.div style={{ x: icon2Pos, y: -icon2Pos }} className="absolute bottom-0 right-0 p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
            <Smartphone className="w-8 h-8 text-white/60" />
          </motion.div>
          <motion.div style={{ x: -icon1Pos, y: icon3Pos }} className="absolute top-1/2 -left-12 p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
            <UtensilsCrossed className="w-8 h-8 text-white/60" />
          </motion.div>
          <motion.div style={{ x: icon3Pos, y: icon2Pos }} className="absolute bottom-1/4 -right-12 p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
            <Clock className="w-8 h-8 text-white/60" />
          </motion.div>
        </motion.div>
        
        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
          <User className="w-16 h-16 text-white" />
        </div>
      </div>
      
      <motion.h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
        Too many choices. <br />
        <span className="font-semibold">Too little consistency.</span>
      </motion.h2>
    </motion.div>
  );
};

const Scene2 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.15, 0.2, 0.25], [0, 1, 0]);
  const y = useTransform(progress, [0.15, 0.2, 0.25], [50, 0, -50]);
  
  return (
    <motion.div 
      style={{ opacity, y }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div 
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center mb-12 shadow-2xl shadow-emerald-500/20"
      >
        <span className="text-white text-5xl font-bold italic">N</span>
      </motion.div>
      
      <h2 className="text-4xl md:text-6xl font-light text-white mb-12 tracking-tight">
        One platform for everything <br />
        <span className="font-semibold text-emerald-400">your nutrition needs.</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {['Nutrition Plan', 'Chef', 'Progress', 'Health'].map((item, i) => (
          <motion.div 
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 flex flex-col items-center gap-4"
          >
            <div className="p-3 bg-emerald-500/20 rounded-2xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-white font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Scene3 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.25, 0.3, 0.35], [0, 1, 0]);
  const scale = useTransform(progress, [0.25, 0.3, 0.35], [0.9, 1, 1.1]);
  
  const metrics = [
    { label: 'Age', value: '28', pos: 'top-0 -left-32' },
    { label: 'Weight', value: '74kg', pos: 'top-20 -left-40' },
    { label: 'Activity', value: 'High', pos: 'bottom-20 -left-40' },
    { label: 'Lifestyle', value: 'Active', pos: 'bottom-0 -left-32' },
    { label: 'Health', value: 'PCOS', pos: 'top-0 -right-32' },
    { label: 'Food', value: 'Vegan', pos: 'top-20 -right-40' },
    { label: 'Protein', value: '140g', pos: 'bottom-20 -right-40' },
    { label: 'Calories', value: '2200', pos: 'bottom-0 -right-32' },
  ];

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="relative w-64 h-[400px] flex items-center justify-center">
        {/* Silhouette Mockup */}
        <div className="absolute inset-0 bg-white/5 rounded-[100px] blur-2xl opacity-50" />
        <User className="w-full h-full text-white/10 scale-150" />
        
        {metrics.map((m, i) => (
          <motion.div 
            key={m.label}
            className={`absolute ${m.pos} p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 text-left min-w-[120px] shadow-xl`}
            initial={{ opacity: 0, x: i < 4 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{m.label}</p>
            <p className="text-white font-semibold">{m.value}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div className="mt-12">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
          Your nutrition starts with <br />
          <span className="font-semibold italic">understanding you.</span>
        </h2>
      </motion.div>
    </motion.div>
  );
};

const Scene4 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.35, 0.4, 0.45], [0, 1, 0]);
  
  const team = [
    { role: 'Nutritionist', color: 'bg-blue-500' },
    { role: 'Chef', color: 'bg-orange-500' },
    { role: 'Physician', color: 'bg-emerald-500' },
    { role: 'Tracking', color: 'bg-purple-500' },
  ];

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Glowing Circle */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-emerald-500/30 rounded-full"
        />
        
        {team.map((t, i) => (
          <motion.div 
            key={t.role}
            className="absolute flex flex-col items-center gap-3"
            style={{
              transform: `rotate(${i * 90}deg) translateY(-140px) rotate(-${i * 90}deg)`
            }}
          >
            <div className={`w-16 h-16 ${t.color} rounded-full flex items-center justify-center shadow-lg border-4 border-black`}>
              <User className="w-8 h-8 text-white" />
            </div>
            <span className="text-white text-sm font-medium tracking-wide">{t.role}</span>
          </motion.div>
        ))}
        
        <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)]">
          <span className="text-white text-4xl font-bold italic">N</span>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
          An entire team working <br />
          <span className="font-semibold text-emerald-400">behind every meal.</span>
        </h2>
      </div>
    </motion.div>
  );
};

const Scene5 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.45, 0.5, 0.55], [0, 1, 0]);
  const rotateX = useTransform(progress, [0.45, 0.5, 0.55], [45, 0, -45]);
  
  const stats = ['42g Protein', '610 Calories', 'Low GI', 'PCOS Friendly', 'High Fibre'];

  return (
    <motion.div 
      style={{ opacity, perspective: 1000 }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div 
        style={{ rotateX }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-3xl rounded-[40px] p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-12"
      >
        <div className="w-64 h-64 relative">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl" />
          <div className="absolute inset-4 bg-stone-100 rounded-full shadow-inner flex items-center justify-center border-b-8 border-stone-300">
             <UtensilsCrossed className="w-24 h-24 text-emerald-500/40" />
          </div>
        </div>
        
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-semibold text-white mb-6">Mediterranean Salmon</h3>
          <div className="flex flex-wrap gap-2">
            {stats.map(s => (
              <span key={s} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      
      <div className="mt-16">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
          Personalized meals, <br />
          <span className="font-semibold">crafted for your goals.</span>
        </h2>
      </div>
    </motion.div>
  );
};

const Scene6 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.55, 0.6, 0.65], [0, 1, 0]);
  const scale = useTransform(progress, [0.55, 0.6, 0.65], [0.8, 1, 1.2]);
  
  return (
    <motion.div 
      style={{ opacity, scale }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, rotateY: 45 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/5 backdrop-blur-3xl rounded-[60px] p-12 border border-white/10 shadow-2xl flex flex-col items-center gap-8"
        >
          <div className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center border border-emerald-500/30">
            <ChefHat className="w-12 h-12 text-emerald-400" />
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-white tracking-tight">Chef Service. <span className="text-emerald-400">Zero Friction.</span></h3>
            <p className="text-white/40 text-xl max-w-md mx-auto leading-relaxed font-light">
              Every meal is prepared in a controlled environment by your dedicated chef, 
              ensuring 100% adherence to your clinical or fitness requirements.
            </p>
          </div>
          
          <div className="flex gap-4">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
             ))}
          </div>
        </motion.div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
          Elite preparation, <br />
          <span className="font-semibold text-emerald-400 italic">handled entirely for you.</span>
        </h2>
      </div>
    </motion.div>
  );
};

const Scene7 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.65, 0.7, 0.75], [0, 1, 0]);
  const bgOpacity = useTransform(progress, [0.65, 0.7, 0.75], [0, 1, 1]);
  
  return (
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
    >
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-white" />
      
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
           {[
             { label: 'Weight', value: '-4.2kg', icon: TrendingDown, color: 'text-emerald-600' },
             { label: 'Muscle', value: '+1.8kg', icon: TrendingUp, color: 'text-blue-600' },
             { label: 'Score', value: '94/100', icon: BarChart3, color: 'text-purple-600' },
           ].map((stat, i) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               className="flex items-center gap-6 p-6 bg-stone-50 rounded-3xl border border-stone-100 shadow-sm"
             >
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                   <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-left">
                   <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
                   <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
             </motion.div>
           ))}
        </div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-white p-8 rounded-[40px] shadow-2xl border border-stone-100 text-left"
        >
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-stone-900">Weekly Report</h3>
              <span className="text-stone-400 font-medium">July 21-28</span>
           </div>
           
           <div className="space-y-6">
              {[
                { day: 'Mon', height: '60%' },
                { day: 'Tue', height: '85%' },
                { day: 'Wed', height: '70%' },
                { day: 'Thu', height: '95%' },
                { day: 'Fri', height: '80%' },
                { day: 'Sat', height: '65%' },
                { day: 'Sun', height: '90%' },
              ].map(d => (
                <div key={d.day} className="flex items-center gap-4">
                   <span className="w-10 text-stone-400 text-xs font-semibold">{d.day}</span>
                   <div className="flex-1 h-3 bg-stone-100 rounded-full overflow-hidden">
                      <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: d.height }}
                         className="h-full bg-emerald-500"
                      />
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-8 pt-8 border-t border-stone-100 flex items-center justify-between">
              <div>
                 <p className="text-stone-400 text-xs font-medium uppercase mb-1">Consistency</p>
                 <p className="text-stone-900 font-bold text-xl">Perfect Streak 🔥</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                 <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
           </div>
        </motion.div>
      </div>
      
      <div className="relative z-10 mt-16">
        <h2 className="text-4xl md:text-6xl font-light text-stone-900 mb-4 tracking-tight">
          Small habits. <br />
          <span className="font-semibold text-emerald-600 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Measurable results.</span>
        </h2>
      </div>
    </motion.div>
  );
};

const Scene8 = ({ progress }: { progress: any }) => {
  const opacity = useTransform(progress, [0.75, 0.8, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0.75, 0.8, 1], [0.8, 1, 1]);
  
  return (
    <motion.div 
      style={{ opacity, scale }}
      className="fixed inset-0 flex flex-col items-center justify-center p-6 text-center z-20 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>
      
      <motion.div 
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         className="relative z-10"
      >
         <motion.div 
           animate={{ 
             scale: [1, 1.05, 1],
             opacity: [0.5, 1, 0.5] 
           }}
           transition={{ duration: 4, repeat: Infinity }}
           className="w-32 h-32 bg-emerald-500 rounded-[40px] flex items-center justify-center mx-auto mb-16 shadow-[0_0_60px_rgba(16,185,129,0.4)]"
         >
            <span className="text-white text-6xl font-bold italic">N</span>
         </motion.div>
         
         <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
            Nutrition That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">Evolves With You.</span>
         </h1>
         
         <p className="text-white/60 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-16">
            From your first meal to your healthiest life, <br />
            NutriChef adapts every step of the journey.
         </p>
         
         <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-5 bg-white text-black rounded-full font-bold text-xl flex items-center gap-3 mx-auto transition-all hover:bg-emerald-50 shadow-xl"
         >
            Start Your Journey
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
         </motion.button>
      </motion.div>
      
      <div className="absolute bottom-12 left-0 w-full flex justify-center gap-12 text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold">
         <span>Personalized</span>
         <span>Expert Driven</span>
         <span>Science Backed</span>
      </div>
    </motion.div>
  );
};

export const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="how-it-works" ref={containerRef} className="relative h-[800vh] bg-black">
      <Scene1 progress={smoothProgress} />
      <Scene2 progress={smoothProgress} />
      <Scene3 progress={smoothProgress} />
      <Scene4 progress={smoothProgress} />
      <Scene5 progress={smoothProgress} />
      <Scene6 progress={smoothProgress} />
      <Scene7 progress={smoothProgress} />
      <Scene8 progress={smoothProgress} />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {[...Array(8)].map((_, i) => (
           <motion.div 
             key={i}
             className="w-1 h-12 bg-white/10 rounded-full overflow-hidden"
           >
              <motion.div 
                className="w-full h-full bg-emerald-500 origin-top"
                style={{ scaleY: useTransform(smoothProgress, [i/8, (i+1)/8], [0, 1]) }}
              />
           </motion.div>
        ))}
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to start journey</span>
        <motion.div 
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-[1px] h-8 bg-gradient-to-b from-emerald-500/0 via-emerald-500 to-emerald-500/0"
        />
      </motion.div>
    </div>
  );
};
