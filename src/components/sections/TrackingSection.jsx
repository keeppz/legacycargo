'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { trackButtonClick } from '@/lib/analytics';

export default function TrackingSection() {
    const searchParams = useSearchParams();
    const [trackingCode, setTrackingCode] = useState('');
    const [shipment, setShipment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchShipment = async (code) => {
        if (!code || !code.trim()) {
            setError('Por favor ingrese un código de tracking');
            return;
        }

        setLoading(true);
        setError('');
        setShipment(null);

        try {
            // Buscar en la colección shipments usando el docId
            const shipmentRef = doc(db, 'shipments', code.trim());
            const shipmentDoc = await getDoc(shipmentRef);

            if (shipmentDoc.exists()) {
                const shipmentData = shipmentDoc.data();
                setShipment({
                    id: shipmentDoc.id,
                    ...shipmentData
                });
                
                // Trackear búsqueda exitosa
                trackButtonClick('tracking_search_success', 'tracking_page');
            } else {
                setError('No se encontró ningún envío con ese código de tracking');
                trackButtonClick('tracking_search_not_found', 'tracking_page');
            }
        } catch (error) {
            console.error('Error al buscar envío:', error);
            setError('Error al consultar el envío. Por favor intente nuevamente.');
            trackButtonClick('tracking_search_error', 'tracking_page');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        await searchShipment(trackingCode);
    };

    // Efecto para buscar automáticamente cuando viene código por URL
    useEffect(() => {
        const codeFromUrl = searchParams.get('code');
        if (codeFromUrl) {
            const decodedCode = decodeURIComponent(codeFromUrl).toUpperCase();
            setTrackingCode(decodedCode);
            searchShipment(decodedCode);
        }
    }, [searchParams]);

    const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A';
        
        try {
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
               
            });
        } catch (error) {
            return 'N/A';
        }
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'en transito':
            case 'en tránsito':
                return 'text-warning';
            case 'entregado':
            case 'delivered':
                return 'text-success';
            case 'pendiente':
            case 'pending':
                return 'text-info';
            case 'cancelado':
            case 'cancelled':
                return 'text-danger';
            default:
                return 'text-secondary';
        }
    };

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case 'en transito':
            case 'en tránsito':
                return 'fa-truck';
            case 'entregado':
            case 'delivered':
                return 'fa-check-circle';
            case 'pendiente':
            case 'pending':
                return 'fa-clock';
            case 'cancelado':
            case 'cancelled':
                return 'fa-times-circle';
            default:
                return 'fa-info-circle';
        }
    };

    const getCountryFlag = (country) => {
        if (!country) return null;
        
        const countryLower = country.toLowerCase();
        
        if (countryLower.includes('china') || countryLower.includes('chino')) {
            return '🇨🇳';
        } else if (countryLower.includes('panama') || countryLower.includes('panamá')) {
            return '🇵🇦';
        } else if (countryLower.includes('usa') || countryLower.includes('estados unidos') || countryLower.includes('united states')) {
            return '🇺🇸';
        }
        
        return null;
    };

    const getCountryName = (country) => {
        if (!country) return 'N/A';
        
        const countryLower = country.toLowerCase();
        
        if (countryLower.includes('china') || countryLower.includes('chino')) {
            return 'China';
        } else if (countryLower.includes('panama') || countryLower.includes('panamá')) {
            return 'Panamá';
        } else if (countryLower.includes('usa') || countryLower.includes('estados unidos') || countryLower.includes('united states')) {
            return 'Estados Unidos';
        }
        
        return country;
    };

    return (
        <section className="tracking-section section-padding">
            <div className="container">
                <div className="tracking-wrapper">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp">
                            <i className="fa-classic fa-arrow-left-long" />
                            CONSULTA DE TRACKING
                            <i className="fa-classic fa-arrow-right-long" />
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                            Rastrea tu Envío
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".4s">
                            Ingresa el código de tracking de tu envío para conocer su estado actual
                        </p>
                    </div>

                    <div className="tracking-form">
                        <form onSubmit={handleSearch}>
                            <div className="form-row full-width">
                                <div className="form-group">
                                    <label>Código de Tracking</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={trackingCode}
                                        onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                                        placeholder="Ingresa tu código de tracking"
                                        required
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            <div className="tracking-actions">
                                <button 
                                    type="submit" 
                                    className="theme-btn"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <i className="fa fa-spinner fa-spin" />
                                            Consultando...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-classic fa-search" />
                                            Consultar Envío
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {error && (
                        <div className="tracking-error">
                            <div className="alert alert-danger">
                                <i className="fa fa-exclamation-triangle" />
                                {error}
                            </div>
                        </div>
                    )}

                    {shipment && (
                        <div className="tracking-result">
                            <div className="result-box">
                                <div className="tracking-header">
                                    <h3>Información del Envío</h3>
                                    <div className="tracking-code">
                                        <span className="code-label">Código:</span>
                                        <span className="code-value">{shipment.id}</span>
                                    </div>
                                </div>

                                <div className="shipment-details">
                                    <div className="detail-row">
                                        <div className="detail-item">
                                            <h4>Estado</h4>
                                            <div className={`status-badge ${getStatusColor(shipment.status)}`}>
                                                <i className={`fa ${getStatusIcon(shipment.status)}`} />
                                                <span>{shipment.status || 'N/A'}</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="detail-row">
                                        <div className="detail-item">
                                            <h4>Origen</h4>
                                            <div className="country-info">
                                                {getCountryFlag(shipment.country) && (
                                                    <span className="country-flag">{getCountryFlag(shipment.country)}</span>
                                                )}
                                                <span className="country-name">{getCountryName(shipment.country)}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="detail-item">
                                            <h4>Destino</h4>
                                            <p>Venezuela</p>
                                        </div>
                                </div>

                                    <div className="detail-row">
                                        <div className="detail-item">
                                            <h4>Tipo de Envío</h4>
                                            <p>{shipment.type_of_shipment || 'N/A'}</p>
                                        </div>
                                        
                                        {/* Mostrar peso para envíos aéreos, volumen para los demás */}
                                        {shipment.type_of_shipment?.toLowerCase().includes('aer') ? (
                                            <div className="detail-item">
                                                <h4>Peso</h4>
                                                <p>{shipment.weight || 'N/A'}</p>
                                            </div>
                                        ) : (
                                            <div className="detail-item">
                                                <h4>Volumen</h4>
                                                <p>{shipment.total_size || 'N/A'}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* {shipment.description && (
                                        <div className="detail-row">
                                            <div className="detail-item full-width">
                                                <h4>Descripción</h4>
                                                <p>{shipment.description}</p>
                                            </div>
                                        </div>
                                    )} */}

                                    <div className="detail-row">
                                        {/* <div className="detail-item">
                                            <h4>Fecha de Creación</h4>
                                            <p>{formatDate(shipment.createdAt)}</p>
                                        </div> */}
                                        <div className="detail-item">
                                            <h4>Numero de Piezas</h4>
                                            <p>{(shipment.pieces)}</p>
                                        </div>

                                        
                                        <div className="detail-item">
                                            <h4>Última Actualización</h4>
                                            <p>{formatDate(shipment.last_update)}</p>
                                        </div>
                                    </div>

                                    {shipment.notes && (
                                        <div className="detail-row">
                                            <div className="detail-item full-width">
                                                <h4>Notas</h4>
                                                <p>{shipment.notes}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="tracking-footer">
                                    <p className="disclaimer">
                                        * La información mostrada es la más reciente disponible en nuestro sistema.
                                    </p>
                                    <p className="disclaimer">
                                        * Para consultas adicionales, contacta a nuestro equipo de atención al cliente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="tracking-help">
                        <div className="help-box">
                            <h4>¿Necesitas Ayuda?</h4>
                            <p>Si tienes problemas para rastrear tu envío o necesitas información adicional, no dudes en contactarnos.</p>
                            <div className="help-actions">
                                <a
                                    href={`https://wa.me/584126396424?text=Hola, necesito ayuda con el tracking de mi envío Código de Tracking: ${shipment.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn"
                                    onClick={() => trackButtonClick('whatsapp_help', 'tracking_page')}
                                >
                                    <i className="fab fa-whatsapp" />
                                    Contactar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
