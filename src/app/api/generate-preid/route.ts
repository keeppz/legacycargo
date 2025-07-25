import { NextResponse } from 'next/server';
// @ts-ignore
import { adminDb } from '../../../../lib/firebase';
import { Firestore } from 'firebase-admin/firestore';

// Type assertion para adminDb
// @ts-ignore
const db = adminDb as Firestore;

export async function POST() {
  try {
    // Obtener el correlativo actual desde la colección config
    const configRef = db.collection('config').doc('prealertCounter');
    const configDoc = await configRef.get();
    
    let currentCounter = 1;
    
    if (configDoc.exists) {
      const configData = configDoc.data();
      currentCounter = (configData?.counter || 0) + 1;
    }
    
    // Generar el prealertID con el formato "LC2923-YYMMXX"
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // Últimos 2 dígitos del año
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Mes con 2 dígitos
    const counter = currentCounter.toString().padStart(2, '0'); // Correlativo con 2 dígitos
    
    const prealertID = `LC2923-${year}${month}${counter}`;
    
    // Actualizar el contador en Firestore
    await configRef.set({
      counter: currentCounter,
      lastUpdated: new Date(),
      lastGeneratedID: prealertID
    }, { merge: true });
    
    return NextResponse.json({
      success: true,
      prealertID: prealertID,
      counter: currentCounter,
      message: 'PrealertID generado exitosamente'
    }, { status: 201 });
    
  } catch (error: unknown) {
    console.error('Error al generar prealertID:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json(
      { error: 'Error al generar prealertID', message: errorMessage },
      { status: 500 }
    );
  }
}
