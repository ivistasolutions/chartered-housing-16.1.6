import React from 'react'
import Disclaimer from '../components/Disclaimer'
import NextSeo from '../components/Shared/Seo'
const page = () => {
  const seoField = {
    title: "Disclaimer | Chartered Housing",
    description: "Read our website disclaimer: general information only, not an offer or guarantee. Chartered Housing assumes no liability for accuracy, completeness or future changes.",
    path: "/disclaimer",
  }
  return (
    <div>   
      <NextSeo {...seoField} />
      <Disclaimer />
    </div>
  )
}

export default page
