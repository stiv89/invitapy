import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link href="/precios" className="hover:underline">Precios</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
              <li><Link href="/terminos" className="hover:underline">Términos y Condiciones</Link></li>
              <li><Link href="/privacidad" className="hover:underline">Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p>Email: info@invitapy.com</p>
            <p>WhatsApp: +595 XXX XXX XXX</p>
            <p>Redes sociales: @invitapy</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">InvitaPy</h3>
            <p>Invitaciones digitales en Paraguay</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 InvitaPy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
