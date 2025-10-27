// Configuración de SEO de contenido
export const contentSEO = {
  // Palabras clave por página
  keywords: {
    home: {
      primary: ['importaciones venezuela', 'logistica internacional venezuela'],
      secondary: ['importar desde china', 'importar desde panama', 'importar desde estados unidos'],
      longTail: ['como importar a venezuela', 'servicios de logistica internacional venezuela']
    },
    importaciones: {
      primary: ['importaciones venezuela', 'logistica internacional venezuela'],
      secondary: ['transporte maritimo venezuela', 'transporte aereo venezuela'],
      longTail: ['importaciones maritimas venezuela', 'importaciones aereas venezuela']
    },
    china: {
      primary: ['importaciones china venezuela', 'importar desde china'],
      secondary: ['transporte maritimo china venezuela', 'courier china venezuela'],
      longTail: ['como importar desde china a venezuela', 'importaciones maritimas china venezuela']
    },
    panama: {
      primary: ['importaciones panama venezuela', 'importar desde panama'],
      secondary: ['transporte maritimo panama venezuela', 'courier panama venezuela'],
      longTail: ['como importar desde panama a venezuela', 'importaciones maritimas panama venezuela']
    },
    usa: {
      primary: ['importaciones estados unidos venezuela', 'importar desde usa'],
      secondary: ['transporte maritimo usa venezuela', 'courier usa venezuela'],
      longTail: ['como importar desde estados unidos a venezuela', 'importaciones maritimas usa venezuela']
    }
  },

  // Estructura de contenido
  contentStructure: {
    headings: {
      h1: {
        maxLength: 60,
        includeKeywords: true,
        unique: true
      },
      h2: {
        maxLength: 70,
        includeKeywords: true,
        maxPerPage: 5
      },
      h3: {
        maxLength: 80,
        includeKeywords: false,
        maxPerPage: 10
      }
    },
    paragraphs: {
      minLength: 50,
      maxLength: 200,
      keywordDensity: 1.5,
      readability: 'easy'
    },
    images: {
      altText: true,
      maxLength: 125,
      includeKeywords: true,
      lazyLoading: true
    },
    links: {
      internal: 3,
      external: 1,
      descriptive: true,
      noFollow: false
    }
  },

  // Configuración de contenido por tipo
  contentTypes: {
    service: {
      title: 'Servicio de {service} a Venezuela | Legacy Cargo',
      description: 'Servicio de {service} hacia Venezuela desde {origin}. {benefits}. Cotización gratuita y seguimiento en tiempo real.',
      structure: [
        'Hero section con H1',
        'Descripción del servicio',
        'Beneficios y características',
        'Proceso paso a paso',
        'FAQ',
        'CTA'
      ]
    },
    importation: {
      title: 'Importaciones desde {origin} a Venezuela | Legacy Cargo',
      description: 'Especialistas en importaciones desde {origin} a Venezuela. Servicios de {services}. Cotización gratuita y seguimiento en tiempo real.',
      structure: [
        'Hero section con H1',
        'Servicios disponibles',
        'Ventajas competitivas',
        'Proceso de importación',
        'Tipos de mercancía',
        'FAQ',
        'CTA'
      ]
    },
    landing: {
      title: 'Importaciones a Venezuela | Legacy Cargo - Logística Internacional',
      description: 'Especialistas en importaciones a Venezuela desde {origins}. Servicios de {services} con gestión aduanera completa.',
      structure: [
        'Hero section con H1',
        'Rutas de importación',
        'Servicios principales',
        'Proceso de importación',
        'Ventajas competitivas',
        'Tipos de mercancía',
        'FAQ',
        'CTA'
      ]
    }
  },

  // Configuración de FAQ
  faq: {
    maxQuestions: 10,
    minQuestions: 3,
    structure: {
      question: {
        maxLength: 100,
        includeKeywords: true,
        conversational: true
      },
      answer: {
        minLength: 50,
        maxLength: 300,
        includeKeywords: true,
        helpful: true
      }
    }
  },

  // Configuración de CTA
  cta: {
    primary: {
      text: 'Cotizar Ahora',
      action: 'quote_request',
      placement: 'above_fold'
    },
    secondary: {
      text: 'Contactar Asesor',
      action: 'contact_form',
      placement: 'below_fold'
    }
  },

  // Configuración de breadcrumbs
  breadcrumbs: {
    enabled: true,
    separator: '>',
    homeText: 'Inicio',
    maxDepth: 4,
    includeCurrent: true
  },

  // Configuración de schema markup
  schema: {
    organization: {
      enabled: true,
      type: 'Organization',
      properties: ['name', 'description', 'url', 'logo', 'contactPoint', 'address']
    },
    localBusiness: {
      enabled: true,
      type: 'LocalBusiness',
      properties: ['name', 'description', 'url', 'telephone', 'email', 'address', 'openingHours']
    },
    service: {
      enabled: true,
      type: 'Service',
      properties: ['name', 'description', 'provider', 'areaServed', 'hasOfferCatalog']
    },
    faq: {
      enabled: true,
      type: 'FAQPage',
      properties: ['mainEntity']
    },
    breadcrumbs: {
      enabled: true,
      type: 'BreadcrumbList',
      properties: ['itemListElement']
    }
  },

  // Configuración de contenido dinámico
  dynamicContent: {
    personalized: true,
    locationBased: true,
    deviceBased: true,
    timeBased: false
  },

  // Configuración de contenido local
  localContent: {
    enabled: true,
    country: 'Venezuela',
    language: 'es-VE',
    currency: 'USD',
    timezone: 'America/Caracas'
  }
}

export default contentSEO
