import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

// Función para formatear correctamente la clave privada
const formatPrivateKey = (key) => {
  if (!key) return undefined;
  // Si la clave ya contiene saltos de línea correctos, la devolvemos como está
  if (key.includes('-----BEGIN PRIVATE KEY-----\n')) {
    return key;
  }
  // Reemplazamos \n (texto) por verdaderos saltos de línea
  return key.replace(/\\n/g, '\n');
};

// Console logs para debug (quitar en producción)
console.log("FIREBASE CONFIG:");
console.log("- NODE_ENV:", process.env.NODE_ENV);
console.log("- FIREBASE_PROJECT_ID:", process.env.FIREBASE_PROJECT_ID ? "definido" : "no definido");
console.log("- FIREBASE_CLIENT_EMAIL:", process.env.FIREBASE_CLIENT_EMAIL ? "definido" : "no definido");
console.log("- FIREBASE_PRIVATE_KEY:", process.env.FIREBASE_PRIVATE_KEY ? "definido (longitud: " + process.env.FIREBASE_PRIVATE_KEY?.length + ")" : "no definido");
console.log("- FIREBASE_PRIVATE_KEY_FORMAT:", process.env.FIREBASE_PRIVATE_KEY?.includes("\\n") ? "contiene \\n (necesita formato)" : process.env.FIREBASE_PRIVATE_KEY?.includes("-----BEGIN") ? "parece formateado correctamente" : "formato desconocido o no definido");

// FORZAR USO DE CREDENCIALES EMBEBIDAS: Ignorar variables de entorno y usar valores hardcodeados
// NOTA: Esto es solo para desarrollo, en producción deberías usar variables de entorno
const serviceAccount = {
  type: "service_account",
  project_id: "legacy-cargo", // Valor hardcodeado
  private_key_id: "8322d011a5e30f747cf2bf1a765e2939dc3052c3",
  // La clave privada formateada correctamente con saltos de línea reales
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIrQRveSz7uVEm\nMQ/Ijhs1xvEFwz4K+oYsIzzGwdzOi7W0pVom2IldoW1wSG6WcLylhuT1SGN9thYf\nOP/sTIiQ4Msz7OV4d5oDH+1f3qe9B6sb3RnQyqB3NDMeU9KASJoPJ55w3wTGxBQe\n+QAQKtx3qfR3vnwIXaCkshQXn9z78m2FpoN73393GC7KPgcC+8VndXymaxmexTfl\n/n4ekooAYmSH84+aucVRgNSpi/NQjz4JuxGJAxDLIOR5TpemeetO4PMSrnHBNTkC\nSeWzwIZfWoI8eVfYp7p6inHbpQ+thKrXg3NrM4oYdvIFYSjpFgbOlInOr+FFLcdX\nuuTWay53AgMBAAECggEAB3lyRdiklUekvyBqrxSj7M/ZIFbSU8RbBP/W/qwv1j2b\n6fuSrQm5rBQcKGd6Pv45+IxasMwecIs8rbMIzTtYhtTonKmBLoh94wnoZH69jqvf\ncq08jetOKMJ3+PQ0TfTmUBQwsZGM8v5QpYqututxxL8+zMr6gbFDD39Wgj7BE102\nTHqe4QdsZRRiETaJs7gOMyJFiRXfzKG8ImY+LaWFBvfF3sPoKrpOMMXgolEtKBaL\nrcTov71mlo5Vxm6zp5cf/9oYVLO4vQFZmbzXXQZvRvFka7nfsEY/JoZi24mgo1ze\nbXI5GhyucS6ZkZMkQ1AlVo7z3yozATzOrUpxd7+pWQKBgQDyyJ0b5HhOxaePhcuj\nhWEq0pTdMiQImDAjQue1Fugi3EDfwolm45TGP4V+jUTTHuh7yC00Lr68j5UW+A5X\nRCH8rg5WOyP8i/XGyifYaqQ9Osmq1oA4LJSbUw7uJjMr938+E94jAFplFLANscMu\npzAZoUVexQALnSXNr1E9+IpxLQKBgQDTmZjw6Nv6AB6YLaAfgTHycm3Rwby/lvBz\niO+AXPXyeA1Lc/M848WRko0sxO/R7e7v8tYRuNk3mzNA5E7R64sMn/lK2de0XxVu\nv8uE9kfG9AsWanOt3gCDpgKohyTkjREWhh7pZRpRmdlFbDAwvqgWNtKIDLiFfGw+\np8VWgyW8swKBgQDGRwbgZ7fFhXDyKvADrQONKIwBFlkNV9VAhvybDYkqJz0oQUVb\n7RNs0SXiE9eYoE54ASTB0Edf0deN+aokpPUo2rHExOn/8AIahrEB8x4ND3zx89ql\nhesb6zpvTm1ORAP8G9e4OCqbEMkzdfEUoeALnoT7/+Gomn/sOnkcJmZSRQKBgB7X\nNENorScy/UKQ49WzruP3aao44pnKFiHAw6eh5PcCKG3m6HznddRR1+G+knW2iCzQ\n6AKNPpusMzwyCoruGcYtSthuB9JySV1q9u7aNnv49eS+fz3ILasCd0C48ded9++g\nfMDny345PkGwExYHs9gJBYZu1DYgfGZlbY2+b7GhAoGACQjAtQlJxPu04mJNl7XF\nw92/4MPpLs5XLV71vc+Nesd0c0Rbg90TBizOmwCcJuDebOCIo5S/ZE7aQfSutQHX\nUY33DxW6kFoUhrV/R7uH9czJfiRK7c6pivhFpiBjfz2Yjmgk/+aChOJMXlsUDuNp\nST++cexEQMb08eAPOn1WaZc=\n-----END PRIVATE KEY-----\n",
  // Quitar cualquier coma extra al final
  client_email: "firebase-adminsdk-fbsvc@legacy-cargo.iam.gserviceaccount.com",
  client_id: "110626693563414487410",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40legacy-cargo.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

// Ya no necesitamos la condición, siempre usamos las credenciales hardcodeadas
console.warn('⚠️ Usando credenciales hardcodeadas. Esto NO es seguro para producción.');

// Verificar que tenemos las credenciales mínimas necesarias
if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
  console.error('❌ Error: Faltan credenciales de Firebase Admin requeridas');
  console.error('- project_id:', !!serviceAccount.project_id);
  console.error('- private_key:', !!serviceAccount.private_key);
  console.error('- client_email:', !!serviceAccount.client_email);
  
  if (serviceAccount.private_key) {
    console.log('- private_key comienza con:', serviceAccount.private_key.substring(0, 40) + '...');
  }
}

// Singleton pattern para asegurar que solo hay una instancia de Firebase Admin
function initializeFirebaseAdmin() {
  try {
    // Comprobar si ya hay apps inicializadas
    const existingApps = getApps();
    if (existingApps.length > 0) {
      console.log('✅ Usando instancia existente de Firebase Admin.');
      return existingApps[0];
    }
    
    // Verificar credenciales antes de intentar inicializar
    if (!serviceAccount.private_key || !serviceAccount.client_email) {
      throw new Error('Credenciales incompletas para Firebase Admin');
    }
    
    // Inicializar nueva app
    console.log('🔄 Inicializando nueva instancia de Firebase Admin...');
    return initializeApp({
      credential: cert(serviceAccount),
      storageBucket: "legacy-cargo.firebasestorage.app"
    });
  } catch (error) {
    console.error('❌ Error al inicializar Firebase Admin:', error);
    
    // Mensajes de error más específicos según el problema
    if (error.code === 'app/invalid-credential') {
      console.error('Credencial inválida. Verifica el formato de tu clave privada y que los demás campos sean correctos.');
    } else if (error.code === 'app/invalid-app-options') {
      console.error('Opciones de app inválidas. Verifica que todas las credenciales requeridas estén presentes.');
    }
    
    throw new Error('No se pudo inicializar Firebase Admin. Verifica tus credenciales: ' + error.message);
  }
}

// Intentar inicializar Firebase Admin
let adminApp, adminDb, adminAuth, adminStorage;

try {
  adminApp = initializeFirebaseAdmin();
  adminDb = getFirestore(adminApp);
  adminAuth = getAuth(adminApp);
  adminStorage = getStorage(adminApp);
  console.log('✅ Firebase Admin inicializado correctamente');
} catch (error) {
  console.error('❌ Error al inicializar Firebase Admin:', error);
  // No volvemos a lanzar el error para permitir que la aplicación se inicie
  // y mostrar un mensaje de error más amigable cuando se use alguna función
}

export { adminApp, adminDb, adminAuth, adminStorage }; 