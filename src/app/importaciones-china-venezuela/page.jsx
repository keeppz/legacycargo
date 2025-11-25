import Layout from "../../components/layout/Layout"

export const metadata = {
  title: 'Importaciones desde China a Venezuela | Legacy Cargo - Logística Internacional',
  description: 'Especialistas en importaciones desde China a Venezuela. Servicios de transporte marítimo, aéreo y terrestre. Cotización gratuita, seguimiento en tiempo real y gestión aduanera completa.',
  keywords: 'importaciones china venezuela, importar desde china, transporte maritimo china venezuela, courier china venezuela, encomiendas china venezuela, aduanas china venezuela, logistica internacional china venezuela',
  openGraph: {
    title: 'Importaciones desde China a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones desde China a Venezuela. Servicios de logística internacional con cotización gratuita.',
    url: 'https://legacycargove.com/importaciones-china-venezuela',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Importaciones desde China a Venezuela - Legacy Cargo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importaciones desde China a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones desde China a Venezuela. Servicios de logística internacional.',
    images: ['/assets/img/logo/logo.png'],
  },
  alternates: {
    canonical: '/importaciones-china-venezuela',
  },
}

export default function ImportacionesChinaVenezuela() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Importaciones desde China a Venezuela"
      >
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Importaciones desde China a Venezuela
              </h1>
              <p className="text-xl mb-8">
                Especialistas en logística internacional desde China hacia Venezuela. 
                Transporte marítimo, aéreo y terrestre con gestión aduanera completa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Cotización Gratuita</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Seguimiento 24/7</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Gestión Aduanera</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Entrega Garantizada</span>
              </div>
            </div>
          </section>

          {/* Servicios Principales */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios de Importación</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">🚢</div>
                <h3 className="text-xl font-bold mb-4">Transporte Marítimo</h3>
                <p className="text-gray-600 mb-4">
                  Servicio de carga marítima desde puertos chinos hacia Venezuela. 
                  Ideal para mercancías de gran volumen y peso.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 25-35 días</li>
                  <li>• Cobertura: Todos los puertos principales</li>
                  <li>• Seguimiento en tiempo real</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-4">Transporte Aéreo</h3>
                <p className="text-gray-600 mb-4">
                  Envíos urgentes desde China a Venezuela por vía aérea. 
                  Perfecto para documentos y mercancías de alto valor.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 3-7 días</li>
                  <li>• Cobertura: Aeropuertos principales</li>
                  <li>• Seguro incluido</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">📦</div>
                <h3 className="text-xl font-bold mb-4">Courier Express</h3>
                <p className="text-gray-600 mb-4">
                  Servicio courier express para envíos pequeños y medianos. 
                  Entrega a domicilio con seguimiento detallado.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 5-10 días</li>
                  <li>• Entrega a domicilio</li>
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
                <p className="text-sm text-gray-600">Recolectamos tu mercancía en China y la preparamos para el envío</p>
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
                    <p className="text-gray-600">Más de 10 años importando desde China a Venezuela con éxito garantizado.</p>
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
                    <p className="text-gray-600">Monitorea tu envío en tiempo real desde China hasta Venezuela.</p>
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

          {/* CTA Section */}
          <section className="bg-gray-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para importar desde China?</h2>
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
                <h3 className="font-bold mb-2">¿Cuánto tiempo toma importar desde China a Venezuela?</h3>
                <p className="text-gray-600">
                  El tiempo varía según el tipo de transporte: Marítimo (25-35 días), Aéreo (3-7 días), 
                  Courier Express (5-10 días). Factores como aduanas y documentación pueden afectar los tiempos.
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
