'use client'
import React from 'react'
import ContactUs from '../components/ContactUs'
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Contact Chartered | Best Builders in Bangalore",
    description: "Get in touch with Chartered, a leading real estate developer in Bangalore. As a top real estate firm in Bengaluru, we’re here to help you find your dream home.",
    path: "/contact-us",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <ContactUs />
    </div>
  )
}

export default page
