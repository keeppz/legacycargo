# Script para verificar CORS en producción después del deploy

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🧪 Verificando CORS en Producción" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Verificar OPTIONS (preflight)
Write-Host "📡 Test 1: Verificar Preflight (OPTIONS)" -ForegroundColor Yellow
Write-Host "-------------------------------------------"
$headers = @{
    'Content-Type' = 'application/json'
    'Origin' = 'https://app.flutterflow.io'
    'Access-Control-Request-Method' = 'POST'
    'Access-Control-Request-Headers' = 'Content-Type'
}

try {
    $response = Invoke-WebRequest -Uri "https://www.legacycargove.com/api/calculate-shipping" `
        -Method Options `
        -Headers $headers `
        -UseBasicParsing

    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
    
    # Verificar headers CORS
    $corsHeaders = @(
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Access-Control-Allow-Headers'
    )
    
    Write-Host "`nHeaders CORS:" -ForegroundColor White
    $foundCors = $false
    foreach ($header in $corsHeaders) {
        $value = $response.Headers[$header]
        if ($value) {
            Write-Host "  ✅ $header : $value" -ForegroundColor Green
            $foundCors = $true
        } else {
            Write-Host "  ❌ $header : NO ENCONTRADO" -ForegroundColor Red
        }
    }
    
    if (-not $foundCors) {
        Write-Host "`n⚠️  PROBLEMA: Headers CORS no están presentes" -ForegroundColor Red
        Write-Host "   Verifica que el deploy se haya completado correctamente" -ForegroundColor Yellow
    }
    
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "-------------------------------------------"

# Test 2: Verificar POST real
Write-Host "📡 Test 2: Verificar POST Real" -ForegroundColor Yellow
Write-Host "-------------------------------------------"

$body = @{
    origin = "china"
    destination = "apure"
    shipmentType = "maritimo"
    rubro = "Calzado"
    dimensions = @{
        length = 100
        width = 100
        height = 100
    }
    weight = 10
    quantity = 1
    unit = "cm"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://www.legacycargove.com/api/calculate-shipping" `
        -Method Post `
        -Body $body `
        -ContentType "application/json" `
        -UseBasicParsing
    
    if ($response.success -eq $true) {
        Write-Host "✅ POST Exitoso" -ForegroundColor Green
        Write-Host "   Total: `$$($response.data.pricing.total)" -ForegroundColor Green
        Write-Host "   Región: $($response.data.shipment.region)" -ForegroundColor Green
    } else {
        Write-Host "❌ POST Falló" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "📊 Resumen" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Si ambos tests muestran ✅:" -ForegroundColor White
Write-Host "  1. El servidor está respondiendo correctamente" -ForegroundColor Green
Write-Host "  2. Los headers CORS están presentes" -ForegroundColor Green
Write-Host "  3. Tu app de FlutterFlow debería funcionar" -ForegroundColor Green
Write-Host ""
Write-Host "Si ves ❌ en headers CORS:" -ForegroundColor White
Write-Host "  1. Espera a que Vercel complete el deploy" -ForegroundColor Yellow
Write-Host "  2. Verifica en https://vercel.com/tu-proyecto" -ForegroundColor Yellow
Write-Host "  3. Ejecuta este script de nuevo en 2 minutos" -ForegroundColor Yellow
Write-Host ""

