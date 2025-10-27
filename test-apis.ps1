# Script de testing para APIs con CORS (PowerShell)
# Prueba las APIs después del deploy para verificar que CORS funcione correctamente

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "🧪 Testing Legacy Cargo APIs con CORS" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

$BaseURL = "https://legacycargove.com"

# Test 1: Preflight request para calculate-shipping
Write-Host "📡 Test 1: Preflight (OPTIONS) - Calculate Shipping API" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $headers = @{
        "Origin" = "https://app.flutterflow.io"
        "Access-Control-Request-Method" = "POST"
        "Access-Control-Request-Headers" = "Content-Type"
    }
    $response = Invoke-WebRequest -Uri "$BaseURL/api/calculate-shipping" -Method Options -Headers $headers -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ PASS - Preflight responde correctamente (200)" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ FAIL - Preflight falló: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 2: POST request real a calculate-shipping
Write-Host "📡 Test 2: POST - Calculate Shipping API (Marítimo Panamá)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $body = @{
        origin = "panama"
        destination = "distrito capital"
        shipmentType = "maritimo"
        rubro = "ropa"
        dimensions = @{
            length = 50
            width = 40
            height = 30
        }
        weight = 0
        quantity = 1
        unit = "cm"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "$BaseURL/api/calculate-shipping" -Method Post -Body $body -ContentType "application/json" -UseBasicParsing
    
    if ($response.success -eq $true) {
        $total = $response.data.pricing.total
        Write-Host "✅ PASS - Request exitoso (200)" -ForegroundColor Green
        Write-Host "   Total calculado: `$$total" -ForegroundColor Green
    } else {
        Write-Host "❌ FAIL - Response sin success:true" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ FAIL - Request falló: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 3: POST request a calculate-shipping (Aéreo USA)
Write-Host "📡 Test 3: POST - Calculate Shipping API (Aéreo USA)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $body = @{
        origin = "estados_unidos"
        destination = "distrito capital"
        shipmentType = "aereo"
        dimensions = @{
            length = 30
            width = 20
            height = 15
        }
        weight = 5
        quantity = 1
        unit = "cm"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "$BaseURL/api/calculate-shipping" -Method Post -Body $body -ContentType "application/json" -UseBasicParsing
    
    if ($response.success -eq $true) {
        $total = $response.data.pricing.total
        Write-Host "✅ PASS - Request exitoso (200)" -ForegroundColor Green
        Write-Host "   Total calculado: `$$total" -ForegroundColor Green
    } else {
        Write-Host "❌ FAIL - Response sin success:true" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ FAIL - Request falló: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 4: Preflight request para states API
Write-Host "📡 Test 4: Preflight (OPTIONS) - States API" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $headers = @{
        "Origin" = "https://app.flutterflow.io"
        "Access-Control-Request-Method" = "GET"
    }
    $response = Invoke-WebRequest -Uri "$BaseURL/api/states" -Method Options -Headers $headers -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ PASS - Preflight responde correctamente (200)" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ FAIL - Preflight falló: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 5: GET request a states API
Write-Host "📡 Test 5: GET - States API (sin filtro)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $response = Invoke-RestMethod -Uri "$BaseURL/api/states" -Method Get -UseBasicParsing
    
    if ($response.success -eq $true) {
        Write-Host "✅ PASS - Request exitoso (200)" -ForegroundColor Green
        $count = $response.data.summary.total_unique_states
        if ($count) {
            Write-Host "   Estados encontrados: $count" -ForegroundColor Green
        }
    } else {
        Write-Host "❌ FAIL - Response sin success:true" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ FAIL - Request falló: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 6: GET request a states API con filtro
Write-Host "📡 Test 6: GET - States API (filtro: panama)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $response = Invoke-RestMethod -Uri "$BaseURL/api/states?origin=panama" -Method Get -UseBasicParsing
    
    if ($response.success -eq $true) {
        Write-Host "✅ PASS - Request exitoso (200)" -ForegroundColor Green
        $origin = $response.data.origin
        if ($origin -eq "panama") {
            Write-Host "   Filtro aplicado correctamente: $origin" -ForegroundColor Green
        }
    } else {
        Write-Host "❌ FAIL - Response sin success:true" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ FAIL - Request falló: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Test 7: Verificar headers CORS
Write-Host "📡 Test 7: Verificar Headers CORS" -ForegroundColor Yellow
Write-Host "------------------------------------------------------"
try {
    $headers = @{
        "Origin" = "https://app.flutterflow.io"
        "Access-Control-Request-Method" = "POST"
    }
    $response = Invoke-WebRequest -Uri "$BaseURL/api/calculate-shipping" -Method Options -Headers $headers -UseBasicParsing
    
    $corsOrigin = $response.Headers["Access-Control-Allow-Origin"]
    $corsMethods = $response.Headers["Access-Control-Allow-Methods"]
    $corsHeaders = $response.Headers["Access-Control-Allow-Headers"]
    
    if ($corsOrigin) {
        Write-Host "✅ PASS - Header Access-Control-Allow-Origin presente: $corsOrigin" -ForegroundColor Green
    } else {
        Write-Host "❌ FAIL - Header Access-Control-Allow-Origin faltante" -ForegroundColor Red
    }
    
    if ($corsMethods) {
        Write-Host "✅ PASS - Header Access-Control-Allow-Methods presente" -ForegroundColor Green
    } else {
        Write-Host "❌ FAIL - Header Access-Control-Allow-Methods faltante" -ForegroundColor Red
    }
    
    if ($corsHeaders) {
        Write-Host "✅ PASS - Header Access-Control-Allow-Headers presente" -ForegroundColor Green
    } else {
        Write-Host "❌ FAIL - Header Access-Control-Allow-Headers faltante" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ FAIL - Error verificando headers: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Resumen final
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "📊 Resumen de Tests" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Si todos los tests pasaron (✅), tu API está lista para:" -ForegroundColor White
Write-Host "  - ✅ Apps Android nativas" -ForegroundColor Green
Write-Host "  - ✅ Apps iOS nativas" -ForegroundColor Green
Write-Host "  - ✅ FlutterFlow Preview" -ForegroundColor Green
Write-Host "  - ✅ FlutterFlow Web" -ForegroundColor Green
Write-Host ""
Write-Host "Si algún test falló (❌), revisa:" -ForegroundColor White
Write-Host "  1. Que el deploy se haya completado" -ForegroundColor Yellow
Write-Host "  2. Que la URL sea correcta" -ForegroundColor Yellow
Write-Host "  3. Los logs del servidor" -ForegroundColor Yellow
Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para ejecutar este script:" -ForegroundColor White
Write-Host "  .\test-apis.ps1" -ForegroundColor Cyan
Write-Host ""

