import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Usa variables de entorno para la configuración o valores por defecto
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCc-V-o4-I6YXRYyOdD2GtJIblErFoKo3s",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "legacy-cargo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "legacy-cargo",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "legacy-cargo.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1041246199630",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1041246199630:web:4982eed9709cd78e0e881f",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-2RZ0CQ56MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Analytics solo en el cliente
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Configurar proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

// Configurar opciones adicionales para Google
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Configurar opciones adicionales para Apple
appleProvider.addScope('email');
appleProvider.addScope('name');

// Función para manejar errores de Firestore
export const handleFirestoreError = (error) => {
  console.error("Error de Firestore:", error);
  
  if (error.code === 'permission-denied') {
    console.warn("Error de permisos: Las reglas de seguridad de Firestore están bloqueando esta operación.");
    return {
      success: false,
      message: "No tienes permisos para realizar esta operación. Las reglas de seguridad de Firestore deben ser actualizadas."
    };
  }
  
  return {
    success: false,
    message: `Error: ${error.message}`
  };
};

export { 
  app, 
  analytics, 
  auth, 
  db, 
  storage,
  googleProvider,
  appleProvider
}; 