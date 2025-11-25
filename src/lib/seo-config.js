// Configuración SEO específica para Venezuela
export const seoConfig = {
  // Información de la empresa
  company: {
    name: 'Legacy Cargo',
    description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos',
    url: 'https://legacycargove.com',
    logo: 'https://legacycargove.com/logo.png',
    phone: '+58-XXX-XXX-XXXX',
    email: 'info@legacycargove.com',
    address: {
      street: 'Av. Principal',
      city: 'Caracas',
      state: 'Distrito Capital',
      country: 'Venezuela',
      postalCode: '1010',
      coordinates: {
        latitude: '10.4806',
        longitude: '-66.9036'
      }
    }
  },

  // Palabras clave principales
  keywords: {
    primary: [
      'importaciones venezuela',
      'importar desde china',
      'importar desde panama',
      'importar desde estados unidos',
      'logistica internacional venezuela',
      'transporte maritimo venezuela',
      'transporte aereo venezuela',
      'courier venezuela',
      'encomiendas venezuela',
      'aduanas venezuela'
    ],
    secondary: [
      'importaciones china venezuela',
      'importaciones panama venezuela',
      'importaciones usa venezuela',
      'carga maritima venezuela',
      'carga aerea venezuela',
      'logistica maritima venezuela',
      'logistica aerea venezuela',
      'servicios aduaneros venezuela',
      'gestión aduanera venezuela',
      'puertos venezuela',
      'aeropuertos venezuela'
    ],
    longTail: [
      'como importar desde china a venezuela',
      'importaciones maritimas china venezuela',
      'transporte aereo panama venezuela',
      'courier express estados unidos venezuela',
      'servicios de logistica internacional venezuela',
      'importar productos electronicos venezuela',
      'importar ropa desde china venezuela',
      'importar maquinaria industrial venezuela'
    ]
  },

  // Configuración de páginas
  pages: {
    home: {
      title: 'Legacy Cargo - Importaciones a Venezuela desde China, Panamá y Estados Unidos',
      description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional, transporte marítimo, aéreo y terrestre. Cotización gratuita y seguimiento en tiempo real.',
      keywords: 'importaciones venezuela, importar desde china, importar desde panama, importar desde estados unidos, logistica internacional venezuela'
    },
    importaciones: {
      title: 'Importaciones a Venezuela | Legacy Cargo - Logística Internacional',
      description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de transporte marítimo, aéreo y terrestre con gestión aduanera completa.',
      keywords: 'importaciones venezuela, logistica internacional venezuela, transporte maritimo venezuela, transporte aereo venezuela'
    },
    china: {
      title: 'Importaciones desde China a Venezuela | Legacy Cargo',
      description: 'Especialistas en importaciones desde China a Venezuela. Servicios de transporte marítimo, aéreo y terrestre. Cotización gratuita y seguimiento en tiempo real.',
      keywords: 'importaciones china venezuela, importar desde china, transporte maritimo china venezuela, courier china venezuela'
    },
    panama: {
      title: 'Importaciones desde Panamá a Venezuela | Legacy Cargo',
      description: 'Especialistas en importaciones desde Panamá a Venezuela. Aprovecha la posición estratégica de Panamá para importaciones más rápidas y económicas.',
      keywords: 'importaciones panama venezuela, importar desde panama, transporte maritimo panama venezuela, courier panama venezuela'
    },
    usa: {
      title: 'Importaciones desde Estados Unidos a Venezuela | Legacy Cargo',
      description: 'Especialistas en importaciones desde Estados Unidos a Venezuela. Accede a productos americanos de alta calidad con servicios especializados.',
      keywords: 'importaciones estados unidos venezuela, importar desde usa, transporte maritimo usa venezuela, courier usa venezuela'
    }
  },

  // Schema markup para local business
  localBusinessSchema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Legacy Cargo",
    "description": "Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos",
    "url": "https://legacycargove.com",
    "logo": "https://legacycargove.com/logo.png",
    "image": "https://legacycargove.com/assets/img/.jpg",
    "telephone": "+58-XXX-XXX-XXXX",
    "email": "info@legacycargove.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Principal",
      "addressLocality": "Caracas",
      "addressRegion": "Distrito Capital",
      "addressCountry": "VE",
      "postalCode": "1010"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.4806",
      "longitude": "-66.9036"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Venezuela"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Logística Internacional",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Importaciones desde China",
            "description": "Servicio de importación de mercancías desde China hacia Venezuela"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Importaciones desde Panamá",
            "description": "Servicio de importación de mercancías desde Panamá hacia Venezuela"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Importaciones desde Estados Unidos",
            "description": "Servicio de importación de mercancías desde Estados Unidos hacia Venezuela"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/legacycargo",
      "https://www.instagram.com/legacycargo",
      "https://www.linkedin.com/company/legacycargo"
    ]
  },

  // Configuración de redes sociales
  socialMedia: {
    facebook: 'https://www.facebook.com/legacycargo',
    instagram: 'https://www.instagram.com/legacycargo',
    linkedin: 'https://www.linkedin.com/company/legacycargo',
    twitter: 'https://www.twitter.com/legacycargo'
  },

  // Configuración de analytics
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID,
    googleSearchConsole: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bingWebmaster: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    yandexWebmaster: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
  }
}

export default seoConfig
