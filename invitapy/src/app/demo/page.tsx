'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Play, Clock, Users, MapPin, Gift, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Drawer from '../../components/Drawer';

export default function Demo() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const openDrawer = (plan: string) => {
    setSelectedPlan(plan);
    setDrawerOpen(true);
  };

  const demos = [
    {
      id: 1,
      title: 'Boda María & Carlos',
      plan: 'Esencial',
      theme: 'Elegante Rosa y Dorado',
      price: 'Gs. 200.000',
      features: ['Galería (5 fotos)', 'RSVP', 'Countdown', 'Música', 'Ubicaciones'],
      preview: {
        couple: 'María & Carlos',
        date: '15 de Noviembre, 2024',
        time: '19:00',
        church: 'Iglesia San Roque',
        party: 'Salón Los Jardines',
        colors: 'from-pink-200 to-rose-300'
      }
    },
    {
      id: 2,
      title: 'Boda Ana & Diego',
      plan: 'Premium',
      theme: 'Moderno Púrpura y Azul',
      price: 'Gs. 350.000',
      features: ['Galería ampliada (15 fotos)', 'RSVP avanzado', 'Save the Date', 'Personalización completa', 'Lista de regalos'],
      preview: {
        couple: 'Ana & Diego',
        date: '20 de Diciembre, 2024',
        time: '18:30',
        church: 'Catedral Metropolitana',
        party: 'Club Centenario',
        colors: 'from-purple-200 to-blue-300'
      }
    },
    {
      id: 3,
      title: 'Cumpleaños Isabella',
      plan: 'Premium',
      theme: 'Colorido y Divertido',
      price: 'Gs. 350.000',
      features: ['Galería ampliada', 'RSVP con menú', 'Juegos interactivos', 'Colores personalizados', 'Lista de regalos'],
      preview: {
        couple: 'Isabella - 15 años',
        date: '25 de Enero, 2025',
        time: '20:00',
        church: '',
        party: 'Salón El Parque',
        colors: 'from-pink-300 to-purple-300'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            👀 Demos de Invitaciones
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Mirá ejemplos reales de nuestras invitaciones en acción
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/">
              <button className="bg-white/20 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center mx-auto">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al inicio
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveDemo(demo.id)}
              >
                {/* Preview Card */}
                <div className={`bg-gradient-to-br ${demo.preview.colors} p-6 text-center relative`}>
                  <div className="absolute top-2 right-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      demo.plan === 'Premium' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {demo.plan}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {demo.plan === 'Premium' && demo.title.includes('Isabella') ? '🎂' : '💒'} {demo.preview.couple}
                    </h3>
                    <p className="text-gray-700">{demo.preview.date}</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="font-semibold">Faltan: 45 días</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    {demo.preview.church && (
                      <p className="flex items-center justify-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {demo.preview.time} - {demo.preview.church}
                      </p>
                    )}
                    <p className="flex items-center justify-center">
                      <Gift className="w-4 h-4 mr-1" />
                      {demo.preview.party}
                    </p>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-black/20 rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                  <p className="text-gray-600 mb-3">{demo.theme}</p>
                  <p className="text-2xl font-bold text-gray-800 mb-4">{demo.price}</p>
                  
                  <div className="space-y-2 mb-6">
                    {demo.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        {feature}
                      </div>
                    ))}
                    {demo.features.length > 3 && (
                      <p className="text-sm text-gray-500">+ {demo.features.length - 3} funciones más</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDemo(demo.id);
                      }}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDrawer(demo.plan);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                        demo.plan === 'Premium'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      Solicitar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Demo Completo */}
      {activeDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {(() => {
              const demo = demos.find(d => d.id === activeDemo)!;
              return (
                <>
                  {/* Header del modal */}
                  <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold">{demo.title} - Vista Completa</h3>
                    <button
                      onClick={() => setActiveDemo(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Preview completo */}
                  <div className="p-6">
                    <div className={`bg-gradient-to-br ${demo.preview.colors} rounded-lg p-8 mb-6`}>
                      <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                          {demo.title.includes('Isabella') ? '🎂 ¡Mis 15 años!' : '💒 ¡Nos casamos!'}
                        </h2>
                        <p className="text-xl mb-4 text-gray-700">{demo.preview.couple}</p>
                        <p className="text-lg text-gray-600 mb-6">{demo.preview.date}</p>
                        
                        <div className="bg-white/90 rounded-lg p-4 mb-6">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <Clock className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                              <p className="font-semibold">Faltan</p>
                              <p>45 días, 12 horas</p>
                            </div>
                            <div>
                              <Users className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                              <p className="font-semibold">Confirmados</p>
                              <p>47 de 120 invitados</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          {demo.preview.church && (
                            <p>⛪ Ceremonia: {demo.preview.time} - {demo.preview.church}</p>
                          )}
                          <p>🎉 Festejo: {demo.preview.party}</p>
                        </div>
                      </div>
                    </div>

                    {/* Funciones del demo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">📸 Galería</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({length: demo.plan === 'Premium' ? 6 : 3}).map((_, i) => (
                            <div key={i} className="bg-gray-300 h-16 rounded"></div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          {demo.plan === 'Premium' ? 'Hasta 15 fotos' : 'Hasta 5 fotos'}
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">✅ RSVP</h4>
                        <div className="space-y-2">
                          <button className="w-full bg-green-500 text-white py-2 rounded text-sm">
                            ✅ Confirmar asistencia
                          </button>
                          <button className="w-full bg-red-500 text-white py-2 rounded text-sm">
                            ❌ No podré asistir
                          </button>
                          {demo.plan === 'Premium' && (
                            <p className="text-xs text-gray-600">+ Opciones de menú y alergias</p>
                          )}
                        </div>
                      </div>

                      {demo.plan === 'Premium' && (
                        <>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">🎨 Personalización</h4>
                            <p className="text-sm text-gray-600">• Colores únicos</p>
                            <p className="text-sm text-gray-600">• Tipografía personalizada</p>
                            <p className="text-sm text-gray-600">• Layout adaptado</p>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">🎁 Lista de Regalos</h4>
                            <p className="text-sm text-gray-600">💳 Datos bancarios</p>
                            <p className="text-sm text-gray-600">🏪 Links a tiendas</p>
                            <p className="text-sm text-gray-600">📝 Lista personalizada</p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* CTA del modal */}
                    <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg text-center">
                      <h4 className="text-xl font-bold mb-2">¿Te gustó este ejemplo?</h4>
                      <p className="text-gray-600 mb-4">Creá tu invitación personalizada en {demo.plan}</p>
                      <button
                        onClick={() => {
                          setActiveDemo(null);
                          openDrawer(demo.plan);
                        }}
                        className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                          demo.plan === 'Premium'
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        🚀 Solicitar Plan {demo.plan}
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              ¿Listo para crear tu invitación? 🎯
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estos son solo ejemplos. Tu invitación será 100% personalizada con tus colores, fotos, música y estilo único.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#planes">
                <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  🎯 Ver Planes y Precios
                </button>
              </Link>
              <a
                href="https://wa.me/595981234567?text=Hola! Vi los demos y me interesa crear mi invitación digital"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                💬 Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
