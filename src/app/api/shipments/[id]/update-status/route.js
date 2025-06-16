import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

// Endpoint para actualizar el estado de un envío
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Validar que venga el estado
    if (!data.status) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere el nuevo estado (status)' },
        { status: 400 }
      );
    }
    
    // Datos a actualizar
    const updateData = {
      status: data.status,
      last_update: new Date()
    };
    
    // Intentar actualizar en 'shipments'
    let docSnapshot = await adminDb.collection('shipments').doc(id).get();
    let collection = 'shipments';
    
    if (!docSnapshot.exists) {
      // Si no existe en 'shipments', intentar en 'shippings'
      docSnapshot = await adminDb.collection('shippings').doc(id).get();
      collection = 'shippings';
      
      if (!docSnapshot.exists) {
        return NextResponse.json(
          { error: 'Envío no encontrado', message: 'No se encontró un envío con el ID proporcionado' },
          { status: 404 }
        );
      }
    }
    
    // Actualizar el documento
    await adminDb.collection(collection).doc(id).update(updateData);
    
    // Obtener el envío actualizado
    const updatedDoc = await adminDb.collection(collection).doc(id).get();
    
    return NextResponse.json({
      success: true,
      status: data.status,
      shipment: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      },
      message: `Estado actualizado a: ${data.status}`
    });
  } catch (error) {
    console.error('Error al actualizar estado del envío:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar estado del envío',
        message: error.message
      },
      { status: 500 }
    );
  }
} 