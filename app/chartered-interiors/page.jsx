'use client'
import React from 'react'
import CharteredInteriors from '../components/CharteredInteriors'
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Chartered Interiors | Boutique & Luxury Apartments",
    description: "Discover boutique apartments in Bengaluru with stylish interiors. Explore luxury residences and premium apartments in Bangalore with advanced fire safety systems.",
    path: "/chartered-interiors",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <CharteredInteriors />
    </div>
  )
}

export default page
