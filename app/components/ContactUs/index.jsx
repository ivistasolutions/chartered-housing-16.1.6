import React from "react";
import Banner from "../Shared/Banner";
import Content from "./Content";
import BreadCrumbs from "../Shared/BreadCrumbs";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <Banner
        backgroundImage="/contact-us/banner.png"
        mobileBackgroundImage="/contact-us/mobile-banner.png"
        sectionTitle="CONTACT US"
        title="Looking for your next home or a meaningful collaboration?"
        subtitle="Let us know how we can assist you today."
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
      <BreadCrumbs title="Contact Us" />
      <Content />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
