import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CinematicStory } from './components/CinematicStory';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA, Footer } from './components/Footer';

import { IntakeForm } from './components/IntakeForm';
import { AnalysisTransition } from './components/AnalysisTransition';
import { BlueprintResult } from './components/BlueprintResult';
import { SubscriptionSelect } from './components/SubscriptionSelect';
import { CookSchedule } from './components/CookSchedule';
import { CelebrationScreen } from './components/CelebrationScreen';
import { CustomerDashboard } from './components/CustomerDashboard';

import { FlowStep, UserProfile, VisitSchedule } from './types';

const INITIAL_PROFILE: UserProfile = {
  name: 'Abhinav Sharma',
  age: 32,
  neighborhood: 'Koramangala',
  phone: '+91 98765 43210',
  healthConditions: ['Diabetes Type 2 / Pre-Diabetic'],
  goals: ['Fat Loss & Body Recomp', 'Lean Muscle & Strength'],
  dietType: 'Non-Veg',
  allergies: ['Peanut Allergy'],
  cuisinePreference: 'South & North Indian Fusion',
  spiceLevel: 'Medium'
};

const INITIAL_SCHEDULE: VisitSchedule = {
  days: ['Monday', 'Wednesday', 'Saturday'],
  timeSlot: 'Morning (7:30 AM - 9:30 AM)',
  startDate: 'Tomorrow'
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<FlowStep>('landing');
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [schedule, setSchedule] = useState<VisitSchedule>(INITIAL_SCHEDULE);

  const handleStartFlow = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setCurrentStep('intake_form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToLanding = () => {
    setCurrentStep('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#FAF8F5] text-stone-900 min-h-screen selection:bg-emerald-800 selection:text-amber-300 font-sans">
      
      {/* Top Navbar */}
      <Navbar 
        currentStep={currentStep}
        onStartFlow={handleStartFlow}
        onNavigateStep={(step) => {
          setCurrentStep(step);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onReturnToLanding={handleReturnToLanding}
      />

      <AnimatePresence mode="wait">
        
        {/* STEP 0: LANDING PAGE */}
        {currentStep === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onStartFlow={handleStartFlow} />
            <TrustBar />
            <CinematicStory />
            <Pricing onStartFlow={handleStartFlow} />
            <FAQ />
            <FinalCTA onStartFlow={handleStartFlow} />
            <Footer />
          </motion.div>
        )}

        {/* STEP 1: INTAKE FORM */}
        {currentStep === 'intake_form' && (
          <motion.div
            key="intake_form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <IntakeForm
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              onNext={() => {
                setCurrentStep('analysis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onComplete={() => {
                setCurrentStep('analysis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onCancel={handleReturnToLanding}
            />
          </motion.div>
        )}

        {/* STEP 2: ANALYSIS TRANSITION */}
        {currentStep === 'analysis' && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnalysisTransition
              userProfile={userProfile}
              onComplete={() => {
                setCurrentStep('blueprint_result');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        )}

        {/* STEP 3: BLUEPRINT RESULT */}
        {currentStep === 'blueprint_result' && (
          <motion.div
            key="blueprint_result"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <BlueprintResult
              userProfile={userProfile}
              onNext={() => {
                setCurrentStep('subscription_select');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        )}

        {/* STEP 4: SUBSCRIPTION PLAN SELECT */}
        {currentStep === 'subscription_select' && (
          <motion.div
            key="subscription_select"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <SubscriptionSelect
              selectedPlanId={selectedPlanId}
              setSelectedPlanId={setSelectedPlanId}
              onNext={() => {
                setCurrentStep('cook_schedule');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBack={() => {
                setCurrentStep('blueprint_result');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        )}

        {/* STEP 5: COOK MATCH & SCHEDULE */}
        {currentStep === 'cook_schedule' && (
          <motion.div
            key="cook_schedule"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <CookSchedule
              userProfile={userProfile}
              schedule={schedule}
              setSchedule={setSchedule}
              onConfirm={() => {
                setCurrentStep('celebration');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBack={() => {
                setCurrentStep('subscription_select');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        )}

        {/* STEP 6: CELEBRATION */}
        {currentStep === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <CelebrationScreen
              userProfile={userProfile}
              schedule={schedule}
              onGoToDashboard={() => {
                setCurrentStep('dashboard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        )}

        {/* STEP 7: CUSTOMER DASHBOARD */}
        {currentStep === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <CustomerDashboard
              userProfile={userProfile}
              schedule={schedule}
              selectedPlanId={selectedPlanId}
              onRestartFlow={handleReturnToLanding}
            />
          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}
