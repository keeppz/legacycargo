import { NextResponse } from 'next/server';
import { adminAuth } from '../lib/firebase/admin';

/**
 * Middleware para verificar autenticación en rutas API
 * @param {Request} request - Objeto de solicitud
 * @returns {Promise<NextResponse>} Respuesta de Next.js
 */
export async function verifyAuth(request) {
  try {
    // Obtener token de autorización
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No autorizado: token faltante o inválido' },
        { status: 401 }
      );
    }
    
    const token = authHeader.split('Bearer ')[1];
    if (!token) {
      return NextResponse.json(
        { error: 'No autorizado: token vacío' },
        { status: 401 }
      );
    }
    
    // Verificar token
    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      // Añadir uid a los headers para uso posterior
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('X-User-ID', decodedToken.uid);
      
      // Si es necesario verificar roles o permisos adicionales
      if (decodedToken.admin === true) {
        requestHeaders.set('X-User-Role', 'admin');
      }
      
      // Continuar con la solicitud
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Error verificando token:', error);
      return NextResponse.json(
        { error: 'No autorizado: token inválido', details: error.message },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error en middleware de autenticación:', error);
    return NextResponse.json(
      { error: 'Error de servidor interno' },
      { status: 500 }
    );
  }
}

/**
 * Middleware para verificar roles de usuario
 * @param {string[]} allowedRoles - Array de roles permitidos
 * @returns {Function} Middleware para verificar roles
 */
export function verifyRole(allowedRoles) {
  return async (request) => {
    try {
      const authHeader = request.headers.get('Authorization');
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json(
          { error: 'No autorizado: token faltante o inválido' },
          { status: 401 }
        );
      }
      
      const token = authHeader.split('Bearer ')[1];
      const decodedToken = await adminAuth.verifyIdToken(token);
      
      // Verificar si el usuario tiene el rol requerido
      const userRole = decodedToken.role || 'user';
      
      if (!allowedRoles.includes(userRole)) {
        return NextResponse.json(
          { error: 'Acceso denegado: no tienes los permisos necesarios' },
          { status: 403 }
        );
      }
      
      // Continuar con la solicitud
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('X-User-ID', decodedToken.uid);
      requestHeaders.set('X-User-Role', userRole);
      
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Error en middleware de verificación de rol:', error);
      return NextResponse.json(
        { error: 'Error de servidor interno' },
        { status: 500 }
      );
    }
  };
} 