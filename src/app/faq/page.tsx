"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";
import { Accordion, AccordionItem } from "@heroui/accordion";

import logo from "../../../public/Logo_Nav.png";
import icon13 from "../../../public/icons/plus-circle.svg";
import icon14 from "../../../public/icons/x-circle-fill.svg";


const CloseIcon = () => <Image src={icon13} alt="" width={26} />;
const OpenIcon = () => <Image src={icon14} alt="" width={26} />;

const roboto_condensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const [open, setOpen] = useState(false);

  return (
    <div className="items-center block h-auto">
      <main className="w-full justify-items-center">
        <nav
      className={`fixed w-full transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="grid grid-cols-2 items-center px-4 py-2 md:px-6 md:py-4">
        {/* Logo */}
        <a href="/">
          <Image src={logo} alt="Logo" className="logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-end items-center gap-2">
          <a href="/features" className="nav-item">Features</a>
          <a href="/about" className="nav-item">About</a>
          <a href="/blog" className="nav-item">Blog</a>
          <a href="/faq" className="nav-item">FAQ</a>
          <a href="#contact" className="nav-item button">Request demo</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setOpen(!open)} className="nav-item button-outline-white btn-nav-mobile" aria-label="Toggle menu" >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden nav-mobile transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pb-4 bg-black">
          <a href="/features" className="nav-item link" onClick={() => setOpen(false)}>Features</a>
          <a href="/about" className="nav-item link" onClick={() => setOpen(false)}>About</a>
          <a href="/blog" className="nav-item link" onClick={() => setOpen(false)}>Blog</a>
          <a href="/faq" className="nav-item link" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-item button" onClick={() => setOpen(false)}>
            Request demo
          </a>
        </div>
      </div>
        </nav>





      <div id="about" className="section section-about w-full md:pl-6 md:pr-6 md:pt-40 md:pb-40 pl-4 pr-4 pt-20 pb-20 block justify-items-center">
        <div className="max-w-7xl text-align-left w-full md:mb-10 mb-4">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >

              <h1 className={`${roboto_condensed.variable} pt-5 pb-5`}>Frequently Asked Questions</h1>
              <p className="body">Burning questions and blazing answers about Paper Planes.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full  justify-items-center"
            > 
            <Accordion selectionMode="multiple" className="max-w-7xl text-align-left w-full">
              <AccordionItem key="1" aria-label="What is Paper Planes?" title="What is Paper Planes?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Paper Planes is an AI data platform for dispensaries. Our product transforms cannabis inventory management, increases operational efficiency, maximizes sales opportunities, and improves overall customer engagement.</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="How does Paper Planes work?" title="How does Paper Planes work?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Paper Planes integrates with your dispensary's existing point-of-sale system to analyze real-time data, including inventory, product costs, and market demand. Our AI then develops smart recommendations for what you need to push today.</p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="What makes Paper Planes different from other cannabis inventory tools?" title="What makes Paper Planes different from other cannabis inventory tools?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Unlike competitors focused on excessive reporting of the past with outdated technology, Paper Planes focuses on transforming data into quick, smart actions you can act on immediately. Your inventory data is shown in a strategic daily action list.</p>
              </AccordionItem>
              <AccordionItem key="4" aria-label="How can I get access?" title="How can I get access?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">We are currently accepting cannabis retailers to join our free pilot. Participants must be licensed dispensaries and provide API access to POS/cannabis tracking systems. To sign up, contact us below.</p>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Is my dispensary data secure?" title="Is my dispensary data secure?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Absolutely! We take data privacy and security seriously. At Paper Planes, we adhere to all compliance regulations for protecting Personally Identifiable Information (PII) and comply with HIPAA standards. We implement encryption, access controls, and regular audits to help maintain the safety and privacy of all data.</p>
              </AccordionItem>
              <AccordionItem key="6" aria-label="Do you sell or share data with third parties?" title="Do you sell or share data with third parties?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">No. Your data remains confidential and is used only to provide smart recommendations for your dispensary.</p>
              </AccordionItem>

            </Accordion>

        </motion.div>
      </div>



      <div id="contact" className="section section-contact w-full md:pl-6 md:pr-6 md:pt-40 md:pb-40 pl-4 pr-4 pt-20 pb-10 block justify-items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
        <div className="text-center">
          <div className="max-w-xl">
            <p className={`${roboto_condensed.variable} eyebrow`}>Request a demo</p>
              <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Transform your margins</h3>
              <p className="body">Join our pilot program and transform your cannabis data today.</p>
          </div>

          <div className="max-w-2xl md:pt-10 md:pb-10 pt-2 pb-2">
            <ContactForm />
          </div>

          <div>
            <p className="opacity-75">
              <span className="body-xs">Free 3-month pilot</span>
              <span className="body-xs pr-4 pl-4"> • </span>
              <span className="body-xs">No commitment</span>
            </p>
          </div>
        </div>
        </motion.div>

        <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        
      </div>

      </main>
      <footer className="text-center md:mb-10 md:mt-10 mb-5 mt-5 pl-2 pr-2">
        <p className="body-xs opacity-75">Copyright © 2025 Paper Planes Tech Inc | All Rights Reserved</p>
      </footer>
    </div>
  );
}
