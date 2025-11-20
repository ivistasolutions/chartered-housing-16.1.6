import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import ProjectDetails from "./ProjectDetails";
import BusinessForm from "./BusinessForm";

const Commercial = () => {
  return (
    <div>
      <Banner
        backgroundImage="/commercial/banner.webp"
        mobileBackgroundImage="/commercial/mobile-banner.webp"
        sectionTitle="Commercial Projects"
        title="The Crossroads of"
        subtitle="Access and Opportunity"
        alt="Chartered Housing | Chartered Centre | Commercial Office Space, Gajendra Nagar, Neelasandra,  near Adugodi on Hosur Road, Bengaluru"
      />
      <BreadCrumbs title="Commercial Projects" />
      <Content />
      <ProjectDetails />
      <BusinessForm />
    </div>
  );
};

export default Commercial;
