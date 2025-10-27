import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"
import { Metadata } from 'next'

export const metadata = {
  title: 'Transporte Aéreo a Venezuela | Legacy Cargo - Logística Internacional',
  description: 'Servicio de transporte aéreo hacia Venezuela desde China, Panamá y Estados Unidos. Envíos urgentes, seguimiento en tiempo real, gestión aduanera completa. Cotización gratuita.',
  keywords: 'transporte aereo venezuela, carga aerea venezuela, logistica aerea, importaciones aereas venezuela, aeropuertos venezuela, envíos aereos urgentes',
  openGraph: {
    title: 'Transporte Aéreo a Venezuela | Legacy Cargo',
    description: 'Servicio de transporte aéreo hacia Venezuela desde China, Panamá y Estados Unidos. Envíos urgentes con seguimiento en tiempo real.',
    url: 'https://legacycargove.com/service-aereo',
    images: [
      {
        url: '/assets/img/transporte-aereo-venezuela.jpg',
        width: 1200,
        height: 630,
        alt: 'Transporte Aéreo a Venezuela - Legacy Cargo',
      },
    ],
  },
  alternates: {
    canonical: '/service-aereo',
  },
}

export default function ServicioAereo() {
	const serviceData = {
		title: "Transporte Aéreo",
		description: "Ofrecemos soluciones de transporte aéreo rápidas y confiables para sus envíos urgentes. Nuestra red global de socios aéreos nos permite ofrecer servicios de calidad con tiempos de entrega optimizados.",
		imageUrl: "/assets/img/service/aereo.jpg",
		benefits: [
			"Entrega rápida y confiable",
			"Cobertura global",
			"Monitoreo en tiempo real",
			"Manejo especializado de carga",
			"Seguros de carga incluidos",
			"Documentación simplificada"
		],
		serviceProcess: "Nuestro proceso incluye la recolección de su carga, documentación, embarque, seguimiento en tiempo real y entrega final en destino."
	}

	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Transporte Aéreo"
			>
				<ServiceTemplate {...serviceData} />
				{/* <ClientBrand1 /> */}
			</Layout>
		</>
	)
} 