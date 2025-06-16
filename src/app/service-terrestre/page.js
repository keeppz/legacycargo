import Layout from "../../components/layout/Layout"
import ServiceTerrestre from "../../components/services/ServiceTerrestre"
import ClientBrand1 from "../../components/ClientBrand1"

export default function ServicioTerrestre() {
	return (
		<>
			<Layout
				headerStyle={2}
				footerStyle={1}
				breadcrumbTitle="Transporte Terrestre"
			>
				<ServiceTerrestre />
				<ClientBrand1 />
			</Layout>
		</>
	)
} 