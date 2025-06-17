import React from "react"
import ServiceTemplate from "./ServiceTemplate"

export default function ServiceAlmacenamiento() {
    const title = "Almacenamiento";
    
    const description = `
        <p>
            En Legacy Cargo ofrecemos servicios de almacenamiento seguro para su mercancía en nuestras instalaciones ubicadas estratégicamente en Estados Unidos, Panamá y Venezuela. Nuestros almacenes cuentan con sistemas de seguridad avanzados y control de inventario en tiempo real.
        </p>
        <p className="mt-4 mb-4">
            Nuestros servicios de almacenamiento son ideales para empresas que necesitan consolidar mercancía antes de su envío internacional o que requieren un espacio temporal mientras se completan trámites aduaneros.
        </p>
    `;
    
    const benefits = [
        "Instalaciones seguras con vigilancia 24/7",
        "Control de inventario en tiempo real",
        "Consolidación de mercancía",
        "Preparación de pedidos y embalaje",
        "Flexibilidad en períodos de almacenamiento"
    ];
    
    const serviceProcess = [
        {
            title: "Recepción",
            description: "Recibimos su mercancía en nuestros almacenes, verificando cantidades y condiciones de los productos."
        },
        {
            title: "Gestión",
            description: "Realizamos el control de inventario con sistemas digitalizados para monitorear su mercancía en todo momento."
        },
        {
            title: "Despacho",
            description: "Preparamos su carga para envío cuando lo requiera, incluyendo embalaje adecuado según el tipo de transporte."
        }
    ];
    
    return (
        <ServiceTemplate
            title={title}
            description={description}
            imageUrl="/assets/img/service/service-details-almacenamiento.jpg"
            benefits={benefits}
            serviceProcess={serviceProcess}
        />
    );
} 