import { track } from '@vercel/analytics';

// Función para trackear uso de la calculadora
export const trackCalculatorUsage = (origin, destination, tipoEnvio, rubro, precio) => {
  track('calculator_used', {
    origin,
    destination,
    tipoEnvio,
    rubro,
    precio: Math.round(precio * 100) / 100, // Redondear a 2 decimales
    timestamp: new Date().toISOString()
  });
};

// Función para trackear navegación a páginas específicas
export const trackPageView = (pageName) => {
  track('page_view', {
    page: pageName,
    timestamp: new Date().toISOString()
  });
};

// Función para trackear clicks en botones importantes
export const trackButtonClick = (buttonName, location) => {
  track('button_click', {
    button: buttonName,
    location,
    timestamp: new Date().toISOString()
  });
};

// Función para trackear formularios enviados
export const trackFormSubmission = (formName, data) => {
  track('form_submitted', {
    form: formName,
    data: JSON.stringify(data),
    timestamp: new Date().toISOString()
  });
};

// Función para trackear errores
export const trackError = (errorType, errorMessage, context) => {
  track('error_occurred', {
    type: errorType,
    message: errorMessage,
    context,
    timestamp: new Date().toISOString()
  });
};
