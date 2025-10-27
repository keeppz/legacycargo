'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TrackingSearchBar({ className = '', variant = 'hero' }) {
    const [trackingCode, setTrackingCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleTrackingSubmit = (e) => {
        e.preventDefault();
        
        if (!trackingCode.trim()) {
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
                                onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                                placeholder="Ingresa tu código de tracking"
                                className="tracking-input"
                                disabled={isLoading}
                            />
                            <button 
                                type="submit" 
                                className="tracking-search-btn"
                                disabled={isLoading || !trackingCode.trim()}
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
