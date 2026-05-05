"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../../public/Logo_Nav.png";
import icon13 from "../../../../public/icons/plus-circle.svg";
import icon14 from "../../../../public/icons/x-circle-fill.svg";

import img04 from "../../../../public/blog/img-04.jpg";


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
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full  justify-items-center"
            > 

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <h3 className={`${roboto_condensed.variable} pt-5 pb-5 blog-detail-title`}>How to optimize cannabis inventory management with smart ordering</h3>
              <p className="body blog-detail-date"><span>By Paper Planes</span> <span> • </span> <span>April 26, 2026</span> <span> • </span> <span>Company</span> <span> • </span> <span>Technology</span> </p>
              <Image src={img04} alt="" className="w-full img blog-detail-image" />
          </div>


        </motion.div>

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <p>Ordering inventory is one of the hardest—and most important—decisions in cannabis retail.</p>
            <p className="mt-6">Order too much, and you tie up cash in products that sit. Order too little, and you miss out on sales and disappoint customers.</p>
            <p className="mt-6">The best dispensaries don’t rely on instinct or last week’s sales—they use data-driven ordering to stay ahead of demand.</p>
          

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Why Cannabis Ordering Is So Challenging</h4>
            <p>Cannabis inventory moves fast, but not always predictably. Dispensaries deal with:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Rapidly changing customer preferences</li>
                <li className="body">Short product life cycles</li>
                <li className="body">Inconsistent vendor availability</li>
                <li className="body">Constant pressure on margins</li>
              </ul>
            <p className="mt-6">That means every purchase order is a balancing act between risk and opportunity.</p>
           
   
            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>The Cost of Poor Ordering</h4>
            <p>Without a clear strategy, dispensaries often:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Overstock slow-moving products</li>
                <li className="body">Run out of top sellers</li>
                <li className="body">Lock up cash in the wrong inventory</li>
                <li className="body">Rely on reactive, last-minute reorders</li>
              </ul>
            <p className="mt-6">The result? Lower margins, lost revenue, and operational stress.</p>
   

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>What Smart Dispensaries Do Differently</h4>
            <p>Top operators treat ordering as a continuous, data-driven process. They:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Monitor sell-through rates daily</li>
                <li className="body">Reorder based on real demand signals</li>
                <li className="body">Double down on top-performing products</li>
                <li className="body">Build strong relationships with high-performing vendors</li>
              </ul>
            <p className="mt-6">But doing this manually is time-consuming—and often inaccurate.</p>


            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Smarter Ordering with Paper Planes</h4>
            <p>Paper Planes takes the guesswork out of cannabis ordering by telling you exactly what to buy and when.</p>
            <p className="mt-6">With Order Now, you can quickly identify products that need to be reordered immediately based on real-time sales and inventory—so you stay in stock on top sellers and never miss demand. Order Soon helps you plan ahead by flagging items that are trending toward low stock, allowing you to avoid last-minute rush orders and keep operations running smoothly.</p>
            <p className="mt-6">On top of that, Paper Planes highlights your top vendors and top brands, so you can confidently reorder from proven partners, double down on what’s already selling, and reduce risk when placing orders.</p>
            <p className="mt-6">Instead of reacting to inventory problems, you’re staying one step ahead.</p>
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
