import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/_calculator.scss';
import Select from 'react-select';
import { rubros, rubrosPorCategoria, regionesPorEstado, tarifas, tarifasPanama } from '../utils/categoriesData';

const CostoMinimo = 50; // Define el costo mínimo

const CubicajeCalculator = () => {
    const [largo, setLargo] = useState(0);
    const [ancho, setAncho] = useState(0);
    const [alto, setAlto] = useState(0);
    const [peso, setPeso] = useState(0);
    const [tipoEnvio, setTipoEnvio] = useState('aereo');
    const [origen, setOrigen] = useState('china');
    const [resultado, setResultado] = useState(null);
    const [pesoVolumetrico, setPesoVolumetrico] = useState(0);
    const [unidadMedida, setUnidadMedida] = useState('cm'); // Nueva variable de estado
    const [tipoCalculadora, setTipoCalculadora] = useState('dimensiones'); // 'dimensiones' o 'volumen'
    const [volumenDirecto, setVolumenDirecto] = useState(0);
    const [unidadVolumen, setUnidadVolumen] = useState('cbm'); // 'cbm' o 'cuft'
    const [cantidadPaquetes, setCantidadPaquetes] = useState(1); // Nueva variable para la cantidad de paquetes
    const [rubroSeleccionado, setRubroSeleccionado] = useState(null);
    const [estadoSeleccionado, setEstadoSeleccionado] = useState(null);

    // Convertir rubros a opciones para react-select
    const opcionesRubros = useMemo(() => 
        rubros.map(rubro => ({
            value: rubro,
            label: rubro
        }))
    , []);

    // Obtener lista plana de estados
    const estados = useMemo(() => 
        Object.values(regionesPorEstado).flat()
    , []);

    // Convertir estados a opciones para react-select
    const opcionesEstados = useMemo(() => 
        estados.map(estado => ({
            value: estado,
            label: estado
        }))
    , [estados]);

    // Función para obtener la región de un estado
    const obtenerRegion = (estado) => {
        return Object.entries(regionesPorEstado).find(([region, estados]) => 
            estados.includes(estado)
        )?.[0];
    };

    // Función para obtener la categoría de un rubro
    const obtenerCategoria = (rubro) => {
        return Object.entries(rubrosPorCategoria).find(([categoria, rubros]) => 
            rubros.includes(rubro)
        )?.[0];
    };

    const convertirAMetrosCubicos = (l, a, h) => {
        if (unidadMedida === 'cm') {
            return (l * a * h) / 1000000; // de cm³ a m³
        } else {
            return (l * a * h) * 0.000016387064; // de in³ a m³
        }
    };

    const convertirAPiesCubicos = (l, a, h) => {
        if (unidadMedida === 'cm') {
            return (l * a * h) / 28316.8466; // de cm³ a ft³
        } else {
            return (l * a * h) / 1728; // de in³ a ft³
        }
    };

    const calcularPesoVolumetrico = (l, a, h) => {
        if (unidadMedida === 'cm') {
            return (l * a * h) / 5000; // Fórmula para cm
        } else {
            return (l * a * h) * 0.0361273 / 5000; // Convertir in³ a cm³ y luego calcular
        }
    };

    const calcular = () => {
        if (origen === 'panama' && tipoEnvio === 'maritimo') {
            if (!estadoSeleccionado || !rubroSeleccionado) {
                setResultado('Error: Debe seleccionar estado y rubro');
                return;
            }
            let volumen;
            let tarifa = 0;
            let subtotal = 0;

            const volumenFT = convertirAPiesCubicos(largo, ancho, alto);
            const pesoVolumetricoCalc = calcularPesoVolumetrico(largo, ancho, alto);
            setPesoVolumetrico(pesoVolumetricoCalc);

            // Obtener región y categoría
            const region = obtenerRegion(estadoSeleccionado.value);
            const categoria = obtenerCategoria(rubroSeleccionado.value);

            if (region && categoria) {
                tarifa = tarifasPanama[region][categoria];
                volumen = volumenFT;
                subtotal = volumen * tarifa;

                if (subtotal > 0) {
                    const volumenFormateado = isNaN(volumen) ? '0.00' : volumen.toFixed(2);
                    if (subtotal < CostoMinimo) {
                        setResultado(
                            `Costo: $${CostoMinimo.toFixed(2)}\n` +
                            `Volumen: ${volumenFormateado} ft³\n` +
                            `Tarifa: $${tarifa.toFixed(2)}/ft³\n` +
                            `Estado: ${estadoSeleccionado.label}\n` +
                            `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                        );
                    } else {
                        setResultado(
                            `Costo: $${subtotal.toFixed(2)}\n` +
                            `Volumen: ${volumenFormateado} ft³\n` +
                            `Tarifa: $${tarifa.toFixed(2)}/ft³\n` +
                            `Estado: ${estadoSeleccionado.label}\n` +
                            `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                        );
                    }
                }
            } else {
                setResultado('Error: No se encontró tarifa para la combinación seleccionada');
            }
        } else {
            // Lógica original para otros orígenes
            let volumen;
            let tarifa = 0;
            let subtotal = 0;
            let calculoValido = false;

            const volumenM3 = convertirAMetrosCubicos(largo, ancho, alto);
            const volumenFT = convertirAPiesCubicos(largo, ancho, alto);
            const pesoVolumetricoCalc = calcularPesoVolumetrico(largo, ancho, alto);
            setPesoVolumetrico(pesoVolumetricoCalc);

            // Calcular el costo basado en la cantidad de paquetes
            const cantidadPaquetesNum = parseInt(cantidadPaquetes, 10) || 1; // Asegurarse de que sea un número

            if (tipoEnvio === 'maritimo') {
                if (origen === 'estados_unidos') {
                    volumen = volumenFT;
                    tarifa = 30.0;
                    subtotal = volumen * tarifa * cantidadPaquetesNum; // Ajustar por cantidad de paquetes
                    calculoValido = true;
                } else if (origen === 'china') {
                    volumen = volumenM3;
                    tarifa = 840.0;
                    subtotal = volumen * tarifa * cantidadPaquetesNum; // Ajustar por cantidad de paquetes
                    calculoValido = true;
                }
            } else if (tipoEnvio === 'aereo') {
                // ... lógica existente para envíos aéreos ...
                setResultado(
                    `Costo: $${subtotal.toFixed(2)}\n` +
                    `Peso Volumétrico: ${pesoVolumetrico.toFixed(2)} kg\n` +
                    `Estado: ${estadoSeleccionado?.label || 'No seleccionado'}\n` +
                    `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                );
            }

            if (calculoValido) {
                const volumenFormateado = isNaN(volumen) ? '0.00' : volumen.toFixed(2);
                const unidadMedidaTexto = origen === 'china' ? 'm³' : 'ft³';
                if (subtotal < CostoMinimo) {
                    setResultado(
                        `Costo: $${CostoMinimo.toFixed(2)}\n` +
                        `Volumen: ${volumenFormateado} ${unidadMedidaTexto}\n` +
                        `Tarifa: $${tarifa.toFixed(2)}/${unidadMedidaTexto}\n` +
                        `Estado: ${estadoSeleccionado?.label || 'No seleccionado'}\n` +
                        `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                    );
                } else {
                    setResultado(
                        `Costo: $${subtotal.toFixed(2)}\n` +
                        `Volumen: ${volumenFormateado} ${unidadMedidaTexto}\n` +
                        `Tarifa: $${tarifa.toFixed(2)}/${unidadMedidaTexto}\n` +
                        `Estado: ${estadoSeleccionado?.label || 'No seleccionado'}\n` +
                        `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                    );
                }
            } else {
                setResultado('Error: No se pudo calcular el costo.');
            }
        }
    };

    const handleOrigenChange = (option) => {
        setOrigen(option.value);
        setResultado(null);
        setPesoVolumetrico(0);

        // Deshabilitar opción de aéreo si el origen es China
        if (option.value === 'china') {
            setTipoEnvio('maritimo');
        }
    };

    const calcularPorVolumen = () => {
        if (!estadoSeleccionado || !rubroSeleccionado) {
            setResultado('Error: Debe seleccionar estado y rubro');
            return;
        }

        // Solo proceder si es Panamá y marítimo
        if (origen === 'panama' && tipoEnvio === 'maritimo') {
            let volumenConvertido = Number(volumenDirecto);
            let tarifa = 0;
            let subtotal = 0;

            // Convertir a pies cúbicos si es necesario
            if (unidadVolumen === 'cbm') {
                volumenConvertido = volumenConvertido * 35.3147; // Convertir de m³ a ft³
            }

            // Obtener región y categoría
            const region = obtenerRegion(estadoSeleccionado.value);
            const categoria = obtenerCategoria(rubroSeleccionado.value);

            if (region && categoria) {
                tarifa = tarifasPanama[region][categoria];
                subtotal = volumenConvertido * tarifa;

                if (subtotal > 0) {
                    const volumenFormateado = isNaN(volumenConvertido) ? '0.00' : volumenConvertido.toFixed(2);
                    if (subtotal < CostoMinimo) {
                        setResultado(
                            `Costo: $${CostoMinimo.toFixed(2)}\n` +
                            `Volumen: ${volumenFormateado} ft³\n` +
                            `Tarifa: $${tarifa.toFixed(2)}/ft³\n` +
                            `Estado: ${estadoSeleccionado.label}\n` +
                            `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                        );
                    } else {
                        setResultado(
                            `Costo: $${subtotal.toFixed(2)}\n` +
                            `Volumen: ${volumenFormateado} ft³\n` +
                            `Tarifa: $${tarifa.toFixed(2)}/ft³\n` +
                            `Estado: ${estadoSeleccionado.label}\n` +
                            `Rubro: ${rubroSeleccionado?.label || 'No especificado'}`
                        );
                    }
                }
            } else {
                setResultado('Error: No se encontró tarifa para la combinación seleccionada');
            }
        } else {
            setResultado('Esta calculadora solo está disponible para envíos marítimos desde Panamá');
        }
    };

    const generarMensajeWhatsApp = () => {
        const mensajeBase = `¡Hola! Me interesa cotizar un envío con las siguientes características:`;
        
        let detallesEnvio = '';
        if (tipoCalculadora === 'dimensiones') {
            detallesEnvio = `\nDimensiones: ${largo}${unidadMedida} x ${ancho}${unidadMedida} x ${alto}${unidadMedida}`;
            if (peso > 0) {
                detallesEnvio += `\nPeso: ${peso}kg`;
            }
        } else {
            detallesEnvio = `\nVolumen: ${volumenDirecto}${unidadVolumen === 'cbm' ? 'm³' : 'ft³'}`;
        }

        detallesEnvio += `\nOrigen: ${origen === 'estados_unidos' ? 'Estados Unidos' : origen === 'china' ? 'China' : 'Panamá'}`;
        detallesEnvio += `\nEstado de Destino: ${estadoSeleccionado?.label || 'No seleccionado'}`;
        detallesEnvio += `\nTipo de envío: ${tipoEnvio === 'maritimo' ? 'Marítimo' : 'Aéreo'}`;
        if (rubroSeleccionado) {
            detallesEnvio += `\nRubro: ${rubroSeleccionado.label}`;
        }
        detallesEnvio += `\n${resultado.replace('Costo:', 'Costo estimado:')}`;
        
        const mensajeFinal = `${mensajeBase}${detallesEnvio}`;
        return encodeURIComponent(mensajeFinal);
    };

    // console.log(`Largo: ${largo}, Ancho: ${ancho}, Alto: ${alto}, Peso: ${peso}`);

    // Agregar nuevas opciones para los otros dropdowns
    const opcionesTipoCalculadora = [
        { value: 'dimensiones', label: 'Por Dimensiones' },
        { value: 'volumen', label: 'Por Volumen' }
    ];

    const opcionesUnidadMedida = [
        { value: 'cm', label: 'Centímetros' },
        { value: 'in', label: 'Pulgadas' }
    ];

    const opcionesUnidadVolumen = [
        { value: 'cbm', label: 'Metros Cúbicos (CBM)' },
        { value: 'cuft', label: 'Pies Cúbicos (CUFT)' }
    ];

    const opcionesOrigen = [
        { value: 'china', label: 'China' },
        { value: 'estados_unidos', label: 'Estados Unidos' },
        { value: 'panama', label: 'Panamá' }
    ];

    const opcionesTipoEnvio = [
        { value: 'aereo', label: 'Aéreo' },
        { value: 'maritimo', label: 'Marítimo' }
    ];

    // Deshabilitar cálculos si no es Panamá marítimo
    const puedeCalcular = origen === 'panama' && tipoEnvio === 'maritimo' ? 
        (estadoSeleccionado && rubroSeleccionado) : true;

    return (
        <div className="calculator">
            <h2>Calculadora de Cubicaje</h2>
            
            <div className="input-group">
                <label>Tipo de Calculadora</label>
                <Select
                    options={opcionesTipoCalculadora}
                    value={opcionesTipoCalculadora.find(opt => opt.value === tipoCalculadora)}
                    onChange={(option) => {
                        setTipoCalculadora(option.value);
                        setResultado(null);
                    }}
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            {tipoCalculadora === 'dimensiones' ? (
                <>
                    <div className="input-group">
                        <label>Unidad de Medida</label>
                        <Select
                            options={opcionesUnidadMedida}
                            value={opcionesUnidadMedida.find(opt => opt.value === unidadMedida)}
                            onChange={(option) => setUnidadMedida(option.value)}
                            className="react-select-container"
                            classNamePrefix="react-select"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="cantidadPaquetes">Cantidad de Paquetes</label>
                        <input 
                            type="number" 
                            id="cantidadPaquetes" 
                            value={cantidadPaquetes} 
                            onChange={(e) => setCantidadPaquetes(e.target.value)} 
                            min="1" // Asegurarse de que sea al menos 1
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="largo">Largo ({unidadMedida})</label>
                        <input type="number" id="largo" placeholder={`Ej: ${unidadMedida === 'cm' ? '100' : '39'}`} onChange={(e) => setLargo(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ancho">Ancho ({unidadMedida})</label>
                        <input type="number" id="ancho" placeholder={`Ej: ${unidadMedida === 'cm' ? '50' : '20'}`} onChange={(e) => setAncho(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="alto">Alto ({unidadMedida})</label>
                        <input type="number" id="alto" placeholder={`Ej: ${unidadMedida === 'cm' ? '30' : '12'}`} onChange={(e) => setAlto(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="peso">Peso (kg)</label>
                        <input type="number" id="peso" placeholder="Ej: 10" onChange={(e) => setPeso(e.target.value)} />
                    </div>
                </>
            ) : (
                <>
                    <div className="input-group">
                        <label>Unidad de Volumen</label>
                        <Select
                            options={opcionesUnidadVolumen}
                            value={opcionesUnidadVolumen.find(opt => opt.value === unidadVolumen)}
                            onChange={(option) => setUnidadVolumen(option.value)}
                            className="react-select-container"
                            classNamePrefix="react-select"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="volumenDirecto">Volumen ({unidadVolumen === 'cbm' ? 'm³' : 'ft³'})</label>
                        <input 
                            type="number" 
                            id="volumenDirecto"
                            placeholder={`Ej: ${unidadVolumen === 'cbm' ? '10' : '353'}`}
                            onChange={(e) => setVolumenDirecto(e.target.value)}
                        />
                    </div>
                </>
            )}

            <div className="input-group">
                <label>Origen</label>
                <Select
                    options={opcionesOrigen}
                    value={opcionesOrigen.find(opt => opt.value === origen)}
                    onChange={(option) => handleOrigenChange(option)}
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>
            <div className="input-group">
                <label>Tipo de Envío</label>
                <Select
                    options={opcionesTipoEnvio}
                    value={opcionesTipoEnvio.find(opt => opt.value === tipoEnvio)}
                    onChange={(option) => setTipoEnvio(option.value)}
                    isOptionDisabled={(option) => origen === 'china' && option.value === 'aereo'}
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            <div className="input-group">
                <label>Rubro</label>
                <Select
                    options={opcionesRubros}
                    value={rubroSeleccionado}
                    onChange={setRubroSeleccionado}
                    placeholder="Seleccione un rubro"
                    isSearchable
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isRequired={origen === 'panama' && tipoEnvio === 'maritimo'}
                />
            </div>

            <div className="input-group">
                <label>Estado de Destino</label>
                <Select
                    options={opcionesEstados}
                    value={estadoSeleccionado}
                    onChange={setEstadoSeleccionado}
                    placeholder="Seleccione un estado"
                    isSearchable
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            <button 
                className='calcular' 
                onClick={tipoCalculadora === 'dimensiones' ? calcular : calcularPorVolumen}
                disabled={!puedeCalcular}
            >
                Calcular
            </button>
            {resultado && (
                <div className="resultado-container">
                    <div className="resultado-content">
                        <p>{resultado.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</p>
                        <p className="disclaimer">
                            * Los precios son aproximados y están sujetos a la verificación de medidas en almacén. 
                            El costo final puede variar según la exactitud de las dimensiones proporcionadas.
                        </p>
                    </div>
                    <a 
                        href={`https://wa.me/+584142909883?text=${generarMensajeWhatsApp()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                        <span>Consultar</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default CubicajeCalculator; 