import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import ProjectOverview from "./ProjectOverview";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsMobile from "./ProjectDetailsMobile";
const CharteredBirdsong = () => {
  return (
    <div>
      <Banner
        backgroundImage="/chartered-birdsong/banner.png"
        mobileBackgroundImage="/chartered-birdsong/mobile-banner.png"
        sectionTitle="CHARTERED 1956"
        title="A timeless residence where"
        subtitle="royal heritage meets refined modern living"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Chartered Birdsong" />
      <Content />
      {/* <ProjectOverview /> */}
      <ProjectDetails />
      <ProjectDetailsMobile />
    </div>
  );
};

export default CharteredBirdsong;
