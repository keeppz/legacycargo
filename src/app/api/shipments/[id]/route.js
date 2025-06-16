import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

// Obtener un envío específico
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Intentar obtener de la colección 'shipments'
    let docSnapshot = await adminDb.collection('shipments').doc(id).get();
    
    // Si no existe, intentar en 'shippings'
    if (!docSnapshot.exists) {
      docSnapshot = await adminDb.collection('shippings').doc(id).get();
    }
    
    // Verificar si se encontró el documento
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Envío no encontrado', message: 'No se encontró un envío con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Devolver datos del envío
    const shipmentData = {
      id: docSnapshot.id,
      ...docSnapshot.data()
    };
    
    return NextResponse.json({
      success: true,
      shipment: shipmentData
    });
  } catch (error) {
    console.error('Error al obtener envío:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener detalles del envío',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Actualizar un envío
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // No permitir modificar el ID
    if (data.id) {
      delete data.id;
    }
    
    // Añadir fecha de actualización
    const updateData = {
      ...data,
      last_update: new Date()
    };
    
    // Intentar actualizar en 'shipments'
    let docSnapshot = await adminDb.collection('shipments').doc(id).get();
    
    if (docSnapshot.exists) {
      await adminDb.collection('shipments').doc(id).update(updateData);
    } else {
      // Si no existe en 'shipments', intentar en 'shippings'
      docSnapshot = await adminDb.collection('shippings').doc(id).get();
      
      if (docSnapshot.exists) {
        await adminDb.collection('shippings').doc(id).update(updateData);
      } else {
        return NextResponse.json(
          { error: 'Envío no encontrado', message: 'No se encontró un envío con el ID proporcionado' },
          { status: 404 }
        );
      }
    }
    
    // Obtener el envío actualizado
    const updatedDoc = await adminDb.collection(docSnapshot.ref.parent.id).doc(id).get();
    
    return NextResponse.json({
      success: true,
      shipment: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      }
    });
  } catch (error) {
    console.error('Error al actualizar envío:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar el envío',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Eliminar un envío
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Intentar eliminar de 'shipments'
    let docSnapshot = await adminDb.collection('shipments').doc(id).get();
    
    if (docSnapshot.exists) {
      await adminDb.collection('shipments').doc(id).delete();
    } else {
      // Si no existe en 'shipments', intentar en 'shippings'
      docSnapshot = await adminDb.collection('shippings').doc(id).get();
      
      if (docSnapshot.exists) {
        await adminDb.collection('shippings').doc(id).delete();
      } else {
        return NextResponse.json(
          { error: 'Envío no encontrado', message: 'No se encontró un envío con el ID proporcionado' },
          { status: 404 }
        );
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Envío eliminado correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar envío:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al eliminar el envío',
        message: error.message
      },
      { status: 500 }
    );
  }
} 