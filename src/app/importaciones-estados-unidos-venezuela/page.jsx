import Layout from "../../components/layout/Layout"

export const metadata = {
  title: 'Importaciones desde Estados Unidos a Venezuela | Legacy Cargo - Logística Internacional',
  description: 'Especialistas en importaciones desde Estados Unidos a Venezuela. Servicios de transporte marítimo, aéreo y terrestre. Cotización gratuita, seguimiento en tiempo real y gestión aduanera completa.',
  keywords: 'importaciones estados unidos venezuela, importar desde usa, transporte maritimo usa venezuela, courier usa venezuela, encomiendas usa venezuela, aduanas usa venezuela, logistica internacional usa venezuela',
  openGraph: {
    title: 'Importaciones desde Estados Unidos a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones desde Estados Unidos a Venezuela. Servicios de logística internacional con cotización gratuita.',
    url: 'https://legacycargove.com/importaciones-estados-unidos-venezuela',
    images: [
      {
        url: '/assets/img/service/aereo.jpg',
        width: 1200,
        height: 630,
        alt: 'Importaciones desde Estados Unidos a Venezuela - Legacy Cargo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importaciones desde Estados Unidos a Venezuela | Legacy Cargo',
    description: 'Especialistas en importaciones desde Estados Unidos a Venezuela. Servicios de logística internacional.',
    images: ['/assets/img/service/aereo.jpg'],
  },
  alternates: {
    canonical: '/importaciones-estados-unidos-venezuela',
  },
}

export default function ImportacionesEstadosUnidosVenezuela() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Importaciones desde Estados Unidos a Venezuela"
      >
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Importaciones desde Estados Unidos a Venezuela
              </h1>
              <p className="text-xl mb-8">
                Especialistas en logística internacional desde Estados Unidos hacia Venezuela. 
                Accede a productos americanos de calidad con servicios de importación confiables.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Productos Americanos</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">✓ Calidad Garantizada</span>
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
                  Servicio de carga marítima desde puertos estadounidenses hacia Venezuela. 
                  Ideal para mercancías de gran volumen y productos industriales.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 7-15 días</li>
                  <li>• Cobertura: Miami, Houston, Los Angeles</li>
                  <li>• Frecuencias semanales</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-4">Transporte Aéreo</h3>
                <p className="text-gray-600 mb-4">
                  Envíos urgentes desde Estados Unidos a Venezuela por vía aérea. 
                  Perfecto para productos de alto valor y envíos urgentes.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tiempo de tránsito: 2-5 días</li>
                  <li>• Vuelos diarios desde Miami</li>
                  <li>• Seguro incluido</li>
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
                  <li>• Tiempo de tránsito: 3-7 días</li>
                  <li>• Peso máximo: 30 kg</li>
                  <li>• Entrega domiciliaria</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ventajas de Estados Unidos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Ventajas de Importar desde Estados Unidos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Calidad Americana</h3>
                    <p className="text-gray-600">Acceso a productos de alta calidad con estándares americanos reconocidos mundialmente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Variedad de Productos</h3>
                    <p className="text-gray-600">Amplia gama de productos desde tecnología hasta productos industriales y de consumo.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Marcas Reconocidas</h3>
                    <p className="text-gray-600">Acceso a marcas americanas líderes en tecnología, automotriz, moda y más.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Infraestructura Avanzada</h3>
                    <p className="text-gray-600">Puertos y aeropuertos de clase mundial con tecnología de punta y procesos eficientes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Frecuencias Regulares</h3>
                    <p className="text-gray-600">Múltiples opciones de transporte con salidas regulares y tiempos de tránsito predecibles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Soporte Técnico</h3>
                    <p className="text-gray-600">Acceso a soporte técnico y garantías de productos americanos.</p>
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
                <p className="text-sm text-gray-600">Recolectamos tu mercancía en Estados Unidos y la preparamos para el envío</p>
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

          {/* Tipos de Mercancía */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Productos que Importamos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Tecnología y Electrónicos</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• iPhone, iPad, MacBook</li>
                  <li>• Laptops y computadoras</li>
                  <li>• Accesorios Apple y Samsung</li>
                  <li>• Equipos de audio y video</li>
                  <li>• Gadgets y accesorios</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Automotriz</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Repuestos originales</li>
                  <li>• Accesorios automotrices</li>
                  <li>• Herramientas especializadas</li>
                  <li>• Lubricantes y químicos</li>
                  <li>• Equipos de diagnóstico</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-4">Moda y Lifestyle</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ropa de marca americana</li>
                  <li>• Calzado deportivo Nike, Adidas</li>
                  <li>• Accesorios de moda</li>
                  <li>• Productos de belleza</li>
                  <li>• Suplementos nutricionales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Puertos Principales */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Puertos y Aeropuertos Principales</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Puertos Marítimos</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Miami, Florida</h4>
                    <p className="text-sm text-gray-600">Puerto principal para carga hacia Venezuela. Frecuencias diarias.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Houston, Texas</h4>
                    <p className="text-sm text-gray-600">Ideal para carga industrial y petroquímica.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Los Angeles, California</h4>
                    <p className="text-sm text-gray-600">Puerto del Pacífico para carga desde la costa oeste.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Aeropuertos Principales</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Miami International (MIA)</h4>
                    <p className="text-sm text-gray-600">Aeropuerto principal con vuelos diarios a Venezuela.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">New York (JFK/LGA)</h4>
                    <p className="text-sm text-gray-600">Conexiones desde la costa este.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Los Angeles (LAX)</h4>
                    <p className="text-sm text-gray-600">Conexiones desde la costa oeste.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para importar desde Estados Unidos?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Accede a productos americanos de calidad con nuestros servicios de importación especializados.
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
                <h3 className="font-bold mb-2">¿Cuáles son las restricciones para importar desde Estados Unidos?</h3>
                <p className="text-gray-600">
                  Algunos productos requieren permisos especiales o están restringidos. Consultamos contigo 
                  sobre las regulaciones específicas para tu tipo de mercancía antes del envío.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Manejan productos electrónicos y tecnología?</h3>
                <p className="text-gray-600">
                  Sí, somos especialistas en importar productos electrónicos, smartphones, laptops, 
                  accesorios y equipos tecnológicos desde Estados Unidos hacia Venezuela.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">¿Ofrecen servicios de consolidación de carga?</h3>
                <p className="text-gray-600">
                  Sí, ofrecemos servicios de consolidación que permiten combinar múltiples envíos 
                  en una sola carga, reduciendo costos significativamente para nuestros clientes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
