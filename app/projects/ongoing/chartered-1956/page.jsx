import React from 'react'
import Chartered1956 from '../../../components/Chartered1956'
import NextSeo from '@/app/components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Chartered 1956 | 4 BHK Luxury Apartments in Palace Road",
    description: "Experience ultra-luxury living at Chartered 1956, Palace Road. Spacious 4 BHK apartments with premium amenities, crafted for comfort, style, and elegance in Bangalore.",
    path: "/projects/ongoing/chartered-1956",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <Chartered1956 />
    </div>
  )
}

export default page
