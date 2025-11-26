'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import Breadcrumb from "../../components/layout/Breadcrumb"
import ShippingCalculator from "../../components/sections/ShippingCalculator"
import PageTracker from "../../components/analytics/PageTracker"

export default function CalculatorPage() {
    return (
        <>
            <PageTracker pageName="calculator" />
        <Layout headerStyle={2} footerStyle={1}>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb breadcrumbTitle="Calculadora de Envíos" />
                    <ShippingCalculator />
                </div>
            </div>
        </Layout>
        </>
    )
} 