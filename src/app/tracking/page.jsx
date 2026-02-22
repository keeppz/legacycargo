'use client'

import React from 'react'
import Layout from "@/components/layout/Layout"
import TrackingSection from "@/components/sections/TrackingSection"
import PageTracker from "@/components/analytics/PageTracker"

export default function TrackingPage() {
    return (
        <>
            <PageTracker pageName="tracking" />
            <Layout headerStyle={2} footerStyle={1}>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <TrackingSection />
                    </div>
                </div>
            </Layout>
        </>
    )
}
