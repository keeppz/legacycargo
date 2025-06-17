import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

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