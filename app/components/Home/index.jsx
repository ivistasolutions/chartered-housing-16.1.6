import React from "react";
import Banner from "../Shared/Banner";
import Content from "./Content";
import ProjectsSection from "./ProjectsSection";
import StatsSection from "./StatsSection";
import SuccessStories from "./SuccessStories";

const index = () => {
  return (
    <>
      <div className="">
      <Banner
        backgroundImage="/banners/chartered-thumbnail-desktop.jpg"   // 👈 fallback image for desktop
        mobileBackgroundImage="/home/phone-banner.webp" // 👈 fallback image for mobile
        title={false}
        subtitle={false}
        // textPosition="bottom-left"
        overlayOpacity={0.2}
        showDivide={false}
        useVideo={true}
        backgroundVideo="/videos/Chattered-Banner.webm"
        backgroundVideoSafari="/videos/Chattered-Banner.mp4"
        mobileBackgroundVideo="/videos/mobile-video.webm"
        mobileBackgroundVideoSafari="/videos/phone-banner-02.mp4"
      />
      </div>
      <Content />
      <ProjectsSection />
      <StatsSection />
      <SuccessStories />
    </>
  );
};

export default index;
