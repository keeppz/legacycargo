import React from "react"
import ServiceTemplate from "./ServiceTemplate"

export default function ServiceAduanal() {
    const title = "Servicios Aduanales";
    
    const description = `
        <p>
            En Legacy Cargo ofrecemos servicios aduanales completos con profesionales especializados en normativas de importación. Gestionamos eficientemente todos los trámites necesarios para nacionalizar su mercancía en Venezuela.
        </p>
        <p className="mt-4 mb-4">
            Nuestro equipo cuenta con amplia experiencia en procedimientos aduaneros, clasificación arancelaria, cálculo de impuestos y preparación de documentación, asegurando un proceso de importación fluido y sin contratiempos.
        </p>
    `;
    
    const benefits = [
        "Asesoría personalizada en procedimientos aduaneros",
        "Gestión completa de documentación de importación",
        "Clasificación arancelaria precisa",
        "Cálculo correcto de impuestos y aranceles",
        "Minimización de demoras y costos adicionales"
    ];
    
    const serviceProcess = [
        {
            title: "Análisis",
            description: "Evaluamos su mercancía para determinar los requisitos específicos de importación y documentación necesaria."
        },
        {
            title: "Gestión",
            description: "Preparamos y presentamos la documentación ante las autoridades aduaneras para iniciar el proceso de nacionalización."
        },
        {
            title: "Liberación",
            description: "Completamos los trámites para la liberación de su mercancía y coordinamos su entrega o almacenamiento."
        }
    ];
    
    return (
        <ServiceTemplate
            title={title}
            description={description}
            imageUrl="/assets/img/service/service-details-aduanal.jpg"
            benefits={benefits}
            serviceProcess={serviceProcess}
        />
    );
} 