import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import ProjectOverview from "./ProjectOverview";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsMobile from "./ProjectDetailsMobile";
import Carousel from "./Carousel";
import Amenities from "./Amenities";
import ImportantSpecification from "./ImportantSpecification";
import Form1956 from "./Form1956";
const Chartered1956 = () => {
  return (
    <div>
      <Banner
        backgroundImage="/chartered-1956/banner.webp"
        mobileBackgroundImage="/chartered-1956/mobile-banner.webp"
        logo="/chartered-1956/1956-logo-white.svg"
        logoWidth={500}
        alt="Chartered Housing | Chartered 1956 | Premium 4bhk boutique residences on Palace Road, Bengaluru"
        // sectionTitle="CHARTERED 1956"
        showDivide={false}
        logoClassName="mb-3 w-32 h-auto lg:w-52 lg:h-auto"
        title="A timeless residence where"
        subtitle="royal heritage meets refined "
        subtitle2="modern living"
        textPosition="bottom-left"
        overlayOpacity={0.2}
        reraNumber="PRM/KA/RERA/1251/446/PR/060924/007005"
      />
      <BreadCrumbs title="Chartered 1956" />
      <Content />
      {/* <ProjectOverview /> */}
      <ProjectDetails />
      <ProjectDetailsMobile />
      <Carousel />
      <Amenities />
      <ImportantSpecification />
      <Form1956 />
    </div>
  );
};

export default Chartered1956;
