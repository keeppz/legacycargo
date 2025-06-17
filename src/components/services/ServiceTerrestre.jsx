import React from "react"
import ServiceTemplate from "./ServiceTemplate"

export default function ServiceTerrestre() {
    const title = "Transporte Terrestre";
    
    const description = `
        <p>
            En Legacy Cargo ofrecemos servicios de transporte terrestre nacional con cobertura en toda Venezuela. Nuestra red de distribución garantiza entregas puerta a puerta de forma segura y confiable para su mercancía.
        </p>
        <p className="mt-4 mb-4">
            Nuestro servicio de transporte terrestre está diseñado para la distribución eficiente de su carga una vez nacionalizada, permitiendo completar el ciclo logístico y llegar al destino final en cualquier punto de Venezuela.
        </p>
    `;
    
    const benefits = [
        "Cobertura nacional en toda Venezuela",
        "Entregas puerta a puerta",
        "Seguimiento en tiempo real",
        "Tiempos de tránsito optimizados",
        "Seguridad en el manejo de su mercancía"
    ];
    
    const serviceProcess = [
        {
            title: "Coordinación",
            description: "Organizamos la recolección de su mercancía en nuestros almacenes o en el punto de entrega de la aduana."
        },
        {
            title: "Transporte",
            description: "Realizamos el traslado de su carga por las principales vías terrestres del país con unidades monitoreadas."
        },
        {
            title: "Entrega",
            description: "Completamos el servicio con la entrega de su mercancía en el destino final con verificación de recepción."
        }
    ];
    
    return (
        <ServiceTemplate
            title={title}
            description={description}
            imageUrl="/assets/img/service/service-details-terrestre.jpg"
            benefits={benefits}
            serviceProcess={serviceProcess}
        />
    );
} 