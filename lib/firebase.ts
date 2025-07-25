import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

// Credenciales de Firebase Admin desde variables de entorno
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID || "legacy-cargo",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: "googleapis.com"
};

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