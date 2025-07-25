# Configuración de Firebase para Legacy Cargo

## 🔒 Seguridad - Variables de Entorno

Para evitar exponer credenciales sensibles, este proyecto usa variables de entorno.

## 📋 Pasos para configurar

### 1. Crear archivo .env.local

Copia el archivo `env.example` como `.env.local`:

```bash
cp env.example .env.local
```

### 2. Obtener credenciales de Firebase

#### Para Firebase Admin SDK (Backend):

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto "legacy-cargo"
3. Ve a **Configuración del proyecto** > **Cuentas de servicio**
4. Haz clic en **Generar nueva clave privada**
5. Descarga el archivo JSON

#### Para Firebase Client SDK (Frontend):

1. En Firebase Console, ve a **Configuración del proyecto** > **General**
2. En la sección "Tus aplicaciones", selecciona tu app web
3. Copia la configuración

### 3. Configurar variables de entorno

Edita el archivo `.env.local` y reemplaza los valores:

```env
# Firebase Admin SDK (Backend)
FIREBASE_PROJECT_ID=legacy-cargo
FIREBASE_PRIVATE_KEY_ID=391e0e1a7c85b8e6dffe6ce8cbf831da97777f52
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsaMdPoQvzAvzU\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@legacy-cargo.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=110626693563414487410
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40legacy-cargo.iam.gserviceaccount.com

# Firebase Storage
FIREBASE_STORAGE_BUCKET=legacy-cargo.firebasestorage.app

# Firebase Client SDK (Frontend)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCc-V-o4-I6YXRYyOdD2GtJIblErFoKo3s
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=legacy-cargo.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=legacy-cargo
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=legacy-cargo.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1041246199630
NEXT_PUBLIC_FIREBASE_APP_ID=1:1041246199630:web:4982eed9709cd78e0e881f
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-2RZ0CQ56MY
```

### 4. Eliminar archivo JSON del repositorio

```bash
git rm --cached lib/legacy-cargo-firebase-adminsdk-fbsvc-391e0e1a7c.json
git commit -m "Remove Firebase service key JSON file"
```

### 5. Verificar configuración

Reinicia el servidor de desarrollo:

```bash
npm run dev
```

## ⚠️ Importante

- **NUNCA** subas el archivo `.env.local` al repositorio
- El archivo `.env.local` ya está en `.gitignore`
- Las credenciales de Firebase Admin SDK son muy sensibles
- Mantén las credenciales seguras y no las compartas

## 🔧 APIs disponibles

Con esta configuración, tendrás acceso a:

- `/api/genPdf` - Genera PDFs y los sube a Firebase Storage
- `/api/generate-preid` - Genera IDs de pre-alerta secuenciales

## 🚨 Solución de problemas

Si GitHub bloquea el push por credenciales:

1. Elimina el archivo JSON del repositorio
2. Usa variables de entorno
3. Haz commit de los cambios
4. Intenta el push nuevamente 