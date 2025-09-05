'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Drawer from '../../components/Drawer';

export default function Precios() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openDrawer = (plan: string) => {
    setSelectedPlan(plan);
    setDrawerOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nuestros planes
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-8 rounded shadow"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
        >
          <h2 className="text-2xl font-bold flex items-center">
            Pack Esencial
            <motion.div
              className="ml-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </h2>
          <p className="text-xl">Gs. 200.000</p>
          <ul className="mt-4 space-y-2">
            <li>Invitación web</li>
            <li>Galería</li>
            <li>Confirmación de asistencia</li>
            <li>Música a elección</li>
            <li>Gestión automática de asistencia</li>
            <li>Vista para sugerir música</li>
            <li>Cuenta atrás</li>
          </ul>
          <motion.button
            onClick={() => openDrawer('Esencial')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar
          </motion.button>
        </motion.div>
        <motion.div
          className="bg-white p-8 rounded shadow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
        >
          <h2 className="text-2xl font-bold flex items-center">
            Pack Premium
            <motion.div
              className="ml-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </h2>
          <p className="text-xl">Gs. 350.000</p>
          <ul className="mt-4 space-y-2">
            <li>Todo lo del Esencial</li>
            <li>Galería ampliada (hasta 15 fotos)</li>
            <li>&quot;Agendar&quot; (save the date)</li>
            <li>Colores y tipografía personalizados</li>
            <li>Vista para regalos/datos bancarios</li>
          </ul>
          <motion.button
            onClick={() => openDrawer('Premium')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar
          </motion.button>
        </motion.div>
      </div>
      <motion.p
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Entrega 24–48h según info, estructura no modificable, 100% pago, vigencia hasta 5 días post-evento
      </motion.p>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
