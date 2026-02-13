
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MEMORIES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 bg-rose-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-rose-900 mb-4">Memory Gallery</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Every photo tells a chapter of our beautiful story. Here are some of my favorites.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMORIES.map((memory, index) => (
            <motion.div
              key={index}
              layoutId={memory.url}
              onClick={() => setSelectedImg(memory.url)}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-lg"
            >
              <img 
                src={memory.url} 
                alt={memory.caption} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">{memory.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full">
              <X size={32} />
            </button>
            <motion.img
              layoutId={selectedImg}
              src={selectedImg}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
