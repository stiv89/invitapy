'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Drawer from '../../components/Drawer';

export default function Contacto() {
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
        Contacto
      </motion.h1>
      <motion.form
        className="max-w-md mx-auto space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.input
          placeholder="Nombre"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          placeholder="Teléfono"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="datetime-local"
          placeholder="Fecha y hora del evento"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          placeholder="Tipo de evento"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          placeholder="Mensaje"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          onClick={() => openDrawer('')}
          className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center pulse-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send className="w-5 h-5 mr-2" />
          Solicitar
        </motion.button>
      </motion.form>
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a href="https://wa.me/595XXXXXXXXX" className="text-green-600 hover:underline">WhatsApp</a>
        <p className="mt-4">Medios de pago: Transferencia, efectivo</p>
      </motion.div>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
