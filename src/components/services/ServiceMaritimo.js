import React from "react"
import ServiceTemplate from "./ServiceTemplate"

export default function ServiceMaritimo() {
    const title = "Transporte Marítimo";
    
    const description = `
        <p>
            En Legacy Cargo ofrecemos soluciones eficientes de transporte marítimo internacional para el envío de todo tipo de mercancías. Nuestro servicio cubre rutas desde Estados Unidos, Panamá y China hacia Venezuela, adaptándose a las necesidades específicas de cada cliente.
        </p>
        <p className="mt-4 mb-4">
            Nuestro servicio de carga marítima es ideal para envíos de gran volumen o peso donde el factor tiempo no es crítico. Ofrecemos opciones de contenedores completos (FCL) y carga consolidada (LCL) para maximizar la eficiencia y reducir costos.
        </p>
    `;
    
    const benefits = [
        "Ideal para cargas de gran volumen y peso",
        "Costos más económicos para mercancía no urgente",
        "Consolidación de carga de diferentes proveedores",
        "Diversidad de rutas marítimas disponibles",
        "Menor impacto ambiental comparado con otros medios"
    ];
    
    const serviceProcess = [
        {
            title: "Planificación",
            description: "Diseñamos la mejor estrategia logística para su carga marítima según volumen, tipo de mercancía y urgencia."
        },
        {
            title: "Consolidación",
            description: "Recibimos y consolidamos su carga en nuestros almacenes en origen, optimizando espacio y costos."
        },
        {
            title: "Distribución",
            description: "Gestionamos la nacionalización de la mercancía y coordinamos la entrega en su destino final en Venezuela."
        }
    ];
    
    return (
        <ServiceTemplate 
            title={title}
            description={description}
            imageUrl="/assets/img/service/02.jpg"
            benefits={benefits}
            serviceProcess={serviceProcess}
        />
    )
} 