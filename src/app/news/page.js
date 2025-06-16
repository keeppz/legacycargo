'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import News1 from "../../components/sections/News1"

export default function Page() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={1} breadcrumbTitle="News">
				<News1 />
			</Layout>
		</>
	)
} 