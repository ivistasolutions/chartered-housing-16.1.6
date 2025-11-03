'use client'
import React from 'react'
import UpcomingProjects from '@/app/components/UpcomingProjects'
import NextSeo from '@/app/components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Upcoming Projects | Chartered Housing Bangalore",
    description: "Explore boutique 2 & 3 BHK apartments, premium row villas, and residential plots in prime Bangalore locations. Luxury, comfort, and lasting value await.",
    path: "/projects/upcoming",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <UpcomingProjects/>
    </div>
  )
}

export default page
