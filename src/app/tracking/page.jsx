'use client'

import React from 'react'
import Layout from "@/components/layout/Layout"
import TrackingTabs from "@/components/sections/TrackingTabs"
import PageTracker from "@/components/analytics/PageTracker"

export default function TrackingPage() {
    return (
        <>
            <PageTracker pageName="tracking" />
            <Layout headerStyle={2} footerStyle={1}>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <TrackingTabs />
                    </div>
                </div>
            </Layout>
        </>
    )
}
