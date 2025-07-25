import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

// Importar las credenciales del archivo JSON
import serviceAccount from './legacy-cargo-firebase-adminsdk-fbsvc-391e0e1a7c.json';

// Singleton pattern para asegurar que solo hay una instancia de Firebase Admin
function initializeFirebaseAdmin() {
  try {
    // Comprobar si ya hay apps inicializadas
    const existingApps = getApps();
    if (existingApps.length > 0) {
      console.log('✅ Usando instancia existente de Firebase Admin.');
      return existingApps[0];
    }
    
    // Inicializar nueva app
    console.log('🔄 Inicializando nueva instancia de Firebase Admin...');
    return initializeApp({
      credential: cert(serviceAccount as any),
      storageBucket: "legacy-cargo.firebasestorage.app"
    });
  } catch (error: unknown) {
    console.error('❌ Error al inicializar Firebase Admin:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    throw new Error('No se pudo inicializar Firebase Admin: ' + errorMessage);
  }
}

// Inicializar Firebase Admin
let adminApp, adminDb, adminAuth, adminStorage;

try {
  adminApp = initializeFirebaseAdmin();
  adminDb = getFirestore(adminApp);
  adminAuth = getAuth(adminApp);
  adminStorage = getStorage(adminApp);
  console.log('✅ Firebase Admin inicializado correctamente');
} catch (error) {
  console.error('❌ Error al inicializar Firebase Admin:', error);
}

export { adminApp, adminDb, adminAuth, adminStorage }; 