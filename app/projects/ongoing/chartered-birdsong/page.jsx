'use client'
import React from 'react'
import CharteredBirdsong from '../../../components/CharteredBirdsong'
import NextSeo from '@/app/components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Chartered Birdsong | Premium Residential Plots in Yelahanka",
    description: "Explore gated community plots for construction near Airport Road, Bangalore. Premium residential plots, plotted development projects, and investment-ready land.",
    path: "/projects/ongoing/chartered-birdsong",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <CharteredBirdsong />
    </div>
  )
}

export default page
