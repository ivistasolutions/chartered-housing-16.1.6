import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import Grid from "./Grid";

const UpcomingProjects = () => {
  return (
    <>
      <Banner
        backgroundImage="/upcoming-projects/banner.webp"
        mobileBackgroundImage="/upcoming-projects/mobile-banner.webp"
        sectionTitle="UPCOMING PROJECTS"
        title="Shaping the Future,"
        subtitle="One Landmark at a Time"
        textPosition="bottom-left"
        overlayOpacity={0.2}
        alt="Chartered Housing | Chartered Hummingbird | Apartments on Kanakapura Road, Bengaluru"
      />
      <BreadCrumbs title="Upcoming Projects" />
      <Content />
      <Grid />
    </>
  );
};

export default UpcomingProjects;
