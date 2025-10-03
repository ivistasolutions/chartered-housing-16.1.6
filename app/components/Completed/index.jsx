import Completed from "./Completed";
import OurLocations from "./OurLocations";
import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";

const index = () => {
  return (
    <>
      <Banner
        backgroundImage="/completed-project/banner.png"
        mobileBackgroundImage="/completed-project/mobile-banner.png"
        logo="/logo.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="COMPLETED PROJECTS"
        title="Completed Projects"
        subtitle="Our Completed Projects"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Completed Projects" />
      <Content />
      <Completed />
      <OurLocations />
    </>
  );
};

export default index;
