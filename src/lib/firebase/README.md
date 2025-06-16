# Configuración de Firebase

Este proyecto utiliza Firebase para autenticación, almacenamiento y base de datos. A continuación se detallan los pasos para configurar correctamente el proyecto.

## Variables de Entorno

Para el correcto funcionamiento de Firebase en este proyecto, es necesario configurar las siguientes variables de entorno en un archivo `.env.local` en la raíz del proyecto:

### Variables para Firebase Admin (lado del servidor)

```
FIREBASE_PROJECT_ID=legacy-cargo
FIREBASE_PRIVATE_KEY_ID=tu-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTu-clave-privada-completa\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=tu-client-email
FIREBASE_CLIENT_ID=tu-client-id
FIREBASE_CLIENT_X509_CERT_URL=tu-client-x509-cert-url
```

### Variables para Firebase Cliente (lado del navegador)

```
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=legacy-cargo
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=tu-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=tu-measurement-id
```

## Obtener credenciales

1. Ve a la [Consola de Firebase](https://console.firebase.google.com/)
2. Selecciona tu proyecto "legacy-cargo"
3. Para obtener las credenciales del cliente (NEXT_PUBLIC_*), ve a la configuración del proyecto y en la sección "Tus aplicaciones", selecciona tu aplicación web.
4. Para obtener las credenciales de administrador (FIREBASE_*), ve a la sección "Cuentas de servicio" en la configuración del proyecto y genera una nueva clave privada.

## Notas importantes sobre seguridad

- **NUNCA** incluyas el archivo JSON de la clave privada directamente en el repositorio.
- Utiliza siempre variables de entorno para almacenar información sensible.
- Para el despliegue en producción, configura las variables de entorno en tu proveedor de hosting.
- Si estás utilizando Vercel, configura las variables de entorno en la configuración del proyecto.

## Usando Firebase Admin

El módulo `src/lib/firebase/admin.js` proporciona acceso a Firebase Admin SDK. Se utiliza para operaciones de servidor como:

- Verificación de tokens
- Acceso privilegiado a la base de datos
- Operaciones de administración de usuarios
- Generación de tokens personalizados

Ejemplo de uso:

```javascript
import { adminAuth, adminDb } from '../lib/firebase/admin';

// Verificar un token de ID
const verifyToken = async (token) => {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error('Error al verificar token:', error);
    throw error;
  }
};

// Obtener datos con privilegios de administrador
const getUserData = async (userId) => {
  try {
    const userDoc = await adminDb.collection('users').doc(userId).get();
    return userDoc.data();
  } catch (error) {
    console.error('Error al obtener datos de usuario:', error);
    throw error;
  }
};
```

## Usando Firebase Cliente

El módulo `src/lib/firebase.js` proporciona acceso a Firebase SDK para el cliente. Se utiliza en el navegador para:

- Autenticación de usuarios
- Operaciones de base de datos con permisos de usuario
- Almacenamiento y recuperación de archivos
- Analytics

Ejemplo de uso:

```javascript
import { auth, db, storage } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// Iniciar sesión con correo y contraseña
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

// Obtener datos de usuario autenticado
const fetchUserProfile = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    throw error;
  }
};
``` 