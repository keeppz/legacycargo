import Layout from "../../components/layout/Layout"
import ServiceTemplate from "../../components/services/ServiceTemplate"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioAlmacenamiento() {
	const serviceData = {
		title: "Almacenamiento",
		description: "Ofrecemos soluciones de almacenamiento seguras y eficientes para su mercancía.\n\nNuestras instalaciones cuentan con la más alta tecnología y medidas de seguridad para garantizar el resguardo óptimo de sus productos.",
		imageUrl: "/assets/img/service/almacenamiento.jpg",
		benefits: [
			"Instalaciones modernas y seguras",
			"Control de inventario en tiempo real",
			"Manejo especializado de productos",
			"Seguridad 24/7",
			"Sistemas de control de temperatura",
			"Servicios de cross-docking"
		],
		serviceProcess: "Nuestro proceso incluye la recepción de su mercancía, inspección, almacenamiento, control de inventario y preparación para envío según sus necesidades."
	}

	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Almacenamiento"
			>
				<ServiceTemplate {...serviceData} />
				{/* <ClientBrand1 /> */}
			</Layout>
		</>
	)
} 