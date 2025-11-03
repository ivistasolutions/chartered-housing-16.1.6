'use client'
import React from "react";
import WhyChartered from "../components/WhyChartered";
import NextSeo from "../components/Shared/Seo";
const page = () => {
  const seoField = {
    title: "Why Choose Chartered | Best Builders in Bangalore",
    description: "Choose Chartered Housing for trust, transparency, and quality. One of Bangalore’s top builders for boutique apartments, premium villas, and plotted developments.",
    path: "/why-chartered",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <WhyChartered />
    </div>
  );
};  

export default page;
