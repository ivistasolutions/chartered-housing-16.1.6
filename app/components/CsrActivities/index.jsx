import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs'
import Content from './Content'
import CommitmentInAction from './CommitmentInAction'

const CsrActivities = () => {
  return (
    <div>
      <Banner
        backgroundImage="/csr/banner.png"
        mobileBackgroundImage="/csr/mobile-banner.png"
        sectionTitle="Corporate Social Responsibility"
        // title=""
        subtitle="Building Better Lives"
      />
      <BreadCrumbs title="CSR Activities" />   
      <Content />
      <CommitmentInAction />
    </div>
  )
}

export default CsrActivities
