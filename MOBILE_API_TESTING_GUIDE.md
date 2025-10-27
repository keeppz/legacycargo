# Guía de Testing para APIs en FlutterFlow (Android/iOS)

## 🎯 Configuración CORS Implementada

Se ha implementado una configuración CORS completa y optimizada para apps móviles en las siguientes APIs:

### APIs con CORS configurado:
- ✅ `/api/calculate-shipping` - Calculadora de envíos
- ✅ `/api/states` - Estados de Venezuela

### Características de la configuración:
- **Preflight requests (OPTIONS)** completamente manejados
- **Headers permisivos** para máxima compatibilidad móvil
- **Sin caché** para evitar datos desactualizados
- **Compatibilidad total** con Android, iOS y FlutterFlow Preview

---

## 🧪 Cómo Probar las APIs

### 1. Probar desde FlutterFlow Test Mode

**API de Calculadora de Envíos:**

```
URL: https://legacycargove.com/api/calculate-shipping
Method: POST
Headers:
  - Content-Type: application/json

Body (ejemplo marítimo Panamá):
{
  "origin": "panama",
  "destination": "distrito capital",
  "shipmentType": "maritimo",
  "rubro": "ropa",
  "dimensions": {
    "length": 50,
    "width": 40,
    "height": 30
  },
  "weight": 0,
  "quantity": 1,
  "unit": "cm"
}

Body (ejemplo aéreo USA):
{
  "origin": "estados_unidos",
  "destination": "distrito capital",
  "shipmentType": "aereo",
  "dimensions": {
    "length": 30,
    "width": 20,
    "height": 15
  },
  "weight": 5,
  "quantity": 1,
  "unit": "cm"
}
```

**API de Estados:**

```
URL: https://legacycargove.com/api/states
Method: GET
Query Params (opcional):
  - origin: panama | estados_unidos | china
```

### 2. Probar desde Terminal (Pre-Deploy)

```bash
# Test API de Calculate Shipping
curl -X POST https://legacycargove.com/api/calculate-shipping \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "panama",
    "destination": "distrito capital",
    "shipmentType": "maritimo",
    "rubro": "ropa",
    "dimensions": {"length": 50, "width": 40, "height": 30},
    "weight": 0,
    "quantity": 1,
    "unit": "cm"
  }'

# Test API de States
curl https://legacycargove.com/api/states

# Test API de States con filtro
curl https://legacycargove.com/api/states?origin=panama

# Test Preflight (OPTIONS)
curl -X OPTIONS https://legacycargove.com/api/calculate-shipping \
  -H "Origin: https://app.flutterflow.io" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -v
```

---

## 🔍 Troubleshooting por Síntoma

### ❌ Error: "Network Error" o "Connection Failed"

**Causas posibles:**
1. La URL en FlutterFlow es incorrecta
2. El servidor no está corriendo en producción
3. Problema de SSL/certificados

**Solución:**
```
1. Verifica la URL exacta: https://legacycargove.com/api/calculate-shipping
2. Abre la URL en un navegador para verificar que responde
3. Verifica que el certificado SSL sea válido
```

### ❌ Error: "JSON Parse Error" en FlutterFlow

**Causa:** Los JSON Paths no están configurados correctamente

**Solución en FlutterFlow:**
```
Verifica que los JSON Paths sean:
- $.success → Boolean
- $.data.pricing.subtotal → Double
- $.data.pricing.insurance → Double
- $.data.pricing.total → Double
- $.data.shipment.estimatedTime → String

NO:
- $.pricing.total ❌ (falta el .data)
- $.total ❌ (estructura incorrecta)
```

### ❌ Error: "400 Bad Request" con mensaje específico

**Causa:** Campos requeridos faltantes o formato incorrecto

**Mensajes comunes y soluciones:**

| Error | Solución |
|-------|----------|
| "Faltan campos requeridos..." | Verifica que origin, destination, shipmentType y dimensions estén presentes |
| "El peso es requerido para envíos aéreos" | Agrega el campo weight > 0 para shipmentType: "aereo" |
| "El rubro es requerido para envíos marítimos desde Panamá" | Agrega el campo rubro cuando origin: "panama" y shipmentType: "maritimo" |
| "Envíos aéreos desde China no están disponibles" | China solo soporta shipmentType: "maritimo" |
| "Envíos marítimos desde Estados Unidos no están disponibles" | USA solo soporta shipmentType: "aereo" |

### ❌ Error: "CORS Policy" (solo en Preview/Web)

**Causa:** Headers CORS no se aplicaron todavía

**Solución:**
```
Este error ya NO debería aparecer después del deploy con la nueva configuración.
Si persiste:
1. Limpia cache del navegador
2. Verifica que el deploy se completó correctamente
3. Prueba en un navegador de incógnito
```

### ❌ La respuesta llega pero no se muestra en la UI

**Causas posibles:**
1. Variables de estado no están configuradas correctamente
2. Los JSON Paths son incorrectos
3. El parsing de la respuesta falla silenciosamente

**Solución:**
```
1. En FlutterFlow, ve a la página y verifica las variables PageState:
   - calculationResult (tipo: JSON)
   - totalPrice (tipo: Double)
   - estimatedTime (tipo: String)

2. Verifica que el API Call esté configurado para guardar en estas variables

3. En el widget que muestra los resultados, verifica que use:
   - PageState.totalPrice NO response.total
   - PageState.estimatedTime NO response.time
```

---

## ✅ Checklist Pre-Deploy

Antes de hacer deploy a producción:

- [ ] Variables de entorno configuradas en el servidor
- [ ] Archivo `src/data/shipping-data.json` existe y tiene datos válidos
- [ ] Build exitoso: `npm run build`
- [ ] Prueba local con: `npm run start`
- [ ] Prueba el endpoint con curl o Postman
- [ ] Verifica que el certificado SSL sea válido

---

## ✅ Checklist Post-Deploy

Después de hacer deploy:

- [ ] Endpoint responde: `curl https://legacycargove.com/api/calculate-shipping`
- [ ] Preflight funciona: ver comando OPTIONS arriba
- [ ] Test desde FlutterFlow Test Mode exitoso
- [ ] Test en Android (debug build) exitoso
- [ ] Test en iOS (simulator) exitoso
- [ ] Test en producción (builds release) exitoso

---

## 📱 Diferencias entre Web y Móvil

### Web (Preview/PWA)
- ✅ Requiere CORS
- ✅ Preflight requests (OPTIONS)
- ⚠️ Cache agresivo del navegador
- ⚠️ Limitaciones por Same-Origin Policy

### Móvil Nativo (Android/iOS)
- ❌ **NO requiere CORS** (pero lo incluimos por compatibilidad)
- ✅ Control total sobre requests
- ✅ No hay Same-Origin Policy
- ✅ Mejor manejo de timeouts

**Nota:** Aunque las apps nativas no necesitan CORS, FlutterFlow Preview SÍ lo necesita, por eso la configuración es importante.

---

## 🎯 Configuración Recomendada en FlutterFlow

### API Call: CalculateShipping

**Settings:**
- Name: `CalculateShipping`
- Method: `POST`
- URL: `https://legacycargove.com/api/calculate-shipping`
- Response Type: `JSON`
- Timeout: `30 seconds` (aumenta si es necesario)

**Error Handling:**
- Show Error Snackbar: `true`
- Error Message: Custom from `$.error` path

**Variables:**
- Todas las variables deben ser **Required** excepto: rubro, weight, quantity, insurance

### API Call: GetStates

**Settings:**
- Name: `GetStates`
- Method: `GET`
- URL: `https://legacycargove.com/api/states`
- Response Type: `JSON`
- Cache Response: `false` (importante para datos actualizados)

---

## 🚀 Próximos Pasos

1. **Deploy los cambios** a producción
2. **Prueba desde FlutterFlow** Test Mode
3. **Build debug** para Android/iOS y prueba en dispositivo real
4. **Si funciona:** procede con build release
5. **Monitor logs** de la API para detectar errores

---

## 📞 Support

Si después de seguir esta guía sigues teniendo problemas:

1. Revisa los logs del servidor de producción
2. Usa las herramientas de debugging de FlutterFlow
3. Verifica la respuesta raw de la API con curl/Postman
4. Compara con los ejemplos de esta guía

**Tip:** La mayoría de problemas en producción son por:
- URL incorrecta (http vs https, dominio equivocado)
- JSON Paths mal configurados
- Campos requeridos faltantes en el request

