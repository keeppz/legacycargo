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

2. **Dropdown para Destino** (ACTUALIZADO):
   - Options Source: `From Variable`
   - Options: `venezuelanStates` (PageState)
   - Option Label: `label`
   - Option Value: Complete StateItem Object
   - Update: `selectedState` (StateItem)
   - **Nota**: Este dropdown se poblará dinámicamente con la API de estados

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

#### 3.3.2 Action: API Call (ACTUALIZADO)
- API Call: `CalculateShipping`
- Variables:
  - origin: `selectedOrigin`
  - destination: `selectedState.value` ← **CAMBIO CRÍTICO**
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

### 5.1 Validar antes de llamar API (ACTUALIZADO)
Agrega estas condiciones antes del API Call:

```dart
// Validar campos requeridos (ACTUALIZADO)
if (selectedOrigin.isEmpty || selectedState == null || selectedShipmentType.isEmpty) {
  showSnackBar("Complete todos los campos requeridos");
  return;
}

// Validar que el estado tenga un valor válido
if (selectedState.value.isEmpty) {
  showSnackBar("Seleccione un estado de destino válido");
  return;
}

// Validar dimensiones
if (packageLength <= 0 || packageWidth <= 0 || packageHeight <= 0) {
  showSnackBar("Las dimensiones deben ser mayores a 0");
  return;
}

// Validar peso para aéreo
if (selectedShipmentType == "aereo" && packageWeight <= 0) {
  showSnackBar("El peso es requerido para envíos aéreos");
  return;
}

// Validar rubro para Panamá marítimo
if (selectedOrigin == "panama" && selectedShipmentType == "maritimo" && selectedRubro.isEmpty) {
  showSnackBar("El rubro es requerido para envíos marítimos desde Panamá");
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

---

## 📍 Integración de la API de Estados de Venezuela

La API de estados permite obtener la lista completa de estados venezolanos con sus configuraciones de regiones según el origen del envío.

### 🔗 Configuración del API Call

#### 1. Crear nuevo API Call
```
Nombre: GetVenezuelanStates
Método: GET
URL: https://legacycargove.com/api/states
```

#### 2. Parámetros de Query (Opcionales)
```
Nombre: origin
Tipo: String
Valor: panama | estados_unidos | china
Descripción: Filtrar por configuración de origen específico
```

### 📊 Variables PageState Requeridas

**IMPORTANTE**: Todas las variables deben ser **PageState Variables**, no AppState.

#### Variables para API de Estados
```
Nombre: statesApiResponse
Tipo: JSON
Valor Inicial: null
Descripción: Almacena la respuesta completa de la API de estados
```

```
Nombre: venezuelanStates  
Tipo: List<StateItem>
Valor Inicial: []
Descripción: Lista procesada de estados para el dropdown
```

```
Nombre: selectedState
Tipo: StateItem  
Valor Inicial: null
Descripción: Estado venezolano seleccionado por el usuario
```

#### Estructura StateItem (Custom Data Type)
**Crear en FlutterFlow**: Settings > Data Types > Create Data Type

```
Nombre del Data Type: StateItem
Campos:
- value (String): Valor normalizado para API (ej: "distrito_capital")
- label (String): Nombre para mostrar al usuario (ej: "Distrito Capital")
- region (String): Región correspondiente (ej: "REGION 1", "Zona 1")
- regionType (String): Tipo de configuración ("panama" o "general")
```

### 🔧 JSON Paths para Respuesta Completa

#### Obtener configuraciones por origen
```bash
# Para configuración de Panamá
$.data.configurations.panama.states[*].value
$.data.configurations.panama.states[*].label
$.data.configurations.panama.states[*].region
$.data.configurations.panama.regions[*]

# Para configuración Estados Unidos/China
$.data.configurations.estados_unidos.states[*].value
$.data.configurations.estados_unidos.states[*].label
$.data.configurations.estados_unidos.states[*].region
```

### 🔧 JSON Paths para Respuesta Filtrada

```bash
# Estados filtrados por origen
$.data.states[*].value
$.data.states[*].label
$.data.states[*].region
$.data.states[*].regionType

# Información del origen
$.data.origin
$.data.description
$.data.regions[*]
```

### 📱 Implementación Paso a Paso

#### Paso 1: Configurar API Call
1. **API Settings**:
   - Method: `GET`
   - URL: `https://legacycargove.com/api/states`
   - Headers: `Content-Type: application/json`

2. **Query Parameters** (opcional):
   ```
   origin: [Variable o valor fijo]
   ```

#### Paso 2: Configurar Variables PageState

**CRÍTICO**: Actualizar las variables existentes de la calculadora principal.

##### A. Modificar Variables Existentes (del Paso 3.1 original)
```dart
// MANTENER estas variables existentes
PageState: selectedOrigin (String) = "panama"  // ← Cambiar default
PageState: selectedShipmentType (String) = ""
PageState: selectedRubro (String) = ""
PageState: packageLength (Double) = 0
PageState: packageWidth (Double) = 0
PageState: packageHeight (Double) = 0
PageState: packageWeight (Double) = 0
PageState: packageQuantity (Integer) = 1
PageState: insuranceEnabled (Boolean) = false
PageState: calculationResult (JSON) = null
PageState: isLoading (Boolean) = false
```

##### B. ELIMINAR Esta Variable (Ya no se usa)
```dart
// ❌ ELIMINAR: selectedDestination (String)
// Se reemplaza por selectedState
```

##### C. AGREGAR Nuevas Variables para Estados
```dart
// ✅ AGREGAR estas nuevas variables
PageState: statesApiResponse (JSON) = null
PageState: venezuelanStates (List<StateItem>) = []
PageState: selectedState (StateItem) = null
```

#### Paso 3: Procesar la Respuesta

##### Para respuesta completa (sin filtro):
```dart
// Acceder a estados según origen seleccionado
if (selectedOrigin == "panama") {
    states = statesApiResponse.data.configurations.panama.states
} else if (selectedOrigin == "estados_unidos") {
    states = statesApiResponse.data.configurations.estados_unidos.states
} else if (selectedOrigin == "china") {
    states = statesApiResponse.data.configurations.china.states
}
```

##### Para respuesta filtrada:
```dart
// Usar directamente la lista filtrada
venezuelanStates = statesApiResponse.data.states
```

#### Paso 4: Configurar Dropdown

1. **DropDown Widget**:
   - Options Source: `From Variable`
   - Options: `venezuelanStates`
   - Option Label: `label`
   - Option Value: `value`

2. **Display Logic**:
   ```dart
   // Mostrar al usuario
   Text: state.label
   
   // Enviar a API de cálculo
   Value: state.value
   ```

### 🎯 Casos de Uso Comunes

#### Caso 1: Cargar Estados al Inicializar
```dart
// En initState o onPageLoad
Action: API Call - GetVenezuelanStates
Parameters: origin = [origen seleccionado]
Success Action: Update PageState - venezuelanStates
```

#### Caso 2: Cambiar Origen Dinámicamente
```dart
// Cuando el usuario cambia el origen
OnChange: 
1. Update selectedOrigin
2. API Call - GetVenezuelanStates?origin=[selectedOrigin]
3. Update venezuelanStates
4. Reset selected state
```

#### Caso 3: Validación de Estado
```dart
// Antes de calcular envío
if (selectedState.isEmpty) {
    showSnackBar("Seleccione un estado de destino")
    return
}

// Usar selectedState.value para API de cálculo
calculateShipping(destination: selectedState.value)
```

### 📋 Flujo de Integración Completo

#### 1. Configuración Inicial de Página

##### A. Crear Custom Data Type
```
1. Ve a Settings > Data Types
2. Create Data Type: "StateItem"
3. Agregar campos:
   - value (String)
   - label (String) 
   - region (String)
   - regionType (String)
```

##### B. Variables PageState (Lista Completa)
```dart
// Variables principales de calculadora
PageState: selectedOrigin (String) = "panama"
PageState: selectedShipmentType (String) = ""
PageState: selectedRubro (String) = ""
PageState: packageLength (Double) = 0
PageState: packageWidth (Double) = 0
PageState: packageHeight (Double) = 0
PageState: packageWeight (Double) = 0
PageState: packageQuantity (Integer) = 1
PageState: insuranceEnabled (Boolean) = false
PageState: calculationResult (JSON) = null
PageState: isLoading (Boolean) = false

// Variables para API de Estados
PageState: statesApiResponse (JSON) = null
PageState: venezuelanStates (List<StateItem>) = []
PageState: selectedState (StateItem) = null
```

#### 2. Configurar API Calls

##### A. API Call: GetVenezuelanStates
```
Nombre: GetVenezuelanStates
Método: GET
URL: https://legacycargove.com/api/states
Query Parameters:
- origin (String): Variable selectedOrigin
```

##### B. API Call: CalculateShipping (Ya existente)
```
Método: POST
URL: https://legacycargove.com/api/calculate-shipping
Body: JSON con variables de formulario
```

#### 3. Configurar Actions

##### A. OnPageLoad (Cargar Estados Inicial)
```dart
Action Chain:
1. Set Page State: isLoading = true
2. API Call: GetVenezuelanStates
   - Parameters: origin = selectedOrigin
3. Success Action: Set Page State
   - statesApiResponse = [API Response]
   - venezuelanStates = $.data.states
   - isLoading = false
4. Error Action: Show Snack Bar
   - Message: "Error cargando estados"
   - isLoading = false
```

##### B. OnChange Dropdown Origen
```dart
Action Chain:
1. Set Page State: 
   - selectedOrigin = [new value]
   - selectedState = null (Reset)
   - isLoading = true
2. API Call: GetVenezuelanStates
   - Parameters: origin = selectedOrigin
3. Success: Set Page State
   - venezuelanStates = $.data.states
   - isLoading = false
```

##### C. OnTap Botón Calcular (Actualizado)
```dart
Action Chain:
1. Conditional: Validar campos requeridos
   - Condition: selectedOrigin.isEmpty || selectedState == null || selectedShipmentType.isEmpty
   - True Action: Show Snack Bar "Complete todos los campos"
   - False Action: Continuar

2. Set Page State: isLoading = true

3. API Call: CalculateShipping
   - origin: selectedOrigin
   - destination: selectedState.value  ← CRÍTICO
   - shipmentType: selectedShipmentType
   - rubro: selectedRubro
   - [otros campos...]

4. Success: Set Page State
   - calculationResult = [API Response]
   - isLoading = false

5. Error: Show Snack Bar + Set isLoading = false
```

#### 4. Configurar UI Widgets

##### A. Dropdown Origen
```
Widget: DropDown
Options: Manual List
Items: Panamá,Estados Unidos,China
Values: panama,estados_unidos,china
Initial Value: panama
OnChanged: [Action Chain B]
```

##### B. Dropdown Destino (NUEVO)
```
Widget: DropDown
Options Source: From Variable
Options: venezuelanStates
Option Label: label
Option Value: Complete StateItem Object
Initial Value: null
OnChanged: Update selectedState
Visible: venezuelanStates.isNotEmpty
```

##### C. Loading Indicator
```
Widget: CircularProgressIndicator
Visible: isLoading == true
```

#### 5. Testing Completo

##### A. Flujo de Carga Inicial
```
1. Abrir página
2. Verificar que se carguen estados para "panama"
3. Verificar dropdown poblado con estados venezolanos
4. Seleccionar un estado
5. Verificar que selectedState tenga valor correcto
```

##### B. Flujo de Cambio de Origen
```
1. Cambiar origen a "estados_unidos"
2. Verificar que dropdown se resetee
3. Verificar que se carguen nuevos estados
4. Verificar que regiones cambien (Zona 1, Zona 2)
```

##### C. Flujo de Cálculo
```
1. Completar todos los campos
2. Hacer clic en calcular
3. Verificar que destination = selectedState.value
4. Verificar resultado correcto
```

### ⚠️ Notas Importantes

1. **Consistencia de Datos**:
   - Siempre usar `state.value` para APIs
   - Mostrar `state.label` al usuario
   - El `value` está normalizado para matching

2. **Configuraciones por Origen**:
   - Panamá: 6 regiones (REGION 1-6)
   - Estados Unidos/China: 2 zonas (Zona 1-2)
   - Mismo conjunto de 23 estados venezolanos

3. **Optimización**:
   - Cachear respuesta si no cambia frecuentemente
   - Filtrar por origen solo cuando sea necesario
   - Usar respuesta completa si necesitas múltiples configuraciones

4. **Validación**:
   - Verificar que `success: true` en la respuesta
   - Manejar errores de conexión
   - Validar que el estado seleccionado existe

### 🔍 Debugging y Troubleshooting

#### Verificar Respuesta de API
```dart
// En Action Success de GetVenezuelanStates
Print: "Estados cargados: " + statesApiResponse.data.states.length.toString()
Print: "Origen: " + statesApiResponse.data.origin
Print: "Primera estado: " + statesApiResponse.data.states[0].label
```

#### Verificar Estado Seleccionado
```dart
// Antes de calcular envío
Print: "Estado valor: " + selectedState.value
Print: "Estado nombre: " + selectedState.label
Print: "Estado región: " + selectedState.region
Print: "Estado tipo: " + selectedState.regionType
```

#### Verificar Variables en Formulario
```dart
// En OnTap del botón calcular
Print: "Origen: " + selectedOrigin
Print: "Destino API: " + selectedState.value
Print: "Tipo envío: " + selectedShipmentType
Print: "Peso: " + packageWeight.toString()
```

### ✅ Checklist de Integración

#### Configuración Inicial
- [ ] Custom Data Type "StateItem" creado con 4 campos
- [ ] API Call "GetVenezuelanStates" configurado (GET)
- [ ] API Call "CalculateShipping" actualizado (POST)
- [ ] Variables PageState creadas (11 variables principales + 3 para estados)
- [ ] Variable `selectedDestination` eliminada

#### UI Configuration  
- [ ] Dropdown Origen configurado con OnChange action
- [ ] Dropdown Destino configurado con `venezuelanStates` variable
- [ ] Loading indicator agregado y conectado a `isLoading`
- [ ] Validaciones actualizadas para usar `selectedState`
- [ ] Botón calcular actualizado con `selectedState.value`

#### Actions Configuration
- [ ] OnPageLoad: Carga inicial de estados
- [ ] OnChange Origen: Recarga estados y resetea selección
- [ ] OnTap Calcular: Validaciones y API call actualizado
- [ ] Error handling para ambos API calls
- [ ] Success actions configuradas correctamente

#### Testing
- [ ] Carga inicial de estados funciona
- [ ] Cambio de origen recarga estados correctamente
- [ ] Selección de estado actualiza `selectedState`
- [ ] Cálculo usa `selectedState.value` como destination
- [ ] Validaciones funcionan correctamente
- [ ] Loading indicators se muestran apropiadamente

### 🚨 Problemas Comunes

#### "Estados no se cargan"
**Solución**:
1. Verificar URL del API call: `https://legacycargove.com/api/states`
2. Verificar que `selectedOrigin` tenga valor inicial "panama"
3. Verificar JSON Path: `$.data.states`
4. Revisar consola para errores de API

#### "Dropdown de estados vacío"
**Solución**:
1. Verificar que `venezuelanStates` se actualice en Success Action
2. Verificar que StateItem tenga todos los campos requeridos
3. Verificar que API responda con estructura correcta
4. Usar Print actions para debug

#### "Error en cálculo de envío" / "No se encontró región para el destino"
**Solución**:
1. Verificar que se use `selectedState.value` no `selectedDestination`
2. Verificar que `selectedState` no sea null
3. **CRÍTICO**: Verificar que `selectedState.value` use espacios, no guiones bajos
   - ✅ Correcto: "distrito capital"
   - ❌ Incorrecto: "distrito_capital"
4. Revisar validaciones antes del API call
5. Verificar que el endpoint `/api/states` genere values con espacios

#### "Estados no cambian al cambiar origen"
**Solución**:
1. Verificar OnChange action del dropdown origen
2. Verificar que se resetee `selectedState = null`
3. Verificar que se llame GetVenezuelanStates con nuevo origen
4. Verificar que Success action actualice `venezuelanStates`

#### "Custom Data Type no funciona"
**Solución**:
1. Recrear StateItem en Settings > Data Types
2. Verificar que todos los campos sean String
3. Eliminar y recrear variables que usen StateItem
4. Verificar que dropdown use "Complete StateItem Object"
