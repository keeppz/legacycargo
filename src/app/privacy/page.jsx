'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import PoliticasPrivacidad from "../../components/sections/PoliticasPrivacidad"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Políticas de Privacidad">
				<PoliticasPrivacidad />
			</Layout>
		</>
	)
} 