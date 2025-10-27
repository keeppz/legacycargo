'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="error-page-container">
      <div className="error-content">
        <div className="error-image">
          <img src="/assets/img/404.png" alt="404 Error" />
        </div>
        
        <div className="error-text">
          <h1 className="error-title">¡Oops! Página no encontrada</h1>
          <h2 className="error-subtitle">Error 404</h2>
          <p className="error-description">
            Lo sentimos, la página <strong>"{pathname}"</strong> que estás buscando no existe o ha sido movida.
          </p>
          
          <div className="error-actions">
            <Link href="/" className="btn-primary">
              <i className="fa-solid fa-home"></i>
              Volver al Inicio
            </Link>
            <Link href="/contact" className="btn-secondary">
              <i className="fa-solid fa-envelope"></i>
              Contactar Soporte
            </Link>
          </div>

          <div className="quick-links">
            <h3>Enlaces útiles:</h3>
            <div className="links-grid">
              <Link href="/" className="quick-link">
                <i className="fa-solid fa-home"></i>
                <span>Inicio</span>
              </Link>
              <Link href="/about" className="quick-link">
                <i className="fa-solid fa-users"></i>
                <span>Nosotros</span>
              </Link>
              <Link href="/service" className="quick-link">
                <i className="fa-solid fa-truck"></i>
                <span>Servicios</span>
              </Link>
              <Link href="/contact" className="quick-link">
                <i className="fa-solid fa-phone"></i>
                <span>Contacto</span>
              </Link>
              <Link href="/calculator" className="quick-link">
                <i className="fa-solid fa-calculator"></i>
                <span>Cotizar</span>
              </Link>
              <Link href="/faq" className="quick-link">
                <i className="fa-solid fa-question-circle"></i>
                <span>FAQ</span>
              </Link>
            </div>
          </div>

          <div className="contact-info">
            <p>¿Necesitas ayuda inmediata?</p>
            <div className="contact-details">
              <a href="tel:+584142909883" className="contact-item">
                <i className="fa-solid fa-phone"></i>
                +58 414-2909883
              </a>
              <a href="mailto:info@legacycargove.com" className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                info@legacycargove.com
              </a>
              <a href="https://api.whatsapp.com/send?phone=584142909883&text=Hola%2C%20necesito%20ayuda%20con%20la%20página%20web." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="contact-item whatsapp">
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 