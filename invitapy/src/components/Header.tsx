'use client';

import Link from 'next/link';
import { useState } from 'react';
import Drawer from './Drawer';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">InvitaPy</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Inicio</Link>
            <Link href="/como-funciona" className="text-gray-700 hover:text-gray-900">Cómo funciona</Link>
            <Link href="/precios" className="text-gray-700 hover:text-gray-900">Precios</Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">Preguntas frecuentes</Link>
            <Link href="/contacto" className="text-gray-700 hover:text-gray-900">Contacto</Link>
          </nav>
          <button onClick={() => setDrawerOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Solicitar
          </button>
        </div>
      </header>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} plan="" />
    </>
  );
}
