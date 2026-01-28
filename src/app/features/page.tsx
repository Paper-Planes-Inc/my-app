"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";


import logo from "../../../public/Logo_Nav.png";
import icon01 from "../../../public/icons/Icon=Paper_plane.svg";
import icon02 from "../../../public/icons/Icon=Dollar.svg";
import icon03 from "../../../public/icons/Icon=Shop_bag.svg";
import icon04 from "../../../public/icons/Icon=Bundle.svg";
import icon05 from "../../../public/icons/Icon=Person.svg";
import icon06 from "../../../public/icons/Icon=Product.svg";
import icon07 from "../../../public/icons/Icon=Target.svg";
import icon08 from "../../../public/icons/Icon=Marketing.svg";
import icon09 from "../../../public/icons/Icon=Package.svg";
import icon10 from "../../../public/icons/Icon=Discount $.svg";
import icon11 from "../../../public/icons/Icon=Retailer.svg";
import icon12 from "../../../public/icons/Icon=Product_price.svg";
import icon13 from "../../../public/icons/plus-circle.svg";
import icon14 from "../../../public/icons/x-circle-fill.svg";

import img02 from "../../../public/img-02.png";



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
            <h1 className={`${roboto_condensed.variable}`}>Features</h1>
            <p className="body w-full max-w-2xl">Cannabis data that recommends smart actions</p>
          </motion.div>

     
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        


        <div id="features" className="section section-features w-full md:pl-6 md:pr-6 md:pt-30 md:pb-30 pl-4 pr-4 pt-20 pb-20 block justify-items-center">
          <div className="max-w-7xl text-align-left w-full md:mb-10 mb-4">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${roboto_condensed.variable} eyebrow`}>Features</p>
              <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Smart selling</h3>
              {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit.</p> */}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-7xl">
            
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon01} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Smart actions</h4>
              <p className="body-sm">Quickly increase revenue and streamline operations with our AI-powered recommendations and smart insights.</p>
            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.4, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon02} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Sales strategy</h4>
              <p className="body-sm">Unlock data-driven strategic actions with recommended promotions to optimize inventory performance.</p>
            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon03} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Product bundling</h4>
              <p className="body-sm">Increase your average cart size with our suggested product bundles, featuring high-performing combinations.</p>
            </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.4, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon04} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Product look-alikes</h4>
              <p className="body-sm">Identify and recommend similar products with our recommended look-alikes to maximize cross-sell opportunities.</p>
            </div>
            </motion.div>

          </div>




          <div className="max-w-7xl text-align-left w-full md:mb-10 md:mt-50 mb-4 mt-20">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${roboto_condensed.variable} eyebrow`}>Features</p>
              <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Smart targeting</h3>
              {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit.</p> */}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-7xl w-full">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon05} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Customer strategy</h4>
                <p className="body-sm">Better understand your consumer behaviors with our data-driven segmentation and sales patterns.</p>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.4, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon06} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Promote products</h4>
              <p className="body-sm">Quickly identify products with low sales velocity that need promotional marketing and brand education.</p>
            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon07} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Targeting strategy</h4>
              <p className="body-sm">Unlock daily, weekly, & monthly strategic actions based on consumer trends and product sales.</p>
            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.4, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon08} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Smart campaigns</h4>
              <p className="body-sm">Easily build product campaigns with suggested promotions, break-even analysis, and AI-driven campaign insights.</p>
            </div>
            </motion.div>

          </div>





          <div className="max-w-7xl text-align-left  w-full md:mb-10 md:mt-50 mb-4 mt-20">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${roboto_condensed.variable} eyebrow`}>Features</p>
              <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Smart ordering</h3>
              {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit.</p> */}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-7xl w-full">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon09} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Predictive ordering</h4>
                <p className="body-sm">Understand and meet demand with AI-driven ordering actions to ensure just-in-time product ordering.</p>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.4, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon10} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Inventory management</h4>
                <p className="body-sm">Track inventory performance in real-time and reduce costly overstocking with data-driven callouts.</p>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon11} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Brand analysis</h4>
                <p className="body-sm">Evaluate vendors and brands' performance with data-driven scorecards to optimize product purchasing.</p>
              </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.4, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon12} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Product life analysis</h4>
                <p className="body-sm">Follow each product's shelf life performance, sales metrics, and consumer purchasing patterns.</p>
              </div>
            </motion.div>

          </div>
        </div>


        <div className="section section-cta-2 block justify-items-center w-full md:pl-6 md:pr-6 md:pt-20 md:pb-20 pl-4 pr-4 pt-10 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="justify-items-center"
          >

          <div className=" max-w-7xl">
          <div className="cta cta-2">
            <div className="cta-content">
              <div>
                  <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>AI solutions built for cannabis retail</h3>
                  <p>Easily optimize sales, engage customers, and streamline operations.</p>
                  <a href="#contact" className="button-outline w-full">Get Free Access</a>
              </div>
            </div>

            <div className="cta-img">
              <Image src={img02} alt="" className="" />
            </div>
    
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
