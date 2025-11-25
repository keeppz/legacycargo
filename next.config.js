/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones SEO
  trailingSlash: false,
  generateEtags: true,
  
  // Compresión
  compress: true,
  
  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ]
  },
  
  // Redirecciones SEO
  async redirects() {
    return [
      {
        source: '/importaciones',
        destination: '/importaciones-venezuela',
        permanent: true,
      },
      {
        source: '/servicios',
        destination: '/service',
        permanent: true,
      },
    ]
  },
  
  // Optimizaciones de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configuración para Turbopack (Next.js 16+)
  // Turbopack tiene soporte nativo para SCSS, no necesita configuración adicional
  turbopack: {},
  
  // Configuración de webpack para optimizaciones (fallback)
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones de producción
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    
    return config
  },
}

module.exports = nextConfig
