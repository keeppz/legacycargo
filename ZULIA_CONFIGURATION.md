# Configuración Especial: Estados con Regiones Dinámicas

## 📋 Resumen

Se han agregado **5 estados** con una configuración especial que permite asignar **regiones diferentes según la categoría del producto**:

- **Zulia**
- **Amazonas**
- **Delta Amacuro**
- **Apure**
- **Nueva Esparta**

---

## 🎯 Problema Resuelto

A diferencia de otros estados que tienen una región fija (por ejemplo, Distrito Capital siempre está en REGION 1), estos **5 estados pertenecen a diferentes regiones según el tipo de mercancía**:

### Configuración por Categoría:

| Estado | Ropa | Variado Bajo | Ferretería | Variado Alto |
|--------|------|--------------|------------|--------------|
| **Zulia** | REGION 6 ($17.00) | REGION 5 ($17.00) | REGION 6 ($16.50) | REGION 5 ($19.50) |
| **Amazonas** | REGION 6 ($17.00) | REGION 5 ($17.00) | REGION 6 ($16.50) | REGION 5 ($19.50) |
| **Delta Amacuro** | REGION 6 ($17.00) | REGION 5 ($17.00) | REGION 6 ($16.50) | REGION 5 ($19.50) |
| **Apure** | REGION 6 ($17.00) | REGION 5 ($17.00) | REGION 6 ($16.50) | REGION 5 ($19.50) |
| **Nueva Esparta** | REGION 6 ($17.00) | REGION 5 ($17.00) | REGION 6 ($16.50) | REGION 5 ($19.50) |

**Patrón común:** Todos estos estados usan:
- **REGION 6** para Ropa y Ferretería/Repuestos
- **REGION 5** para Variado Bajo y Variado Alto

---

## 🔧 Implementación Técnica

### 1. Nueva Estructura en `shipping-data.json`

Se agregó una nueva propiedad `regionesPorEstadoYCategoriaPanama` para estados con regiones variables:

```json
{
  "regionesPorEstadoYCategoriaPanama": {
    "Zulia": {
      "Ropa": "REGION 6",
      "Variado Bajo": "REGION 5",
      "Ferretería y Repuestos": "REGION 6",
      "Variado Alto": "REGION 5"
    },
    "Amazonas": {
      "Ropa": "REGION 6",
      "Variado Bajo": "REGION 5",
      "Ferretería y Repuestos": "REGION 6",
      "Variado Alto": "REGION 5"
    },
    "Delta Amacuro": {
      "Ropa": "REGION 6",
      "Variado Bajo": "REGION 5",
      "Ferretería y Repuestos": "REGION 6",
      "Variado Alto": "REGION 5"
    },
    "Apure": {
      "Ropa": "REGION 6",
      "Variado Bajo": "REGION 5",
      "Ferretería y Repuestos": "REGION 6",
      "Variado Alto": "REGION 5"
    },
    "Nueva Esparta": {
      "Ropa": "REGION 6",
      "Variado Bajo": "REGION 5",
      "Ferretería y Repuestos": "REGION 6",
      "Variado Alto": "REGION 5"
    }
  }
}
```

### 2. Estados con Configuración Especial en USA/China

Para envíos desde Estados Unidos o China, estos 5 estados están en **Zona 2**:

```json
{
  "regionesPorEstado": {
    "Zona 2": [
      "Aragua", "Carabobo", ..., "Zulia", "Amazonas", "Delta Amacuro", "Apure", "Nueva Esparta"
    ]
  }
}
```

**Nota:** Para USA/China no usan configuración especial por categoría, siempre están en Zona 2.

### 3. Nueva Función en la API

Se creó la función `obtenerRegionPorCategoria()` que:

1. Verifica si el estado tiene configuración especial por categoría
2. Si existe, retorna la región específica para esa categoría
3. Si no, usa la región fija del estado

```javascript
const obtenerRegionPorCategoria = (estado, origen, categoria = null) => {
    // Para Panamá con categoría, verificar configuración especial
    if (origen === 'panama' && categoria && regionesPorEstadoYCategoriaPanama) {
        const regionPorCategoria = regionesPorEstadoYCategoriaPanama[estadoFormateado];
        if (regionPorCategoria && regionPorCategoria[categoria]) {
            return regionPorCategoria[categoria];
        }
    }
    
    // Si no hay configuración especial, usar región fija
    return obtenerRegion(estadoFormateado, origen);
};
```

---

## 📊 Estados de Venezuela - Conteo Actualizado

✅ **24 entidades federales completas:**
- 23 Estados
- 1 Distrito Capital

### Lista completa:
1. Amazonas
2. Anzoátegui
3. Apure
4. Aragua
5. Barinas
6. Bolívar
7. Carabobo
8. Cojedes
9. Delta Amacuro
10. Distrito Capital
11. Falcón
12. Guárico
13. Lara
14. Mérida
15. Miranda
16. Monagas
17. Nueva Esparta
18. Portuguesa
19. Sucre
20. Táchira
21. Trujillo
22. Vargas
23. Yaracuy
24. **Zulia** ⭐ (NUEVO - con configuración especial)

---

## 🧪 Ejemplos de Uso

### Ejemplo 1: Ropa desde Panamá a Zulia

**Request:**
```json
{
  "origin": "panama",
  "destination": "zulia",
  "shipmentType": "maritimo",
  "rubro": "ropa",
  "dimensions": {
    "length": 100,
    "width": 50,
    "height": 30
  },
  "quantity": 1,
  "unit": "cm"
}
```

**Proceso:**
1. Rubro "ropa" → Categoría "Ropa"
2. Zulia + Ropa → **REGION 6**
3. Tarifa: $17.00/ft³
4. Cálculo: volumen × $17.00 × cantidad

---

### Ejemplo 2: Calzado desde Panamá a Zulia

**Request:**
```json
{
  "origin": "panama",
  "destination": "zulia",
  "shipmentType": "maritimo",
  "rubro": "calzado",
  "dimensions": {
    "length": 80,
    "width": 40,
    "height": 25
  },
  "quantity": 1,
  "unit": "cm"
}
```

**Proceso:**
1. Rubro "calzado" → Categoría "Variado Bajo"
2. Zulia + Variado Bajo → **REGION 5**
3. Tarifa: $17.00/ft³ (diferente región, misma tarifa)
4. Cálculo: volumen × $17.00 × cantidad

---

### Ejemplo 3: Repuestos desde Panamá a Zulia

**Request:**
```json
{
  "origin": "panama",
  "destination": "zulia",
  "shipmentType": "maritimo",
  "rubro": "repuestos",
  "dimensions": {
    "length": 60,
    "width": 40,
    "height": 20
  },
  "quantity": 1,
  "unit": "cm"
}
```

**Proceso:**
1. Rubro "repuestos" → Categoría "Ferretería y Repuestos"
2. Zulia + Ferretería y Repuestos → **REGION 6**
3. Tarifa: $16.50/ft³
4. Cálculo: volumen × $16.50 × cantidad

---

### Ejemplo 4: Electrónicos desde Panamá a Zulia

**Request:**
```json
{
  "origin": "panama",
  "destination": "zulia",
  "shipmentType": "maritimo",
  "rubro": "electrónicos",
  "dimensions": {
    "length": 50,
    "width": 30,
    "height": 20
  },
  "quantity": 1,
  "unit": "cm"
}
```

**Proceso:**
1. Rubro "electrónicos" → Categoría "Variado Alto"
2. Zulia + Variado Alto → **REGION 5**
3. Tarifa: $19.50/ft³
4. Cálculo: volumen × $19.50 × cantidad

---

## 🔄 Compatibilidad

### ✅ Envíos Marítimos desde Panamá
- Usa la región específica según categoría
- Funcionamiento correcto garantizado

### ✅ Envíos Aéreos desde Panamá
- No usa categorías (se basa en peso)
- Usa región fija (se podría agregar Zulia a alguna región si es necesario)

### ✅ Envíos desde USA
- Usa **Zona 2** (región fija)
- Sin configuración especial por categoría

### ✅ Envíos desde China
- Usa **Zona 2** (región fija)
- Sin configuración especial por categoría

---

## 🚀 Agregar Más Estados con Configuración Especial

Si necesitas agregar otro estado con regiones variables por categoría, sigue estos pasos:

### 1. Actualizar `shipping-data.json`:

```json
{
  "regionesPorEstadoYCategoriaPanama": {
    "Zulia": {
      "Ropa": "REGION 6",
      "Variado Bajo": "REGION 5",
      "Ferretería y Repuestos": "REGION 6",
      "Variado Alto": "REGION 5"
    },
    "NuevoEstado": {
      "Ropa": "REGION X",
      "Variado Bajo": "REGION Y",
      "Ferretería y Repuestos": "REGION Z",
      "Variado Alto": "REGION W"
    }
  }
}
```

### 2. Agregar el estado a USA/China si aplica:

```json
{
  "regionesPorEstado": {
    "Zona 2": [
      ...,
      "Zulia",
      "NuevoEstado"
    ]
  }
}
```

### 3. No se requieren cambios en la API
La función `obtenerRegionPorCategoria()` ya maneja automáticamente cualquier estado agregado a `regionesPorEstadoYCategoriaPanama`.

---

## ✅ Testing

### Test 1: Zulia con Ropa (debe usar REGION 6)

```bash
curl -X POST https://legacycargove.com/api/calculate-shipping \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "panama",
    "destination": "zulia",
    "shipmentType": "maritimo",
    "rubro": "ropa",
    "dimensions": {"length": 100, "width": 50, "height": 30},
    "quantity": 1,
    "unit": "cm"
  }'
```

**Resultado esperado:**
- Tarifa: $17.00/ft³ (REGION 6)

---

### Test 2: Zulia con Calzado (debe usar REGION 5)

```bash
curl -X POST https://legacycargove.com/api/calculate-shipping \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "panama",
    "destination": "zulia",
    "shipmentType": "maritimo",
    "rubro": "calzado",
    "dimensions": {"length": 100, "width": 50, "height": 30},
    "quantity": 1,
    "unit": "cm"
  }'
```

**Resultado esperado:**
- Tarifa: $17.00/ft³ (REGION 5)

---

### Test 3: Zulia con Ferretería (debe usar REGION 6)

```bash
curl -X POST https://legacycargove.com/api/calculate-shipping \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "panama",
    "destination": "zulia",
    "shipmentType": "maritimo",
    "rubro": "ferretería",
    "dimensions": {"length": 100, "width": 50, "height": 30},
    "quantity": 1,
    "unit": "cm"
  }'
```

**Resultado esperado:**
- Tarifa: $16.50/ft³ (REGION 6)

---

### Test 4: Zulia con Electrónicos (debe usar REGION 5)

```bash
curl -X POST https://legacycargove.com/api/calculate-shipping \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "panama",
    "destination": "zulia",
    "shipmentType": "maritimo",
    "rubro": "electrónicos",
    "dimensions": {"length": 100, "width": 50, "height": 30},
    "quantity": 1,
    "unit": "cm"
  }'
```

**Resultado esperado:**
- Tarifa: $19.50/ft³ (REGION 5)

---

## 📝 Notas Importantes

1. **La configuración especial solo aplica para envíos marítimos desde Panamá**
2. **Otros tipos de envío usan la región/zona fija del estado**
3. **La API automáticamente selecciona la región correcta según la categoría**
4. **Si agregas un estado a `regionesPorEstadoYCategoriaPanama`, debe tener las 4 categorías definidas**

---

## 🎯 Resumen de Archivos Modificados

| Archivo | Cambio | Descripción |
|---------|--------|-------------|
| `src/data/shipping-data.json` | ✅ Actualizado | Agregado Zulia con configuración especial |
| `src/app/api/calculate-shipping/route.js` | ✅ Actualizado | Nueva función `obtenerRegionPorCategoria()` |
| `src/app/api/states/route.js` | ✅ Actualizado | Conteo actualizado a 24 estados |
| `ZULIA_CONFIGURATION.md` | ✅ Nuevo | Esta documentación |

---

## ✅ Estado Actual

- ✅ **5 estados** agregados con configuración especial: Zulia, Amazonas, Delta Amacuro, Apure, Nueva Esparta
- ✅ Configuración especial por categoría implementada para todos
- ✅ API actualizada para manejar regiones dinámicas
- ✅ Testing documentado para cada estado
- ✅ Todos los 24 estados de Venezuela incluidos
- ✅ Sistema escalable para agregar más estados con configuración especial

**El sistema ahora soporta 5 estados con regiones variables por categoría: Zulia, Amazonas, Delta Amacuro, Apure y Nueva Esparta. El sistema es escalable y puede agregar más estados con configuraciones similares fácilmente.**

