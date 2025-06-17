import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioTerrestre() {
	const serviceData = {
		title: "Transporte Terrestre",
		description: "Ofrecemos soluciones de transporte terrestre eficientes y confiables para sus envíos nacionales e internacionales. Nuestra flota moderna y conductores profesionales garantizan un servicio de calidad.",
		imageUrl: "/assets/img/service/terrestre.jpg",
		benefits: [
			"Flota moderna y segura",
			"Conductores profesionales",
			"Monitoreo en tiempo real",
			"Manejo especializado de carga",
			"Seguros de carga incluidos",
			"Documentación simplificada"
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