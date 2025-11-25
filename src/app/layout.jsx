import './globals.css'
import '../scss/style.scss'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FontAwesomeLoader from '@/components/FontAwesomeLoader'

export const metadata = {
  title: 'Legacy Cargo - Importaciones a Venezuela desde China, Panamá y Estados Unidos | Logística Internacional',
  description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional, transporte marítimo, aéreo y terrestre. Cotización gratuita y seguimiento en tiempo real.',
  keywords: 'importaciones venezuela, importar desde china, importar desde panama, importar desde estados unidos, logistica internacional venezuela, transporte maritimo, transporte aereo, courier venezuela, encomiendas venezuela, aduanas venezuela',
  authors: [{ name: 'Legacy Cargo' }],
  creator: 'Legacy Cargo',
  publisher: 'Legacy Cargo',
  applicationName: 'Legacy Cargo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://legacycargove.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-VE': '/',
      'es': '/',
      'x-default': '/',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  themeColor: '#1e40af',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Legacy Cargo',
  },
  other: {
    'geo.region': 'VE',
    'geo.placename': 'Venezuela',
    'geo.position': '8.0;-66.0',
    'ICBM': '8.0, -66.0',
    'msapplication-TileColor': '#1e40af',
    'mobile-web-app-capable': 'yes',
    'msapplication-tap-highlight': 'no',
  },
  openGraph: {
    title: 'Legacy Cargo - Importaciones a Venezuela desde China, Panamá y Estados Unidos',
    description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional con cotización gratuita.',
    url: 'https://legacycargove.com',
    siteName: 'Legacy Cargo',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Legacy Cargo - Importaciones a Venezuela',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Cargo - Importaciones a Venezuela desde China, Panamá y Estados Unidos',
    description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional.',
    images: ['/assets/img/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Legacy Cargo",
    "description": "Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos",
    "url": "https://legacycargove.com",
    "logo": "https://legacycargove.com/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+58-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "VE",
      "addressLocality": "Venezuela"
    },
    "sameAs": [
      "https://www.facebook.com/legacycargo",
      "https://www.instagram.com/legacycargo",
      "https://www.linkedin.com/company/legacycargo"
    ],
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
            "name": "Importaciones desde China a Venezuela",
            "description": "Servicio de importación de mercancías desde China hacia Venezuela"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Importaciones desde Panamá a Venezuela",
            "description": "Servicio de importación de mercancías desde Panamá hacia Venezuela"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Importaciones desde Estados Unidos a Venezuela",
            "description": "Servicio de importación de mercancías desde Estados Unidos hacia Venezuela"
          }
        }
      ]
    }
  };

  return (
    <html lang="es">
      <body>
        <FontAwesomeLoader />
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
} 