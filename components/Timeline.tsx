
import React from 'react';
import { motion } from 'framer-motion';
import { MILESTONES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">Our Love Story</h2>
        
        <div className="relative border-l-2 border-rose-100 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-11px] md:left-1/2 md:-ml-2.5 w-5 h-5 bg-rose-500 rounded-full border-4 border-white shadow-sm z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-rose-50 p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <span className="text-rose-400 font-semibold text-sm tracking-widest uppercase">{item.date}</span>
                  <h3 className="text-xl font-serif font-bold text-rose-900 mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
