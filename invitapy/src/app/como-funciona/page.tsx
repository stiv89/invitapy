export default function ComoFunciona() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Cómo funciona</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Paso 1</h2>
          <p>Elegí plan</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Paso 2</h2>
          <p>Completá formulario + enviá contenidos (colores, 5–15 fotos, música, ubicaciones, fecha/hora)</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Paso 3</h2>
          <p>100% pago y comenzamos</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Paso 4</h2>
          <p>Entrega link/dominio de tu invitación, lista para compartir</p>
        </div>
      </div>
      <p className="text-center mt-8">Tiempos: 24–48h dependiendo de info provista</p>
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Checklist descargable</h2>
        <ul className="list-disc list-inside">
          <li>Colores</li>
          <li>Fotos (5-15)</li>
          <li>Música</li>
          <li>Ubicaciones</li>
          <li>Fecha/hora</li>
        </ul>
      </div>
    </div>
  );
}
