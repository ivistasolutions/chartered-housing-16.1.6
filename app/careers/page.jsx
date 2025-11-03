'use client'
import React from 'react'
import Careers from '@/app/components/Careers'  
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Careers at Chartered | Reputed Builders in Bangalore",
    description: "Build your career with one of Bangalore’s top real estate developers. Chartered offers luxury flats & premium residential plots in prime city locations.",
    path: "/careers",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <Careers />
    </div>
  )
}

export default page
