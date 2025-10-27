import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { corsHeaders, handleOptions } from '@/lib/cors';

// Función para cargar datos desde el archivo JSON
const loadShippingData = () => {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'shipping-data.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error cargando datos de envío:', error);
        return {
            regionesPorEstadoPanama: {},
            regionesPorEstado: {}
        };
    }
};

// Handler para preflight requests (OPTIONS)
export async function OPTIONS(request) {
    return handleOptions();
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const origin = searchParams.get('origin'); // Filtro opcional por origen
        
        const shippingData = loadShippingData();
        const { regionesPorEstadoPanama, regionesPorEstado } = shippingData;
        
        // Función para formatear estados de Venezuela con value y label
        const formatVenezuelanStates = (regionData, regionType) => {
            const states = [];
            Object.entries(regionData || {}).forEach(([region, estadosArray]) => {
                estadosArray.forEach(estado => {
                    states.push({
                        value: estado.toLowerCase(), // valor para API (sin guiones bajos)
                        label: estado, // nombre para mostrar
                        region: region,
                        regionType: regionType, // 'panama' o 'general'
                        normalizedValue: estado.toLowerCase() // para matching interno
                    });
                });
            });
            
            // Ordenar alfabéticamente por label
            return states.sort((a, b) => a.label.localeCompare(b.label));
        };
        
        // Preparar respuesta según el origen solicitado
        let response = {
            success: true,
            data: {}
        };
        
        if (origin) {
            // Filtrar configuración de regiones por origen específico
            switch (origin.toLowerCase()) {
                case 'panama':
                    response.data = {
                        origin: 'panama',
                        description: 'Estados de Venezuela con configuración de regiones para envíos desde Panamá',
                        states: formatVenezuelanStates(regionesPorEstadoPanama, 'panama'),
                        regions: Object.keys(regionesPorEstadoPanama || {})
                    };
                    break;
                    
                case 'estados_unidos':
                case 'usa':
                    response.data = {
                        origin: 'estados_unidos',
                        description: 'Estados de Venezuela con configuración de regiones para envíos desde Estados Unidos',
                        states: formatVenezuelanStates(regionesPorEstado, 'general'),
                        regions: Object.keys(regionesPorEstado || {})
                    };
                    break;
                    
                case 'china':
                    response.data = {
                        origin: 'china',
                        description: 'Estados de Venezuela con configuración de regiones para envíos desde China',
                        states: formatVenezuelanStates(regionesPorEstado, 'general'),
                        regions: Object.keys(regionesPorEstado || {})
                    };
                    break;
                    
                default:
                    return NextResponse.json({
                        success: false,
                        error: `Origen no soportado: ${origin}. Orígenes válidos: panama, estados_unidos, china`
                    }, { status: 400, headers: corsHeaders });
            }
        } else {
            // Devolver todos los estados de Venezuela con sus configuraciones por origen
            const panamaStates = formatVenezuelanStates(regionesPorEstadoPanama, 'panama');
            const generalStates = formatVenezuelanStates(regionesPorEstado, 'general');
            
            response.data = {
                country: 'Venezuela',
                description: 'Estados de Venezuela como destinos de envío con configuraciones por origen',
                configurations: {
                    panama: {
                        description: 'Configuración de regiones para envíos desde Panamá',
                        states: panamaStates,
                        regions: Object.keys(regionesPorEstadoPanama || {})
                    },
                    estados_unidos: {
                        description: 'Configuración de regiones para envíos desde Estados Unidos',
                        states: generalStates,
                        regions: Object.keys(regionesPorEstado || {})
                    },
                    china: {
                        description: 'Configuración de regiones para envíos desde China',
                        states: generalStates,
                        regions: Object.keys(regionesPorEstado || {})
                    }
                },
                summary: {
                    total_unique_states: 23, // Todos son estados de Venezuela
                    panama_regions: panamaStates.length,
                    general_regions: generalStates.length,
                    note: 'Todos los estados son destinos en Venezuela'
                }
            };
        }
        
        return NextResponse.json(response, { headers: corsHeaders });
        
    } catch (error) {
        console.error('Error en endpoint de estados:', error);
        return NextResponse.json({
            success: false,
            error: 'Error interno del servidor'
        }, { status: 500, headers: corsHeaders });
    }
}

export async function POST(request) {
    return NextResponse.json({
        success: false,
        error: 'Método POST no permitido. Use GET para obtener estados de Venezuela.'
    }, { status: 405, headers: corsHeaders });
}
