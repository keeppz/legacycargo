// Configuración de optimización de rendimiento para SEO
export const performanceConfig = {
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    quality: 85,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    domains: ['legacycargove.com', 'cdn.legacycargove.com'],
    unoptimized: false
  },

  // Configuración de fuentes
  fonts: {
    preload: [
      {
        href: '/fonts/inter-var.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
      }
    ],
    fallback: {
      'Inter': ['system-ui', 'sans-serif']
    }
  },

  // Configuración de CSS
  css: {
    critical: [
      '/css/critical.css',
      '/css/above-the-fold.css'
    ],
    nonCritical: [
      '/css/non-critical.css',
      '/css/below-the-fold.css'
    ]
  },

  // Configuración de JavaScript
  javascript: {
    critical: [
      '/js/critical.js',
      '/js/analytics.js'
    ],
    lazy: [
      '/js/lazy.js',
      '/js/animations.js'
    ]
  },

  // Configuración de caché
  cache: {
    static: {
      maxAge: 31536000, // 1 año
      immutable: true
    },
    dynamic: {
      maxAge: 86400, // 1 día
      staleWhileRevalidate: 604800 // 1 semana
    },
    api: {
      maxAge: 300, // 5 minutos
      staleWhileRevalidate: 3600 // 1 hora
    }
  },

  // Configuración de compresión
  compression: {
    gzip: true,
    brotli: true,
    minify: {
      html: true,
      css: true,
      js: true
    }
  },

  // Configuración de preload
  preload: {
    critical: [
      {
        href: '/css/critical.css',
        as: 'style'
      },
      {
        href: '/js/critical.js',
        as: 'script'
      }
    ],
    prefetch: [
      {
        href: '/importaciones-venezuela',
        as: 'document'
      },
      {
        href: '/calculator',
        as: 'document'
      }
    ]
  },

  // Configuración de service worker
  serviceWorker: {
    enabled: true,
    cacheStrategy: 'staleWhileRevalidate',
    offlinePage: '/offline'
  },

  // Configuración de CDN
  cdn: {
    enabled: true,
    domain: 'cdn.legacycargove.com',
    assets: [
      '/assets/img/',
      '/assets/css/',
      '/assets/js/'
    ]
  },

  // Configuración de lazy loading
  lazyLoading: {
    images: true,
    videos: true,
    iframes: true,
    threshold: 0.1,
    rootMargin: '50px'
  },

  // Configuración de bundle splitting
  bundleSplitting: {
    vendor: true,
    common: true,
    pages: true,
    chunks: {
      'vendor': ['react', 'react-dom'],
      'common': ['next', 'next/router'],
      'pages': ['pages/index', 'pages/about']
    }
  }
}

export default performanceConfig
