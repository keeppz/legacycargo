'use client'

import Layout from '../../components/layout/Layout'
import Pricing from '../../components/sections/Pricing'

export default function Page() {
  return (

    <Layout headerStyle={2} footerStyle={1}>
        <div id="smooth-wrapper">
          <div id="smooth-content" >
           <Pricing />
          </div>
        </div>
      </Layout>
    
  )
  
} 