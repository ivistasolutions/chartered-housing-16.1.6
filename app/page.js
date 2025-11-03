'use client'
import React from "react";
import Home from "./components/Home";
import NextSeo from "./components/Shared/Seo";

const page = () => {
  const seoField = {
    title: "Leading Builders & Developers in Bangalore | Chartered",
    description:
      "Chartered Housing, one of Bangalore’s most trusted real estate developers, offers luxury apartments, boutique residences, villas, and premium plotted projects.",
    path: "",
  }

  return (
    <>    
    <NextSeo {...seoField} />
      <Home />
    </>
  );
};

export default page;
