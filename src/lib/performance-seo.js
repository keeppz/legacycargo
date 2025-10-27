// Configuración de SEO de rendimiento
export const performanceSEO = {
  // Configuración de Core Web Vitals
  coreWebVitals: {
    LCP: {
      target: 2.5, // segundos
      good: 2.5,
      needsImprovement: 4.0,
      poor: 4.0
    },
    FID: {
      target: 100, // milisegundos
      good: 100,
      needsImprovement: 300,
      poor: 300
    },
    CLS: {
      target: 0.1,
      good: 0.1,
      needsImprovement: 0.25,
      poor: 0.25
    }
  },

  // Configuración de imágenes
  images: {
    optimization: {
      format: 'webp',
      quality: 85,
      lazy: true,
      responsive: true,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    },
    preload: {
      critical: true,
      aboveFold: true,
      hero: true
    },
    compression: {
      gzip: true,
      brotli: true,
      minify: true
    }
  },

  // Configuración de fuentes
  fonts: {
    preload: {
      critical: true,
      display: 'swap',
      fallback: 'system-ui, sans-serif'
    },
    optimization: {
      subset: true,
      woff2: true,
      fallback: true
    }
  },

  // Configuración de CSS
  css: {
    critical: {
      inline: true,
      aboveFold: true,
      minify: true
    },
    nonCritical: {
      async: true,
      belowFold: true,
      minify: true
    },
    optimization: {
      purge: true,
      minify: true,
      compress: true
    }
  },

  // Configuración de JavaScript
  javascript: {
    critical: {
      inline: true,
      aboveFold: true,
      minify: true
    },
    nonCritical: {
      async: true,
      belowFold: true,
      minify: true
    },
    optimization: {
      treeShaking: true,
      minify: true,
      compress: true,
      bundleSplitting: true
    }
  },

  // Configuración de caché
  cache: {
    static: {
      maxAge: 31536000, // 1 año
      immutable: true,
      etag: true
    },
    dynamic: {
      maxAge: 86400, // 1 día
      staleWhileRevalidate: 604800, // 1 semana
      etag: true
    },
    api: {
      maxAge: 300, // 5 minutos
      staleWhileRevalidate: 3600, // 1 hora
      etag: true
    }
  },

  // Configuración de compresión
  compression: {
    gzip: {
      enabled: true,
      level: 6,
      threshold: 1024
    },
    brotli: {
      enabled: true,
      level: 4,
      threshold: 1024
    }
  },

  // Configuración de preload
  preload: {
    critical: [
      '/css/critical.css',
      '/js/critical.js',
      '/fonts/inter-var.woff2'
    ],
    prefetch: [
      '/importaciones-venezuela',
      '/calculator',
      '/contact'
    ],
    preconnect: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ]
  },

  // Configuración de service worker
  serviceWorker: {
    enabled: true,
    strategy: 'staleWhileRevalidate',
    cache: {
      static: 'cacheFirst',
      dynamic: 'networkFirst',
      api: 'networkFirst'
    },
    offline: {
      page: '/offline',
      fallback: true
    }
  },

  // Configuración de CDN
  cdn: {
    enabled: true,
    domain: 'cdn.legacycargove.com',
    assets: [
      '/assets/img/',
      '/assets/css/',
      '/assets/js/',
      '/assets/fonts/'
    ],
    optimization: {
      images: true,
      css: true,
      js: true,
      fonts: true
    }
  },

  // Configuración de lazy loading
  lazyLoading: {
    images: {
      enabled: true,
      threshold: 0.1,
      rootMargin: '50px'
    },
    videos: {
      enabled: true,
      threshold: 0.1,
      rootMargin: '50px'
    },
    iframes: {
      enabled: true,
      threshold: 0.1,
      rootMargin: '50px'
    }
  },

  // Configuración de bundle splitting
  bundleSplitting: {
    vendor: {
      enabled: true,
      chunks: ['react', 'react-dom', 'next']
    },
    common: {
      enabled: true,
      chunks: ['components', 'utils', 'lib']
    },
    pages: {
      enabled: true,
      chunks: ['pages/index', 'pages/about', 'pages/contact']
    }
  },

  // Configuración de monitoring
  monitoring: {
    enabled: true,
    tools: ['lighthouse', 'pagespeed', 'webpagetest'],
    metrics: ['LCP', 'FID', 'CLS', 'TTFB', 'FCP'],
    alerts: {
      performance: 90,
      accessibility: 90,
      bestPractices: 90,
      seo: 90
    }
  }
}

export default performanceSEO
