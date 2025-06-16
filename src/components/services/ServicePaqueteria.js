import React from "react"
import ServiceTemplate from "./ServiceTemplate"

export default function ServicePaqueteria() {
    const title = "Paquetería Internacional";
    
    const description = `
        <p>
            En Legacy Cargo ofrecemos servicios de paquetería internacional para el envío de documentos, paquetes pequeños y compras online desde Estados Unidos y Panamá hacia Venezuela. Nuestro servicio courier garantiza entregas rápidas y seguras.
        </p>
        <p className="mt-4 mb-4">
            Contamos con direcciones físicas en Miami y Panamá donde puede recibir sus compras online, y nosotros nos encargamos de consolidarlas y enviarlas a Venezuela con total seguridad y en el menor tiempo posible.
        </p>
    `;
    
    const benefits = [
        "Dirección física en Miami y Panamá para sus compras",
        "Consolidación de paquetes para ahorrar en costos de envío",
        "Seguimiento en tiempo real de sus envíos",
        "Tiempos de entrega optimizados",
        "Servicio puerta a puerta en Venezuela"
    ];
    
    const serviceProcess = [
        {
            title: "Recepción",
            description: "Recibimos sus paquetes en nuestras oficinas en Miami o Panamá y notificamos su llegada."
        },
        {
            title: "Procesamiento",
            description: "Consolidamos sus paquetes y preparamos la documentación necesaria para el envío internacional."
        },
        {
            title: "Entrega",
            description: "Realizamos el envío a Venezuela y entregamos su paquete en la dirección que nos indique."
        }
    ];
    
    return (
        <ServiceTemplate
            title={title}
            description={description}
            imageUrl="/assets/img/service/service-details-paqueteria.jpg"
            benefits={benefits}
            serviceProcess={serviceProcess}
        />
    );
} 