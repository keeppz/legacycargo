import Layout from "../../components/layout/Layout"
import ServicePaqueteria from "../../components/services/ServicePaqueteria"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioPaqueteria() {
	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Paquetería Internacional"
			>
				<ServicePaqueteria />
				<ClientBrand1 />
			</Layout>
		</>
	)
} 