import React from "react";
import Banner from "../Shared/Banner";
import Content from "./Content";
import ProjectsSection from "./ProjectsSection";
import StatsSection from "./StatsSection";
import SuccessStories from "./SuccessStories";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <Banner
          backgroundImage={null}
          mobileBackgroundImage={null}
          title={false}
          subtitle={false}
          textPosition="bottom-left"
          overlayOpacity={0.2}
          showDivide={false}
          useVideo={true}
          backgroundVideo={"/videos/Chattered-Banner.webm"}
          mobileBackgroundVideo={"/videos/Chattered-Banner-Mobile.webm"}
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
