"use client";

import React, { useEffect, useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close any open dropdown when menu closes
  };

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    {
      label: "OUR PROJECTS",
      submenu: [
        { name: "Ongoing Projects", href: "/projects/ongoing" },
        { name: "Upcoming Projects", href: "/projects/upcoming" },
        { name: "Completed Projects", href: "/projects/completed" },
        { name: "Commercial Projects", href: "/projects/commercial" },
      ],
    },
    {
      label: "COMPANY",
      submenu: [
        { name: "About Us", href: "/about-us" },
        { name: "Visionary Leadership", href: "/visionary-leadership" },
        { name: "Why Chartered", href: "/why-chartered" },
        { name: "Chartered Interiors", href: "/chartered-interiors" },
        { name: "Careers", href: "/careers" },
        { name: "CSR Activities", href: "/csr-activities" },
      ],
    },
    {
      label: "CONNECT",
      submenu: [
        { name: "Request a Callback", href: "/contact-us" },
        // { name: "WhatsApp", href: "/whatsapp-us" },
        { name: "Partner with Us", href: "/partner-with-us" },
      ],
    },
  ];

  const handleSubmenuClick = () => {
    // Close menu when submenu item is clicked
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run on mount
    handleScroll();

    // Listen for scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Logo - Global on all pages */}
      <div className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'top-2' : 'top-4'
      }`}>
        <Link href="/">
          <img
            src="/logo.svg"
            alt="CHARTERED"
            className={`cursor-pointer transition-all duration-500 ease-in-out ${
              isScrolled 
                ? 'lg:w-14 lg:h-auto w-12 h-auto' 
                : 'lg:w-20 lg:h-auto w-16 h-auto'
            }`}
          />
        </Link>
      </div>

      {/* White Header Bar */}
      <header className={`fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-500 ease-in-out ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className={`flex items-center justify-between px-6 lg:px-0 container mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
          {/* Enquire Now Button */}
          <div className="hidden lg:block">
            <Button alt="Enquire Now" href="/contact-us" className="cursor-pointer">Enquire Now</Button>
          </div>

          {/* Animated Hamburger Menu */}
          {/* Animated Hamburger Menu */}
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
              onClick={toggleMenu}
              className="relative h-16 w-12 rounded-full bg-transparent transition-colors ml-auto cursor-pointer"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-0.5 w-10 bg-black"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-0.5 w-10 bg-black"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-0.5 w-7 bg-black"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 6px)",
                }}
              />
            </motion.button>
          </MotionConfig>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-20 bg-gray-200 flex items-center justify-center"
          >
            <div className="text-center lg:space-y-10 space-y-5">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {/* Main Menu Item */}
                  <div
                    onClick={() => toggleDropdown(item.label)}
                    className="text-[#646464] lg:text-3xl text-xl roboto-serif-light tracking-wider flex items-center justify-center cursor-pointer hover:text-[#ED1C25] transition-all duration-300 hover:scale-105"
                  >
                    {item.label}
                    <motion.svg
                      className="w-10 h-10 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{
                        rotate: openDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </div>

                  {/* Dropdown Submenu */}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleSubmenuClick}
                              className="block text-[#646464] lg:text-2xl roboto-serif-light tracking-wider cursor-pointer transition-all duration-300 hover:text-[#ED1C25] hover:scale-105"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Enquire Now Button */}
              <div className="lg:hidden flex justify-center mt-10">
                <Button href="/contact-us" onClick={handleSubmenuClick}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 6px)",
    },
  },
};

export default Header;
