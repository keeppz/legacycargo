# Guía de Configuración FlutterFlow - API Calculadora de Envíos

## Paso 1: Configurar API Call en FlutterFlow

### 1.1 Crear nuevo API Call
1. Ve a **API Calls** en el panel izquierdo de FlutterFlow
2. Haz clic en **+ Create API Call**
3. Nombra la API: `CalculateShipping`

### 1.2 Configurar el Endpoint
```
Method: POST
URL: https://tu-dominio.com/api/calculate-shipping
```

### 1.3 Configurar Headers
```
Content-Type: application/json
```

### 1.4 Configurar Request Body
Selecciona **JSON** y agrega esta estructura:
```json
{
  "origin": "[origin]",
  "destination": "[destination]", 
  "shipmentType": "[shipmentType]",
  "rubro": "[rubro]",
  "dimensions": {
    "length": [length],
    "width": [width],
    "height": [height]
  },
  "weight": [weight],
  "quantity": [quantity],
  "insurance": [insurance],
  "unit": "cm"
}
```

### 1.5 Configurar Variables
Agrega estas variables en **API Call Variables**:

| Variable Name | Type | Required | Default |
|---------------|------|----------|---------|
| origin | String | Yes | - |
| destination | String | Yes | - |
| shipmentType | String | Yes | - |
| rubro | String | No | - |
| length | Double | Yes | - |
| width | Double | Yes | - |
| height | Double | Yes | - |
| weight | Double | No | 0 |
| quantity | Integer | No | 1 |
| insurance | Boolean | No | false |

## Paso 2: Configurar Response Parsing

### 2.1 Test API Call
1. Haz clic en **Test API Call**
2. Llena los valores de prueba:
```json
{
  "origin": "panama",
  "destination": "distrito capital",
  "shipmentType": "maritimo", 
  "rubro": "ropa",
  "length": 50,
  "width": 40,
  "height": 30,
  "weight": 0,
  "quantity": 1,
  "insurance": false
}
```
3. Ejecuta la prueba

### 2.2 Configurar JSON Path
Una vez que la prueba sea exitosa, configura estos JSON Paths:

| Field Name | JSON Path | Type |
|------------|-----------|------|
| success | $.success | Boolean |
| subtotal | $.data.pricing.subtotal | Double |
| insurance | $.data.pricing.insurance | Double |
| total | $.data.pricing.total | Double |
| volume | $.data.dimensions.volume | Double |
| volumetricWeight | $.data.dimensions.volumetricWeight | Double |
| estimatedTime | $.data.shipment.estimatedTime | String |
| region | $.data.shipment.region | String |
| error | $.error | String |

## Paso 3: Implementar en tu Página

### 3.1 Crear Variables de Estado
En tu página, crea estas **Page State Variables**:

| Variable Name | Type | Initial Value |
|---------------|------|---------------|
| selectedOrigin | String | "" |
| selectedDestination | String | "" |
| selectedShipmentType | String | "" |
| selectedRubro | String | "" |
| packageLength | Double | 0 |
| packageWidth | Double | 0 |
| packageHeight | Double | 0 |
| packageWeight | Double | 0 |
| packageQuantity | Integer | 1 |
| insuranceEnabled | Boolean | false |
| calculationResult | JSON | null |
| isLoading | Boolean | false |

### 3.2 Configurar Formulario
1. **Dropdown para Origen**:
   - Options: `Panamá,Estados Unidos,China`
   - Values: `panama,estados_unidos,china`
   - Update: `selectedOrigin`

2. **Dropdown para Destino**:
   - Options: Lista de estados venezolanos
   - Values: Estados en minúsculas
   - Update: `selectedDestination`

3. **Dropdown para Tipo de Envío**:
   - Options: `Aéreo,Marítimo`
   - Values: `aereo,maritimo`
   - Update: `selectedShipmentType`

4. **Dropdown para Rubro** (Condicional):
   - Visible cuando: `selectedOrigin == "panama" && selectedShipmentType == "maritimo"`
   - Options: `Ropa,Calzado,Electrodomésticos,etc`
   - Values: Valores en minúsculas
   - Update: `selectedRubro`

5. **TextFields para Dimensiones**:
   - Length: Update `packageLength`
   - Width: Update `packageWidth` 
   - Height: Update `packageHeight`

6. **TextField para Peso** (Condicional):
   - Visible cuando: `selectedShipmentType == "aereo"`
   - Update: `packageWeight`

7. **TextField para Cantidad**:
   - Update: `packageQuantity`
   - Default: 1

8. **Checkbox para Seguro**:
   - Update: `insuranceEnabled`

### 3.3 Configurar Botón de Cálculo

#### 3.3.1 Action: Set Page State
```
isLoading = true
```

#### 3.3.2 Action: API Call
- API Call: `CalculateShipping`
- Variables:
  - origin: `selectedOrigin`
  - destination: `selectedDestination`
  - shipmentType: `selectedShipmentType`
  - rubro: `selectedRubro`
  - length: `packageLength`
  - width: `packageWidth`
  - height: `packageHeight`
  - weight: `packageWeight`
  - quantity: `packageQuantity`
  - insurance: `insuranceEnabled`

#### 3.3.3 Action: Conditional (Success)
- Condition: `CalculateShippingCall.success == true`
- Action: Set Page State
```
calculationResult = CalculateShippingCall.jsonBody
isLoading = false
```

#### 3.3.4 Action: Conditional (Error)
- Condition: `CalculateShippingCall.success == false`
- Action: Show Snack Bar
```
Message: CalculateShippingCall.error
isLoading = false
```

## Paso 4: Mostrar Resultados

### 4.1 Container de Resultados
- Visible cuando: `calculationResult != null`

### 4.2 Elementos del Resultado
1. **Precio Total**:
   ```
   Text: $${calculationResult.data.pricing.total}
   ```

2. **Tiempo Estimado**:
   ```
   Text: ${calculationResult.data.shipment.estimatedTime}
   ```

3. **Volumen**:
   ```
   Text: ${calculationResult.data.dimensions.volume} ft³
   ```

4. **Peso Volumétrico** (Solo aéreo):
   ```
   Visible: selectedShipmentType == "aereo"
   Text: ${calculationResult.data.dimensions.volumetricWeight} kg
   ```

5. **Seguro de Carga** (Si está activado):
   ```
   Visible: insuranceEnabled == true
   Text: Seguro: $${calculationResult.data.pricing.insurance}
   ```

## Paso 5: Validaciones

### 5.1 Validar antes de llamar API
Agrega estas condiciones antes del API Call:

```dart
// Validar campos requeridos
if (selectedOrigin.isEmpty || selectedDestination.isEmpty || selectedShipmentType.isEmpty) {
  // Mostrar error
  return;
}

// Validar dimensiones
if (packageLength <= 0 || packageWidth <= 0 || packageHeight <= 0) {
  // Mostrar error
  return;
}

// Validar peso para aéreo
if (selectedShipmentType == "aereo" && packageWeight <= 0) {
  // Mostrar error
  return;
}

// Validar rubro para Panamá marítimo
if (selectedOrigin == "panama" && selectedShipmentType == "maritimo" && selectedRubro.isEmpty) {
  // Mostrar error
  return;
}
```

## Paso 6: Testing

### 6.1 Casos de Prueba
1. **Aéreo USA → Caracas**:
   - Origin: estados_unidos
   - Destination: distrito capital
   - Type: aereo
   - Weight: 5kg
   - Dimensions: 30x20x15cm

2. **Marítimo Panamá → Interior**:
   - Origin: panama
   - Destination: aragua
   - Type: maritimo
   - Rubro: ropa
   - Dimensions: 50x40x30cm

3. **Marítimo China → Caracas**:
   - Origin: china
   - Destination: miranda
   - Type: maritimo
   - Dimensions: 100x80x60cm

## Notas Importantes

1. **Manejo de Errores**: Siempre verifica `success == true` antes de usar los datos
2. **Loading States**: Usa `isLoading` para mostrar indicadores de carga
3. **Validaciones**: Implementa validaciones del lado del cliente para mejor UX
4. **Testing**: Prueba todos los flujos antes de publicar
5. **URL de Producción**: Asegúrate de usar la URL correcta de tu API

## Troubleshooting

### Error: "API Call Failed"
- Verifica que la URL sea correcta
- Revisa que el servidor esté funcionando
- Comprueba los headers de la request

### Error: "JSON Parse Error"
- Verifica que los JSON Paths sean correctos
- Asegúrate de que la respuesta tenga el formato esperado

### Error: "Validation Failed"
- Revisa que todos los campos requeridos estén llenos
- Verifica que los tipos de datos sean correctos
