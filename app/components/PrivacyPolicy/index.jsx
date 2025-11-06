import React from "react";
import Content from "./Content";
import BreadCrumbs from "../Shared/BreadCrumbs";

const index = () => {
  return (
    <div>
      {/* <Banner
        backgroundImage="/careers/banner.webp"
        mobileBackgroundImage="/careers/mobile-banner.webp"
        sectionTitle="PRIVACY POLICY"
        // title="Looking for your next home or a meaningful collaboration?"
        subtitle="Our commitment to your data and greater peace of mind."
        textPosition="bottom-left"
        overlayOpacity={0.2}
      /> */}
      <div className="lg:pt-52 pt-32">
      <BreadCrumbs title="Privacy Policy" />
      </div>
      <Content />
    </div>
  );
};

export default index;
