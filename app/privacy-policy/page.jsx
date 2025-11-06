import React from 'react'
import NextSeo from '../components/Shared/Seo'
import PrivacyPolicy from '../components/PrivacyPolicy/index'
const page = () => {
  const seoField = {
    title: "Privacy Policy | Chartered Housing",
    description: "Chartered Housing ensures your personal information is safe and handled responsibly. Read our privacy policy to understand your data protection rights.",
    path: "/privacy-policy",
  }
  return (
    <div>
      <NextSeo {...seoField} />
      <PrivacyPolicy /> 
    </div>
  )
}

export default page
