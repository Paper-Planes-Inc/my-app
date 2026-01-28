"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../public/Logo_Nav.png";
import icon13 from "../../../public/icons/plus-circle.svg";
import icon14 from "../../../public/icons/x-circle-fill.svg";

import img01 from "../../../public/img-brand.png";


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

  return (
    <div className="items-center block h-auto">
      <main className="w-full justify-items-center">
        <nav
          className={`navbar w-full md:pl-6 md:pr-6 md:pt-4 md:pb-4 pl-4 pr-4 pt-2 pb-2  fixed grid grid-cols-2 transition-colors duration-300 ${
            scrolled ? "bg-black" : "bg-transparent"
          }`}
        >
          <a href="/">
            <Image src={logo} alt="" className="logo" />
          </a>
          <div className="flex justify-end">

            <a href="/features" className="nav-item">
              Features
            </a>
            <a href="/about" className="nav-item">
              About
            </a>
            <a href="/blog" className="nav-item">
              Blog
            </a>
            <a href="/faq" className="nav-item">
              FAQ
            </a>
            <a href="#contact" className="nav-item button">
              Request demo
            </a>

          </div>
        </nav>





      <div id="about" className="section section-about w-full md:pl-6 md:pr-6 md:pt-40  pl-4 pr-4 pt-20 block justify-items-center">
        <div className="max-w-7xl text-align-left w-full">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >

              <h1 className={`${roboto_condensed.variable} pt-5 pb-5`}>Brand Assets</h1>
              <p className="body">Access logo files and product screenshots, or explore our brand guidelines</p>
            </motion.div>
          </div>
      </div>

      <div id="solution" className="section section-solution w-full md:pl-6 md:pr-6 md:pb-40 pl-4 pr-4 pb-20 block justify-items-center text-center">
      
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
          <div className="max-w-7xl grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 md:pt-20 md:pb-40 pt-10 pb-20 items-center">
              <div>
                <Image src={img01} alt="" className="w-full max-w-lg img" />
              </div>

              <div className="text-left sm:pt-0 pt-10">
                <h3 className={`${roboto_condensed.variable}`}>Paper Planes Logo</h3>
                <p>Find our logo assets below. Please do not alter the original files with filters or effects.</p>
                <a href="#" className="button w-max">Get Logo Assets</a>
              </div>
          </div>
          </motion.div>


          <div className="max-w-2xl">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${roboto_condensed.variable} eyebrow`}>inquiries</p>
              <h2 className={`${roboto_condensed.variable} pt-5 pb-5`}>For media</h2>
              <p className="body">Want to make use of our marks in a way not covered by these guidelines? Contact us at <span><a href="mailto:sales@paperplanesapp.com" className="body hyperlink">sales@paperplanesapp.com</a></span> and include a visual mockup of intended use.</p>
            </motion.div>
          </div>

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
