'use client'
import React from 'react'
import VisionaryLeadership from '../components/VisionaryLeadership'
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Visionary Leadership | Leading Builders in Bangalore  ",
    description: "Meet the visionary leadership behind Chartered Housing. Trusted builders in Bangalore who deliver premium homes, luxury apartments, and exclusive villa projects.",
    path: "/visionary-leadership",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <VisionaryLeadership />
    </>
  )
};
export default page
