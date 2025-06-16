import Layout from "../../components/layout/Layout"
import ServiceAlmacenamiento from "../../components/services/ServiceAlmacenamiento"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioAlmacenamiento() {
	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Almacenamiento"
			>
				<ServiceAlmacenamiento />
				<ClientBrand1 />
			</Layout>
		</>
	)
} 