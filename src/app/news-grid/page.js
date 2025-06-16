'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import NewsGrid from "../../components/sections/NewsGrid"

export default function Page() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Noticias">
                <NewsGrid />
            </Layout>
        </>
    )
} 