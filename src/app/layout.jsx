import './globals.css'
import '../scss/style.scss'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata = {
  title: 'Legacy Cargo - Soluciones Logisticas Confiables',
  description: 'Legacy Cargo website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 