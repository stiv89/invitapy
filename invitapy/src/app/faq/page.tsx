'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { question: '¿La estructura se puede modificar?', answer: 'No' },
    { question: '¿Qué tengo que enviar?', answer: 'Colores, fotos, música, ubicaciones, fechas/horarios, momentos' },
    { question: '¿Formas de pago?', answer: '100% al inicio' },
    { question: '¿Cuánto tarda?', answer: '24–48h' },
    { question: '¿Vigencia?', answer: 'Hasta 5 días después del evento' },
    { question: '¿Cómo recibo la invitación?', answer: 'URL lista para compartir' },
    { question: '¿Puedo cambiar música/fotos luego?', answer: 'Política de cambios' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Preguntas frecuentes
      </motion.h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.details
            key={index}
            className="border p-4 rounded bg-white shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <summary className="font-bold cursor-pointer flex items-center justify-between">
              {faq.question}
              <ChevronDown className="w-5 h-5" />
            </summary>
            <motion.p
              className="mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {faq.answer}
            </motion.p>
          </motion.details>
        ))}
      </div>
    </div>
  );
}
