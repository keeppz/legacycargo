import Layout from "../components/layout/Layout"
import NewsDetailsSection from "../components/sections/NewsDetailsSection"
export default function NewsDetails() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News Details">
				<NewsDetailsSection />
			</Layout>
		</>
	)
}
