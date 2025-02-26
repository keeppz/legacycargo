import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/_calculator.scss';

const CostoMinimo = 50; // Define el costo mínimo

const CubicajeCalculator = () => {
    const [largo, setLargo] = useState(0);
    const [ancho, setAncho] = useState(0);
    const [alto, setAlto] = useState(0);
    const [peso, setPeso] = useState(0);
    const [tipoEnvio, setTipoEnvio] = useState('aereo');
    const [origen, setOrigen] = useState('china');
    const [destino, setDestino] = useState('gran_caracas');
    const [resultado, setResultado] = useState(null);
    const [pesoVolumetrico, setPesoVolumetrico] = useState(0);
    const [unidadMedida, setUnidadMedida] = useState('cm'); // Nueva variable de estado
    const [tipoCalculadora, setTipoCalculadora] = useState('dimensiones'); // 'dimensiones' o 'volumen'
    const [volumenDirecto, setVolumenDirecto] = useState(0);
    const [unidadVolumen, setUnidadVolumen] = useState('cbm'); // 'cbm' o 'cuft'

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
        let volumen;
        let tarifa = 0;
        let subtotal = 0;
        let calculoValido = false;

        const volumenM3 = convertirAMetrosCubicos(largo, ancho, alto);
        const volumenFT = convertirAPiesCubicos(largo, ancho, alto);
        const pesoVolumetricoCalc = calcularPesoVolumetrico(largo, ancho, alto);

        setPesoVolumetrico(pesoVolumetricoCalc);

        if (tipoEnvio === 'maritimo') {
            if (origen === 'estados_unidos') {
                volumen = volumenFT;
                if (destino === 'gran_caracas') {
                    tarifa = 30.0;
                } else if (destino === 'interior_pais') {
                    tarifa = 35.0;
                } else {
                    return setResultado('No disponible: Destino no contemplado en Marítimo + Estados Unidos');
                }
                subtotal = volumen * tarifa;
                calculoValido = true;
            } else if (origen === 'china') {
                volumen = volumenM3; // Mantener en CBM para China
                if (destino === 'gran_caracas') {
                    tarifa = 840.0;
                } else if (destino === 'interior_pais') {
                    tarifa = 920.0;
                } else {
                    return setResultado('No disponible: Destino no contemplado en Marítimo + China');
                }
                subtotal = volumen * tarifa;
                calculoValido = true;
            } else if (origen === 'panama') {
                volumen = volumenFT;
                if (destino === 'gran_caracas') {
                    tarifa = 18.0;
                } else if (destino === 'interior_pais') {
                    tarifa = 23.0;
                } else {
                    return setResultado('No disponible: Destino no contemplado en Marítimo + Panamá');
                }
                subtotal = volumen * tarifa;
                calculoValido = true;
            }
        } else if (tipoEnvio === 'aereo') {
            const pesoEnLibras = peso * 2.20462; // Convertir kg a lb
            if (origen === 'panama') {
                tarifa = (destino === 'gran_caracas') ? 6 : 8; // Precio 1 y Precio 2 por lb/ft³
            } else if (origen === 'estados_unidos') {
                tarifa = (destino === 'gran_caracas') ? 6 : 8; // Precio 1 y Precio 2 por lb/ft³
                // Calcular costo final basado en el volumen en pies cúbicos
                const volumenFT = (largo * ancho * alto) / 1728; // Convertir a pies cúbicos
                subtotal = volumenFT * tarifa; // Costo por CUFT
                setResultado(`Costo: $${subtotal.toFixed(2)}, Peso Volumétrico: ${pesoVolumetrico.toFixed(2)} kg`);
                return; // Salir de la función después de calcular el costo para envíos aéreos
            }
        }

        if (calculoValido) {
            if (subtotal < CostoMinimo) {
                setResultado(`Costo: $${CostoMinimo.toFixed(2)}, Volumen: ${volumen.toFixed(2)} ${origen === 'china' ? 'm³' : 'ft³'}`);
            } else {
                setResultado(`Costo: $${subtotal.toFixed(2)}, Volumen: ${volumen.toFixed(2)} ${origen === 'china' ? 'm³' : 'ft³'}`);
            }
        } else {
            setResultado('Error: No se pudo calcular el costo.');
        }
    };

    const handleOrigenChange = (e) => {
        setOrigen(e.target.value);
        setResultado(null); // Reiniciar el resultado
        setPesoVolumetrico(0); // Reiniciar el peso volumétrico

        // Deshabilitar opción de aéreo si el origen es China
        if (e.target.value === 'china') {
            setTipoEnvio('maritimo'); // Cambiar a maritimo si se selecciona China
        }
    };

    const calcularPorVolumen = () => {
        let subtotal = 0;
        let volumenConvertido = Number(volumenDirecto);
        let tarifaAplicada = 0;

        // Manejar las conversiones según el origen
        if (origen === 'china') {
            if (unidadVolumen === 'cuft') {
                volumenConvertido = volumenConvertido * 0.0283168;
            }
        } else {
            if (unidadVolumen === 'cbm') {
                volumenConvertido = volumenConvertido * 35.3147;
            }
        }

        if (tipoEnvio === 'maritimo') {
            if (origen === 'estados_unidos') {
                if (destino === 'gran_caracas') {
                    tarifaAplicada = 30.0;
                } else if (destino === 'interior_pais') {
                    tarifaAplicada = 35.0;
                }
                subtotal = volumenConvertido * tarifaAplicada;
            } else if (origen === 'china') {
                if (destino === 'gran_caracas') {
                    tarifaAplicada = 840.0;
                } else if (destino === 'interior_pais') {
                    tarifaAplicada = 920.0;
                }
                subtotal = volumenConvertido * tarifaAplicada;
            } else if (origen === 'panama') {
                if (destino === 'gran_caracas') {
                    tarifaAplicada = 18.0;
                } else if (destino === 'interior_pais') {
                    tarifaAplicada = 23.0;
                }
                subtotal = volumenConvertido * tarifaAplicada;
            }
        }

        if (subtotal > 0) {
            const volumenFormateado = isNaN(volumenConvertido) ? '0.00' : volumenConvertido.toFixed(2);
            const unidadMedidaTexto = origen === 'china' ? 'm³' : 'ft³';
            if (subtotal < CostoMinimo) {
                setResultado(
                    `Costo: $${CostoMinimo.toFixed(2)}\n` +
                    `Volumen: ${volumenFormateado} ${unidadMedidaTexto}\n` +
                    `Tarifa: $${tarifaAplicada.toFixed(2)}/${unidadMedidaTexto}`
                );
            } else {
                setResultado(
                    `Costo: $${subtotal.toFixed(2)}\n` +
                    `Volumen: ${volumenFormateado} ${unidadMedidaTexto}\n` +
                    `Tarifa: $${tarifaAplicada.toFixed(2)}/${unidadMedidaTexto}`
                );
            }
        } else {
            setResultado('Error: No se pudo calcular el costo.');
        }
    };

    const generarMensajeWhatsApp = () => {
        const mensajeBase = `¡Hola! Me interesa cotizar un envío con las siguientes características:`;
        
        // Agregar detalles según el tipo de calculadora
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
        detallesEnvio += `\nDestino: ${destino === 'gran_caracas' ? 'Gran Caracas' : 'Interior'}`;
        detallesEnvio += `\nTipo de envío: ${tipoEnvio === 'maritimo' ? 'Marítimo' : 'Aéreo'}`;
        detallesEnvio += `\n${resultado.replace('Costo:', 'Costo estimado:')}`;
        
        const mensajeFinal = `${mensajeBase}${detallesEnvio}`;
        return encodeURIComponent(mensajeFinal);
    };

    console.log(`Largo: ${largo}, Ancho: ${ancho}, Alto: ${alto}, Peso: ${peso}`);

    return (
        <div className="calculator">
            <h2>Calculadora de Envios</h2>
            <div className="input-group">
                <label>Tipo de Calculadora</label>
                <select 
                    value={tipoCalculadora} 
                    onChange={(e) => {
                        setTipoCalculadora(e.target.value);
                        setResultado(null);
                    }}
                >
                    <option value="dimensiones">Por Dimensiones</option>
                    <option value="volumen">Por Volumen</option>
                </select>
            </div>

            {tipoCalculadora === 'dimensiones' ? (
                <>
                    <div className="input-group">
                        <label htmlFor="unidadMedida">Unidad de Medida</label>
                        <select 
                            id="unidadMedida" 
                            value={unidadMedida} 
                            onChange={(e) => setUnidadMedida(e.target.value)}
                        >
                            <option value="cm">Centímetros</option>
                            <option value="in">Pulgadas</option>
                        </select>
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
                        <label htmlFor="unidadVolumen">Unidad de Volumen</label>
                        <select 
                            id="unidadVolumen" 
                            value={unidadVolumen} 
                            onChange={(e) => setUnidadVolumen(e.target.value)}
                        >
                            <option value="cbm">Metros Cúbicos (CBM)</option>
                            <option value="cuft">Pies Cúbicos (CUFT)</option>
                        </select>
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
                <label htmlFor="origen">Origen</label>
                <select id="origen" onChange={handleOrigenChange}>
                    <option value="" disabled selected>--Seleccione--</option>
                    <option value="china">China</option>
                    <option value="estados_unidos">Estados Unidos</option>
                    <option value="panama">Panamá</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="tipoEnvio">Tipo de Envío</label>
                <select id="tipoEnvio" onChange={(e) => setTipoEnvio(e.target.value)}>
                    <option value="" disabled selected>--Seleccione--</option>
                    <option value="aereo" disabled={origen === 'china'}>Aéreo</option>
                    <option value="maritimo">Marítimo</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="destino">Destino</label>
                <select id="destino" onChange={(e) => setDestino(e.target.value)}>
                    <option value="" disabled selected>--Seleccione--</option>
                    <option value="gran_caracas">Gran Caracas</option>
                    <option value="interior_pais">Interior del País</option>
                </select>
            </div>
            <button className='calcular' onClick={tipoCalculadora === 'dimensiones' ? calcular : calcularPorVolumen}>
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