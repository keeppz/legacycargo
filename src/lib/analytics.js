// Google Analytics 4 y Search Console
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Función para trackear vistas de página con nombre personalizado
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Eventos específicos para SEO
export const trackImportationSearch = (origin, destination) => {
  event({
    action: 'search_importation',
    category: 'importation',
    label: `${origin}_to_${destination}`,
  })
}

export const trackServiceView = (service) => {
  event({
    action: 'view_service',
    category: 'service',
    label: service,
  })
}

export const trackQuoteRequest = (origin, destination, service) => {
  event({
    action: 'request_quote',
    category: 'conversion',
    label: `${service}_${origin}_to_${destination}`,
  })
}

export const trackContactForm = (formType) => {
  event({
    action: 'contact_form_submit',
    category: 'conversion',
    label: formType,
  })
}

// Configuración de Google Search Console
export const searchConsoleConfig = {
  siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  propertyId: process.env.NEXT_PUBLIC_GSC_PROPERTY_ID,
}

// Configuración de Bing Webmaster Tools
export const bingConfig = {
  siteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
}

// Configuración de Yandex Webmaster
export const yandexConfig = {
  siteVerification: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
}