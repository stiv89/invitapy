export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Preguntas frecuentes</h1>
      <div className="space-y-4">
        <details className="border p-4 rounded">
          <summary className="font-bold">¿La estructura se puede modificar?</summary>
          <p>No</p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-bold">¿Qué tengo que enviar?</summary>
          <p>Colores, fotos, música, ubicaciones, fechas/horarios, momentos</p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-bold">¿Formas de pago?</summary>
          <p>100% al inicio</p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-bold">¿Cuánto tarda?</summary>
          <p>24–48h</p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-bold">¿Vigencia?</summary>
          <p>Hasta 5 días después del evento</p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-bold">¿Cómo recibo la invitación?</summary>
          <p>URL lista para compartir</p>
        </details>
        <details className="border p-4 rounded">
          <summary className="font-bold">¿Puedo cambiar música/fotos luego?</summary>
          <p>Política de cambios</p>
        </details>
      </div>
    </div>
  );
}
