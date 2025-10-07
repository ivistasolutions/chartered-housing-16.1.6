import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs'
import Content from './Content'
import BusinessEthics from './BusinessEthics'
import PaperAds from './PaperAds'
import IndustryInfluence from './IndustryInfluence/IndustryInfluence'
import Achievements from './Achievements'
import CharteredCarousel from './CharteredCarousel'
const index = () => {
  return (
    <div>
      <Banner
        backgroundImage="/why-chartered/banner.png"
        mobileBackgroundImage="/why-chartered/mobile-banner.png"
        sectionTitle="WHY CHARTERED"
        title="Since 1989,"
        subtitle="Quality Through Transparency"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Why Chartered" />
      <Content />
      <BusinessEthics />
      <PaperAds />
      <IndustryInfluence />
      <Achievements />
      <CharteredCarousel />
    </div>
  )
}

export default index
