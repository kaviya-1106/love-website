import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 to-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="inline-block mb-6 text-rose-500"
        >
          <Heart size={64} fill="currentColor" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-rose-900 mb-4 leading-tight">
          Happy 5th <br /> 
          <span className="text-rose-500">Valentine’s Day Udhay</span> ❤️
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 font-cursive italic mb-10 max-w-2xl mx-auto">
          "Half a decade down, a lifetime to go. Every second with you, my dear Udhay, has been my favorite adventure."
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExplore}
          className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg shadow-rose-200 hover:bg-rose-600 transition-colors"
        >
          Our Journey Together
        </motion.button>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-rose-300"
        >
          <div className="w-1 h-12 bg-rose-200 rounded-full mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;