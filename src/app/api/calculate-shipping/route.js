import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { corsHeaders, handleOptions } from '@/lib/cors';

// Cargar datos desde el archivo JSON
let shippingData;
try {
    const filePath = join(process.cwd(), 'src', 'data', 'shipping-data.json');
    const fileContents = readFileSync(filePath, 'utf8');
    shippingData = JSON.parse(fileContents);
} catch (error) {
    console.error('Error cargando datos de envío:', error);
    shippingData = {
        rubrosPorCategoriaPanama: {},
        regionesPorEstadoPanama: {},
        regionesPorEstado: {},
        tarifasPanamaCoLoader: {},
        tarifasUSA: {},
        tarifasChina: {},
        tarifasAereas: {},
        precioMinimoChina: 50
    };
}

// Extraer datos del objeto cargado
const {
    rubrosPorCategoriaPanama,
    regionesPorEstadoYCategoriaPanama,
    regionesPorEstadoPanama,
    regionesPorEstado,
    tarifasPanamaCoLoader,
    tarifasUSA,
    tarifasChina,
    tarifasAereas,
    preciosMinimos
} = shippingData;

// Función para obtener región según el origen
const obtenerRegion = (estado, origen) => {
    // Formatear el estado: primera letra mayúscula, resto minúscula
    const palabras = estado.toLowerCase().split(' ');
    const estadoFormateado = palabras.map(palabra =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
    ).join(' ');

    let regionesData;
    if (origen === 'panama') {
        regionesData = regionesPorEstadoPanama;
    } else {
        regionesData = regionesPorEstado;
    }

    const region = Object.entries(regionesData).find(([region, estados]) => {
        return estados.includes(estadoFormateado);
    })?.[0];
    return region;
};

// Función para obtener categoría (solo para Panamá)
const obtenerCategoriaPanama = (rubro) => {
    const rubroFormateado = rubro.charAt(0).toUpperCase() + rubro.slice(1).toLowerCase();
    const categoria = Object.entries(rubrosPorCategoriaPanama).find(([categoria, rubros]) => {
        return rubros.includes(rubroFormateado);
    })?.[0];
    return categoria;
};

// Función para obtener región según estado, origen y categoría (para Panamá)
// Algunos estados como Zulia tienen regiones diferentes según la categoría del producto
const obtenerRegionPorCategoria = (estado, origen, categoria = null) => {
    // Formatear el estado
    const palabras = estado.toLowerCase().split(' ');
    const estadoFormateado = palabras.map(palabra =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
    ).join(' ');

    // Para Panamá con categoría, verificar si hay configuración especial
    if (origen === 'panama' && categoria && regionesPorEstadoYCategoriaPanama) {
        const regionPorCategoria = regionesPorEstadoYCategoriaPanama[estadoFormateado];
        if (regionPorCategoria && regionPorCategoria[categoria]) {
            return regionPorCategoria[categoria];
        }
    }

    // Si no hay configuración especial, usar región fija
    return obtenerRegion(estadoFormateado, origen);
};

// Función para calcular peso volumétrico
const calcularPesoVolumetrico = (largo, ancho, alto, unidad = 'cm') => {
    if (unidad === 'cm') {
        // Convertir cm³ a ft³ y luego a lb (1 ft³ = 6.7 lb)
        return ((largo * ancho * alto) / 1000000) * 35.3147 * 6.7;
    } else {
        // Directamente de in³ a ft³ y luego a lb
        return (largo * ancho * alto) / 1728 * 6.7;
    }
};

// Función para calcular volumen
const calcularVolumen = (largo, ancho, alto, unidad = 'cm') => {
    if (unidad === 'cm') {
        // Para Estados Unidos y Panamá: cm³ a ft³
        return ((largo * ancho * alto) / 1000000) * 35.3147;
    } else {
        // Para pulgadas: in³ a ft³
        return (largo * ancho * alto) / 1728;
    }
};

// Función para calcular volumen de China (cm³ a ft³ con conversión específica)
const calcularVolumenChina = (largo, ancho, alto) => {
    const volumenCm3 = largo * ancho * alto;
    return volumenCm3 / 28320; // Conversión específica para China
};

// Handler para preflight requests (OPTIONS)
// Este método maneja las solicitudes preflight de CORS que los navegadores envían
// antes de hacer la solicitud real (especialmente para POST/PUT/DELETE)
export async function OPTIONS(request) {
    return handleOptions();
}

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            origin,
            destination,
            shipmentType,
            rubro = '',
            dimensions,
            weight = 0,
            quantity = 1,
            insurance = false,
            unit = 'cm' // 'cm' o 'in'
        } = body;

        // Validaciones básicas
        if (!origin || !destination || !shipmentType || !dimensions) {
            return NextResponse.json({
                success: false,
                error: 'Faltan campos requeridos: origin, destination, shipmentType, dimensions'
            }, { status: 400, headers: corsHeaders });
        }

        const { length, width, height } = dimensions;

        if (!length || !width || !height || length <= 0 || width <= 0 || height <= 0) {
            return NextResponse.json({
                success: false,
                error: 'Las dimensiones deben ser números positivos'
            }, { status: 400, headers: corsHeaders });
        }


        if (origin === 'estados_unidos' && shipmentType === 'maritimo') {
            return NextResponse.json({
                success: false,
                error: 'Envíos marítimos desde Estados Unidos no están disponibles'
            }, { status: 400, headers: corsHeaders });
        }

        if (shipmentType === 'aereo' && (!weight || weight <= 0)) {
            return NextResponse.json({
                success: false,
                error: 'El peso es requerido para envíos aéreos'
            }, { status: 400, headers: corsHeaders });
        }

        if (origin === 'panama' && shipmentType === 'maritimo' && !rubro) {
            return NextResponse.json({
                success: false,
                error: 'El rubro es requerido para envíos marítimos desde Panamá'
            }, { status: 400, headers: corsHeaders });
        }

        // Inicializar variables de cálculo
        let volumenM3 = 0;
        let volumenFt3 = 0;
        let pesoVolumetrico = 0;
        let pesoReal = parseFloat(weight) || 0;
        let pesoAFacturar = 0;
        let criterioUsado = '';
        let precio = 0;
        let tiempo = '';
        let tipoVolumen = '';

        // Calcular volúmenes según el origen
        if (origin === 'china') {
            volumenFt3 = calcularVolumenChina(length, width, height);
            volumenM3 = volumenFt3 / 35.3147;
            tipoVolumen = 'ft³';
        } else {
            volumenFt3 = calcularVolumen(length, width, height, unit);
            volumenM3 = volumenFt3 / 35.3147;
            tipoVolumen = 'ft³';
        }

        // Calcular peso volumétrico para envíos aéreos
        if (shipmentType === 'aereo') {
            if (origin === 'estados_unidos') {
                // Para USA: calcular en libras (lb)
                pesoVolumetrico = calcularPesoVolumetrico(length, width, height, unit);
                // Convertir peso real de kg a lb si es necesario
                pesoReal = pesoReal * 2.20462; // kg a lb
            } else if (origin === 'panama') {
                // Para Panamá: calcular en kilogramos (kg)
                pesoVolumetrico = calcularPesoVolumetrico(length, width, height, unit) / 2.20462; // lb a kg
                // pesoReal ya está en kg
            }
        }

        // Obtener región del destino
        const region = obtenerRegion(destination, origin);

        if (!region) {
            return NextResponse.json({
                success: false,
                error: `No se encontró región para el destino: ${destination}`
            }, { status: 400, headers: corsHeaders });
        }

        // Calcular precio según origen y tipo de envío
        if (origin === 'panama') {
            if (shipmentType === 'aereo') {
                // Aéreo desde Panamá
                pesoAFacturar = Math.max(pesoReal, pesoVolumetrico);
                criterioUsado = pesoReal > pesoVolumetrico ? 'peso_real' : 'peso_volumetrico';
                precio = pesoAFacturar * 12.0 * quantity; // $12/lb tarifa fija
                tiempo = '8-10 días';

                // Aplicar precio mínimo
                const precioMinimo = preciosMinimos?.panama?.aereo || 60.0;
                if (precio < precioMinimo) {
                    precio = precioMinimo;
                }
            } else {
                // Marítimo desde Panamá - usar nuevas tarifas por región y categoría
                pesoAFacturar = 0; // No aplica peso para marítimo
                criterioUsado = 'volumen';
                const categoria = obtenerCategoriaPanama(rubro);

                if (!categoria) {
                    return NextResponse.json({
                        success: false,
                        error: `No se encontró categoría para el rubro: ${rubro}`
                    }, { status: 400, headers: corsHeaders });
                }

                // Obtener región específica para esta categoría (importante para estados como Zulia)
                const regionParaCategoria = obtenerRegionPorCategoria(destination, origin, categoria);

                if (!regionParaCategoria) {
                    return NextResponse.json({
                        success: false,
                        error: `No se encontró región para el destino: ${destination}`
                    }, { status: 400, headers: corsHeaders });
                }

                const tarifa = tarifasPanamaCoLoader[regionParaCategoria]?.[categoria];

                if (!tarifa) {
                    return NextResponse.json({
                        success: false,
                        error: `No se encontró tarifa para región: ${regionParaCategoria}, categoría: ${categoria}`
                    }, { status: 400, headers: corsHeaders });
                }

                precio = volumenFt3 * tarifa * quantity;
                tiempo = '15-20 días';

                // Aplicar precio mínimo
                const precioMinimo = preciosMinimos?.panama?.maritimo || 70.0;
                if (precio < precioMinimo) {
                    precio = precioMinimo;
                }
            }
        } else if (origin === 'estados_unidos') {
            if (shipmentType === 'aereo') {
                // Aéreo desde Estados Unidos - tarifas por zona
                pesoAFacturar = Math.max(pesoReal, pesoVolumetrico);
                criterioUsado = pesoReal > pesoVolumetrico ? 'peso_real' : 'peso_volumetrico';
                const tarifasZona = tarifasAereas[origin];

                if (typeof tarifasZona === 'object') {
                    // Mapear regiones a zonas para compatibilidad
                    const zona = region === 'Zona 1' ? 'Zona 1' : 'Zona 2';
                    const tarifa = tarifasZona[zona];
                    precio = pesoAFacturar * tarifa * quantity;
                } else {
                    // Tarifa fija antigua
                    precio = pesoAFacturar * tarifasZona * quantity;
                }
                tiempo = '8-10 días';

                // Aplicar precio mínimo
                const precioMinimo = preciosMinimos?.estados_unidos?.aereo || 30.0;
                if (precio < precioMinimo) {
                    precio = precioMinimo;
                }
            }
        } else if (origin === 'china') {
            if (shipmentType === 'aereo') {
                // Aéreo desde China - por zona (igual que marítimo)
                pesoVolumetrico = calcularPesoVolumetrico(length, width, height, unit) / 2.20462; // lb a kg
                pesoAFacturar = Math.max(pesoReal, pesoVolumetrico);
                criterioUsado = pesoReal > pesoVolumetrico ? 'peso_real' : 'peso_volumetrico';

                const tarifasZona = tarifasAereas['china'];

                if (!tarifasZona || typeof tarifasZona !== 'object') {
                    return NextResponse.json({
                        success: false,
                        error: 'Tarifas aéreas de China no configuradas correctamente'
                    }, { status: 400, headers: corsHeaders });
                }

                // Mapear regiones a zonas para compatibilidad
                const zona = region === 'Zona 1' ? 'Zona 1' : 'Zona 2';
                const tarifa = tarifasZona[zona];

                if (!tarifa) {
                    return NextResponse.json({
                        success: false,
                        error: `No se encontró tarifa aérea para la zona: ${zona}`
                    }, { status: 400, headers: corsHeaders });
                }

                precio = pesoAFacturar * tarifa * quantity;
                tiempo = '5-7 días';

                // Aplicar precio mínimo
                const precioMinimo = preciosMinimos?.china?.aereo || 115.0;
                if (precio < precioMinimo) {
                    precio = precioMinimo;
                }
            } else {
                // Marítimo desde China
                pesoAFacturar = 0; // No aplica peso para marítimo
                criterioUsado = 'volumen';
                const tarifa = tarifasChina[region];

                if (!tarifa) {
                    return NextResponse.json({
                        success: false,
                        error: `No se encontró tarifa para región: ${region}`
                    }, { status: 400, headers: corsHeaders });
                }

                precio = volumenFt3 * tarifa * quantity;
                tiempo = '55-65 días';

                // Aplicar precio mínimo
                const precioMinimo = preciosMinimos?.china?.maritimo || 105.0;
                if (precio < precioMinimo) {
                    precio = precioMinimo;
                }
            }
        } else {
            return NextResponse.json({
                success: false,
                error: `Origen no soportado: ${origin}`
            }, { status: 400, headers: corsHeaders });
        }

        // Calcular seguro de carga - OBLIGATORIO para envíos marítimos
        // El seguro está incluido en los envíos aéreos
        let volumenParaSeguro = volumenFt3;
        let precioMinimoAplicado = false;
        let seguroCarga = 0;
        let seguroObligatorio = false;

        // El seguro es OBLIGATORIO para envíos marítimos (siempre se aplica)
        if (shipmentType === 'maritimo') {
            seguroObligatorio = true;

            // Verificar si se aplicó precio mínimo y calcular volumen equivalente
            if (origin === 'china') {
                const precioMinimo = preciosMinimos?.china?.maritimo || 105.0;
                if (precio <= precioMinimo) {
                    // China marítimo: 5 ft³ mínimo (105.0 / 21.0 = 5 ft³)
                    volumenParaSeguro = 5.0;
                    precioMinimoAplicado = true;
                }
            } else if (origin === 'panama') {
                const precioMinimo = preciosMinimos?.panama?.maritimo || 70.0;
                if (precio <= precioMinimo) {
                    // Panamá marítimo: 5 ft³ mínimo (70.0 / 14.0 = 5 ft³)
                    volumenParaSeguro = 5.0;
                    precioMinimoAplicado = true;
                }
            }

            seguroCarga = volumenParaSeguro;
        }

        // Verificar si se aplicó precio mínimo para envíos aéreos (solo para tracking)
        if (shipmentType === 'aereo') {
            if (origin === 'estados_unidos') {
                const precioMinimo = preciosMinimos?.estados_unidos?.aereo || 30.0;
                if (precio <= precioMinimo) {
                    precioMinimoAplicado = true;
                }
            } else if (origin === 'panama') {
                const precioMinimo = preciosMinimos?.panama?.aereo || 60.0;
                if (precio <= precioMinimo) {
                    precioMinimoAplicado = true;
                }
            } else if (origin === 'china') {
                const precioMinimo = preciosMinimos?.china?.aereo || 115.0;
                if (precio <= precioMinimo) {
                    precioMinimoAplicado = true;
                }
            }
        }
        const total = precio + seguroCarga;

        // Función helper para asegurar que los números sean doubles válidos
        const toDouble = (value) => {
            const num = parseFloat(value.toFixed(2));
            // Si es un entero, agregar .0 explícitamente
            return num === Math.floor(num) ? num + 0.0 : num;
        };

        // Preparar respuesta con tipos explícitos
        const response = {
            success: true,
            data: {
                pricing: {
                    subtotal: toDouble(precio),
                    insurance: toDouble(seguroCarga),
                    total: toDouble(total)
                },
                shipment: {
                    origin,
                    destination,
                    region,
                    type: shipmentType,
                    estimatedTime: tiempo
                },
                dimensions: {
                    volume: parseFloat(volumenFt3.toFixed(3)) + 0.0,
                    volumeUnit: tipoVolumen,
                    volumetricWeight: toDouble(pesoVolumetrico),
                    weightUnit: shipmentType === 'aereo' ? (origin === 'estados_unidos' ? 'lb' : 'kg') : 'kg'
                },
                weight: {
                    actual: toDouble(pesoReal),
                    volumetric: toDouble(pesoVolumetrico),
                    chargeable: toDouble(pesoAFacturar),
                    criteria: criterioUsado,
                    unit: shipmentType === 'aereo' ? (origin === 'estados_unidos' ? 'lb' : 'kg') : 'N/A'
                },
                details: {
                    quantity: parseInt(quantity), // Asegurar que quantity sea int
                    insurance: shipmentType === 'maritimo', // Siempre true para marítimo, false para aéreo
                    rubro: rubro || null,
                    minimumPriceApplied: precioMinimoAplicado,
                    insuranceAvailable: shipmentType === 'maritimo',
                    insuranceMandatory: seguroObligatorio,
                    insuranceVolume: seguroObligatorio ? (parseFloat(volumenParaSeguro.toFixed(3)) + 0.0) : 0.0
                }
            }
        };

        return NextResponse.json(response, { headers: corsHeaders });

    } catch (error) {
        console.error('Error en calculate-shipping:', error);
        return NextResponse.json({
            success: false,
            error: 'Error interno del servidor'
        }, { status: 500, headers: corsHeaders });
    }
}

// Método GET para obtener información de configuración
export async function GET() {
    try {
        // Obtener todos los rubros de las categorías de Panamá
        const rubrosArray = [];
        Object.values(rubrosPorCategoriaPanama || {}).forEach(rubros => {
            if (Array.isArray(rubros)) {
                rubrosArray.push(...rubros);
            }
        });

        const response = {
            success: true,
            data: {
                origins: ['panama', 'estados_unidos', 'china'],
                shipmentTypes: ['aereo', 'maritimo'],
                units: ['cm', 'in'],
                rubros: [...new Set(rubrosArray)], // Eliminar duplicados
                regions: {
                    panama: Object.keys(regionesPorEstadoPanama || {}),
                    general: Object.keys(regionesPorEstado || {})
                },
                estados: {
                    panama: Object.values(regionesPorEstadoPanama || {}).flat(),
                    general: Object.values(regionesPorEstado || {}).flat()
                }
            }
        };

        return NextResponse.json(response, { headers: corsHeaders });
    } catch (error) {
        console.error('Error en GET /api/calculate-shipping:', error);
        return NextResponse.json({
            success: false,
            error: 'Error interno del servidor'
        }, { status: 500, headers: corsHeaders });
    }
}
