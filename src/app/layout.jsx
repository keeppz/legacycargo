import './globals.css'
import '../scss/style.scss'
import { AuthProvider } from '@/contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: 'Legacy Cargo - Importaciones a Venezuela desde China, Panamá y Estados Unidos | Logística Internacional',
  description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional, transporte marítimo, aéreo y terrestre. Cotización gratuita y seguimiento en tiempo real.',
  keywords: 'importaciones venezuela, importar desde china, importar desde panama, importar desde estados unidos, logistica internacional venezuela, transporte maritimo, transporte aereo, courier venezuela, encomiendas venezuela, aduanas venezuela',
  authors: [{ name: 'Legacy Cargo' }],
  creator: 'Legacy Cargo',
  publisher: 'Legacy Cargo',
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
    },
  },
  openGraph: {
    title: 'Legacy Cargo - Importaciones a Venezuela desde China, Panamá y Estados Unidos',
    description: 'Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos. Servicios de logística internacional con cotización gratuita.',
    url: 'https://legacycargove.com',
    siteName: 'Legacy Cargo',
    images: [
      {
        url: '/assets/img/og-image.jpg',
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
    images: ['/assets/img/og-image.jpg'],
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
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="canonical" href="https://legacycargove.com" />
        <link rel="alternate" hrefLang="es-VE" href="https://legacycargove.com" />
        <link rel="alternate" hrefLang="es" href="https://legacycargove.com" />
        <link rel="alternate" hrefLang="x-default" href="https://legacycargove.com" />
        <meta name="geo.region" content="VE" />
        <meta name="geo.placename" content="Venezuela" />
        <meta name="geo.position" content="8.0;-66.0" />
        <meta name="ICBM" content="8.0, -66.0" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Legacy Cargo" />
        <meta name="application-name" content="Legacy Cargo" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Legacy Cargo",
              "description": "Especialistas en importaciones a Venezuela desde China, Panamá y Estados Unidos",
              "url": "https://legacycargove.com",
              "logo": "https://legacycargove.com/logo192.png",
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
            })
          }}
        />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 