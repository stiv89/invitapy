'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Drawer from './Drawer';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <motion.header
        className="bg-white shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-gray-800 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center">
              InvitaPy
              <motion.div
                className="ml-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-yellow-400 sparkle" />
              </motion.div>
            </Link>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Inicio</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/como-funciona" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Cómo funciona</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/precios" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Precios</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Preguntas frecuentes</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/contacto" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Contacto</Link>
            </motion.div>
          </nav>
          <motion.button
            onClick={() => setDrawerOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar
          </motion.button>
        </div>
      </motion.header>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan="" />
    </>
  );
}
