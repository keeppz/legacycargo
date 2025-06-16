import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

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
    const limit = parseInt(searchParams.get('limit') || '50');
    const sort = searchParams.get('sort') || 'name';
    const order = searchParams.get('order') || 'asc';
    const active = searchParams.get('active');
    
    // Construir la consulta base
    let query = adminDb.collection('puntosRecepcion');
    
    // Añadir filtros si se han especificado
    if (active === 'true') {
      query = query.where('active', '==', true);
    } else if (active === 'false') {
      query = query.where('active', '==', false);
    }
    
    // Aplicar ordenamiento
    query = query.orderBy(sort, order);
    
    // Aplicar límite
    query = query.limit(limit);
    
    // Ejecutar la consulta
    const snapshot = await query.get();
    
    // Obtener resultados
    const puntosRecepcion = [];
    snapshot.forEach((doc) => {
      puntosRecepcion.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return NextResponse.json({ 
      puntosRecepcion, 
      total: puntosRecepcion.length,
      params: { limit, sort, order, active }
    });
  } catch (error) {
    console.error('Error al obtener puntos de recepción:', error);
    return NextResponse.json(
      { error: 'Error al obtener puntos de recepción', message: error.message },
      { status: 500 }
    );
  }
}

// POST para crear un nuevo punto de recepción
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validar datos mínimos requeridos
    if (!data.name) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere nombre del punto de recepción' },
        { status: 400 }
      );
    }
    
    if (!data.address) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere dirección del punto de recepción' },
        { status: 400 }
      );
    }
    
    // Preparar datos para guardar
    const puntoData = {
      ...data,
      createdAt: new Date(),
      active: data.active !== undefined ? data.active : true,
      last_update: new Date()
    };
    
    // Guardar en Firestore
    const docRef = await adminDb.collection('puntosRecepcion').add(puntoData);
    
    return NextResponse.json({
      success: true,
      id: docRef.id,
      puntoRecepcion: {
        id: docRef.id,
        ...puntoData
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Error al crear punto de recepción:', error);
    return NextResponse.json(
      { error: 'Error al crear punto de recepción', message: error.message },
      { status: 500 }
    );
  }
} 