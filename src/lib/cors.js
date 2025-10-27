/**
 * Configuración de CORS para APIs
 * Optimizada para aplicaciones móviles (Android/iOS) y FlutterFlow
 * 
 * @description
 * - Permite todos los orígenes (*) para máxima compatibilidad con apps móviles
 * - Incluye headers necesarios para preflight requests
 * - Deshabilita cache para evitar problemas con datos desactualizados
 */

export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
    'Access-Control-Max-Age': '86400', // 24 horas
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
};

/**
 * Crea una respuesta JSON con headers CORS
 * @param {Object} data - Datos a retornar
 * @param {Object} options - Opciones adicionales (status, etc.)
 * @returns {NextResponse}
 */
export function jsonWithCors(data, options = {}) {
    const { status = 200, ...otherOptions } = options;
    
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
            ...otherOptions.headers
        }
    });
}

/**
 * Handler para preflight requests (OPTIONS)
 * @returns {Response}
 */
export function handleOptions() {
    return new Response(null, {
        status: 200,
        headers: corsHeaders
    });
}

