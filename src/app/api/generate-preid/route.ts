import { NextResponse } from 'next/server';
// @ts-ignore
import { adminDb } from '../../../../lib/firebase';
import { Firestore } from 'firebase-admin/firestore';

// Type assertion para adminDb
// @ts-ignore
const db = adminDb as Firestore;

interface RequestBody {
  country?: string;
  type_of_shipment?: string;
}

export async function POST(request: Request) {
  try {
    // Parse request body for optional parameters
    let requestBody: RequestBody = {};
    try {
      requestBody = await request.json();
    } catch {
      // Si no hay body o es inválido, usar valores por defecto (objeto vacío)
      requestBody = {};
    }

    const { country, type_of_shipment } = requestBody;

    // Obtener el correlativo actual desde la colección config
    const configRef = db.collection('config').doc('prealertCounter');
    const configDoc = await configRef.get();
    
    let currentCounter = 1;
    
    if (configDoc.exists) {
      const configData = configDoc.data();
      currentCounter = (configData?.counter || 0) + 1;
    }
    
    // Determinar el prefijo según las condiciones
    // Si es de China y vía aérea, usar "DK-LC-", sino usar "LC2923-"
    const isChinaAir = 
      country?.toLowerCase() === 'china' && 
      type_of_shipment?.toLowerCase() === 'aereo';
    
    const prefix = isChinaAir ? 'DK-LC-' : 'LC2923-';
    
    // Generar el prealertID con el formato determinado
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // Últimos 2 dígitos del año
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Mes con 2 dígitos
    const counter = currentCounter.toString().padStart(2, '0'); // Correlativo con 2 dígitos
    
    const prealertID = `${prefix}${year}${month}${counter}`;
    
    // Actualizar el contador en Firestore
    await configRef.set({
      counter: currentCounter,
      lastUpdated: new Date(),
      lastGeneratedID: prealertID,
      lastPrefix: prefix
    }, { merge: true });
    
    return NextResponse.json({
      success: true,
      prealertID: prealertID,
      counter: currentCounter,
      prefix: prefix,
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
