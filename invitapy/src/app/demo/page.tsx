'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart } from 'lucide-react';
import Drawer from '../../components/Drawer';

export default function Demo() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openDrawer = (plan: string) => {
    setSelectedPlan(plan);
    setDrawerOpen(true);
  };

  const demos = [
    { id: 1, title: 'Demo 1', theme: 'Boda clásica', img: '/placeholder1.jpg' },
    { id: 2, title: 'Demo 2', theme: 'Fiesta infantil', img: '/placeholder2.jpg' },
    { id: 3, title: 'Demo 3', theme: 'Cumpleaños', img: '/placeholder3.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Demos de invitaciones
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {demos.map((demo, index) => (
          <motion.div
            key={demo.id}
            className="text-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setLightbox(demo.img)}
          >
            <motion.div
              className="bg-gray-200 h-64 mb-4 rounded overflow-hidden relative"
              whileHover={{ boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Eye className="w-12 h-12 text-gray-500" />
              </div>
              <motion.div
                className="absolute top-2 right-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-red-500" />
              </motion.div>
            </motion.div>
            <h2 className="text-2xl font-bold">{demo.title}</h2>
            <p>Temática: {demo.theme}</p>
            <motion.button
              onClick={(e) => { e.stopPropagation(); openDrawer(''); }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quiero una igual
            </motion.button>
          </motion.div>
        ))}
      </div>
      {lightbox && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
        >
          <motion.img
            src={lightbox}
            alt="Demo"
            className="max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
