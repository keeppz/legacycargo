#!/bin/bash

# Script de testing para APIs con CORS
# Prueba las APIs después del deploy para verificar que CORS funcione correctamente

echo "================================================"
echo "🧪 Testing Legacy Cargo APIs con CORS"
echo "================================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="https://legacycargove.com"

# Test 1: Preflight request para calculate-shipping
echo "📡 Test 1: Preflight (OPTIONS) - Calculate Shipping API"
echo "------------------------------------------------------"
RESPONSE=$(curl -X OPTIONS "${BASE_URL}/api/calculate-shipping" \
  -H "Origin: https://app.flutterflow.io" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -s -o /dev/null -w "%{http_code}" -i)

if [ "$RESPONSE" == "200" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Preflight responde correctamente (200)"
else
    echo -e "${RED}❌ FAIL${NC} - Preflight falló (código: $RESPONSE)"
fi
echo ""

# Test 2: POST request real a calculate-shipping
echo "📡 Test 2: POST - Calculate Shipping API (Marítimo Panamá)"
echo "------------------------------------------------------"
RESPONSE=$(curl -X POST "${BASE_URL}/api/calculate-shipping" \
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
  }' \
  -s -w "\nHTTP_CODE:%{http_code}")

HTTP_CODE=$(echo "$RESPONSE" | grep -o 'HTTP_CODE:[0-9]*' | cut -d':' -f2)
BODY=$(echo "$RESPONSE" | sed 's/HTTP_CODE:[0-9]*//')

if [ "$HTTP_CODE" == "200" ]; then
    SUCCESS=$(echo "$BODY" | grep -o '"success"[[:space:]]*:[[:space:]]*true')
    if [ ! -z "$SUCCESS" ]; then
        TOTAL=$(echo "$BODY" | grep -o '"total"[[:space:]]*:[[:space:]]*[0-9.]*' | head -1 | grep -o '[0-9.]*')
        echo -e "${GREEN}✅ PASS${NC} - Request exitoso (200)"
        echo -e "${GREEN}   Total calculado: \$$TOTAL${NC}"
    else
        echo -e "${RED}❌ FAIL${NC} - Response sin success:true"
    fi
else
    echo -e "${RED}❌ FAIL${NC} - Request falló (código: $HTTP_CODE)"
    echo "   Response: $BODY"
fi
echo ""

# Test 3: POST request a calculate-shipping (Aéreo USA)
echo "📡 Test 3: POST - Calculate Shipping API (Aéreo USA)"
echo "------------------------------------------------------"
RESPONSE=$(curl -X POST "${BASE_URL}/api/calculate-shipping" \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "estados_unidos",
    "destination": "distrito capital",
    "shipmentType": "aereo",
    "dimensions": {"length": 30, "width": 20, "height": 15},
    "weight": 5,
    "quantity": 1,
    "unit": "cm"
  }' \
  -s -w "\nHTTP_CODE:%{http_code}")

HTTP_CODE=$(echo "$RESPONSE" | grep -o 'HTTP_CODE:[0-9]*' | cut -d':' -f2)
BODY=$(echo "$RESPONSE" | sed 's/HTTP_CODE:[0-9]*//')

if [ "$HTTP_CODE" == "200" ]; then
    SUCCESS=$(echo "$BODY" | grep -o '"success"[[:space:]]*:[[:space:]]*true')
    if [ ! -z "$SUCCESS" ]; then
        TOTAL=$(echo "$BODY" | grep -o '"total"[[:space:]]*:[[:space:]]*[0-9.]*' | head -1 | grep -o '[0-9.]*')
        echo -e "${GREEN}✅ PASS${NC} - Request exitoso (200)"
        echo -e "${GREEN}   Total calculado: \$$TOTAL${NC}"
    else
        echo -e "${RED}❌ FAIL${NC} - Response sin success:true"
    fi
else
    echo -e "${RED}❌ FAIL${NC} - Request falló (código: $HTTP_CODE)"
fi
echo ""

# Test 4: Preflight request para states API
echo "📡 Test 4: Preflight (OPTIONS) - States API"
echo "------------------------------------------------------"
RESPONSE=$(curl -X OPTIONS "${BASE_URL}/api/states" \
  -H "Origin: https://app.flutterflow.io" \
  -H "Access-Control-Request-Method: GET" \
  -s -o /dev/null -w "%{http_code}")

if [ "$RESPONSE" == "200" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Preflight responde correctamente (200)"
else
    echo -e "${RED}❌ FAIL${NC} - Preflight falló (código: $RESPONSE)"
fi
echo ""

# Test 5: GET request a states API
echo "📡 Test 5: GET - States API (sin filtro)"
echo "------------------------------------------------------"
RESPONSE=$(curl -X GET "${BASE_URL}/api/states" \
  -s -w "\nHTTP_CODE:%{http_code}")

HTTP_CODE=$(echo "$RESPONSE" | grep -o 'HTTP_CODE:[0-9]*' | cut -d':' -f2)
BODY=$(echo "$RESPONSE" | sed 's/HTTP_CODE:[0-9]*//')

if [ "$HTTP_CODE" == "200" ]; then
    SUCCESS=$(echo "$BODY" | grep -o '"success"[[:space:]]*:[[:space:]]*true')
    if [ ! -z "$SUCCESS" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Request exitoso (200)"
        COUNT=$(echo "$BODY" | grep -o '"total_unique_states"[[:space:]]*:[[:space:]]*[0-9]*' | grep -o '[0-9]*')
        if [ ! -z "$COUNT" ]; then
            echo -e "${GREEN}   Estados encontrados: $COUNT${NC}"
        fi
    else
        echo -e "${RED}❌ FAIL${NC} - Response sin success:true"
    fi
else
    echo -e "${RED}❌ FAIL${NC} - Request falló (código: $HTTP_CODE)"
fi
echo ""

# Test 6: GET request a states API con filtro
echo "📡 Test 6: GET - States API (filtro: panama)"
echo "------------------------------------------------------"
RESPONSE=$(curl -X GET "${BASE_URL}/api/states?origin=panama" \
  -s -w "\nHTTP_CODE:%{http_code}")

HTTP_CODE=$(echo "$RESPONSE" | grep -o 'HTTP_CODE:[0-9]*' | cut -d':' -f2)
BODY=$(echo "$RESPONSE" | sed 's/HTTP_CODE:[0-9]*//')

if [ "$HTTP_CODE" == "200" ]; then
    SUCCESS=$(echo "$BODY" | grep -o '"success"[[:space:]]*:[[:space:]]*true')
    if [ ! -z "$SUCCESS" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Request exitoso (200)"
        ORIGIN=$(echo "$BODY" | grep -o '"origin"[[:space:]]*:[[:space:]]*"[^"]*"' | cut -d'"' -f4)
        if [ "$ORIGIN" == "panama" ]; then
            echo -e "${GREEN}   Filtro aplicado correctamente: $ORIGIN${NC}"
        fi
    else
        echo -e "${RED}❌ FAIL${NC} - Response sin success:true"
    fi
else
    echo -e "${RED}❌ FAIL${NC} - Request falló (código: $HTTP_CODE)"
fi
echo ""

# Test 7: Verificar headers CORS
echo "📡 Test 7: Verificar Headers CORS"
echo "------------------------------------------------------"
HEADERS=$(curl -X OPTIONS "${BASE_URL}/api/calculate-shipping" \
  -H "Origin: https://app.flutterflow.io" \
  -H "Access-Control-Request-Method: POST" \
  -I -s)

if echo "$HEADERS" | grep -q "Access-Control-Allow-Origin"; then
    echo -e "${GREEN}✅ PASS${NC} - Header Access-Control-Allow-Origin presente"
else
    echo -e "${RED}❌ FAIL${NC} - Header Access-Control-Allow-Origin faltante"
fi

if echo "$HEADERS" | grep -q "Access-Control-Allow-Methods"; then
    echo -e "${GREEN}✅ PASS${NC} - Header Access-Control-Allow-Methods presente"
else
    echo -e "${RED}❌ FAIL${NC} - Header Access-Control-Allow-Methods faltante"
fi

if echo "$HEADERS" | grep -q "Access-Control-Allow-Headers"; then
    echo -e "${GREEN}✅ PASS${NC} - Header Access-Control-Allow-Headers presente"
else
    echo -e "${RED}❌ FAIL${NC} - Header Access-Control-Allow-Headers faltante"
fi
echo ""

# Resumen final
echo "================================================"
echo "📊 Resumen de Tests"
echo "================================================"
echo ""
echo "Si todos los tests pasaron (✅), tu API está lista para:"
echo "  - ✅ Apps Android nativas"
echo "  - ✅ Apps iOS nativas"
echo "  - ✅ FlutterFlow Preview"
echo "  - ✅ FlutterFlow Web"
echo ""
echo "Si algún test falló (❌), revisa:"
echo "  1. Que el deploy se haya completado"
echo "  2. Que la URL sea correcta"
echo "  3. Los logs del servidor"
echo ""
echo "================================================"

