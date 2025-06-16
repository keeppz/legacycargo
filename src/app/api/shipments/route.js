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

    console.log('Consultando shipments sin filtros');
    
    // Consulta simple sin ordenamiento ni filtros para ver todos los documentos
    try {
      const snapshot = await adminDb.collection('shipments').limit(100).get();
      console.log(`Consulta simple a 'shipments' encontró: ${snapshot.size} documentos`);
      
      // Obtener resultados
      const shipments = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        shipments.push({
          id: doc.id,
          ...data
        });
        
        // Examinar los primeros 3 documentos para ver su estructura
        if (shipments.length <= 3) {
          console.log(`Documento ${doc.id}:`, Object.keys(data));
          console.log(`Valores`, {
            createdAt: data.createdAt,
            status: data.status,
            cliente: data.cliente || data.customerName
          });
        }
      });
      
      // Si no hay resultados, intentar en la colección 'shippings' como alternativa
      if (shipments.length === 0) {
        console.log('Intentando con colección de respaldo "shippings"');
        
        const backupSnapshot = await adminDb.collection('shippings').limit(100).get();
        console.log(`Consulta simple a 'shippings' encontró: ${backupSnapshot.size} documentos`);
        
        backupSnapshot.forEach((doc) => {
          const data = doc.data();
          shipments.push({
            id: doc.id,
            ...data
          });
          
          // Examinar los primeros 3 documentos para ver su estructura
          if (shipments.length <= 3) {
            console.log(`Documento ${doc.id} (shippings):`, Object.keys(data));
          }
        });
      }
      
      return NextResponse.json({ 
        shipments, 
        total: shipments.length,
        params: { simple: true, mensaje: 'Consulta simple sin filtros' }
      });
    } catch (error) {
      console.error('Error en consulta simple:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error al obtener envíos:', error);
    return NextResponse.json(
      { error: 'Error al obtener envíos', message: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}

// POST para crear un nuevo envío
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validar datos mínimos requeridos
    if (!data.customerName && !data.cliente) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere nombre del cliente' },
        { status: 400 }
      );
    }
    
    // Asegurarse de que createdAt sea un objeto de fecha válido
    const createdAt = new Date();
    
    // Preparar datos para guardar
    const shipmentData = {
      ...data,
      createdAt,
      last_update: createdAt,
      status: data.status || 'pending'
    };
    
    console.log('Creando nuevo envío con datos:', shipmentData);
    
    // Guardar en Firestore
    const docRef = await adminDb.collection('shipments').add(shipmentData);
    console.log('Documento creado con ID:', docRef.id);
    
    return NextResponse.json({
      success: true,
      id: docRef.id,
      shipment: {
        id: docRef.id,
        ...shipmentData
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Error al crear envío:', error);
    return NextResponse.json(
      { error: 'Error al crear envío', message: error.message },
      { status: 500 }
    );
  }
} 