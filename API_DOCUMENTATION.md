# API de Calculadora de Envíos - Legacy Cargo

## URL Base
```
https://legacycargove.com/api/calculate-shipping
```

## Endpoints

### POST /api/calculate-shipping
Calcula el costo de envío basado en los parámetros proporcionados.

#### Request Body
```json
{
  "origin": "panama|estados_unidos|china",
  "destination": "distrito capital|miranda|aragua|etc",
  "shipmentType": "aereo|maritimo", 
  "rubro": "ropa|calzado|electrodomésticos|etc", // Requerido solo para Panamá marítimo
  "dimensions": {
    "length": 50.0,  // Largo
    "width": 40.0,   // Ancho  
    "height": 30.0   // Alto
  },
  "weight": 10.0,    // Requerido para envíos aéreos (kg)
  "quantity": 1,     // Cantidad de paquetes (opcional, default: 1)
  "insurance": false, // Seguro de carga = volumen ft³ (opcional, default: false)
  "unit": "cm"       // Unidad de medida: "cm" o "in" (opcional, default: "cm")
}
```

#### Response Success (200)
```json
{
  "success": true,
  "data": {
    "pricing": {
      "subtotal": 250.50,
      "insurance": 7.52,
      "total": 258.02
    },
    "shipment": {
      "origin": "panama",
      "destination": "distrito capital", 
      "region": "REGION 1",
      "type": "maritimo",
      "estimatedTime": "15-20 días"
    },
    "dimensions": {
      "volume": 2.125,
      "volumeUnit": "ft³",
      "volumetricWeight": 15.75,
      "weightUnit": "kg"
    },
    "details": {
      "quantity": 1,
      "insurance": true,
      "rubro": "ropa"
    }
  }
}
```

#### Response Error (400/500)
```json
{
  "success": false,
  "error": "Descripción del error"
}
```

### GET /api/calculate-shipping
Obtiene información de configuración disponible.

#### Response (200)
```json
{
  "success": true,
  "data": {
    "origins": ["panama", "estados_unidos", "china"],
    "shipmentTypes": ["aereo", "maritimo"],
    "units": ["cm", "in"],
    "rubros": ["Ropa", "Calzado", "Electrodomésticos", "..."],
    "regions": {
      "panama": ["REGION 1", "REGION 2", "..."],
      "general": ["Zona 1", "Zona 2"]
    }
  }
}
```

## Ejemplos de Uso

### 1. Envío Aéreo desde Estados Unidos
```json
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
  "insurance": false,
  "unit": "cm"
}
```

### 2. Envío Marítimo desde Panamá
```json
{
  "origin": "panama",
  "destination": "aragua",
  "shipmentType": "maritimo",
  "rubro": "ropa",
  "dimensions": {
    "length": 50,
    "width": 40,
    "height": 30
  },
  "quantity": 2,
  "insurance": true,
  "unit": "cm"
}
```

### 3. Envío Marítimo desde China
```json
{
  "origin": "china",
  "destination": "miranda", 
  "shipmentType": "maritimo",
  "dimensions": {
    "length": 100,
    "width": 80,
    "height": 60
  },
  "quantity": 1,
  "insurance": false,
  "unit": "cm"
}
```

## Códigos de Error

| Código | Descripción |
|--------|-------------|
| 400 | Datos de entrada inválidos |
| 500 | Error interno del servidor |

## Validaciones

1. **Campos requeridos**: origin, destination, shipmentType, dimensions
2. **Dimensiones**: Deben ser números positivos
3. **Peso**: Requerido para envíos aéreos
4. **Rubro**: Requerido para envíos marítimos desde Panamá
5. **Servicios no disponibles**:
   - China aéreo
   - Estados Unidos marítimo
6. **Destinos válidos**: Deben existir en las regiones configuradas

## Servicios Disponibles

| Origen | Aéreo | Marítimo |
|--------|-------|----------|
| 🇵🇦 **Panamá** | ✅ 8-10 días | ✅ 15-20 días |
| 🇺🇸 **Estados Unidos** | ✅ 8-10 días | ❌ No disponible |
| 🇨🇳 **China** | ❌ No disponible | ✅ 55-65 días |

## Tiempos de Envío

### Panamá
- **Aéreo**: 8-10 días
- **Marítimo**: 15-20 días

### Estados Unidos  
- **Aéreo**: 8-10 días
- **Marítimo**: ❌ No disponible

### China
- **Marítimo**: 55-65 días
- **Aéreo**: ❌ No disponible

## Precios Mínimos

La API aplica precios mínimos equivalentes a:

| Origen | Servicio | Precio Mínimo | Equivalencia |
|--------|----------|---------------|--------------|
| 🇨🇳 **China** | Marítimo | **$105.00** | 5 pies cúbicos |
| 🇺🇸 **Estados Unidos** | Aéreo | **$30.00** | 5 libras |
| 🇵🇦 **Panamá** | Aéreo | **$60.00** | 5 libras |
| 🇵🇦 **Panamá** | Marítimo | **$70.00** | 5 pies cúbicos |

> **Nota**: Si el cálculo resulta en un precio menor al mínimo establecido, se aplicará automáticamente el precio mínimo.

## Notas Importantes

- Los precios están en USD
- El peso volumétrico se calcula automáticamente para envíos aéreos
- Se aplican precios mínimos según origen y tipo de envío
- El seguro de carga equivale al volumen en pies cúbicos (ft³)
- Las tarifas varían según origen, destino y tipo de envío
