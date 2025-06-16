import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

// Endpoint para activar/desactivar un punto de recepción
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Validar que venga el estado activo
    if (data.active === undefined) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere especificar el estado activo (active)' },
        { status: 400 }
      );
    }
    
    // Verificar si el punto de recepción existe
    const docSnapshot = await adminDb.collection('puntosRecepcion').doc(id).get();
    
    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: 'Punto de recepción no encontrado', message: 'No se encontró un punto de recepción con el ID proporcionado' },
        { status: 404 }
      );
    }
    
    // Datos a actualizar
    const updateData = {
      active: Boolean(data.active),
      last_update: new Date()
    };
    
    // Actualizar el documento
    await adminDb.collection('puntosRecepcion').doc(id).update(updateData);
    
    // Obtener el punto de recepción actualizado
    const updatedDoc = await adminDb.collection('puntosRecepcion').doc(id).get();
    
    return NextResponse.json({
      success: true,
      active: Boolean(data.active),
      puntoRecepcion: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      },
      message: Boolean(data.active) ? 'Punto de recepción activado' : 'Punto de recepción desactivado'
    });
  } catch (error) {
    console.error('Error al actualizar estado del punto de recepción:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar estado del punto de recepción',
        message: error.message
      },
      { status: 500 }
    );
  }
} 