import React from "react"

const ContactInfo = () => {
  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
        <h4 className="text-[#ED1C25] lg:text-4xl text-xl lg:px-0 px-5">
          Reach Us: <a href="tel:+918031021400">+91 8031021400</a> |{" "}
          <br className="lg:hidden block" /> Email:{" "}
          <a href="mailto:sales@charteredhousing.com">
            sales@charteredhousing.com
          </a>
        </h4>
        <hr className="border-[#ED1C25] w-4/6" />
      </div>
    </div>
  )
}

export default ContactInfo
