'use client';

import { useState } from 'react';
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
      <h1 className="text-4xl font-bold text-center mb-12">Contacto</h1>
      <form className="max-w-md mx-auto space-y-4">
        <input placeholder="Nombre" className="w-full p-2 border" />
        <input type="email" placeholder="Email" className="w-full p-2 border" />
        <input placeholder="Teléfono" className="w-full p-2 border" />
        <input type="datetime-local" placeholder="Fecha y hora del evento" className="w-full p-2 border" />
        <input placeholder="Tipo de evento" className="w-full p-2 border" />
        <textarea placeholder="Mensaje" className="w-full p-2 border"></textarea>
        <button onClick={() => openDrawer('')} className="w-full bg-blue-600 text-white p-2 rounded">Solicitar</button>
      </form>
      <div className="text-center mt-8">
        <a href="https://wa.me/595XXXXXXXXX" className="text-green-600">WhatsApp</a>
        <p className="mt-4">Medios de pago: Transferencia, efectivo</p>
      </div>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
