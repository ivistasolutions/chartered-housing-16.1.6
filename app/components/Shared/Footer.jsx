import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      {/* Contact Information Section */}
      <div className='container mx-auto lg:px-0 px-5 py-8'>
        <div className='flex lg:flex-row flex-col lg:items-center gap-4 lg:text-4xl text-xl font-medium'>
          <span  className='border-b lg:border-b-0 lg:pb-0 pb-5'>Reach Us: <a href="tel:08031021400" className='text-white'>080-31021400</a></span>
          <div className='w-px h-6 bg-white lg:block hidden'></div>
          <span>Email: <a href="mailto:sales@charteredhousing.com" className='text-white'>sales@charteredhousing.com</a></span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='container mx-auto lg:px-0 px-5 lg:py-12 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl'>
          {/* Our Projects Column */}
          <div>
            <h3 className='text-lg font-semibold uppercase border-b border-white pb-2 mb-4'>
              Our Projects
            </h3>
            <ul className='space-y-2'>
              <li><a href="/projects/ongoing" className='hover:text-gray-300 transition-colors'>Ongoing Projects</a></li>
              <li><a href="/projects/upcoming" className='hover:text-gray-300 transition-colors'>Upcoming Projects</a></li>
              <li><a href="/projects/completed" className='hover:text-gray-300 transition-colors'>Completed Projects</a></li>
              <li><a href="/projects/commercial" className='hover:text-gray-300 transition-colors'>Commercial Projects</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className='text-lg font-semibold uppercase border-b border-white pb-2 mb-4'>
              Company
            </h3>
            <ul className='space-y-2'>
              <li><a href="/about-us" className='hover:text-gray-300 transition-colors'>About Us</a></li>
              <li><a href="/visionary-leadership" className='hover:text-gray-300 transition-colors'>Visionary Leadership</a></li>
              <li><a href="/why-chartered" className='hover:text-gray-300 transition-colors'>Why Chartered</a></li>
              <li><a href="/chartered-interiors" className='hover:text-gray-300 transition-colors'>Chartered Interiors</a></li>
              <li><a href="/careers" className='hover:text-gray-300 transition-colors'>Careers</a></li>
              <li><a href="/csr-activities" className='hover:text-gray-300 transition-colors'>CSR Activities</a></li>
            </ul>
          </div>

          {/* Corporate Address Column */}
          <div>
            <h3 className='text-lg font-semibold uppercase border-b border-white pb-2 mb-4'>
              Corporate Address
            </h3>
            <div className='mb-4'>
              <span>Chartered Housing (P) Ltd.,</span> <br />
              <span>27, Victoria Road, Bangalore - 560047</span>
            </div>
            
            {/* Social Media Icons */}
            <div className='flex gap-4'>
              <a target='_blank' href="https://www.instagram.com/charteredhousing?igsh=ZzJkamVuaDZjazE0" className='w-10 h-10 bg-[#646464] rounded-full p-2 flex items-center justify-center hover:bg-gray-700 transition-colors'>
                {/* Instagram Icon */}
                <FaInstagram size={25}/>
              </a>
              <a target='_blank' href="https://www.facebook.com/CharteredHousing/" className='w-10 h-10 bg-[#646464] rounded-full p-2 flex items-center justify-center hover:bg-gray-700 transition-colors'>
                {/* LinkedIn Icon */}
                <FaFacebookF size={25}/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Red Background */}
      <div className='bg-[#ED1C25]'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-4'>
            <div className='text-sm'>
              © 2025 Chartered Housing. All rights reserved.
            </div>
            <div className='flex items-center gap-4 text-sm'>
              <a href="#" className='hover:text-gray-200 transition-colors'>Terms of Use</a>
              <div className='w-px h-4 bg-white'></div>
              <a href="#" className='hover:text-gray-200 transition-colors'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
