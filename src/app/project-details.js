import Layout from "../components/layout/Layout"
import Brand1 from "../components/sections/Brand1"
import ProjectDetails from "../components/sections/ProjectDetails"
export default function ProjectDetailsPage() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
				<ProjectDetails />
				<Brand1 />
			</Layout>
		</>
	)
}
