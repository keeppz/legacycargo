import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

export const metadata = {
  title: 'Transporte Marítimo a Venezuela | Legacy Cargo - Logística Internacional',
  description: 'Servicio de transporte marítimo hacia Venezuela desde China, Panamá y Estados Unidos. Carga marítima, seguimiento en tiempo real, gestión aduanera completa. Cotización gratuita.',
  keywords: 'transporte maritimo venezuela, carga maritima venezuela, logistica maritima, importaciones maritimas venezuela, puertos venezuela, envíos maritimos',
  openGraph: {
    title: 'Transporte Marítimo a Venezuela | Legacy Cargo',
    description: 'Servicio de transporte marítimo hacia Venezuela desde China, Panamá y Estados Unidos. Carga marítima con seguimiento en tiempo real.',
    url: 'https://legacycargove.com/service-maritimo',
    images: [
      {
        url: '/assets/img/service/maritimo.jpg',
        width: 1200,
        height: 630,
        alt: 'Transporte Marítimo a Venezuela - Legacy Cargo',
      },
    ],
  },
  alternates: {
    canonical: '/service-maritimo',
  },
}

export default function ServicioMaritimo() {
	const serviceData = {
		title: "Transporte Marítimo",
		description: "Ofrecemos soluciones de transporte marítimo eficientes y rentables para sus envíos internacionales. Nuestra red global de socios navieros nos permite ofrecer servicios de calidad con tiempos de entrega optimizados.",
		imageUrl: "/assets/img/service/maritimo.jpg",
		benefits: [
			"Cobertura global",
			"Frecuencias regulares",
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
				breadcrumbTitle="Transporte Marítimo"
			>
				<ServiceTemplate {...serviceData} />
				{/* <ClientBrand1 /> */}
			</Layout>
		</>
	)
} 