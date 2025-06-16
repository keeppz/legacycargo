import React from "react"
import ServiceTemplate from "./ServiceTemplate"

export default function ServiceAereo() {
    const title = "Transporte Aéreo";
    
    const description = `
        <p>
            En Legacy Cargo ofrecemos soluciones de transporte aéreo internacional con los mejores tiempos de tránsito del mercado. Nuestro servicio cubre rutas desde Estados Unidos y Panamá hacia Venezuela, garantizando la entrega segura y rápida de su mercancía.
        </p>
        <p className="mt-4 mb-4">
            Nuestro servicio de carga aérea está diseñado para satisfacer las necesidades de aquellos clientes que requieren envíos urgentes o que manejan mercancía de alto valor. Contamos con acuerdos estratégicos con las principales aerolíneas para ofrecer tarifas competitivas y espacio garantizado.
        </p>
    `;
    
    const benefits = [
        "Tiempos de tránsito reducidos",
        "Mayor seguridad para mercancía de alto valor",
        "Posibilidad de envíos urgentes y prioritarios",
        "Seguimiento en tiempo real de la carga",
        "Manipulación especializada y cuidadosa"
    ];
    
    const serviceProcess = [
        {
            title: "Recepción",
            description: "Recibimos su mercancía en nuestros almacenes en Miami o Panamá para su consolidación y preparación."
        },
        {
            title: "Transporte",
            description: "Coordinamos el embarque aéreo con las principales aerolíneas hacia Venezuela con salidas frecuentes."
        },
        {
            title: "Entrega",
            description: "Gestionamos los trámites aduanales y realizamos la entrega en destino final a través de nuestra red de distribución."
        }
    ];
    
    return (
        <ServiceTemplate 
            title={title}
            description={description}
            imageUrl="/assets/img/service/01.jpg"
            benefits={benefits}
            serviceProcess={serviceProcess}
        />
    )
} 