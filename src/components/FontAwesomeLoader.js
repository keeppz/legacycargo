'use client'

import { useEffect } from 'react'

export default function FontAwesomeLoader() {
  useEffect(() => {
    // Verificar si Font Awesome ya está cargado
    if (document.getElementById('font-awesome-css')) {
      return
    }

    // Crear y agregar el link de Font Awesome
    const link = document.createElement('link')
    link.id = 'font-awesome-css'
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    link.crossOrigin = 'anonymous'
    
    document.head.appendChild(link)
  }, [])

  return null
}

