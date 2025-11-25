'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TrackingSearchBar({ className = '', variant = 'hero' }) {
    const [trackingCode, setTrackingCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const formatTrackingCode = (value) => {
        // Eliminar todo excepto letras y números
        let cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
        
        // Si está vacío, retornar vacío
        if (!cleaned) return '';
        
        // Asegurar que empiece con LC
        if (!cleaned.startsWith('LC')) {
            // Si empieza con L, agregar C
            if (cleaned.startsWith('L')) {
                cleaned = 'LC' + cleaned.substring(1);
            } 
            // Si empieza con C, agregar L al inicio
            else if (cleaned.startsWith('C')) {
                cleaned = 'L' + cleaned;
            }
            // Si no empieza con L o C, agregar LC al inicio
            else {
                cleaned = 'LC' + cleaned;
            }
        }
        
        // Separar LC de los números
        const prefix = 'LC';
        const numbers = cleaned.substring(2).replace(/[^0-9]/g, ''); // Solo números después de LC
        
        // Limitar a 5 dígitos
        const limitedNumbers = numbers.substring(0, 6);
        
        // Si hay números, agregar el guion
        if (limitedNumbers) {
            return `${prefix}-${limitedNumbers}`;
        }
        
        return prefix;
    };

    const handleInputChange = (e) => {
        const formatted = formatTrackingCode(e.target.value);
        setTrackingCode(formatted);
    };

    const handleTrackingSubmit = (e) => {
        e.preventDefault();
        
        if (!trackingCode.trim() || trackingCode.length < 9) {
            return;
        }

        setIsLoading(true);
        
        // Redirigir a la página de tracking con el código como parámetro
        router.push(`/tracking?code=${encodeURIComponent(trackingCode.trim().toUpperCase())}`);
    };

    return (
        <div className={`tracking-search-bar ${variant} ${className}`}>
            <div className="container">
                <div className="tracking-search-wrapper">
                    <div className="search-content">
                        <h3>¿Ya tienes tu código de tracking?</h3>
                        <p>Rastrea tu envío de forma rápida y fácil</p>
                    </div>
                    <form onSubmit={handleTrackingSubmit} className="tracking-search-form">
                        <div className="search-input-group">
                            <input
                                type="text"
                                value={trackingCode}
                                onChange={handleInputChange}
                                placeholder="Ingresa tu código de tracking"
                                className="tracking-input"
                                disabled={isLoading}
                                maxLength={9}
                            />
                            <button 
                                type="submit" 
                                className="tracking-search-btn"
                                disabled={isLoading || trackingCode.length < 9}
                            >
                                {isLoading ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin" />
                                        Buscando...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-search" />
                                        Rastrear
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
