'use client'

import React from 'react'
import Layout from "../../components/layout/Layout"
import DownloadAppSection from "../../components/DownloadAppSection"

const DownloadPage = () => {
  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Descarga Nuestra App">
      <DownloadAppSection />
    </Layout>
  );
};

export default DownloadPage; 