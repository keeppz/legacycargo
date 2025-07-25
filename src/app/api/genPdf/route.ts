import { NextResponse } from 'next/server';
// @ts-ignore
import { adminDb, adminStorage } from '../../../../lib/firebase';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Firestore } from 'firebase-admin/firestore';
import { Storage } from 'firebase-admin/storage';

// Type assertion para adminDb
// @ts-ignore
const db = adminDb as Firestore;
// @ts-ignore
const storage = adminStorage as Storage;

interface RequestData {
  prealertID: string;
}

export async function POST(request: Request) {
  try {
    const data: RequestData = await request.json();
    
    // Validar que venga el prealertID
    if (!data.prealertID) {
      return NextResponse.json(
        { error: 'Datos incompletos', message: 'Se requiere prealertID' },
        { status: 400 }
      );
    }

    // Guardar en Firestore
    const prealertData = {
      prealertID: data.prealertID,
      createdAt: new Date(),
      status: 'generated'
    };

    const docRef = await db.collection('prealerts').add(prealertData);

    // Crear PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // Tamaño A4 en puntos
    
    // Obtener fuente estándar
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Configurar texto
    const text = data.prealertID;
    const fontSize = 48;
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    const textHeight = font.heightAtSize(fontSize);
    
    // Centrar el texto en la página
    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();
    const x = (pageWidth - textWidth) / 2;
    const y = pageHeight - (pageHeight - textHeight) / 2;
    
    // Dibujar el texto
    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0, 0, 0) // Negro
    });
    
    // Generar PDF como bytes
    const pdfBytes = await pdfDoc.save();
    
    // Subir PDF a Firebase Storage
    const bucket = storage.bucket();
    const fileName = `pdfs/${data.prealertID}_${Date.now()}.pdf`;
    const file = bucket.file(fileName);
    
    // Subir el archivo
    await file.save(pdfBytes, {
      metadata: {
        contentType: 'application/pdf',
      },
    });
    
    // Hacer el archivo público y obtener URL
    await file.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    
    // Actualizar el documento en Firestore con la URL del PDF
    await db.collection('prealerts').doc(docRef.id).update({
      pdfUrl: publicUrl,
      updatedAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      id: docRef.id,
      prealertID: data.prealertID,
      pdfUrl: publicUrl,
      message: 'PDF generado y subido exitosamente'
    }, { status: 201 });
    
  } catch (error: unknown) {
    console.error('Error al generar PDF:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json(
      { error: 'Error al generar PDF', message: errorMessage },
      { status: 500 }
    );
  }
}
