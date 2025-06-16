import Layout from "../../components/layout/Layout"
import ServiceAereo from "../../components/services/ServiceAereo"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioAereo() {
	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Transporte Aéreo"
			>
				<ServiceAereo />
				<ClientBrand1 />
			</Layout>
		</>
	)
} 