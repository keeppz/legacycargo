import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioAduanal() {
	const serviceData = {
		title: "Servicios Aduanales",
		description: "Ofrecemos servicios aduanales integrales para facilitar el comercio internacional de su empresa. Nuestro equipo de expertos en comercio exterior garantiza un proceso eficiente y cumplimiento normativo.",
		imageUrl: "/assets/img/service/aduanal.jpg",
		benefits: [
			"Asesoría especializada en comercio exterior",
			"Gestión de documentación aduanera",
			"Clasificación arancelaria",
			"Cumplimiento normativo",
			"Optimización de costos aduaneros",
			"Seguimiento en tiempo real"
		],
		serviceProcess: "Nuestro proceso incluye la evaluación inicial de su operación, asesoría en documentación, gestión de trámites aduaneros y seguimiento hasta la liberación de su mercancía."
	}

	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Servicios Aduanales"
			>
				<ServiceTemplate {...serviceData} />
				{/* <ClientBrand1 /> */}
			</Layout>
		</>
	)
} 