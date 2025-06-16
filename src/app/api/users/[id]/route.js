import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin';
import { getFirestore } from 'firebase-admin/firestore';

// Obtener detalles de un usuario específico
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Obtener el usuario de Firebase Auth
    const userRecord = await adminAuth.getUser(id);
    
    // Obtener datos adicionales del usuario desde Firestore si existe
    const db = getFirestore();
    const userDoc = await db.collection('users').doc(id).get();
    
    // Combinar datos de Auth y Firestore
    const userData = {
      id: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      phoneNumber: userRecord.phoneNumber,
      disabled: userRecord.disabled,
      createdAt: userRecord.metadata.creationTime,
      lastLoginAt: userRecord.metadata.lastSignInTime,
      ...userDoc.exists ? userDoc.data() : {}
    };
    
    return NextResponse.json({
      success: true,
      user: userData
    });
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener detalles del usuario',
        message: error.message
      },
      { status: error.code === 'auth/user-not-found' ? 404 : 500 }
    );
  }
}

// Actualizar un usuario
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Actualizar usuario en Firebase Auth
    const authUpdates = {};
    
    if (data.email) authUpdates.email = data.email;
    if (data.displayName) authUpdates.displayName = data.displayName;
    if (data.photoURL) authUpdates.photoURL = data.photoURL;
    if (data.phoneNumber) authUpdates.phoneNumber = data.phoneNumber;
    if (data.hasOwnProperty('disabled')) authUpdates.disabled = data.disabled;
    
    // Solo actualizar en Auth si hay campos para actualizar
    if (Object.keys(authUpdates).length > 0) {
      await adminAuth.updateUser(id, authUpdates);
    }
    
    // Actualizar datos adicionales en Firestore
    const db = getFirestore();
    const userRef = db.collection('users').doc(id);
    
    // Filtrar campos que no deberían ir a Firestore
    const { email, displayName, photoURL, phoneNumber, disabled, ...firestoreData } = data;
    
    // Solo actualizar en Firestore si hay campos para actualizar
    if (Object.keys(firestoreData).length > 0) {
      await userRef.set(firestoreData, { merge: true });
    }
    
    // Obtener el usuario actualizado
    const userRecord = await adminAuth.getUser(id);
    const userDoc = await userRef.get();
    
    // Combinar datos de Auth y Firestore
    const userData = {
      id: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      phoneNumber: userRecord.phoneNumber,
      disabled: userRecord.disabled,
      createdAt: userRecord.metadata.creationTime,
      lastLoginAt: userRecord.metadata.lastSignInTime,
      ...userDoc.exists ? userDoc.data() : {}
    };
    
    return NextResponse.json({
      success: true,
      user: userData
    });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al actualizar el usuario',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Eliminar un usuario
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Eliminar usuario de Firebase Auth
    await adminAuth.deleteUser(id);
    
    // Eliminar datos del usuario de Firestore
    const db = getFirestore();
    await db.collection('users').doc(id).delete();
    
    return NextResponse.json({
      success: true,
      message: 'Usuario eliminado correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al eliminar el usuario',
        message: error.message
      },
      { status: 500 }
    );
  }
} 