'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import Project1 from "../../components/sections/Project1"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Projects">
				<Project1 />
			</Layout>
		</>
	)
} 