import React, { useState } from 'react';
import '../styles/components/calculator.scss'; // Asegúrate de que la ruta sea correcta

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

    const calcular = () => {
        let volumen;
        let tarifa = 0;
        let subtotal = 0;
        let calculoValido = false;

        // Convertir las dimensiones a metros cúbicos y pies cúbicos
        const volumenCBM = (largo * ancho * alto) / 1000000; // en m³
        const volumenFT = (largo * ancho * alto) / 1728; // Convertir a pies cúbicos
        const pesoVolumetricoCalc = (largo * ancho * alto) / 5000; // en kg

        // Asignar el peso volumétrico al estado
        setPesoVolumetrico(pesoVolumetricoCalc);

        if (tipoEnvio === 'maritimo') {
            if (origen === 'estados_unidos') {
                volumen = volumenFT; // Usar volumen en pies cúbicos
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
                volumen = volumenCBM; // Usar volumen en metros cúbicos
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
                volumen = volumenFT; // Usar volumen en pies cúbicos
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
            // Verificar si el subtotal es menor que el costo mínimo
            if (subtotal < CostoMinimo) {
                setResultado(`Costo: $${CostoMinimo.toFixed(2)}, Volumen: ${volumen.toFixed(2)} ${tipoEnvio === 'maritimo' ? 'm³' : 'ft³'}`);
            } else {
                setResultado(`Costo: $${subtotal.toFixed(2)}, Volumen: ${volumen.toFixed(2)} ${tipoEnvio === 'maritimo' ? 'm³' : 'ft³'}`);
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

    console.log(`Largo: ${largo}, Ancho: ${ancho}, Alto: ${alto}, Peso: ${peso}`);

    return (
        <div className="calculator">
            <h2>Calculadora de Cubicaje</h2>
            <div className="input-group">
                <label htmlFor="largo">Largo (cm)</label>
                <input type="number" id="largo" placeholder="Ej: 100" onChange={(e) => setLargo(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="ancho">Ancho (cm)</label>
                <input type="number" id="ancho" placeholder="Ej: 50" onChange={(e) => setAncho(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="alto">Alto (cm)</label>
                <input type="number" id="alto" placeholder="Ej: 30" onChange={(e) => setAlto(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="peso">Peso (kg)</label>
                <input type="number" id="peso" placeholder="Ej: 10" onChange={(e) => setPeso(e.target.value)} />
            </div>
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
            <button onClick={calcular}>Calcular</button>
            {resultado && (
                <p>
                    {resultado.replace('Costo:', 'Costo: ')}
                    <br />
                    {/* {pesoVolumetrico && `Peso Volumétrico: ${pesoVolumetrico.toFixed(2)} kg`} */}
                </p>
            )}
        </div>
    );
};

export default CubicajeCalculator; 