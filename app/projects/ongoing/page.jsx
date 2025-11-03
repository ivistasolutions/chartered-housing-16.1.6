import React from 'react'
import OngoingProjects from '@/app/components/OngoingProjects'
import NextSeo from '@/app/components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Chartered Ongoing Projects | Plots & Apartments Bengaluru",
    description: "Discover Chartered’s ongoing projects in Bengaluru, premium plots for sale and boutique luxury apartments. Designed for comfort, style, and prime locations.",
    path: "/projects/ongoing",
  }
    return (
    <div>
      <NextSeo {...seoField} />
      <OngoingProjects/>
    </div>
  )
}

export default page
