'use client'

import { useState } from 'react';
import Link from 'next/link';
import { trackCalculatorUsage, trackButtonClick } from '@/lib/analytics';
import { 
    rubros, 
    rubrosPorCategoria,
    rubrosPorCategoriaPanama, 
    regionesPorEstado,
    regionesPorEstadoPanama, 
    tarifasUSA, 
    tarifasPanama,
    tarifasPanamaCoLoader,
    tarifasChina,
    tarifasAereas,
    calcularPrecioMinimo
} from './calculatorData';

const VOLUMEN_MINIMO_FT3 = 5; // Volumen mínimo en pies cúbicos

const origenes = [
    { value: 'china', label: 'China' },
    { value: 'estados_unidos', label: 'Estados Unidos' },
    { value: 'panama', label: 'Panamá' }
];

// Convertir los estados de todas las zonas a un array plano
const estados = Object.values(regionesPorEstado).flat().map(estado => ({
    value: estado.toLowerCase(),
    label: estado
}));

const tiposEnvio = [
    { value: 'aereo', label: 'Aéreo' },
    { value: 'maritimo', label: 'Marítimo' }
];

const unidadesMedida = [
    { value: 'cm', label: 'Centímetros' },
    { value: 'in', label: 'Pulgadas' }
];

const unidadesVolumen = [
    { value: 'cbm', label: 'Metros Cúbicos (CBM)' },
    { value: 'cuft', label: 'Pies Cúbicos (CUFT)' }
];

const rubrosFormateados = rubros.map(rubro => ({
    value: rubro.toLowerCase(),
    label: rubro
}));

export default function ShippingCalculator() {
    const [tipoCalculadora, setTipoCalculadora] = useState('dimensiones'); // 'dimensiones' o 'volumen'
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [tipoEnvio, setTipoEnvio] = useState('');
    const [unidadMedida, setUnidadMedida] = useState('cm');
    const [unidadVolumen, setUnidadVolumen] = useState('cbm');
    const [rubro, setRubro] = useState('');
    const [weight, setWeight] = useState('');
    const [cantidadPaquetes, setCantidadPaquetes] = useState(1);
    const [volumenDirecto, setVolumenDirecto] = useState('');
    const [dimensions, setDimensions] = useState({
        length: '',
        width: '',
        height: ''
    });
    const [result, setResult] = useState(null);
    const [whatsappMessage, setWhatsappMessage] = useState('');

    const isSeaShipment = tipoEnvio === 'maritimo';

    const obtenerRegion = (estado, origen) => {
        // Convertir el estado para hacer match correcto con los datos
        // Capitalizar cada palabra del estado
        const estadoFormateado = estado.split(' ')
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
            .join(' ');
        console.log('Estado original:', estado);
        console.log('Estado formateado:', estadoFormateado);
        
        // Usar las regiones correctas según el origen
        const regionesData = origen === 'panama' ? regionesPorEstadoPanama : regionesPorEstado;
        const region = Object.entries(regionesData).find(([region, estados]) => 
            estados.includes(estadoFormateado)
        )?.[0];
        console.log('Región encontrada:', region);
        return region;
    };

    const obtenerCategoria = (rubro, origen) => {
        // Convertir el rubro a la primera letra mayúscula para hacer match con los datos
        const rubroFormateado = rubro.charAt(0).toUpperCase() + rubro.slice(1).toLowerCase();
        
        // Usar las categorías correctas según el origen
        if (origen === 'panama') {
            return Object.entries(rubrosPorCategoriaPanama).find(([categoria, rubros]) => 
                rubros.includes(rubroFormateado)
            )?.[0];
        } else {
            return Object.entries(rubrosPorCategoria).find(([categoria, rubros]) => 
                rubros.includes(rubroFormateado)
            )?.[0];
        }
    };

    const calcularVolumen = (l, a, h) => {
        if (unidadMedida === 'cm') {
            return (l * a * h) / 1000000; // de cm³ a m³
        } else {
            return (l * a * h) / 1728; // de in³ a ft³
        }
    };

    const convertirCm3AFt3 = (volumenCm3) => {
        return volumenCm3 / 28316.85; // Conversión correcta de cm³ a ft³
    };

    const convertirCm3ACbm = (volumenCm3) => {
        return volumenCm3 / 1000000; // Conversión de cm³ a m³ (CBM)
    };

    const formatearVolumen = (volumenCm3, cantidadPaquetes) => {
        const volumenTotal = volumenCm3 * cantidadPaquetes;
        const volumenM3 = volumenTotal / 1000000;
        return `${volumenM3.toFixed(3)} M³`;
    };

    const calcularPesoVolumetrico = (l, a, h) => {
        if (unidadMedida === 'cm') {
            // Convertir cm³ a ft³ y luego a lb (1 ft³ = 6.7 lb)
            return ((l * a * h) / 1000000) * 35.3147 * 6.7;
        } else {
            // Directamente de in³ a ft³ y luego a lb
            return (l * a * h) / 1728 * 6.7;
        }
    };

    const calcularPrecioMinimo = (origen, destino, rubro, tipoEnvio) => {
        const region = obtenerRegion(destino, origen);
        
        if (origen === 'china') {
            const tarifaChina = tarifasChina[region];
            return VOLUMEN_MINIMO_FT3 * tarifaChina;
        } else if (origen === 'panama') {
            if (tipoEnvio === 'aereo') {
                // Para aéreo desde Panamá, usar tarifa fija por peso
                const pesoMinimo = 10; // 10 lb mínimo para aéreo
                return pesoMinimo * tarifasAereas[origen];
            } else {
                // Marítimo desde Panamá
                const categoria = obtenerCategoria(rubro, 'panama');
                if (region && categoria) {
                    const tarifaPanama = tarifasPanamaCoLoader[region][categoria];
                    return VOLUMEN_MINIMO_FT3 * tarifaPanama;
                }
            }
        } else if (origen === 'estados_unidos') {
            if (tipoEnvio === 'aereo') {
                // Para aéreo desde USA, usar tarifa por zona y peso mínimo de 5 lb
                const pesoMinimo = 5; // 5 lb mínimo para aéreo
                if (region && tarifasAereas[origen][region]) {
                    return pesoMinimo * tarifasAereas[origen][region];
                }
            } else {
                // Marítimo desde USA
                const tarifaUSA = tarifasUSA[region];
                return VOLUMEN_MINIMO_FT3 * tarifaUSA;
            }
        }
        
        return 0; // Si no se encuentra tarifa
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar que todos los campos requeridos estén completos
        if (!origin || !destination || !tipoEnvio || !rubro) {
            alert('Por favor complete todos los campos requeridos');
            return;
        }
        
        // Validar dimensiones si se está usando calculadora por dimensiones
        if (tipoCalculadora === 'dimensiones') {
            if (!dimensions.length || !dimensions.width || !dimensions.height) {
                alert('Por favor complete todas las dimensiones');
                return;
            }
            // Validar peso para envíos aéreos
            if (tipoEnvio === 'aereo' && !weight) {
                alert('Por favor ingrese el peso para envíos aéreos');
                return;
            }
            // Para envíos marítimos, no necesitamos validar el peso
        } else {
            // Validar volumen directo
            if (!volumenDirecto) {
                alert('Por favor ingrese el volumen');
                return;
            }
            // Validar peso para envíos aéreos también con volumen directo
            if (tipoEnvio === 'aereo' && !weight) {
                alert('Por favor ingrese el peso para envíos aéreos');
                return;
            }
        }
        
        let volumenM3 = 0;
        let volumenFt3 = 0;
        let volumenCm3 = 0; // Nuevo para China
        let pesoVolumetrico = 0;

        if (tipoCalculadora === 'dimensiones') {
            console.log('Dimensiones:', dimensions);
            console.log('Unidad medida:', unidadMedida);
            
            if (unidadMedida === 'cm') {
                // Calcular volumen en cm³ primero para China
                volumenCm3 = parseFloat(dimensions.length) * parseFloat(dimensions.width) * parseFloat(dimensions.height);
                volumenM3 = volumenCm3 / 1000000; // de cm³ a m³
                volumenFt3 = volumenM3 * 35.3147; // Convertir m³ a ft³
                console.log('Volumen cm³:', volumenCm3);
                console.log('Volumen m³:', volumenM3);
                console.log('Volumen ft³:', volumenFt3);
            } else {
                volumenFt3 = calcularVolumen(
                    parseFloat(dimensions.length),
                    parseFloat(dimensions.width),
                    parseFloat(dimensions.height)
                );
                volumenM3 = volumenFt3 / 35.3147; // Convertir ft³ a m³
                volumenCm3 = volumenM3 * 1000000; // Convertir a cm³
                console.log('Volumen ft³:', volumenFt3);
                console.log('Volumen m³:', volumenM3);
                console.log('Volumen cm³:', volumenCm3);
            }
            
            pesoVolumetrico = calcularPesoVolumetrico(
                parseFloat(dimensions.length),
                parseFloat(dimensions.width),
                parseFloat(dimensions.height)
            );
            console.log('Peso volumétrico:', pesoVolumetrico);
            
            // Para envíos aéreos desde USA, el peso volumétrico ya está en libras
            if (origin === 'estados_unidos' && tipoEnvio === 'aereo') {
                console.log('Peso volumétrico en libras para USA:', pesoVolumetrico);
            }
        } else {
            // Conversión de volumen directo
            console.log('=== CONVERSIÓN VOLUMEN DIRECTO ===');
            console.log('Volumen ingresado:', volumenDirecto);
            console.log('Unidad de volumen:', unidadVolumen);
            
            if (unidadVolumen === 'cuft') {
                volumenFt3 = parseFloat(volumenDirecto);
                volumenM3 = volumenFt3 / 35.3147; // Convertir ft³ a m³
                volumenCm3 = volumenM3 * 1000000; // Convertir a cm³
            } else {
                volumenM3 = parseFloat(volumenDirecto);
                volumenFt3 = volumenM3 * 35.3147; // Convertir m³ a ft³
                volumenCm3 = volumenM3 * 1000000; // Convertir a cm³
            }
            
            console.log('Volumen M³ calculado:', volumenM3);
            console.log('Volumen Ft³ calculado:', volumenFt3);
            console.log('Volumen Cm³ calculado:', volumenCm3);
            
            // Calcular peso volumétrico: 1 m³ = 166.67 kg para transporte marítimo
            // Para aéreo: 1 m³ = 167 kg (6000 cm³/kg)
            if (tipoEnvio === 'aereo') {
                pesoVolumetrico = volumenM3 * 167; // kg
                pesoVolumetrico = pesoVolumetrico * 2.20462; // Convertir kg a lb
            } else {
                pesoVolumetrico = volumenM3 * 166.67; // kg para marítimo
                pesoVolumetrico = pesoVolumetrico * 2.20462; // Convertir kg a lb
            }
            console.log('Peso volumétrico calculado:', pesoVolumetrico);
        }

        let precio = 0;
        let tiempo = '';

        // Nueva lógica simplificada
        console.log('=== DEBUG CALCULADORA ===');
        console.log('Origen:', origin);
        console.log('Destino:', destination);
        console.log('Tipo envío:', tipoEnvio);
        console.log('Rubro:', rubro);
        console.log('Volumen Ft3:', volumenFt3);
        console.log('Volumen M3:', volumenM3);
        console.log('Peso:', weight);
        console.log('Peso volumétrico:', pesoVolumetrico);
        
        if (origin === 'panama') {
            console.log('Procesando Panamá...');
            if (tipoEnvio === 'aereo') {
                // Aéreo desde Panamá - solo por peso, no por rubro
                const pesoEnKg = parseFloat(weight);
                const pesoVolumetricoEnKg = pesoVolumetrico / 2.20462; // Convertir lb a kg
                
                // Si el peso volumétrico es menor al peso real, usar el peso real directamente
                const pesoAFacturar = pesoVolumetricoEnKg < pesoEnKg ? pesoEnKg : pesoVolumetricoEnKg;
                
                const tarifaAerea = tarifasAereas[origin];
                console.log('Tarifa aérea Panamá:', tarifaAerea);
                console.log('Peso en kg:', pesoEnKg);
                console.log('Peso volumétrico en kg:', pesoVolumetricoEnKg);
                console.log('Peso a facturar:', pesoAFacturar);
                console.log('Criterio usado:', pesoVolumetricoEnKg < pesoEnKg ? 'Peso real' : 'Peso volumétrico');
                
                if (tarifaAerea) {
                    precio = pesoAFacturar * tarifaAerea * cantidadPaquetes;
                    tiempo = '8-10 días';
                    console.log('Precio aéreo Panamá:', precio);
                }
            } else {
                // Marítimo desde Panamá - usar nuevas tarifas Co-Loader
                const region = obtenerRegion(destination, 'panama');
                const categoria = obtenerCategoria(rubro, 'panama');
                console.log('Región Panamá:', region);
                console.log('Categoría Panamá:', categoria);
                
                if (region && categoria) {
                    const tarifa = tarifasPanamaCoLoader[region][categoria];
                    console.log('Tarifa marítima Panamá:', tarifa);
                    precio = volumenFt3 * tarifa * cantidadPaquetes;
                    tiempo = '15-20 días';
                    console.log('Precio marítimo Panamá:', precio);
                } else {
                    console.log('No se encontró región o categoría para Panamá');
                    console.log('Región encontrada:', region);
                    console.log('Categoría encontrada:', categoria);
                    console.log('Destino:', destination);
                    console.log('Rubro:', rubro);
                }
            }
        } else if (origin === 'estados_unidos') {
            console.log('Procesando Estados Unidos...');
            if (tipoEnvio === 'aereo') {
                // Aéreo desde Estados Unidos - por peso y zona
                // Para USA, el peso ya viene en libras, no necesitamos convertir
                const pesoEnLibras = parseFloat(weight);
                const pesoVolumetricoEnLibras = pesoVolumetrico;
                
                // Si el peso volumétrico es menor al peso real, usar el peso real directamente
                const pesoAFacturar = pesoVolumetricoEnLibras < pesoEnLibras ? pesoEnLibras : pesoVolumetricoEnLibras;
                
                const region = obtenerRegion(destination, 'estados_unidos');
                console.log('Región USA para aéreo:', region);
                console.log('Peso en libras:', pesoEnLibras);
                console.log('Peso volumétrico en libras:', pesoVolumetricoEnLibras);
                console.log('Peso a facturar:', pesoAFacturar);
                console.log('Criterio usado:', pesoVolumetricoEnLibras < pesoEnLibras ? 'Peso real' : 'Peso volumétrico');
                
                if (region && tarifasAereas[origin][region]) {
                    const tarifaAerea = tarifasAereas[origin][region];
                    console.log('Tarifa aérea USA por zona:', tarifaAerea);
                    precio = pesoAFacturar * tarifaAerea * cantidadPaquetes;
                    tiempo = '8-10 días';
                    console.log('Precio aéreo USA:', precio);
                } else {
                    console.log('No se encontró tarifa aérea para la región:', region);
                }
            } else {
                // Marítimo desde Estados Unidos - por zona
                const region = obtenerRegion(destination, 'estados_unidos');
                console.log('Región USA:', region);
                if (region) {
                    const tarifaMaritima = tarifasUSA[region];
                    console.log('Tarifa marítima USA:', tarifaMaritima);
                    if (tarifaMaritima) {
                        precio = volumenFt3 * tarifaMaritima * cantidadPaquetes;
                        tiempo = '15-20 días';
                        console.log('Precio marítimo USA:', precio);
                    }
                } else {
                    console.log('No se encontró región para USA');
                }
            }
        } else if (origin === 'china') {
            console.log('Procesando China...');
            if (tipoEnvio === 'aereo') {
                // Aéreo desde China - preparado para futuro
                const pesoEnKg = parseFloat(weight);
                const pesoVolumetricoEnKg = pesoVolumetrico / 2.20462; // Convertir lb a kg
                
                // Si el peso volumétrico es menor al peso real, usar el peso real directamente
                const pesoAFacturar = pesoVolumetricoEnKg < pesoEnKg ? pesoEnKg : pesoVolumetricoEnKg;
                
                const tarifaAerea = tarifasAereas[origin];
                console.log('Tarifa aérea China:', tarifaAerea);
                console.log('Peso en kg:', pesoEnKg);
                console.log('Peso volumétrico en kg:', pesoVolumetricoEnKg);
                console.log('Peso a facturar:', pesoAFacturar);
                console.log('Criterio usado:', pesoVolumetricoEnKg < pesoEnKg ? 'Peso real' : 'Peso volumétrico');
                
                if (tarifaAerea) {
                    precio = pesoAFacturar * tarifaAerea * cantidadPaquetes;
                    tiempo = '5-7 días';
                    console.log('Precio aéreo China:', precio);
                }
            } else {
                // Marítimo desde China - solo marítimo por ahora
                const region = obtenerRegion(destination, 'china');
                console.log('Región China:', region);
                if (region) {
                    const tarifaChina = tarifasChina[region];
                    console.log('Tarifa marítima China:', tarifaChina);
                    console.log('Volumen en CBM:', volumenM3);
                    console.log('Volumen en ft³:', volumenFt3);
                    
                    // Para China, usar conversión de cm³ a ft³ solo si viene de dimensiones
                    let volumenParaCalculo;
                    console.log('=== CÁLCULO DETALLADO CHINA ===');
                    console.log('Tipo calculadora:', tipoCalculadora);
                    console.log('volumenCm3:', volumenCm3);
                    console.log('volumenFt3:', volumenFt3);
                    console.log('cantidadPaquetes:', cantidadPaquetes);
                    console.log('tarifaChina:', tarifaChina);
                    
                    if (tipoCalculadora === 'dimensiones') {
                        volumenParaCalculo = convertirCm3AFt3(volumenCm3);
                        console.log('Usando conversión cm³ a ft³:', volumenParaCalculo);
                    } else {
                        // Si es volumen directo, usar volumenFt3 directamente
                        volumenParaCalculo = volumenFt3;
                        console.log('Usando volumenFt3 directamente:', volumenParaCalculo);
                    }
                    
                    precio = volumenParaCalculo * tarifaChina * cantidadPaquetes;
                    tiempo = '50-55 días';
                    console.log('Cálculo: ', volumenParaCalculo, ' * ', tarifaChina, ' * ', cantidadPaquetes, ' = ', precio);
                    console.log('Volumen para cálculo (ft³):', volumenParaCalculo);
                    console.log('Precio marítimo China:', precio);
                } else {
                    console.log('No se encontró región para China');
                }
            }
        }
        
        console.log('Precio final:', precio);
        console.log('Tiempo final:', tiempo);
        console.log('=== FIN DEBUG ===');

        // Calcular y aplicar precio mínimo según origen y destino
        const precioMinimo = calcularPrecioMinimo(origin, destination, rubro, tipoEnvio);
        console.log('Precio mínimo calculado:', precioMinimo);
        
        if (precio > 0 && precio < precioMinimo) {
            console.log('Aplicando precio mínimo:', precioMinimo);
            precio = precioMinimo;
        }

        if (precio > 0) {
            const volumenTotalFt3 = volumenFt3 * cantidadPaquetes;
            const volumenTotalM3 = volumenM3 * cantidadPaquetes;
            
            let volumenMostrar = '';
            if (origin === 'china') {
                // Para China, mostrar siempre en M³
                volumenMostrar = `${volumenTotalM3.toFixed(2)} M³`;
            } else if (origin === 'estados_unidos' || (origin === 'panama' && tipoEnvio === 'maritimo')) {
                volumenMostrar = `${volumenTotalFt3.toFixed(3)} ft³`;
            } else {
                volumenMostrar = `${volumenTotalM3.toFixed(3)} m³`;
            }
            
            // Determinar qué peso mostrar según la lógica de cálculo
            let pesoAMostrar = '';
            let mostrarPesoVolumetrico = true;
            
            if (tipoEnvio === 'aereo') {
                if (origin === 'estados_unidos') {
                    const pesoEnLibras = parseFloat(weight);
                    const pesoVolumetricoEnLibras = pesoVolumetrico;
                    
                    if (pesoVolumetricoEnLibras < pesoEnLibras) {
                        // Si el peso real es mayor, mostrar solo el peso real
                        pesoAMostrar = `${pesoEnLibras.toFixed(2)} lb`;
                        mostrarPesoVolumetrico = false;
                    } else {
                        // Si el peso volumétrico es mayor, mostrar ambos
                        pesoAMostrar = `${pesoVolumetricoEnLibras.toFixed(2)} lb`;
                        mostrarPesoVolumetrico = true;
                    }
                } else {
                    // Para Panamá y China
                    const pesoEnKg = parseFloat(weight);
                    const pesoVolumetricoEnKg = pesoVolumetrico / 2.20462;
                    
                    if (pesoVolumetricoEnKg < pesoEnKg) {
                        // Si el peso real es mayor, mostrar solo el peso real
                        pesoAMostrar = `${pesoEnKg.toFixed(2)} kg`;
                        mostrarPesoVolumetrico = false;
                    } else {
                        // Si el peso volumétrico es mayor, mostrar ambos
                        pesoAMostrar = `${pesoVolumetricoEnKg.toFixed(2)} kg`;
                        mostrarPesoVolumetrico = true;
                    }
                }
            } else {
                // Para envíos marítimos, mostrar peso volumétrico normalmente
                pesoAMostrar = `${pesoVolumetrico.toFixed(2)} lb`;
                mostrarPesoVolumetrico = true;
            }
            
            const resultData = {
                price: `$${precio.toFixed(2)}`,
                time: tiempo,
                pesoVolumetrico: pesoAMostrar,
                mostrarPesoVolumetrico: mostrarPesoVolumetrico,
                volumen: volumenMostrar,
                cantidadPaquetes: cantidadPaquetes
            };

            setResult(resultData);

            // Trackear uso de la calculadora
            trackCalculatorUsage(
                origin,
                destination,
                tipoEnvio,
                rubro,
                precio
            );

            // Preparar mensaje para WhatsApp
            const mensaje = `¡Hola! Me interesa realizar un envío con las siguientes características:
- Origen: ${origenes.find(o => o.value === origin)?.label}
- Destino: ${estados.find(e => e.value === destination)?.label}
- Tipo de envío: ${tiposEnvio.find(t => t.value === tipoEnvio)?.label}
- Volumen: ${resultData.volumen}
${!isSeaShipment ? `- Peso Volumétrico: ${resultData.pesoVolumetrico}` : ''}
- Precio estimado: ${resultData.price}
${cantidadPaquetes > 1 ? `- Cantidad de paquetes: ${cantidadPaquetes}` : ''}`;

            setWhatsappMessage(encodeURIComponent(mensaje));
        }
    };

    return (
        <section className="shipping-calculator-section section-padding">
            <div className="container">
                <div className="calculator-wrapper">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp">
                            <i className="fa-classic fa-arrow-left-long" />
                            CALCULADORA DE ENVÍOS
                            <i className="fa-classic fa-arrow-right-long" />
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                            Calcula el Costo de tu Envío
                        </h2>
                    </div>

                    <div className="calculator-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row full-width">
                                <div className="form-group">
                                    <label>Tipo de Calculadora</label>
                                    <select
                                        className="form-control"
                                        value={tipoCalculadora}
                                        onChange={(e) => {
                                            setTipoCalculadora(e.target.value);
                                            setResult(null);
                                            if (e.target.value === 'volumen') {
                                                setTipoEnvio('maritimo');
                                            }
                                        }}
                                    >
                                        <option value="dimensiones">Por Dimensiones</option>
                                        <option value="volumen" disabled={tipoEnvio === 'aereo' || origin === 'estados_unidos'}>Por Volumen</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row two-columns">
                                <div className="form-group">
                                    <label>Origen</label>
                                    <select
                                        className="form-control"
                                        value={origin}
                                        onChange={(e) => {
                                            setOrigin(e.target.value);
                                            if (e.target.value === 'china') {
                                                setTipoEnvio('maritimo');
                                            } else if (e.target.value === 'estados_unidos') {
                                                setTipoEnvio('aereo');
                                                setUnidadMedida('in');
                                                setTipoCalculadora('dimensiones');
                                            }
                                        }}
                                        required
                                    >
                                        <option value="">Seleccione origen</option>
                                        {origenes.map(origen => (
                                            <option key={origen.value} value={origen.value}>
                                                {origen.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Tipo de Envío</label>
                                    <select
                                        className="form-control"
                                        value={tipoEnvio}
                                        onChange={(e) => setTipoEnvio(e.target.value)}
                                        required
                                        disabled={origin === 'china'}
                                    >
                                        <option value="">Seleccione tipo</option>
                                        {tiposEnvio.map(tipo => (
                                            <option 
                                                key={tipo.value} 
                                                value={tipo.value}
                                                disabled={(origin === 'china' && tipo.value === 'aereo') || 
                                                         (origin === 'estados_unidos' && tipo.value === 'maritimo')}
                                            >
                                                {tipo.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row full-width">
                                <div className="form-group">
                                    <label>Estado de Destino</label>
                                    <select
                                        className="form-control"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        required
                                    >
                                        <option value="">Seleccione estado</option>
                                        {estados.map(estado => (
                                            <option key={estado.value} value={estado.value}>
                                                {estado.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row full-width">
                                <div className="form-group">
                                    <label>Rubro</label>
                                    <select
                                        className="form-control"
                                        value={rubro}
                                        onChange={(e) => setRubro(e.target.value)}
                                        required
                                    >
                                        <option value="">Seleccione rubro</option>
                                        {rubrosFormateados.map(r => (
                                            <option key={r.value} value={r.value}>
                                                {r.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row full-width">
                                <div className="form-group">
                                    <label>Unidad de Medida</label>
                                    <select
                                        className="form-control"
                                        value={unidadMedida}
                                        onChange={(e) => setUnidadMedida(e.target.value)}
                                        required
                                    >
                                        {unidadesMedida.map(unidad => (
                                            <option key={unidad.value} value={unidad.value}>
                                                {unidad.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row full-width">
                                <div className="form-group">
                                    <label>Cantidad de Paquetes</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={cantidadPaquetes}
                                        onChange={(e) => setCantidadPaquetes(Math.max(1, parseInt(e.target.value) || 1))}
                                        min="1"
                                        required
                                    />
                                </div>
                            </div>
                            {tipoCalculadora === 'dimensiones' ? (
                                <div className="dimensions-group">
                                    <div className="dimensions-title">
                                        <label>Dimensiones del Paquete</label>
                                        <span>Ingresa las medidas en {unidadMedida === 'cm' ? 'centímetros' : 'pulgadas'}</span>
                                    </div>
                                    <div className="dimensions-inputs">
                                        {!isSeaShipment && (
                                            <div className="form-group">
                                                <label>Peso ({origin === 'estados_unidos' ? 'lb' : 'kg'})</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                    placeholder={`Ingrese el peso en ${origin === 'estados_unidos' ? 'libras' : 'kilogramos'}`}
                                                    required={!isSeaShipment}
                                                />
                                            </div>
                                        )}
                                        <div className="form-group">
                                            <label>Alto ({unidadMedida})</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={dimensions.height}
                                                onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
                                                placeholder={`Ingrese el alto en ${unidadMedida}`}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Largo ({unidadMedida})</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={dimensions.length}
                                                onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
                                                placeholder={`Ingrese el largo en ${unidadMedida}`}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Ancho ({unidadMedida})</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={dimensions.width}
                                                onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
                                                placeholder={`Ingrese el ancho en ${unidadMedida}`}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="form-row full-width">
                                    <div className="form-group">
                                        <label>Unidad de Volumen</label>
                                        <select
                                            className="form-control"
                                            value={unidadVolumen}
                                            onChange={(e) => setUnidadVolumen(e.target.value)}
                                            required
                                        >
                                            {unidadesVolumen.map(unidad => (
                                                <option key={unidad.value} value={unidad.value}>
                                                    {unidad.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Volumen ({unidadVolumen === 'cbm' ? 'm³' : 'ft³'})</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={volumenDirecto}
                                            onChange={(e) => setVolumenDirecto(e.target.value)}
                                            placeholder={`Volumen en ${unidadVolumen === 'cbm' ? 'm³' : 'ft³'}`}
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="calculator-actions">
                                <button type="submit" className="theme-btn">
                                    Calcular Envío
                                    <i className="fa-classic fa-arrow-right" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {result && (
                        <div className="calculator-result">
                            <div className="result-box">
                                <div className="price-box">
                                    <h4>Precio Estimado</h4>
                                    <h3 className="price-value">{result.price}</h3>
                                </div>
                                
                                <div className="time-box">
                                    <h4>Tiempo Estimado</h4>
                                    <h3>{result.time}</h3>
                                </div>
                                
                                {/* Para envíos aéreos */}
                                <div className={`weight-box ${isSeaShipment ? 'hidden' : ''}`}>
                                    <h4>{result.mostrarPesoVolumetrico ? 'Peso Volumétrico' : 'Peso'}</h4>
                                    <h3>{result.pesoVolumetrico}</h3>
                                </div>

                                {/* Para envíos marítimos */}
                                <div className={`volume-box ${!isSeaShipment ? 'hidden' : ''}`}>
                                    <h4>Volumen</h4>
                                    <h3>{result.volumen}</h3>
                                </div>
                            </div>

                            {result.cantidadPaquetes > 1 && (
                                <div className="quantity-box">
                                    <h4>Cantidad De Paquetes</h4>
                                    <h3>{result.cantidadPaquetes}</h3>
                                </div>
                            )}

                            <div className="disclaimer">
                                <p>* Los precios son aproximados y están sujetos a verificación.</p>
                                <p>* El costo final puede variar según las dimensiones exactas y el peso real.</p>
                                <p>* Se aplica un precio mínimo basado en 5 ft³ para envíos marítimos y 5 lb para envíos aéreos desde USA.</p>
                            </div>

                            <div className="whatsapp-button">
                                <a
                                    href={`https://wa.me/584126396424?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn"
                                    onClick={() => trackButtonClick('whatsapp_contact', 'calculator_result')}
                                >
                                    <i className="fab fa-whatsapp" />
                                    Concreta tu envìo
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 