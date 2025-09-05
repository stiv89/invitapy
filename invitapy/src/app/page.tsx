'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Users, Zap, MapPin, Gift, Music } from 'lucide-react';
import Drawer from '../components/Drawer';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openDrawer = (plan: string) => {
    setSelectedPlan(plan);
    setDrawerOpen(true);
  };

  return (
    <div>
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Partículas simuladas con CSS */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full sparkle"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full sparkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-3 h-3 bg-white rounded-full sparkle" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 typewriter"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3 }}
          >
            Invitaciones digitales que hacen brillar tu evento ✨
          </motion.h1>
          <motion.p
            className="text-xl mb-8 fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            Entrega 24–48h; RSVP, galería, countdown
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            <motion.button
              onClick={() => openDrawer('')}
              className="bg-white text-blue-600 px-6 py-3 rounded font-semibold pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver planes
            </motion.button>
            <Link href="/demo">
              <motion.button
                className="bg-transparent border border-white px-6 py-3 rounded font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver demo
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Prueba social */}
      <motion.section
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold">24–48h de entrega</h3>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold">100% online</h3>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold">RSVP integrado</h3>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Funciones clave */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Funciones clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <Music className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3>Galería + música</h3>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3>RSVP automático</h3>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3>Cuenta regresiva</h3>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3>Ubicaciones</h3>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <Gift className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3>Regalos (Premium)</h3>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Planes */}
      <motion.section
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Planes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded shadow"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold">Esencial</h3>
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
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold">Premium</h3>
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
          <p className="text-center mt-8">Vigencia 5 días post-evento, entrega 24–48h</p>
        </div>
      </motion.section>

      {/* Cómo funciona mini */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <h3>Paso 1</h3>
              <p>Elegí plan</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <h3>Paso 2</h3>
              <p>Formulario</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <h3>Paso 3</h3>
              <p>100% pago</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <h3>Paso 4</h3>
              <p>Entrega/publicación</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ mini */}
      <motion.section
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            <motion.details
              className="border p-4 rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <summary className="font-bold">¿La estructura se puede modificar?</summary>
              <p>No</p>
            </motion.details>
            <motion.details
              className="border p-4 rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <summary className="font-bold">¿Qué tengo que enviar?</summary>
              <p>Colores, fotos, música, ubicaciones, fechas/horarios, momentos</p>
            </motion.details>
            <motion.details
              className="border p-4 rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <summary className="font-bold">¿Formas de pago?</summary>
              <p>50% para iniciar y 50% contra entrega</p>
            </motion.details>
            <motion.details
              className="border p-4 rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <summary className="font-bold">¿Cuánto tarda?</summary>
              <p>24–48h</p>
            </motion.details>
            <motion.details
              className="border p-4 rounded"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <summary className="font-bold">¿Vigencia?</summary>
              <p>Hasta 5 días después del evento</p>
            </motion.details>
          </div>
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
          <p>Email: info@invitapy.com</p>
          <p>WhatsApp: +595 XXX XXX XXX</p>
          <p>Checklist: colores, fotos, ubicaciones, fecha/hora</p>
        </div>
      </motion.section>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
