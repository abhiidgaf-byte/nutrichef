/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { StorySection } from './components/StorySection';
import { Pricing } from './components/Pricing';
import { ComparisonTable } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA, Footer } from './components/Footer';

import { CinematicStory } from './components/CinematicStory';

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      
      {/* Cinematic Storytelling Experience */}
      <CinematicStory />
      
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
