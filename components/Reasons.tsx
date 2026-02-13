
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { REASONS } from '../constants';

const Reasons: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">Why I Love You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all group"
            >
              <div className="mb-4 text-rose-400 group-hover:text-rose-500 transition-colors">
                <Heart fill={index % 2 === 0 ? "currentColor" : "none"} />
              </div>
              <h3 className="text-xl font-bold text-rose-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
