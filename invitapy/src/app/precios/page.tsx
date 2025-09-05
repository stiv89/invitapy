'use client';

import { useState } from 'react';
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
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros planes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold">Pack Esencial</h2>
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
          <h2 className="text-2xl font-bold">Pack Premium</h2>
          <p className="text-xl">Gs. 350.000</p>
          <ul className="mt-4 space-y-2">
            <li>Todo lo del Esencial</li>
            <li>Galería ampliada (hasta 15 fotos)</li>
            <li>&quot;Agendar&quot; (save the date)</li>
            <li>Colores y tipografía personalizados</li>
            <li>Vista para regalos/datos bancarios</li>
          </ul>
          <button onClick={() => openDrawer('Premium')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Solicitar</button>
        </div>
      </div>
      <p className="text-center mt-8">Entrega 24–48h según info, estructura no modificable, 100% pago, vigencia hasta 5 días post-evento</p>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
