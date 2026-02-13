
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, Heart, XCircle } from 'lucide-react';

const Surprise: React.FC = () => {
  const [stage, setStage] = useState<'closed' | 'asking' | 'final'>('closed');
  const [showNoMessage, setShowNoMessage] = useState(false);

  const handleNoClick = () => {
    setShowNoMessage(true);
    setTimeout(() => setShowNoMessage(false), 2000);
  };

  return (
    <section className="py-24 bg-rose-500 px-4 text-center text-white relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Sparkles className="absolute top-10 left-10 animate-pulse" size={48} />
        <Sparkles className="absolute bottom-20 right-20 animate-bounce" size={64} />
        <Sparkles className="absolute top-1/2 left-1/4 animate-ping" size={32} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl font-serif mb-8">One Last Thing...</h2>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === 'closed' && (
              <motion.button
                key="gift"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setStage('asking')}
                className="bg-white text-rose-500 p-8 rounded-full shadow-2xl cursor-pointer flex flex-col items-center"
              >
                <Gift size={64} />
                <span className="mt-4 font-bold uppercase tracking-widest">Click to Open</span>
              </motion.button>
            )}

            {stage === 'asking' && (
              <motion.div
                key="asking"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="bg-white text-rose-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative w-full max-w-md"
              >
                <h3 className="text-3xl font-cursive text-rose-600 mb-8">Shall we share our years together forever?</h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setStage('final')}
                    className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-rose-600 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Heart size={20} fill="currentColor" /> Yes!
                  </motion.button>

                  <div className="relative w-full sm:w-auto">
                    <motion.button
                      whileHover={{ x: [0, -10, 10, -10, 10, 0] }}
                      onClick={handleNoClick}
                      className="bg-slate-100 text-slate-400 px-8 py-3 rounded-full font-bold text-lg cursor-not-allowed w-full sm:w-auto"
                    >
                      No
                    </motion.button>
                    
                    <AnimatePresence>
                      {showNoMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-rose-200 text-sm font-bold bg-rose-600 px-3 py-1 rounded-md"
                        >
                          Please click Yes only! 😉
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}

            {stage === 'final' && (
              <motion.div
                key="final"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-white text-rose-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative w-full"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-rose-500 text-white p-5 rounded-full shadow-xl"
                >
                  <Heart size={40} fill="currentColor" />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-cursive text-rose-600 mb-6 mt-4">
                  Love you Udhay (Na bava) ❤️
                </h3>
                
                <p className="text-lg text-slate-600 italic leading-relaxed">
                  "You are my heart's home, and I am so happy we are entering our 5th Valentine's Day side by side. I promise to hold your hand through every milestone yet to come."
                </p>

                <div className="mt-8 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                      className="text-rose-400"
                    >
                      <Sparkles size={24} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Surprise;
