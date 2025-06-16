import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin';

// Endpoint para activar/desactivar un usuario
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Actualizar el estado disabled del usuario
    await adminAuth.updateUser(id, {
      disabled: Boolean(data.disabled)
    });
    
    // Obtener el usuario actualizado
    const userRecord = await adminAuth.getUser(id);
    
    return NextResponse.json({
      success: true,
      disabled: userRecord.disabled,
      message: userRecord.disabled ? 'Usuario desactivado' : 'Usuario activado'
    });
  } catch (error) {
    console.error('Error al actualizar estado del usuario:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar estado del usuario',
        message: error.message
      },
      { status: 500 }
    );
  }
} 