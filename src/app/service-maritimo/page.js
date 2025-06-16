import Layout from "../../components/layout/Layout"
import ServiceMaritimo from "../../components/services/ServiceMaritimo"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioMaritimo() {
	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Transporte Marítimo"
			>
				<ServiceMaritimo />
				<ClientBrand1 />
			</Layout>
		</>
	)
} 