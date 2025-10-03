import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs'
import Content from './Content'
import AboutChartered from './AboutChartered'
import AboutCharteredCarousel from './AboutCharteredCarousel'
import FavouriteProjects from './GalleryImages'
const index = () => {
  return (
    <>
      <Banner
        backgroundImage="/chartered-interiors/banner.png"
        mobileBackgroundImage="/chartered-interiors/mobile-banner.png"
        logo="/logo.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="CHARTED INTERIORS"
        title=""
        subtitle="Designs That Live With You"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Chartered Interiors" /> 
      <Content />
      <AboutChartered />
      <AboutCharteredCarousel />
      <FavouriteProjects />
    </>
  )
}

export default index
