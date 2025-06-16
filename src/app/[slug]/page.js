'use client'

import { useParams, notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// Importamos las páginas que sabemos que existen directamente
const pages = {
  'contact': dynamic(() => import('../../app/contact/page')),
  'faq': dynamic(() => import('../../app/faq/page')),
  'team': dynamic(() => import('../../app/team/page')),
  'service': dynamic(() => import('../../app/service/page')),
  'project': dynamic(() => import('../../app/project/page')),
  'news': dynamic(() => import('../../app/news/page')),
  'pricing': dynamic(() => import('../../app/pricing/page')),
  'news-grid': dynamic(() => import('../../app/news-grid/page')),
  // 'index-two': dynamic(() => import('../index/page')),
}

export default function DynamicPage() {
  const { slug } = useParams()
  
  // Si la página existe en nuestro mapping, la renderizamos
  if (pages[slug]) {
    const Page = pages[slug]
    return <Page />
  }
  
  // Si no existe, mostramos la página 404
  return notFound()
} 