import React from "react";
import AboutUs from "../components/AboutUs";
import NextSeo from "../components/Shared/Seo";
const page = () => {
  const seoField = {
    title: "Trusted Real Estate Developers in Bangalore | Chartered",
    description: "Discover Chartered Housing’s legacy as one of Bangalore’s best builders, known for quality, transparency, and boutique apartments, villas, and plotted projects.",
    path: "/about-us",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <AboutUs />
    </div>
  );
};

export default page;
