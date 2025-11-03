import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs'
import Content from './Content'
import AboutChartered from './AboutChartered'
import AboutCharteredCarousel from './AboutCharteredCarousel'
import FavoriteProjects from './FavoriteProjects'
import VisionForm from './VisionForm'
const index = () => {
  return (
    <>
      <Banner
        backgroundImage="/chartered-interiors/banner.png"
        mobileBackgroundImage="/chartered-interiors/mobile-banner.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="CHARTERED INTERIORS"
        title=""
        subtitle="Designs That Live With You"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Chartered Interiors" /> 
      <Content />
      <AboutChartered />
      <AboutCharteredCarousel />
      <FavoriteProjects />
      <VisionForm />
    </>
  )
}

export default index
