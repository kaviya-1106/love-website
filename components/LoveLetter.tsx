import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateLovePoem } from '../services/geminiService';

const LoveLetter: React.FC = () => {
  const [poem, setPoem] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoem = async () => {
      const p = await generateLovePoem();
      setPoem(p);
      setLoading(false);
    };
    fetchPoem();
  }, []);

  return (
    <section className="py-24 bg-rose-50 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden"
        >
          {/* Paper Texture Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          
          <h2 className="text-3xl font-cursive text-rose-600 mb-8">My Dearest Udhay,</h2>
          
          <div className="space-y-6 text-lg text-slate-700 font-serif leading-loose text-left italic">
            <p>
              Looking back at the past five years, it feels like we've lived a lifetime of joy in just sixty months. You have been my anchor in stormy seas and my sun on the brightest days.
            </p>
            <p>
              Every morning I wake up feeling like the luckiest person alive, knowing that I get to spend another day by your side. You've taught me what it means to love without limits and to be loved in return.
            </p>
            
            <div className="py-8 text-center bg-rose-50/50 rounded-2xl border-x-2 border-rose-200">
              {loading ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-rose-200 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-rose-200 rounded w-1/2 mx-auto" />
                </div>
              ) : (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="whitespace-pre-line text-rose-900 font-bold"
                >
                  {poem}
                </motion.p>
              )}
            </div>

            <p>
              Thank you for choosing me every single day for five beautiful years. Here is to five hundred more, Na bava.
            </p>
          </div>
          
          <div className="mt-12 text-right">
            <p className="text-2xl font-cursive text-rose-500">Forever Yours,</p>
            <p className="text-xl font-serif text-rose-900 mt-1">Your Love</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;