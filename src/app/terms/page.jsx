'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import TerminosCondiciones from "../../components/sections/TerminosCondiciones"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Términos y Condiciones">
				<TerminosCondiciones />
			</Layout>
		</>
	)
} 