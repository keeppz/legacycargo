import { NextResponse } from 'next/server';
import { verifyAuth } from '../../../middleware/authMiddleware';
import { adminDb } from '../../../lib/firebase/admin';

export async function GET(request) {
  // Verificar autenticación
  const authResponse = await verifyAuth(request);
  
  // Si la respuesta no es un "next", significa que hubo un error de autenticación
  if (authResponse.status && authResponse.status !== 200) {
    return authResponse;
  }
  
  try {
    // Obtener ID de usuario desde headers
    const userId = authResponse.request.headers.get('X-User-ID');
    
    // Obtener datos del usuario de Firestore
    const userDoc = await adminDb.collection('users').doc(userId).get();
    
    if (!userDoc.exists) {
      return NextResponse.json({ 
        error: 'Usuario no encontrado' 
      }, { status: 404 });
    }
    
    const userData = userDoc.data();
    
    // Eliminar información sensible si es necesario
    delete userData.password;
    delete userData.securityQuestions;
    
    return NextResponse.json({
      message: 'Datos de usuario obtenidos exitosamente',
      user: {
        id: userId,
        ...userData
      }
    });
  } catch (error) {
    console.error('Error al obtener datos protegidos:', error);
    return NextResponse.json({
      error: 'Error al obtener datos protegidos',
      message: error.message
    }, { status: 500 });
  }
}

export async function POST(request) {
  // Verificar autenticación
  const authResponse = await verifyAuth(request);
  
  // Si la respuesta no es un "next", significa que hubo un error de autenticación
  if (authResponse.status && authResponse.status !== 200) {
    return authResponse;
  }
  
  try {
    // Obtener ID de usuario desde headers
    const userId = authResponse.request.headers.get('X-User-ID');
    
    // Obtener datos del cuerpo
    const data = await request.json();
    
    // Validar datos
    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json({
        error: 'No se proporcionaron datos para actualizar'
      }, { status: 400 });
    }
    
    // Actualizar datos del usuario en Firestore
    await adminDb.collection('users').doc(userId).update({
      ...data,
      updatedAt: new Date().toISOString()
    });
    
    return NextResponse.json({
      message: 'Datos de usuario actualizados exitosamente',
      updatedFields: Object.keys(data)
    });
  } catch (error) {
    console.error('Error al actualizar datos del usuario:', error);
    return NextResponse.json({
      error: 'Error al actualizar datos del usuario',
      message: error.message
    }, { status: 500 });
  }
} 