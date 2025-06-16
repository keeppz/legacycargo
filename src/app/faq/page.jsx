'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import Faq from "../../components/sections/Faq"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="FAQ">
				<Faq />
			</Layout>
		</>
	)
} 