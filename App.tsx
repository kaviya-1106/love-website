
import React, { useRef } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Reasons from './components/Reasons';
import LoveLetter from './components/LoveLetter';
import Countdown from './components/Countdown';
import Surprise from './components/Surprise';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  const scrollToJourney = () => {
    journeyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      <FloatingHearts />
      
      <Hero onExplore={scrollToJourney} />
      
      <div ref={journeyRef}>
        <Timeline />
      </div>
      
      <Gallery />
      <Reasons />
      <LoveLetter />
      <Countdown />
      <Surprise />

      <footer className="py-12 bg-rose-50 text-center border-t border-rose-100">
        <p className="text-rose-400 font-cursive text-2xl mb-2">Made with all my love</p>
        <p className="text-slate-400 text-sm">© 2025 • Forever & Always</p>
      </footer>
    </div>
  );
};

export default App;
