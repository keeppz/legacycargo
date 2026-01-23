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
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';
    const status = searchParams.get('status');
    const userId = searchParams.get('userId');
    
    // Construir la consulta base
    let query = adminDb.collection('prealerts');
    
    // Añadir filtros si se han especificado
    if (status) {
      query = query.where('status', '==', status);
    }
    
    if (userId) {
      query = query.where('userId', '==', userId);
    }
    
    // Aplicar ordenamiento
    query = query.orderBy(sort, order);
    
    // Aplicar límite
    query = query.limit(limit);
    
    // Ejecutar la consulta
    const snapshot = await query.get();
    
    // Obtener resultados
    const prealerts = [];
    snapshot.forEach((doc) => {
      prealerts.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return NextResponse.json({ 
      prealerts, 
      total: prealerts.length,
      params: { limit, sort, order, status, userId }
    });
  } catch (error) {
    console.error('Error al obtener pre-alertas:', error);
    return NextResponse.json(
      { error: 'Error al obtener pre-alertas', message: error.message },
      { status: 500 }
    );
  }
}

// POST para crear una nueva pre-alerta
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validar datos mínimos requeridos
    if (!data.userId) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere ID de usuario (userId)' },
        { status: 400 }
      );
    }
    
    if (!data.trackingNumber) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere número de seguimiento (trackingNumber)' },
        { status: 400 }
      );
    }
    
    // Generar prealertID automáticamente si se proporcionan country y type_of_shipment
    let prealertID = data.prealertID; // Usar el proporcionado si existe
    
    if (!prealertID) {
      // Llamar al endpoint generate-preid para obtener un ID
      const generateIdBody = {};
      
      // Si hay country y type_of_shipment, incluirlos
      if (data.country) {
        generateIdBody.country = data.country;
      }
      if (data.type_of_shipment) {
        generateIdBody.type_of_shipment = data.type_of_shipment;
      }
      
      try {
        // Hacer la llamada interna al endpoint generate-preid
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/generate-preid`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generateIdBody),
        });
        
        if (!response.ok) {
          throw new Error('Error al generar prealertID');
        }
        
        const result = await response.json();
        prealertID = result.prealertID;
      } catch (error) {
        console.error('Error generando prealertID:', error);
        return NextResponse.json(
          { error: 'Error al generar prealertID', message: error.message },
          { status: 500 }
        );
      }
    }
    
    // Preparar datos para guardar
    const prealertData = {
      ...data,
      prealertID: prealertID, // Incluir el prealertID generado o proporcionado
      createdAt: new Date(),
      status: data.status || 'pending',
      last_update: new Date()
    };
    
    // Guardar en Firestore usando el prealertID como ID del documento
    await adminDb.collection('prealerts').doc(prealertID).set(prealertData);
    
    return NextResponse.json({
      success: true,
      id: prealertID, // El ID del documento es el prealertID
      prealertID: prealertID, // Retornar el prealertID en la respuesta
      prealert: {
        id: prealertID,
        ...prealertData
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Error al crear pre-alerta:', error);
    return NextResponse.json(
      { error: 'Error al crear pre-alerta', message: error.message },
      { status: 500 }
    );
  }
} 