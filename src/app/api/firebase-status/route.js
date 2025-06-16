import { NextResponse } from 'next/server';
import { adminApp, adminDb, adminAuth } from '../../../lib/firebase/admin';

export async function GET() {
  try {
    // Información general del entorno
    const status = {
      environment: process.env.NODE_ENV || 'no definido',
      firebase: {
        adminAppInitialized: !!adminApp,
        adminDbInitialized: !!adminDb,
        adminAuthInitialized: !!adminAuth,
        credentials: {
          projectId: process.env.FIREBASE_PROJECT_ID ? "definido" : "no definido",
          privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID ? "definido" : "no definido",
          privateKey: process.env.FIREBASE_PRIVATE_KEY ? "definido" : "no definido",
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL ? "definido" : "no definido"
        }
      }
    };

    // Si no hay conexión a Firebase, devolver solo información diagnóstica
    if (!adminDb) {
      return NextResponse.json({
        success: false,
        message: 'Firebase Admin no está inicializado correctamente',
        status
      }, { status: 500 });
    }

    // Intentar una operación simple de escritura/lectura para verificar la conexión
    try {
      // Colección y documento especial solo para pruebas
      const testRef = adminDb.collection('_system').doc('connection_test');
      
      // Escribir datos de prueba
      await testRef.set({
        timestamp: new Date().toISOString(),
        status: 'success'
      });
      
      // Leer los datos para verificar lectura
      const testDoc = await testRef.get();
      
      return NextResponse.json({
        success: true,
        message: 'Conexión a Firebase Admin establecida correctamente',
        data: testDoc.data(),
        status
      });
    } catch (dbError) {
      console.error('Error de operación en Firestore:', dbError);
      return NextResponse.json({
        success: false,
        message: 'Firebase Admin inicializado pero hay un error en la operación de Firestore',
        error: dbError.message,
        status
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error al verificar estado de Firebase:', error);
    return NextResponse.json({
      success: false,
      message: 'Error al verificar estado de Firebase',
      error: error.message
    }, { status: 500 });
  }
} 