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
import FormBirdSong from "./FormBirdSong"
const CharteredBirdsong = () => {
  return (
    <div>
      <Banner
        backgroundImage="/chartered-birdsong/banner.webp"
        mobileBackgroundImage="/chartered-birdsong/mobile-banner.webp"
        // sectionTitle="Chartered Birdsong"
        showDivide={false}
        alt="Chartered Birdsong | Premium Residential Plots at Sadenahalli on Yelahanka–Doddaballapur Highway, Bengaluru"
        logo="/chartered-birdsong/logo.svg"
        logoClassName="mb-3 w-60 h-auto lg:w-96 lg:h-auto"
        title="Space to dream. Freedom to build."
        subtitle=" Discover plotted living crafted "
        subtitle2="for future-forward families."
        textPosition="bottom-left"
        overlayOpacity={0.2}
        reraNumber="PRM/KA/RERA/1251/472/PR/210325/007605"

      />
      <BreadCrumbs title="Chartered Birdsong" />
      <Content />
      {/* <ProjectOverview /> */}
      <ProjectDetails />
      <ProjectDetailsMobile />
      <Carousel />
      <Amenities />
      <LocationAdvantage />
      <FormBirdSong />
    </div>
  )
}

export default CharteredBirdsong
