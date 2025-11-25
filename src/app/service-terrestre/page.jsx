import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

export const metadata = {
  title: 'Transporte Terrestre a Venezuela | Legacy Cargo - Logística Internacional',
  description: 'Servicio de transporte terrestre hacia Venezuela desde Panamá y otros países. Carga terrestre, seguimiento GPS, gestión aduanera completa. Cotización gratuita.',
  keywords: 'transporte terrestre venezuela, carga terrestre venezuela, logistica terrestre, importaciones terrestres venezuela, carretera venezuela, envíos terrestres',
  openGraph: {
    title: 'Transporte Terrestre a Venezuela | Legacy Cargo',
    description: 'Servicio de transporte terrestre hacia Venezuela desde Panamá y otros países. Carga terrestre con seguimiento GPS.',
    url: 'https://legacycargove.com/service-terrestre',
    images: [
      {
        url: '/assets/img/service/terrestre.jpg',
        width: 1200,
        height: 630,
        alt: 'Transporte Terrestre a Venezuela - Legacy Cargo',
      },
    ],
  },
  alternates: {
    canonical: '/service-terrestre',
  },
}

export default function ServicioTerrestre() {
	const serviceData = {
		title: "Transporte Terrestre",
		description: "Ofrecemos soluciones de transporte terrestre eficientes y confiables para sus envíos nacionales e internacionales. Nuestra flota moderna y conductores profesionales garantizan un servicio de calidad.",
		imageUrl: "/assets/img/service/terrestre.jpg",
		benefits: [
			"Flota eficaz y segura",
			"Conductores profesionales",
			"Monitoreo en tiempo real",
			"Manejo especializado de carga",
			
		],
		serviceProcess: "Nuestro proceso incluye la recolección de su carga, documentación, transporte, seguimiento en tiempo real y entrega final en destino."
	}

	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Transporte Terrestre"
			>
				<ServiceTemplate {...serviceData} />
				{/* <ClientBrand1 /> */}
			</Layout>
		</>
	)
} 