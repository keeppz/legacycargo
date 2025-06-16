'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="error-container">
      <h1>Error 404 - Página no encontrada</h1>
      <p>La página <strong>{pathname}</strong> que intentas acceder no existe.</p>
      <p>Información de depuración:</p>
      <ul>
        <li>Ruta actual: {pathname}</li>
        <li>Navegador: {typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR'}</li>
        <li>Next.js 15.2.4</li>
      </ul>
      <p>Intenta acceder a algunas de estas rutas:</p>
      <ul>
        <li><Link href="/index" style={{color: 'blue', textDecoration: 'underline'}}>Página index</Link></li>
        <li><Link href="/about" style={{color: 'blue', textDecoration: 'underline'}}>About</Link></li>
        <li><Link href="/contact" style={{color: 'blue', textDecoration: 'underline'}}>Contact</Link></li>
      </ul>
      <Link href="/index">
        <button>Volver al inicio</button>
      </Link>
    </div>
  )
} 