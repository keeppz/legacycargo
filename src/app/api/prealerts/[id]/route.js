import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

// Obtener una pre-alerta específica
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Obtener el documento de Firestore
    const docSnapshot = await adminDb.collection('prealerts').doc(id).get();
    
    // Verificar si se encontró el documento
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Pre-alerta no encontrada', message: 'No se encontró una pre-alerta con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Devolver datos de la pre-alerta
    const prealertData = {
      id: docSnapshot.id,
      ...docSnapshot.data()
    };
    
    return NextResponse.json({
      success: true,
      prealert: prealertData
    });
  } catch (error) {
    console.error('Error al obtener pre-alerta:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener detalles de la pre-alerta',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Actualizar una pre-alerta
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // No permitir modificar el ID
    if (data.id) {
      delete data.id;
    }
    
    // Verificar si la pre-alerta existe
    const docSnapshot = await adminDb.collection('prealerts').doc(id).get();
    
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Pre-alerta no encontrada', message: 'No se encontró una pre-alerta con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Añadir fecha de actualización
    const updateData = {
      ...data,
      last_update: new Date()
    };
    
    // Actualizar en Firestore
    await adminDb.collection('prealerts').doc(id).update(updateData);
    
    // Obtener la pre-alerta actualizada
    const updatedDoc = await adminDb.collection('prealerts').doc(id).get();
    
    return NextResponse.json({
      success: true,
      prealert: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      }
    });
  } catch (error) {
    console.error('Error al actualizar pre-alerta:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar la pre-alerta',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Eliminar una pre-alerta
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Verificar si la pre-alerta existe
    const docSnapshot = await adminDb.collection('prealerts').doc(id).get();
    
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Pre-alerta no encontrada', message: 'No se encontró una pre-alerta con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Eliminar de Firestore
    await adminDb.collection('prealerts').doc(id).delete();
    
    return NextResponse.json({
      success: true,
      message: 'Pre-alerta eliminada correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar pre-alerta:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al eliminar la pre-alerta',
        message: error.message
      },
      { status: 500 }
    );
  }
} 