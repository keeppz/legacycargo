'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import About2 from "../../components/sections/About2"
import Achivements from "../../components/sections/Achivements"
import Brand1 from "../../components/sections/Brand1"
import Team1 from "../../components/sections/Team1"
import Testimonial1 from "../../components/sections/Testimonial1"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Nosotros">
				<About2 />
				<Achivements />
				{/* <Testimonial1 /> */}
				{/* <Team1 /> */}
				 <Brand1 /> 
			</Layout>
		</>
	)
} 