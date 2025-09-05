'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Users, Zap, MapPin, Gift, Music, Palette, Star, Check, MessageSquare, Camera, Calendar } from 'lucide-react';
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
      {/* Hero con imagen de fondo */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%23667eea" width="1920" height="1080"/><defs><radialGradient id="a" cx=".66" cy=".95" r=".6"><stop offset="0" stop-color="%23667eea"/><stop offset=".3" stop-color="%23764ba2"/><stop offset=".6" stop-color="%23f093fb"/><stop offset="1" stop-color="%23f5576c"/></radialGradient></defs><rect fill="url(%23a)" width="1920" height="1080"/></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay con patrón de celebración */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full sparkle opacity-80"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-yellow-300 rounded-full sparkle opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-pink-300 rounded-full sparkle opacity-70" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-blue-300 rounded-full sparkle opacity-60" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-300 rounded-full sparkle opacity-80" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-pink-200">
                  Invitaciones digitales
                </span>
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-100">
                El detalle que hace tu fiesta inolvidable
              </p>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              ✨ Entrega 24–48h • 📱 RSVP integrado • 📸 Galería con música • ⏰ Countdown en tiempo real
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link href="#planes">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 Ver Planes
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  👀 Ver Demos
                </motion.button>
              </Link>
            </motion.div>

            {/* Sección de demos preview */}
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: 'Boda Elegante', emoji: '💒' },
                  { label: 'Cumpleaños', emoji: '🎂' },
                  { label: '15 Años', emoji: '👑' },
                  { label: 'Bautismo', emoji: '👶' },
                  { label: 'Graduación', emoji: '🎓' }
                ].map((demo, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-3xl mb-2">{demo.emoji}</div>
                    <div className="text-sm font-semibold text-white">{demo.label}</div>
                    <div className="text-xs text-gray-200 mt-1">Ver ejemplo</div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="text-white/80 mt-6 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                🇵🇾 Diseñado en Paraguay • Más de 100 eventos creados • Satisfacción garantizada
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Prueba social mejorada */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ¿Por qué elegir InvitaPy? 🇵🇾
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Clock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-2">⚡ Entrega rápida</h3>
              <p className="text-gray-600">Tu invitación lista en solo 24–48 horas</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold mb-2">🌐 100% digital</h3>
              <p className="text-gray-600">Sin impresión, fácil de compartir por WhatsApp</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-800" />
              <h3 className="text-2xl font-bold mb-2">📝 RSVP automático</h3>
              <p className="text-gray-600">Gestiona confirmaciones sin complicaciones</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonios - nueva sección */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-50 to-red-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Lo que dicen nuestros clientes 💬
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"¡Quedé fascinada! La invitación llegó súper rápido y mis invitados quedaron encantados con el countdown."</p>
              <p className="font-semibold text-blue-600">- María S., Boda 2024</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"El RSVP automático me salvó la vida. Todo super organizado y mis invitados pudieron confirmar fácilmente."</p>
              <p className="font-semibold text-blue-600">- Carlos R., Cumpleaños</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Perfecta para nuestro casamiento. La galería con música hizo que fuera muy especial y emotiva."</p>
              <p className="font-semibold text-blue-600">- Ana & Luis, Boda</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Funciones clave - mejorada */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Todo lo que necesitás en una invitación 🚀
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div 
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Camera className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-gray-800">📸 Galería</h3>
              <p className="text-sm text-gray-600 mt-2">Fotos con música</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold text-gray-800">✅ RSVP</h3>
              <p className="text-sm text-gray-600 mt-2">Confirmación automática</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-800" />
              <h3 className="font-semibold text-gray-800">⏰ Countdown</h3>
              <p className="text-sm text-gray-600 mt-2">Cuenta regresiva</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-gray-800">📍 Ubicaciones</h3>
              <p className="text-sm text-gray-600 mt-2">Mapas integrados</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Gift className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold text-gray-800">🎁 Regalos</h3>
              <p className="text-sm text-gray-600 mt-2">Solo Premium</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Planes mejorados */}
      <motion.section
        id="planes"
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Elegí tu plan perfecto 💎
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Vigencia 5 días post-evento • Entrega 24–48h • Pago 50% inicial + 50% entrega
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">🌟 Esencial</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">Gs. 200.000</div>
                <p className="text-gray-600">Perfecto para empezar</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>📱 Invitación web responsive</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>📸 Galería de fotos</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>✅ Confirmación de asistencia (RSVP)</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>🎵 Música a elección</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>📊 Gestión automática de asistencia</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>🎶 Vista para sugerir música</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>⏰ Cuenta atrás al evento</span>
                </li>
              </ul>
              <motion.button
                onClick={() => openDrawer('Esencial')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors pulse-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🚀 Solicitar Esencial
              </motion.button>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-red-200 relative"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ MÁS POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">💎 Premium</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">Gs. 350.000</div>
                <p className="text-gray-600">La experiencia completa</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-semibold">✨ Todo lo del plan Esencial</span>
                </li>
                <li className="flex items-center text-red-700 font-semibold">
                  <Star className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 fill-current" />
                  <span>🖼️ Galería ampliada (hasta 15 fotos)</span>
                </li>
                <li className="flex items-center text-red-700 font-semibold">
                  <Star className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 fill-current" />
                  <span>📅 "Agendar" (save the date)</span>
                </li>
                <li className="flex items-center text-red-700 font-semibold">
                  <Star className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 fill-current" />
                  <span>🎨 Colores y tipografía personalizados</span>
                </li>
                <li className="flex items-center text-red-700 font-semibold">
                  <Star className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 fill-current" />
                  <span>🎁 Vista para regalos/datos bancarios</span>
                </li>
              </ul>
              <motion.button
                onClick={() => openDrawer('Premium')}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors pulse-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                💎 Solicitar Premium
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cómo funciona - mejorado */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ¿Cómo funciona? Súper fácil 🎯
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            En solo 4 pasos tenés tu invitación lista para compartir
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <Palette className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-3">🎯 Elegí tu plan</h3>
              <p className="text-gray-600">Seleccioná entre Esencial (Gs. 200k) o Premium (Gs. 350k) según tus necesidades</p>
            </motion.div>
            
            <motion.div 
              className="text-center bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-bold mb-3">📝 Enviá tu info</h3>
              <p className="text-gray-600">Completá el formulario con colores, fotos, música, ubicaciones, fecha y hora</p>
            </motion.div>
            
            <motion.div 
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <Check className="w-12 h-12 mx-auto mb-4 text-blue-800" />
              <h3 className="text-xl font-bold mb-3">💳 Pagá la seña</h3>
              <p className="text-gray-600">50% para iniciar el trabajo y 50% contra entrega de tu invitación terminada</p>
            </motion.div>
            
            <motion.div 
              className="text-center bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl" 
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <Calendar className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-3">🚀 ¡Listo para compartir!</h3>
              <p className="text-gray-600">Recibí tu invitación en 24-48h, lista para enviar por WhatsApp y redes sociales</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ mejorado */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Preguntas frecuentes 💭
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Resolvemos tus dudas más comunes
          </motion.p>
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">🔧</span>
                ¿La estructura se puede modificar?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p>No, la estructura es fija para mantener la calidad y tiempos de entrega. Solo podés personalizar colores, fotos, textos y música según tu plan elegido.</p>
              </div>
            </motion.details>
            
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">📋</span>
                ¿Qué tengo que enviar?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p><strong>Información necesaria:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>🎨 Colores preferidos (o los de tu temática)</li>
                  <li>📸 Fotos (hasta 5 en Esencial, hasta 15 en Premium)</li>
                  <li>🎵 Música de fondo para la galería</li>
                  <li>📍 Ubicaciones (misa y festejo con links de Google Maps)</li>
                  <li>📅 Fecha y horarios del evento</li>
                  <li>💌 Momentos especiales que querés destacar</li>
                </ul>
              </div>
            </motion.details>
            
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">💳</span>
                ¿Cómo es el pago?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p><strong>Modalidad:</strong> 50% para iniciar el trabajo + 50% contra entrega</p>
                <p className="mt-2"><strong>Métodos aceptados:</strong> Transferencia bancaria, Giros Tigo, efectivo</p>
                <p className="mt-2 text-blue-600"><strong>No cobramos hasta que veas el resultado final</strong></p>
              </div>
            </motion.details>
            
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">⏰</span>
                ¿Cuánto tiempo tarda?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p><strong>Tiempo de entrega:</strong> 24 a 48 horas desde el pago de la seña</p>
                <p className="mt-2">Para eventos urgentes (menos de 1 semana), consultanos por disponibilidad</p>
              </div>
            </motion.details>
            
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">📅</span>
                ¿Hasta cuándo funciona la invitación?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p><strong>Vigencia:</strong> Hasta 5 días después del evento</p>
                <p className="mt-2">Esto te permite que los invitados puedan acceder a las fotos y información incluso después de la celebración</p>
              </div>
            </motion.details>
            
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">✏️</span>
                ¿Puedo hacer cambios después?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p>Se incluye <strong>1 ronda de correcciones menores</strong> sin costo (textos, fechas, ubicaciones)</p>
                <p className="mt-2">Cambios mayores (colores, fotos, diseño) tienen costo adicional según la complejidad</p>
              </div>
            </motion.details>
            
            <motion.details
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center">
                <span className="mr-3">↩️</span>
                ¿Hay reembolsos?
              </summary>
              <div className="mt-4 text-gray-600 pl-8">
                <p>Si cancelás antes de empezar el trabajo, devolvemos el 100% de la seña</p>
                <p className="mt-2">Una vez iniciado el proyecto, no hay reembolsos, pero garantizamos tu satisfacción con el resultado</p>
              </div>
            </motion.details>
          </div>
        </div>
      </motion.section>

      {/* Contacto mejorado */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-600 via-red-500 to-blue-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ¿Listo para crear tu invitación? 🚀
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hablemos y hagamos realidad la invitación de tus sueños
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">📧 Email</h3>
              <p className="mb-4">Para consultas detalladas y envío de archivos</p>
              <a 
                href="mailto:info@invitapy.com" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                info@invitapy.com
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">💬 WhatsApp</h3>
              <p className="mb-4">Respuesta inmediata para consultas rápidas</p>
              <a 
                href="https://wa.me/595981234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-block"
              >
                +595 981 234 567
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">📋 Checklist para tu solicitud</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="flex items-center mb-2"><Check className="w-5 h-5 mr-2" /> 🎨 Colores/temática</p>
                <p className="flex items-center mb-2"><Check className="w-5 h-5 mr-2" /> 📸 Fotos (5-15 según plan)</p>
                <p className="flex items-center mb-2"><Check className="w-5 h-5 mr-2" /> 🎵 Música de fondo</p>
              </div>
              <div>
                <p className="flex items-center mb-2"><Check className="w-5 h-5 mr-2" /> 📍 Ubicaciones (links de Maps)</p>
                <p className="flex items-center mb-2"><Check className="w-5 h-5 mr-2" /> 📅 Fecha y horarios</p>
                <p className="flex items-center mb-2"><Check className="w-5 h-5 mr-2" /> 💝 Momentos especiales</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-blue-100 mb-4">Seguinos en nuestras redes sociales:</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                📱 Instagram
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                🎵 TikTok
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
