import Layout from "../../components/layout/Layout"
import ServiceAduanal from "../../components/services/ServiceAduanal"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioAduanal() {
	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Servicios Aduanales"
			>
				<ServiceAduanal />
				<ClientBrand1 />
			</Layout>
		</>
	)
} 