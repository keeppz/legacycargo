'use client'

import React from 'react'
import Layout from "@/components/layout/Layout"
import Hero2 from "@/components/sections/Hero2"
import About2 from "@/components/sections/About2"
import Service1 from "@/components/sections/Service1"
import Project2 from "@/components/sections/Project2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
import Brand2 from "@/components/sections/Brand2"
import CtaBanner from "@/components/sections/CtaBanner"
import PageTracker from "@/components/analytics/PageTracker" 

export default function Page() {
  return (
    <>
      <PageTracker pageName="home" />
      <Layout headerStyle={2} footerStyle={1}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Hero2 />
            
            <About2 />
            <Service1 />
            <Project2 />
            {/* <Team2 />
            <Testimonial2 /> */}
            {/* <Brand2 /> */}
            <CtaBanner />
          </div>
        </div>
      </Layout>
    </>
  )
} 