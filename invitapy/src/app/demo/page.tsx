'use client';

import { useState } from 'react';
import Drawer from '../../components/Drawer';

export default function Demo() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openDrawer = (plan: string) => {
    setSelectedPlan(plan);
    setDrawerOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Demos de invitaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-gray-200 h-64 mb-4">Thumbnail 1</div>
          <h2 className="text-2xl font-bold">Demo 1</h2>
          <p>Temática: Boda clásica</p>
          <button onClick={() => openDrawer('')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Quiero una igual</button>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 h-64 mb-4">Thumbnail 2</div>
          <h2 className="text-2xl font-bold">Demo 2</h2>
          <p>Temática: Fiesta infantil</p>
          <button onClick={() => openDrawer('')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Quiero una igual</button>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 h-64 mb-4">Thumbnail 3</div>
          <h2 className="text-2xl font-bold">Demo 3</h2>
          <p>Temática: Cumpleaños</p>
          <button onClick={() => openDrawer('')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Quiero una igual</button>
        </div>
      </div>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan={selectedPlan} />
    </div>
  );
}
