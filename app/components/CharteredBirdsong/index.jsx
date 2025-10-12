import React from "react"
import Banner from "../Shared/Banner"
import BreadCrumbs from "../Shared/BreadCrumbs"
import Content from "./Content"
import ProjectOverview from "./ProjectOverview"
import ProjectDetails from "./ProjectDetails"
import LocationAdvantage from "./LocationAdvantage"
import ProjectDetailsMobile from "./ProjectDetailsMobile"
import Carousel from "./Carousel"
import Amenities from "./Amenities"
const CharteredBirdsong = () => {
  return (
    <div>
      <Banner
        backgroundImage="/chartered-birdsong/banner.png"
        mobileBackgroundImage="/chartered-birdsong/mobile-banner.png"
        sectionTitle="Chartered Birdsong"
        title="Space to dream. Freedom to build."
        subtitle=" Discover plotted living crafted for future-forward families."
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Chartered Birdsong" />
      <Content />
      {/* <ProjectOverview /> */}
      <ProjectDetails />
      <ProjectDetailsMobile />
      <Carousel />
      <Amenities />
      <LocationAdvantage />
    </div>
  )
}

export default CharteredBirdsong
