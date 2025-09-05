'use client';

import { useState } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.fecha) {
      newErrors.fecha = 'La fecha del evento es obligatoria';
    } else {
      const selectedDate = new Date(formData.fecha);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.fecha = 'La fecha no puede ser en el pasado';
      }
    }

    if (!formData.tematica.trim()) {
      newErrors.tematica = 'Indicá los colores o temática preferida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular envío (aquí integrarías con tu API o servicio de email)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Crear mensaje para WhatsApp
      const whatsappMessage = `🎉 *Nueva solicitud InvitaPy - Plan ${plan}*

👤 *Cliente:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono || 'No proporcionado'}

📅 *Fecha del evento:* ${new Date(formData.fecha).toLocaleDateString('es-PY')}
📍 *Ubicación misa:* ${formData.ubicacionMisa || 'No especificada'}
📍 *Ubicación festejo:* ${formData.ubicacionFestejo || 'No especificada'}

🎨 *Temática/Colores:* ${formData.tematica}

💌 *Mensaje adicional:*
${formData.mensaje || 'Sin mensaje adicional'}

---
Enviado desde invitapy.vercel.app`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/595981234567?text=${encodedMessage}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Resetear formulario y cerrar
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        ubicacionMisa: '',
        ubicacionFestejo: '',
        tematica: '',
        mensaje: ''
      });
      onClose();
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative ml-auto w-full max-w-lg bg-white shadow-2xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                🎯 Solicitar Plan {plan || 'Invitación'}
              </h2>
              <p className="text-gray-600 mt-1">
                {plan === 'Premium' ? 'Gs. 350.000' : 'Gs. 200.000'}
              </p>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                👤 Nombre y apellido *
              </label>
              <input 
                name="nombre" 
                placeholder="Tu nombre completo" 
                onChange={handleChange}
                value={formData.nombre}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.nombre ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.nombre}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📧 Email *
              </label>
              <input 
                name="email" 
                type="email" 
                placeholder="tu@email.com" 
                onChange={handleChange}
                value={formData.email}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📱 Teléfono (opcional)
              </label>
              <input 
                name="telefono" 
                placeholder="+595 XXX XXX XXX" 
                onChange={handleChange}
                value={formData.telefono}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📅 Fecha y hora del evento *
              </label>
              <input 
                name="fecha" 
                type="datetime-local" 
                onChange={handleChange}
                value={formData.fecha}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.fecha ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fecha && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fecha}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ⛪ Ubicación misa (link de Google Maps)
              </label>
              <input 
                name="ubicacionMisa" 
                placeholder="https://maps.google.com/..." 
                onChange={handleChange}
                value={formData.ubicacionMisa}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎉 Ubicación festejo (link de Google Maps)
              </label>
              <input 
                name="ubicacionFestejo" 
                placeholder="https://maps.google.com/..." 
                onChange={handleChange}
                value={formData.ubicacionFestejo}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎨 Temática/colores preferidos *
              </label>
              <input 
                name="tematica" 
                placeholder="Ej: Rosa y dorado, colores pasteles, elegante..." 
                onChange={handleChange}
                value={formData.tematica}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.tematica ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.tematica && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.tematica}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                💌 Mensaje adicional
              </label>
              <textarea 
                name="mensaje" 
                placeholder="Contanos más detalles sobre tu evento, música preferida, momentos especiales..." 
                onChange={handleChange}
                value={formData.mensaje}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">📋 Recordá enviar después:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 📸 Fotos ({plan === 'Premium' ? 'hasta 15' : 'hasta 5'})</li>
                <li>• 🎵 Música de fondo (archivo o link de YouTube/Spotify)</li>
                <li>• 💒 Detalles específicos del evento</li>
              </ul>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white p-4 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  🚀 Enviar solicitud por WhatsApp
                </span>
              )}
            </button>

            <div className="text-center space-y-3">
              <p className="text-sm text-gray-600">O también podés contactarnos por:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="mailto:info@invitapy.com" 
                  className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors"
                >
                  📧 Email
                </a>
                <a 
                  href="https://wa.me/595981234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
                >
                  💬 WhatsApp directo
                </a>
              </div>
            </div>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>💳 Modalidad de pago:</strong> 50% seña para iniciar + 50% contra entrega<br/>
              <strong>⏰ Entrega:</strong> 24-48 horas<br/>
              <strong>📅 Vigencia:</strong> 5 días post-evento<br/>
              <strong>🔧 Estructura:</strong> No modificable (solo colores y contenido)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
