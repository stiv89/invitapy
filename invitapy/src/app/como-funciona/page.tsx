'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ComoFunciona() {
  const steps = [
    { title: 'Paso 1', desc: 'Elegí plan' },
    { title: 'Paso 2', desc: 'Completá formulario + enviá contenidos (colores, 5–15 fotos, música, ubicaciones, fecha/hora)' },
    { title: 'Paso 3', desc: '100% pago y comenzamos' },
    { title: 'Paso 4', desc: 'Entrega link/dominio de tu invitación, lista para compartir' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Cómo funciona
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-bold">{step.title}</h2>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        Tiempos: 24–48h dependiendo de info provista
      </motion.p>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Checklist descargable</h2>
        <ul className="list-disc list-inside">
          <li>Colores</li>
          <li>Fotos (5-15)</li>
          <li>Música</li>
          <li>Ubicaciones</li>
          <li>Fecha/hora</li>
        </ul>
      </motion.div>
    </div>
  );
}
