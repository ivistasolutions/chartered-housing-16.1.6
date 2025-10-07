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
        sectionTitle="COMPLETED PROJECTS"
        title="Remembered for generations."
        subtitle="Every project we complete is a testament to a promise fulfilled."
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
