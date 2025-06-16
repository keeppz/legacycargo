'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import Hero2 from "../../components/sections/Hero2"
import About2 from "../../components/sections/About2"
import Service2 from "../../components/sections/Service2" 
import Project2 from "../../components/sections/Project2"
import Team2 from "../../components/sections/Team2"
import Testimonial2 from "../../components/sections/Testimonial2"

import Brand2 from "../../components/sections/Brand2"

export default function Page() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Hero2 />
            <About2 />
            <Service2 />
            <Project2 />
            <Team2 />
            <Testimonial2 />
            <Brand2 />
          </div>
        </div>
      </Layout>
    </>
  )
} 