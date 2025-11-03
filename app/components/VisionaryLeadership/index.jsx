import React from 'react'
import Banner from '../Shared/Banner'
import BreadCrumbs from '../Shared/BreadCrumbs';
import WeWorkTogether from './WeWorkTogether';
import Teams from './Team/Teams';
const VisionaryLeadership = () => {
  return (
    <div>
      <Banner
        backgroundImage="/visionary-leadership/banner.png"
        mobileBackgroundImage="/visionary-leadership/mobile-banner.png"
        // logo="/logo.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="VISIONARY LEADERSHIP"
        title="Where Values Lead "
        subtitle="And Vision Builds"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Visionary Leadership" />
      <WeWorkTogether />
      <Teams />
    </div>
  )
};

export default VisionaryLeadership
