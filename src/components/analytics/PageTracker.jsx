'use client'

import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

export default function PageTracker({ pageName }) {
  useEffect(() => {
    // Trackear la vista de página cuando el componente se monta
    trackPageView(pageName);
  }, [pageName]);

  return null; // Este componente no renderiza nada
}
