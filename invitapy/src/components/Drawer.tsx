'use client';

import { useState } from 'react';

export default function Drawer({ isOpen, onClose, plan }: { isOpen: boolean; onClose: () => void; plan?: string }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    ubicacionMisa: '',
    ubicacionFestejo: '',
    tematica: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviar a API o email
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative ml-auto w-full max-w-md bg-white shadow-xl">
        <div className="p-4">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">×</button>
          <h2 className="text-xl font-bold mb-4">Solicitar {plan || 'Plan'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="nombre" placeholder="Nombre y apellido" onChange={handleChange} className="w-full p-2 border" required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" required />
            <input name="telefono" placeholder="Teléfono (opcional)" onChange={handleChange} className="w-full p-2 border" />
            <input name="fecha" type="datetime-local" onChange={handleChange} className="w-full p-2 border" required />
            <input name="ubicacionMisa" placeholder="Ubicación misa (link)" onChange={handleChange} className="w-full p-2 border" />
            <input name="ubicacionFestejo" placeholder="Ubicación festejo (link)" onChange={handleChange} className="w-full p-2 border" />
            <input name="tematica" placeholder="Temática/colores" onChange={handleChange} className="w-full p-2 border" />
            <textarea name="mensaje" placeholder="Mensaje adicional" onChange={handleChange} className="w-full p-2 border"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Enviar solicitud</button>
            <a href="mailto:info@invitapy.com" className="block text-center text-blue-600">Enviar por email</a>
            <a href="https://wa.me/595XXXXXXXXX" className="block text-center text-green-600">También por WhatsApp</a>
          </form>
          <p className="text-sm mt-4">100% pago, estructura no modificable, vigencia 5 días post-evento.</p>
        </div>
      </div>
    </div>
  );
}
