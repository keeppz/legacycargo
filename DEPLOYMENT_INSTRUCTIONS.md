# 🚀 Instrucciones de Despliegue - Solución CORS para Apps Móviles

## ✅ Cambios Realizados

Se implementó una **solución completa de CORS** para que tu app de FlutterFlow (Android/iOS) funcione correctamente con las APIs.

### Archivos modificados:
- ✅ `src/lib/cors.js` - Utilidad CORS reutilizable (NUEVO)
- ✅ `src/app/api/calculate-shipping/route.js` - API principal (MODIFICADO)
- ✅ `src/app/api/states/route.js` - API de estados (MODIFICADO)

### Documentación creada:
- 📄 `CORS_IMPLEMENTATION_SUMMARY.md` - Resumen técnico completo
- 📄 `MOBILE_API_TESTING_GUIDE.md` - Guía de testing y troubleshooting
- 📄 `DEPLOYMENT_INSTRUCTIONS.md` - Este archivo
- 🧪 `test-apis.ps1` - Script de testing para Windows
- 🧪 `test-apis.sh` - Script de testing para Linux/Mac

---

## 🎯 Problema Solucionado

**Antes:**
- ❌ App de FlutterFlow no recibía respuestas de la API
- ❌ Errores CORS en modo preview
- ❌ Sin manejo de preflight requests

**Después:**
- ✅ CORS completo implementado
- ✅ Preflight requests manejados
- ✅ Compatible con Android, iOS y FlutterFlow Preview
- ✅ Headers optimizados para apps móviles

---

## 📦 Paso 1: Hacer Deploy

### Si usas **Vercel** (recomendado):

```bash
# 1. Commit los cambios
git add .
git commit -m "feat: Implementar CORS para apps móviles Android/iOS"

# 2. Push a main (deploy automático)
git push origin main

# 3. Espera a que Vercel termine el deploy (1-2 minutos)
# Verás el progreso en: https://vercel.com/tu-proyecto
```

### Si usas **otro hosting**:

```bash
# 1. Commit los cambios
git add .
git commit -m "feat: Implementar CORS para apps móviles Android/iOS"

# 2. Build local
npm run build

# 3. Subir a tu servidor según el método que uses
```

---

## 🧪 Paso 2: Probar que Funcione

### Opción A: Usar el script de testing (Recomendado)

**En Windows PowerShell:**
```powershell
.\test-apis.ps1
```

**En Linux/Mac:**
```bash
./test-apis.sh
```

Deberías ver todos los tests con ✅ PASS.

### Opción B: Test manual rápido

Abre PowerShell y ejecuta:

```powershell
# Test rápido
Invoke-RestMethod -Uri "https://legacycargove.com/api/states" -Method Get

# Debería devolver un JSON con success: true
```

---

## 📱 Paso 3: Probar en FlutterFlow

### 3.1 Verificar URL en FlutterFlow

1. Abre tu proyecto en FlutterFlow
2. Ve a **API Calls** > **CalculateShipping**
3. Verifica que la URL sea exactamente:
   ```
   https://legacycargove.com/api/calculate-shipping
   ```
4. **NO debe ser:**
   - ❌ `http://localhost:3000/...`
   - ❌ `http://legacycargove.com/...` (sin la 's' en https)

### 3.2 Test en FlutterFlow

1. En FlutterFlow, ve a **API Calls** > **CalculateShipping**
2. Click en **"Test API Call"**
3. Ingresa valores de prueba:
   ```
   origin: panama
   destination: distrito capital
   shipmentType: maritimo
   rubro: ropa
   length: 50
   width: 40
   height: 30
   weight: 0
   quantity: 1
   ```
4. Click **"Run Test"**
5. Deberías ver una respuesta exitosa con el precio calculado

### 3.3 Test en Preview

1. Abre tu app en **"Test Mode"** (preview)
2. Navega a la página de cotización
3. Ingresa datos de prueba y calcula
4. La respuesta debería mostrarse correctamente

### 3.4 Test en Dispositivo Real (Android)

1. Build debug: **Run > Build > Android**
2. Instala en tu teléfono Android
3. Prueba la cotización
4. Debería funcionar correctamente

---

## ✅ Checklist de Verificación

Marca cada item cuando lo hayas verificado:

### Pre-Deploy
- [ ] Commit realizado
- [ ] Push a repositorio exitoso
- [ ] Deploy completado sin errores

### Post-Deploy
- [ ] Script de testing ejecutado (todos ✅ PASS)
- [ ] API responde en navegador: https://legacycargove.com/api/states
- [ ] Test en FlutterFlow Test Mode exitoso
- [ ] Preview en FlutterFlow funciona
- [ ] Test en dispositivo Android exitoso
- [ ] Test en dispositivo iOS exitoso (si aplica)

---

## 🔍 Troubleshooting

### ❌ Test falla con "Network Error"

**Solución:**
1. Verifica que el deploy se completó
2. Abre https://legacycargove.com en un navegador
3. Si no carga, hay un problema con el hosting

### ❌ Test falla con error 404

**Solución:**
1. Verifica que las rutas de API existan
2. Asegúrate de que el build incluyó los cambios
3. Revisa los logs del servidor

### ❌ FlutterFlow Test falla con "JSON Parse Error"

**Solución:**
1. Ve a la configuración del API Call en FlutterFlow
2. Verifica los JSON Paths:
   - `$.data.pricing.total` ✅
   - NO `$.total` ❌
3. Re-test después de corregir

### ❌ Preview funciona pero app real no

**Posibles causas:**
1. Problema con certificado SSL
2. Timeout muy corto en la configuración
3. Network permissions faltantes en la app

**Solución:**
1. Verifica que https://legacycargove.com tenga certificado SSL válido
2. En FlutterFlow, aumenta el timeout a 30 segundos
3. Verifica permisos de internet en Android/iOS

---

## 📊 ¿Qué Esperar?

### Tiempo de despliegue:
- **Vercel:** 1-2 minutos automático
- **Otro hosting:** Según tu configuración

### Resultados esperados:
- ✅ **Test Mode (Preview):** Funciona inmediatamente después del deploy
- ✅ **App Android:** Funciona inmediatamente
- ✅ **App iOS:** Funciona inmediatamente
- ⚡ **Performance:** Sin cambios (CORS no afecta velocidad)

---

## 💡 Próximos Pasos Después del Deploy Exitoso

1. **Monitoring:** Revisa logs periódicamente para detectar errores
2. **Testing:** Prueba todos los flujos de la app
3. **Feedback:** Recolecta feedback de usuarios beta
4. **Optimización:** Si todo funciona, considera optimizaciones adicionales

---

## 📞 Soporte

### Si después de seguir esta guía sigues teniendo problemas:

1. **Ejecuta el script de testing:**
   ```powershell
   .\test-apis.ps1
   ```
   Y comparte el output completo

2. **Revisa los logs del servidor:**
   - Vercel: Dashboard > Logs
   - Otro: Según tu hosting

3. **Documentación adicional:**
   - `MOBILE_API_TESTING_GUIDE.md` - Troubleshooting detallado
   - `CORS_IMPLEMENTATION_SUMMARY.md` - Detalles técnicos

---

## 🎉 Resumen

1. **Deploy los cambios** → `git push origin main`
2. **Ejecuta tests** → `.\test-apis.ps1`
3. **Prueba en FlutterFlow** → Test Mode
4. **Prueba en dispositivo real** → Build debug
5. **Si todo funciona** → ✅ Listo para producción!

**La solución está completa y lista para deploy. Solo necesitas seguir estos 5 pasos.**

---

## 📝 Notas Técnicas

- **CORS Headers:** Configurados para máxima compatibilidad
- **Preflight:** Manejado correctamente con OPTIONS
- **Cache:** Deshabilitado para evitar datos desactualizados
- **Seguridad:** Access-Control-Allow-Origin: * es seguro para esta API pública
- **Performance:** Sin impacto negativo en velocidad

**¿Listo para deploy?** Sigue el Paso 1 arriba. 🚀

