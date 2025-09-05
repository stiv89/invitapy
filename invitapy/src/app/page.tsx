'use client';

import { useState } from 'react';
import Link from 'next/link';
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
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Invitaciones digitales que hacen brillar tu evento ✨</h1>
          <p className="text-xl mb-8">Entrega 24–48h; RSVP, galería, countdown</p>
          <div className="space-x-4">
            <button onClick={() => openDrawer('')} className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">Ver planes</button>
            <Link href="/demo" className="bg-transparent border border-white px-6 py-3 rounded font-semibold">Ver demo</Link>
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold">24–48h de entrega</h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold">100% online</h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold">RSVP integrado</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Funciones clave */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Funciones clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3>Galería + música</h3>
            </div>
            <div className="text-center">
              <h3>RSVP automático</h3>
            </div>
            <div className="text-center">
              <h3>Cuenta regresiva</h3>
            </div>
            <div className="text-center">
              <h3>Ubicaciones</h3>
            </div>
            <div className="text-center">
              <h3>Regalos (Premium)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Planes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded shadow">
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
              <button onClick={() => openDrawer('Esencial')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Solicitar</button>
            </div>
            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-xl">Gs. 350.000</p>
              <ul className="mt-4 space-y-2">
                <li>Todo lo del Esencial</li>
                <li>Galería ampliada (hasta 15 fotos)</li>
                <li>“Agendar” (save the date)</li>
                <li>Colores y tipografía personalizados</li>
                <li>Vista para regalos/datos bancarios</li>
              </ul>
              <button onClick={() => openDrawer('Premium')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Solicitar</button>
            </div>
          </div>
          <p className="text-center mt-8">Vigencia 5 días post-evento, entrega 24–48h</p>
        </div>
      </section>

      {/* Cómo funciona mini */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3>Paso 1</h3>
              <p>Elegí plan</p>
            </div>
            <div className="text-center">
              <h3>Paso 2</h3>
              <p>Formulario</p>
            </div>
            <div className="text-center">
              <h3>Paso 3</h3>
              <p>100% pago</p>
            </div>
            <div className="text-center">
              <h3>Paso 4</h3>
              <p>Entrega/publicación</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            <details>
              <summary>¿La estructura se puede modificar?</summary>
              <p>No</p>
            </details>
            <details>
              <summary>¿Qué tengo que enviar?</summary>
              <p>Colores, fotos, música, ubicaciones, fechas/horarios, momentos</p>
            </details>
            <details>
              <summary>¿Formas de pago?</summary>
              <p>50% para iniciar y 50% contra entrega</p>
            </details>
            <details>
              <summary>¿Cuánto tarda?</summary>
              <p>24–48h</p>
            </details>
            <details>
              <summary>¿Vigencia?</summary>
              <p>Hasta 5 días después del evento</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
          <p>Email: info@invitapy.com</p>
          <p>WhatsApp: +595 XXX XXX XXX</p>
          <p>Checklist: colores, fotos, ubicaciones, fecha/hora</p>
        </div>
      </section>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
