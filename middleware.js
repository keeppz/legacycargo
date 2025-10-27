import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Para rutas de API, NO hacer redirección
  if (pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    
    // Agregar headers CORS
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
    response.headers.set('Access-Control-Max-Age', '86400');
    
    // Si es OPTIONS (preflight), responder inmediatamente
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 200,
        headers: response.headers,
      });
    }
    
    return response;
  }

  // Para otras rutas, continuar normalmente
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
  ],
};

