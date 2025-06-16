import Layout from "../../components/layout/Layout"
import Brand1 from "../../components/sections/Brand1"
import ContactInfo from "../../components/sections/contact/ContactInfo"
import ContactInfo2 from "../../components/sections/contact/ContactInfo2"
import ContactSection from "../../components/sections/contact/ContactSection"

export default function Contact() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contáctanos">
				<ContactInfo />
				{/* <ContactSection /> */}
				<ContactInfo2 />
				<Brand1 />
			</Layout>
		</>
	)
}
