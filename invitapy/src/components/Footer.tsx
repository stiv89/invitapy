'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link href="/precios" className="hover:underline transition-colors duration-300">Precios</Link></li>
              <li><Link href="/faq" className="hover:underline transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/contacto" className="hover:underline transition-colors duration-300">Contacto</Link></li>
              <li><Link href="/terminos" className="hover:underline transition-colors duration-300">Términos y Condiciones</Link></li>
              <li><Link href="/privacidad" className="hover:underline transition-colors duration-300">Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <motion.div className="flex items-center mb-2" whileHover={{ scale: 1.05 }}>
              <Mail className="w-5 h-5 mr-2" />
              <p>info@invitapy.com</p>
            </motion.div>
            <motion.div className="flex items-center mb-2" whileHover={{ scale: 1.05 }}>
              <Phone className="w-5 h-5 mr-2" />
              <p>WhatsApp: +595 XXX XXX XXX</p>
            </motion.div>
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Share2 className="w-5 h-5 mr-2" />
              <p>Redes sociales: @invitapy</p>
            </motion.div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">InvitaPy</h3>
            <p>Invitaciones digitales en Paraguay</p>
            <motion.p
              className="mt-2 text-yellow-400 font-bold"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ¡Haz magia en tu evento!
            </motion.p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 InvitaPy. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
