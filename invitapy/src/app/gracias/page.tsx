import Link from 'next/link';

export default function Gracias() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8">¡Gracias por tu solicitud!</h1>
      <p className="text-xl mb-8">Hemos recibido tu información. Te responderemos en las próximas horas.</p>
      <p>Siguientes pasos: Envía los materiales y realiza el pago del 100%.</p>
      <div className="mt-8 space-x-4">
        <Link href="/precios" className="bg-blue-600 text-white px-4 py-2 rounded">Precios</Link>
        <Link href="/faq" className="bg-gray-600 text-white px-4 py-2 rounded">FAQ</Link>
        <a href="https://wa.me/595XXXXXXXXX" className="bg-green-600 text-white px-4 py-2 rounded">WhatsApp</a>
      </div>
    </div>
  );
}
