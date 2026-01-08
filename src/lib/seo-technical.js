// Configuración técnica de SEO
export const technicalSEO = {
  // Configuración de meta tags
  metaTags: {
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    googlebot: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    bingbot: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    yandexbot: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },

  // Configuración de headers HTTP
  headers: {
    security: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    },
    performance: {
      'X-DNS-Prefetch-Control': 'on',
      'X-Content-Type-Options': 'nosniff'
    }
  },

  // Configuración de sitemap
  sitemap: {
    enabled: true,
    path: '/sitemap.xml',
    changefreq: {
      home: 'weekly',
      pages: 'monthly',
      blog: 'weekly',
      services: 'monthly'
    },
    priority: {
      home: 1.0,
      pages: 0.8,
      blog: 0.6,
      services: 0.7
    }
  },

  // Configuración de robots.txt
  robots: {
    enabled: true,
    path: '/robots.txt',
    userAgent: '*',
    allow: ['/'],
    disallow: ['/api/', '/admin/', '/_next/', '/private/'],
    sitemap: 'https://legacycargove.com/sitemap.xml',
    crawlDelay: 1
  },

  // Configuración de canonical URLs
  canonical: {
    enabled: true,
    baseUrl: 'https://legacycargove.com',
    trailingSlash: false,
    www: false
  },

  // Configuración de hreflang
  hreflang: {
    enabled: true,
    default: 'es-VE',
    languages: [
      { code: 'es-VE', url: 'https://legacycargove.com' },
      { code: 'es', url: 'https://legacycargove.com' },
      { code: 'x-default', url: 'https://legacycargove.com' }
    ]
  },

  // Configuración de structured data
  structuredData: {
    organization: true,
    localBusiness: true,
    breadcrumbs: true,
    faq: true,
    services: true,
    reviews: true,
    contact: true
  },

  // Configuración de Open Graph
  openGraph: {
    enabled: true,
    type: 'website',
    locale: 'es_VE',
    siteName: 'Legacy Cargo',
    images: {
      default: '/assets/img/logo.png',
      width: 1200,
      height: 630
    }
  },

  // Configuración de Twitter Cards
  twitter: {
    enabled: true,
    card: 'summary_large_image',
    site: '@legacycargo',
    creator: '@legacycargo'
  },

  // Configuración de Google Analytics
  analytics: {
    googleAnalytics: {
      enabled: true,
      trackingId: process.env.NEXT_PUBLIC_GA_ID,
      enhancedEcommerce: true,
      customDimensions: {
        'cd1': 'service_type',
        'cd2': 'origin_country',
        'cd3': 'destination_country'
      }
    },
    googleTagManager: {
      enabled: true,
      containerId: process.env.NEXT_PUBLIC_GTM_ID
    }
  },

  // Configuración de Search Console
  searchConsole: {
    enabled: true,
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    propertyId: process.env.NEXT_PUBLIC_GSC_PROPERTY_ID
  },

  // Configuración de Bing Webmaster Tools
  bingWebmaster: {
    enabled: true,
    verification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
  },

  // Configuración de Yandex Webmaster
  yandexWebmaster: {
    enabled: true,
    verification: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
  },

  // Configuración de Core Web Vitals
  coreWebVitals: {
    enabled: true,
    thresholds: {
      LCP: 2.5, // Largest Contentful Paint
      FID: 100, // First Input Delay
      CLS: 0.1  // Cumulative Layout Shift
    }
  },

  // Configuración de Lighthouse
  lighthouse: {
    enabled: true,
    categories: ['performance', 'accessibility', 'best-practices', 'seo'],
    thresholds: {
      performance: 90,
      accessibility: 90,
      'best-practices': 90,
      seo: 90
    }
  }
}

export default technicalSEO
