import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Obtener información del entorno
    const diagnostico = {
      entorno: {
        nodeEnv: process.env.NODE_ENV || 'no definido',
        variables: {
          FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || 'no definido',
          FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID || 'no definido',
          FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY ? 
            `definido (${process.env.FIREBASE_PRIVATE_KEY.length} caracteres)` : 'no definido',
          FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL || 'no definido',
          FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID || 'no definido',
          FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL || 'no definido'
        }
      },
      analisis: {
        variablesPresentes: !!process.env.FIREBASE_PROJECT_ID && 
                           !!process.env.FIREBASE_PRIVATE_KEY && 
                           !!process.env.FIREBASE_CLIENT_EMAIL,
        formatoClavePrivada: {
          comienzaCorrectamente: process.env.FIREBASE_PRIVATE_KEY?.startsWith('"-----BEGIN PRIVATE KEY-----\\n') || false,
          terminaCorrectamente: process.env.FIREBASE_PRIVATE_KEY?.endsWith('\\n-----END PRIVATE KEY-----\\n"') || false,
          contieneBackslashN: process.env.FIREBASE_PRIVATE_KEY?.includes('\\n') || false,
          contieneSaltosReales: process.env.FIREBASE_PRIVATE_KEY?.includes('\n') || false,
          primerosCaracteres: process.env.FIREBASE_PRIVATE_KEY ? 
            process.env.FIREBASE_PRIVATE_KEY.substring(0, 30) + '...' : 'no disponible'
        }
      },
      recomendaciones: []
    };

    // Añadir recomendaciones basadas en el análisis
    if (!diagnostico.analisis.variablesPresentes) {
      diagnostico.recomendaciones.push(
        "Asegúrate de que las variables FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY y FIREBASE_CLIENT_EMAIL estén definidas en .env.local"
      );
    }

    if (process.env.FIREBASE_PRIVATE_KEY) {
      if (!diagnostico.analisis.formatoClavePrivada.comienzaCorrectamente || 
          !diagnostico.analisis.formatoClavePrivada.terminaCorrectamente) {
        diagnostico.recomendaciones.push(
          "La clave privada debe comenzar con '\"-----BEGIN PRIVATE KEY-----\\n' y terminar con '\\n-----END PRIVATE KEY-----\\n\"'"
        );
      }

      if (!diagnostico.analisis.formatoClavePrivada.contieneBackslashN) {
        diagnostico.recomendaciones.push(
          "La clave privada debe contener '\\n' para los saltos de línea"
        );
      }
    } else {
      diagnostico.recomendaciones.push(
        "La variable FIREBASE_PRIVATE_KEY no está definida en .env.local"
      );
    }

    // Recomendación general sobre la ubicación del archivo .env.local
    diagnostico.recomendaciones.push(
      "Asegúrate de que el archivo .env.local esté en la raíz del proyecto (no dentro de src/)"
    );

    // Recomendación sobre el reinicio del servidor
    diagnostico.recomendaciones.push(
      "Después de modificar .env.local, reinicia completamente el servidor con 'npm run dev'"
    );

    // Solución alternativa
    diagnostico.recomendaciones.push(
      "Como alternativa, edita src/lib/firebase/admin.js para forzar el uso de la clave embebida cambiando la condición en la línea ~33 a: if (true) {"
    );

    return NextResponse.json({
      diagnostico,
      mensaje: "Revisa el diagnóstico para solucionar el problema de inicialización de Firebase Admin"
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error en el diagnóstico",
      mensaje: error.message
    }, { status: 500 });
  }
} 