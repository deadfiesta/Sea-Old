import React from 'react'
import Header from './Header'
import SectionGeneralMaintenance from './SectionGeneralMaintenance'
import SectionPlans from './SectionPlans'
import SectionServices from './SectionServices'
import SectionReasons from './SectionReasons'
import SectionNoFuss from './SectionNoFuss'
import Footer from './Footer'

const PricingPage = () => {
  return (
    <>
      <Header />
      <SectionPlans />
      <SectionGeneralMaintenance />
      <SectionServices />
      <SectionReasons />
      <SectionNoFuss />
      <Footer />
    </>
  )
}

export default PricingPage
