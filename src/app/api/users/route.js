import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '../../../lib/firebase/admin';

export async function GET(request) {
  try {
    // Verificar si adminDb está inicializado correctamente
    if (!adminDb) {
      console.error('Error: Firebase Admin DB no está inicializado correctamente');
      return NextResponse.json({ 
        error: 'Error de configuración de Firebase Admin', 
        message: 'La base de datos de Firebase Admin no está inicializada. Verifica las credenciales en el archivo .env.local.' 
      }, { status: 500 });
    }

    // Obtener parámetros de consulta
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || 10;
    
    // Ejemplo de verificación de autenticación (opcional)
    // const authHeader = request.headers.get('Authorization');
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    // }
    // const token = authHeader.split('Bearer ')[1];
    // await adminAuth.verifyIdToken(token);
    
    // Obtener usuarios de Firestore
    const usersSnapshot = await adminDb
      .collection('users')
      .limit(parseInt(limit))
      .get();
    
    const users = [];
    usersSnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    let allDocs = [];
    try {
      // Obtener TODOS los documentos sin filtros para ver qué hay realmente
      const basicQuery = adminDb.collection('shipments');
      const basicSnapshot = await basicQuery.get();
      
      console.log('Snapshot vacío:', basicSnapshot.empty);
      console.log('Cantidad de documentos:', basicSnapshot.size);
      
      basicSnapshot.forEach(doc => {
        allDocs.push({id: doc.id, ...doc.data()});
      });
      
      console.log('Documentos en colección shipments:', JSON.stringify(allDocs, null, 2));
    } catch (error) {
      console.error('Error al obtener documentos básicos:', error);
    }
    
    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuarios', message: error.message },
      { status: 500 }
    );
  }
} 