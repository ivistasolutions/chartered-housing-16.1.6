import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import OurIdealPartners from "./OurIdealPartners";
import WeBringToTheTable from "./WeBringToTheTable";
import SendUsYourQuery from "./SendUsYourQuery";

const index = () => {
  return (
    <div>
      <Banner
        backgroundImage="/partner-with-us/banner.png"
        mobileBackgroundImage="/partner-with-us/mobile-banner.png"
        logo="/logo.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="PARTNER WITH US"
        title="Let’s Build"
        subtitle="Something Enduring Together"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Partner With Us" />
      <SendUsYourQuery />
      <OurIdealPartners />
      <WeBringToTheTable />
    </div>
  );
};

export default index;
