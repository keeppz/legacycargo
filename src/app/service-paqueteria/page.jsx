import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioPaqueteria() {
	const serviceData = {
		title: "Paquetería Internacional",
		description: "Ofrecemos servicios de paquetería internacional rápidos y confiables para sus envíos urgentes. Nuestra red global de socios nos permite ofrecer servicios de calidad con tiempos de entrega optimizados.",
		imageUrl: "/assets/img/service/paqueteria.jpg",
		benefits: [
			"Entrega rápida y confiable",
			"Cobertura global",
			"Monitoreo en tiempo real",
			"Manejo especializado de paquetes",
			"Seguros incluidos",
			"Documentación simplificada"
		],
		serviceProcess: "Nuestro proceso incluye la recolección de su paquete, documentación, embarque, seguimiento en tiempo real y entrega final en destino."
	}

	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Paquetería Internacional"
			>
				<ServiceTemplate {...serviceData} />
				{/* <ClientBrand1 /> */}
			</Layout>
		</>
	)
} 