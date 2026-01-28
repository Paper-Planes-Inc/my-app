"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";


import logo from "../../public/Logo_Nav.png";
import icon13 from "../../public/icons/plus-circle.svg";
import icon14 from "../../public/icons/x-circle-fill.svg";

import img01 from "../../public/img-01.png";

import img03 from "../../public/img-03.png";
import img04 from "../../public/img-04.png";

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

        <div id="home" className="section-head w-full max-w-4xl md:pl-6 md:pr-6 md:pt-40 md:pb-40 pl-4 pr-4 pt-30 pb-20 block text-center  justify-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center  justify-items-center"
          >
            <h1 className={`${roboto_condensed.variable}`}>The Next Generation AI-Driven Cannabis Data Platform</h1>
            <p className="body w-full max-w-2xl">Paper Planes is the AI platform that revolutionizes dispensary operations with inclusive cannabis data intelligence.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{delay: .5, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center  justify-items-center sm:w-auto w-full"
          >
            <a href="#contact" className="button w-full">Get Free Access</a>
          </motion.div>

     
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        

        <div id="solution" className="section section-solution w-full md:pl-6 md:pr-6 md:pt-40 md:pb-40 pl-4 pr-4 pt-30 pb-20 block justify-items-center text-center">
          <div className="max-w-2xl">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${roboto_condensed.variable} eyebrow`}>Our solution</p>
              <h2 className={`${roboto_condensed.variable} pt-5 pb-5`}>Turn Data Into Actions</h2>
              <p className="body">Paper Planes turns cannabis retail data into real-time, suggested actions and goals. From smart sales strategies to streamlining operations, we help dispensaries grow smarter and faster.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
          <div className="max-w-7xl grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 md:pt-60 md:pb-40 pt-40 pb-20 items-center">
              <div>
                <Image src={img03} alt="" className="w-full max-w-lg img" />
              </div>

              <div className="text-left sm:pt-0 pt-10">
                <h3 className={`${roboto_condensed.variable}`}>Boost sales with AI-driven smart recommendations</h3>
                <p>Get more than just reports, our platform delivers recommended strategies and next steps. From pricing to promotions, Paper Planes helps your dispensary make actions instantly and confidently.</p>
              </div>
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
          <div className="max-w-7xl grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 md:pt-20 pt-10 items-center">
              <div className="img-right">
                <Image src={img04} alt="" className="w-full max-w-lg img" />
              </div>

              <div className="text-left sm:pt-0 pt-10">
                <h3 className={`${roboto_condensed.variable}`}>Easily send daily targeted product sales goals</h3>
                <p>Give your staff the tools to succeed every shift. Send daily goals that highlight top products to focus on, helping employees upsell with confidence, stay aligned, and consistently boost sales performance.</p>
              </div>
          </div>
          </motion.div>

        </div>


        <div className="section section-cta-1 block justify-items-center w-full md:pl-6 md:pr-6 md:pt-20 md:pb-20 pl-4 pr-4 pt-10 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="justify-items-center"
          >
          
          <div className="cta cta-1 max-w-7xl">
            <div className="cta-content">
              <div>
                  <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Data intelligence designed for everyone</h3>
                  <p>Simplify cannabis retail data with insights anyone can understand and act on.</p>
                  <a href="#contact" className="button-outline w-full">Get Free Access</a>
              </div>
            </div>

            <div className="cta-img">
              <Image src={img01} alt="" className="" />
            </div>
    
          </div>

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
        
      </div>

      </main>
      <footer className="text-center md:mb-10 md:mt-10 mb-5 mt-5 pl-2 pr-2">
        <p className="body-xs opacity-75">Copyright © 2025 Paper Planes Tech Inc | All Rights Reserved</p>
      </footer>
    </div>
  );
}
