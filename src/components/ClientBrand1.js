'use client';

import dynamic from 'next/dynamic';

// Carga dinámica de Brand1 con ssr: false para evitar errores con Swiper
const Brand1 = dynamic(() => import('./sections/Brand1'), {
  ssr: false
});

export default function ClientBrand1() {
  return <Brand1 />;
} 