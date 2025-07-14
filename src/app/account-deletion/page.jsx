'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import AccountDeletion from "../../components/sections/AccountDeletion"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Eliminación de Cuenta">
				<AccountDeletion />
			</Layout>
		</>
	)
} 