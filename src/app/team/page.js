'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import Team1 from "../../components/sections/Team1"

export default function Page() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team">
				<Team1 />
			</Layout>
		</>
	)
} 