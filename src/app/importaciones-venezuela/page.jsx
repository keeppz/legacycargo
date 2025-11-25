import Layout from "../../components/layout/Layout"

export const metadata = {
  title: 'Importaciones a Venezuela | Legacy Cargo - Logística Internacional desde China, Panamá y Estados Unidos',
  description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de transporte marítimo, aéreo y terrestre. Cotización gratuita, seguimiento en tiempo real y gestión aduanera completa.',
  keywords: 'importaciones venezuela, importar a venezuela, logistica internacional venezuela, transporte maritimo venezuela, courier venezuela, encomiendas venezuela, aduanas venezuela, importaciones china venezuela, importaciones panama venezuela, importaciones usa venezuela',
  openGraph: {
    title: 'Importaciones a Venezuela | Legacy Cargo - Logística Internacional',
    description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional con cotización gratuita.',
    url: 'https://legacycargove.com/importaciones-venezuela',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Importaciones a Venezuela - Legacy Cargo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importaciones a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional.',
    images: ['/assets/img/logo/logo.png'],
  },
  alternates: {
    canonical: '/importaciones-venezuela',
  },
}

export default function ImportacionesVenezuela() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Importaciones a Venezuela"
      >
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-yellow-600 via-red-600 to-blue-600 text-white rounded-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Importaciones a Venezuela
              </h1>
              <p className="text-xl mb-8">
                Especialistas en logística internacional hacia Venezuela desde China, Panamá y Estados Unidos. 
                Servicios de transporte marítimo, aéreo y terrestre con gestión aduanera completa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Desde China</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Desde Panamá</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Desde Estados Unidos</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Gestión Aduanera</span>
              </div>
            </div>
          </section>

          {/* Rutas de Importación */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestras Rutas de Importación</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <div className="text-4xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-4">Desde China</h3>
                <p className="text-gray-600 mb-4">
                  Especialistas en importaciones desde China hacia Venezuela. 
                  Productos de calidad con precios competitivos.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Tiempo marítimo: 25-35 días</li>
                  <li>• Tiempo aéreo: 3-7 días</li>
                  <li>• Courier: 5-10 días</li>
                </ul>
                <a 
                  href="/importaciones-china-venezuela" 
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
                >
                  Ver Detalles
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
                <div className="text-4xl mb-4">🇵🇦</div>
                <h3 className="text-xl font-bold mb-4">Desde Panamá</h3>
                <p className="text-gray-600 mb-4">
                  Aprovecha la posición estratégica de Panamá para importaciones 
                  más rápidas y económicas hacia Venezuela.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Tiempo marítimo: 3-7 días</li>
                  <li>• Tiempo aéreo: 1-3 días</li>
                  <li>• Terrestre: 5-10 días</li>
                </ul>
                <a 
                  href="/importaciones-panama-venezuela" 
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors inline-block"
                >
                  Ver Detalles
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                <div className="text-4xl mb-4">🇺🇸</div>
                <h3 className="text-xl font-bold mb-4">Desde Estados Unidos</h3>
                <p className="text-gray-600 mb-4">
                  Accede a productos americanos de alta calidad con nuestros 
                  servicios de importación especializados.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Tiempo marítimo: 7-15 días</li>
                  <li>• Tiempo aéreo: 2-5 días</li>
                  <li>• Courier: 3-7 días</li>
                </ul>
                <a 
                  href="/importaciones-estados-unidos-venezuela" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
                >
                  Ver Detalles
                </a>
              </div>
            </div>
          </section>

          {/* Servicios Principales */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">🚢</div>
                <h3 className="text-xl font-bold mb-4">Transporte Marítimo</h3>
                <p className="text-gray-600 mb-4">
                  Servicio de carga marítima hacia Venezuela desde los principales puertos del mundo. 
                  Ideal para mercancías de gran volumen y peso.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cobertura global</li>
                  <li>• Frecuencias regulares</li>
                  <li>• Monitoreo en tiempo real</li>
                  <li>• Manejo especializado</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-4">Transporte Aéreo</h3>
                <p className="text-gray-600 mb-4">
                  Envíos urgentes hacia Venezuela por vía aérea. 
                  Perfecto para documentos y mercancías de alto valor.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Entrega rápida</li>
                  <li>• Cobertura global</li>
                  <li>• Seguro incluido</li>
                  <li>• Seguimiento detallado</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">📦</div>
                <h3 className="text-xl font-bold mb-4">Courier Express</h3>
                <p className="text-gray-600 mb-4">
                  Servicio de paquetería express para envíos pequeños y medianos. 
                  Entrega puerta a puerta con seguimiento detallado.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Entrega domiciliaria</li>
                  <li>• Seguimiento 24/7</li>
                  <li>• Documentación simplificada</li>
                  <li>• Atención personalizada</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Proceso de Importación */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Proceso de Importación</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Cotización</h3>
                <p className="text-sm text-gray-600">Solicita tu cotización gratuita con todos los detalles de tu envío</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Recolección</h3>
                <p className="text-sm text-gray-600">Recolectamos tu mercancía en origen y la preparamos para el envío</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Transporte</h3>
                <p className="text-sm text-gray-600">Transportamos tu mercancía con seguimiento en tiempo real</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Entrega</h3>
                <p className="text-sm text-gray-600">Gestionamos la aduana y entregamos en tu domicilio en Venezuela</p>
              </div>
            </div>
          </section>

          {/* Ventajas Competitivas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">¿Por qué elegir Legacy Cargo?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Experiencia Comprobada</h3>
                    <p className="text-gray-600">Más de 10 años importando hacia Venezuela con éxito garantizado.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Gestión Aduanera Completa</h3>
                    <p className="text-gray-600">Manejamos todos los trámites aduaneros y documentación necesaria.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Precios Competitivos</h3>
                    <p className="text-gray-600">Las mejores tarifas del mercado sin comprometer la calidad del servicio.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Seguimiento 24/7</h3>
                    <p className="text-gray-600">Monitorea tu envío en tiempo real desde origen hasta Venezuela.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Atención Personalizada</h3>
                    <p className="text-gray-600">Asesoría especializada para cada tipo de mercancía y necesidad.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Seguro Incluido</h3>
                    <p className="text-gray-600">Protección completa de tu mercancía durante todo el trayecto.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de Mercancía */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Mercancías que Importamos</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Electrónicos</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Smartphones y tablets</li>
                  <li>• Computadoras</li>
                  <li>• Accesorios</li>
                  <li>• Equipos de audio</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Textiles</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ropa de marca</li>
                  <li>• Calzado deportivo</li>
                  <li>• Accesorios de moda</li>
                  <li>• Telas y materiales</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Industriales</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maquinaria</li>
                  <li>• Herramientas</li>
                  <li>• Repuestos</li>
                  <li>• Materiales de construcción</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Especializados</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Productos químicos</li>
                  <li>• Medicamentos</li>
                  <li>• Alimentos</li>
                  <li>• Productos de belleza</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para importar a Venezuela?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Obtén tu cotización gratuita y descubre por qué somos la mejor opción para tus importaciones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/calculator" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Cotizar Ahora
              </a>
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Contactar Asesor
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Cuánto tiempo toma importar a Venezuela?</h3>
                <p className="text-gray-600">
                  El tiempo varía según el origen y tipo de transporte: Desde China (25-35 días marítimo, 3-7 días aéreo), 
                  desde Panamá (3-7 días marítimo, 1-3 días aéreo), desde Estados Unidos (7-15 días marítimo, 2-5 días aéreo).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Qué documentos necesito para importar?</h3>
                <p className="text-gray-600">
                  Necesitarás: Factura comercial, lista de empaque, certificado de origen, 
                  documentos de transporte y permisos especiales según el tipo de mercancía.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Manejan todos los tipos de mercancía?</h3>
                <p className="text-gray-600">
                  Sí, manejamos una amplia variedad de mercancías incluyendo textiles, electrónicos, 
                  maquinaria, productos químicos y más. Consulta con nosotros para mercancías especiales.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
