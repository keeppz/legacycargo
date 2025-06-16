import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

// Obtener un punto de recepción específico
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Obtener el documento de Firestore
    const docSnapshot = await adminDb.collection('puntosRecepcion').doc(id).get();
    
    // Verificar si se encontró el documento
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Punto de recepción no encontrado', message: 'No se encontró un punto de recepción con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Devolver datos del punto de recepción
    const puntoData = {
      id: docSnapshot.id,
      ...docSnapshot.data()
    };
    
    return NextResponse.json({
      success: true,
      puntoRecepcion: puntoData
    });
  } catch (error) {
    console.error('Error al obtener punto de recepción:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener detalles del punto de recepción',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Actualizar un punto de recepción
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // No permitir modificar el ID
    if (data.id) {
      delete data.id;
    }
    
    // Verificar si el punto de recepción existe
    const docSnapshot = await adminDb.collection('puntosRecepcion').doc(id).get();
    
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Punto de recepción no encontrado', message: 'No se encontró un punto de recepción con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Añadir fecha de actualización
    const updateData = {
      ...data,
      last_update: new Date()
    };
    
    // Actualizar en Firestore
    await adminDb.collection('puntosRecepcion').doc(id).update(updateData);
    
    // Obtener el punto de recepción actualizado
    const updatedDoc = await adminDb.collection('puntosRecepcion').doc(id).get();
    
    return NextResponse.json({
      success: true,
      puntoRecepcion: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      }
    });
  } catch (error) {
    console.error('Error al actualizar punto de recepción:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar el punto de recepción',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Eliminar un punto de recepción
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Verificar si el punto de recepción existe
    const docSnapshot = await adminDb.collection('puntosRecepcion').doc(id).get();
    
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Punto de recepción no encontrado', message: 'No se encontró un punto de recepción con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Eliminar de Firestore
    await adminDb.collection('puntosRecepcion').doc(id).delete();
    
    return NextResponse.json({
      success: true,
      message: 'Punto de recepción eliminado correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar punto de recepción:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al eliminar el punto de recepción',
        message: error.message
      },
      { status: 500 }
    );
  }
} 