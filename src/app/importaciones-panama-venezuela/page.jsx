import Layout from "../../components/layout/Layout"

export const metadata = {
  title: 'Importaciones desde Panamá a Venezuela | Legacy Cargo - Logística Internacional',
  description: 'Especialistas en importaciones desde Panamá a Venezuela. Servicios de transporte marítimo, aéreo y terrestre. Cotización gratuita, seguimiento en tiempo real y gestión aduanera completa.',
  keywords: 'importaciones panama venezuela, importar desde panama, transporte maritimo panama venezuela, courier panama venezuela, encomiendas panama venezuela, aduanas panama venezuela, logistica internacional panama venezuela',
  openGraph: {
    title: 'Importaciones desde Panamá a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones desde Panamá a Venezuela. Servicios de logística internacional con cotización gratuita.',
    url: 'https://legacycargove.com/importaciones-panama-venezuela',
    images: [
      {
        url: '/assets/img/service/maritimo.jpg',
        width: 1200,
        height: 630,
        alt: 'Importaciones desde Panamá a Venezuela - Legacy Cargo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importaciones desde Panamá a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones desde Panamá a Venezuela. Servicios de logística internacional.',
    images: ['/assets/img/service/maritimo.jpg'],
  },
  alternates: {
    canonical: '/importaciones-panama-venezuela',
  },
}

export default function ImportacionesPanamaVenezuela() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Importaciones desde Panamá a Venezuela"
      >
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Importaciones desde Panamá a Venezuela
              </h1>
              <p className="text-xl mb-8">
                Especialistas en logística internacional desde Panamá hacia Venezuela. 
                Aprovecha la posición estratégica de Panamá para importaciones más rápidas y económicas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Tiempos Rápidos</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Costos Reducidos</span>
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
                <div className="text-4xl text-green-600 mb-4">🚢</div>
                <h3 className="text-xl font-bold mb-4">Transporte Marítimo</h3>
                <p className="text-gray-600 mb-4">
                  Servicio de carga marítima desde puertos panameños hacia Venezuela. 
                  Ideal para mercancías de gran volumen aprovechando la posición estratégica.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 3-7 días</li>
                  <li>• Cobertura: Puerto de Colón, Balboa</li>
                  <li>• Frecuencias diarias</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-green-600 mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-4">Transporte Aéreo</h3>
                <p className="text-gray-600 mb-4">
                  Envíos urgentes desde Panamá a Venezuela por vía aérea. 
                  Conexiones directas y tiempos de entrega excepcionales.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 1-3 días</li>
                  <li>• Vuelos diarios disponibles</li>
                  <li>• Seguro incluido</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-green-600 mb-4">🚛</div>
                <h3 className="text-xl font-bold mb-4">Transporte Terrestre</h3>
                <p className="text-gray-600 mb-4">
                  Servicio de carga terrestre por carretera desde Panamá hacia Venezuela. 
                  Opción económica para mercancías de peso medio.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 5-10 días</li>
                  <li>• Cobertura: Todo el territorio</li>
                  <li>• Seguimiento GPS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ventajas de Panamá */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Ventajas de Importar desde Panamá</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Posición Estratégica</h3>
                    <p className="text-gray-600">Panamá es el hub logístico de América Latina, facilitando conexiones con todo el mundo.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Tiempos de Tránsito Rápidos</h3>
                    <p className="text-gray-600">Distancias más cortas significan tiempos de entrega más rápidos y costos menores.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Zona Libre de Colón</h3>
                    <p className="text-gray-600">Acceso a la segunda zona libre más grande del mundo con productos de todo el mundo.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Infraestructura Moderna</h3>
                    <p className="text-gray-600">Puertos y aeropuertos de clase mundial con tecnología de punta.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Facilidades Aduaneras</h3>
                    <p className="text-gray-600">Procesos aduaneros más ágiles y eficientes que otros países de la región.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Conexiones Directas</h3>
                    <p className="text-gray-600">Múltiples opciones de transporte con conexiones directas a Venezuela.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Proceso de Importación */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Proceso de Importación</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Cotización</h3>
                <p className="text-sm text-gray-600">Solicita tu cotización gratuita con todos los detalles de tu envío</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Recolección</h3>
                <p className="text-sm text-gray-600">Recolectamos tu mercancía en Panamá y la preparamos para el envío</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Transporte</h3>
                <p className="text-sm text-gray-600">Transportamos tu mercancía con seguimiento en tiempo real</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Entrega</h3>
                <p className="text-sm text-gray-600">Gestionamos la aduana y entregamos en tu domicilio en Venezuela</p>
              </div>
            </div>
          </section>

          {/* Tipos de Mercancía */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Mercancías que Importamos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Productos Electrónicos</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Smartphones y tablets</li>
                  <li>• Computadoras y laptops</li>
                  <li>• Accesorios electrónicos</li>
                  <li>• Equipos de audio y video</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Textiles y Ropa</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ropa de marca</li>
                  <li>• Calzado deportivo</li>
                  <li>• Accesorios de moda</li>
                  <li>• Telas y materiales</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Productos Industriales</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maquinaria y equipos</li>
                  <li>• Herramientas especializadas</li>
                  <li>• Repuestos automotrices</li>
                  <li>• Materiales de construcción</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para importar desde Panamá?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Aprovecha las ventajas logísticas de Panamá para tus importaciones a Venezuela.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/calculator" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Cotizar Ahora
              </a>
              <a 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold border-2 border-green-600 hover:bg-green-50 transition-colors"
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
                <h3 className="font-bold mb-2">¿Por qué importar desde Panamá en lugar de otros países?</h3>
                <p className="text-gray-600">
                  Panamá ofrece tiempos de tránsito más rápidos, costos menores, mejor infraestructura logística 
                  y facilidades aduaneras que facilitan el proceso de importación hacia Venezuela.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Cuáles son los puertos principales en Panamá?</h3>
                <p className="text-gray-600">
                  Los puertos principales son Puerto de Colón (Atlántico) y Puerto de Balboa (Pacífico), 
                  ambos con conexiones directas a Venezuela y equipados con tecnología de punta.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Manejan consolidación de carga desde Panamá?</h3>
                <p className="text-gray-600">
                  Sí, ofrecemos servicios de consolidación que permiten combinar múltiples envíos pequeños 
                  en una sola carga, reduciendo costos significativamente.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
