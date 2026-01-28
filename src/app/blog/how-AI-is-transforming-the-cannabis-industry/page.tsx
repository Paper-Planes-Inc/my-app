"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../../public/Logo_Nav.png";
import icon13 from "../../../../public/icons/plus-circle.svg";
import icon14 from "../../../../public/icons/x-circle-fill.svg";

import img01 from "../../../../public/blog/img-01.jpg";


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
            <h3 className={`${roboto_condensed.variable} pt-5 pb-5 blog-detail-title`}>How AI is transforming the cannabis industry & why dispensaries can’t afford to ignore it</h3>
              <p className="body blog-detail-date"><span>By Paper Planes</span> <span> • </span> <span>January 25, 2026</span> <span> • </span> <span>Company</span> <span> • </span> <span>Technology</span> </p>
              <Image src={img01} alt="" className="w-full img blog-detail-image" />
          </div>

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <p>The cannabis industry is more competitive and dynamic than ever. While consumer demand continues to grow across legal markets, dispensaries and brands face intense pressures: rising competition, tight margins, and the constant challenge of keeping inventory aligned with real customer demand. In a landscape like this, Artificial Intelligence (AI) isn’t just a buzzword — it’s becoming the strategic advantage that separates thriving operators from struggling ones.</p>
            <p className="mt-6">At Paper Planes, we believe AI will play a defining role in shaping the future of cannabis retail. Here’s how smart technology is revolutionizing the industry — and why dispensaries should act now to harness its power.</p>

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>AI: From Nice-to-Have to Business Essential</h4>
            <p>In mainstream retail, AI is already well-established — from dynamic pricing tools to predictive analytics that drive inventory decisions. Cannabis operators can look to these proven models and tailor them to the unique challenges of regulated retail environments.</p>
            <p className="mt-6">But cannabis isn’t mainstream retail — regulations, compliance, and product diversity make it a high-complexity industry. That’s where purpose-built cannabis AI makes all the difference.</p>
   
            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Smarter Inventory Means Happier Customers (and Better Margins)</h4>
            <p>One of the biggest pain points dispensaries face is inventory management: too much stock ties up capital and increases waste; too little results in stockouts and unhappy customers. The right AI tools can:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Analyze historical sales patterns and forecast future demand with high precision.</li>
                <li className="body">Reduce stockouts and overstocks by accurately predicting what products customers will want — and when.</li>
                <li className="body">Automate reorder timing based on real-time data, freeing teams from manual guesswork and reducing costly human error.</li>
              </ul>
            <p className="mt-6">For example, AI-powered analytics can cut inventory shrink and inefficiency dramatically — keeping shelves stocked with what sells and reducing capital tied up in slow-moving SKUs. With AI forecasting, even small dispensaries can manage inventory like Fortune 500 retailers — but tailored to cannabis realities.</p>
   

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Boost Sales With Data-Driven Insights</h4>
            <p>AI isn’t just about numbers — it’s about turning those numbers into action. Machine learning models can detect patterns in customer purchase behavior and:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Identify high-value products and recommend pricing strategies based on demand trends.</li>
                <li className="body">Segment customers for targeted promotions and personalized offers.</li>
                <li className="body">Optimize product placement and merchandising based on what drives repeat sales.</li>
              </ul>
            <p className="mt-6">This level of intelligence helps dispensaries get ahead of trends, move inventory faster, and build customer loyalty — all of which directly impact the bottom line.</p>


            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Paper Planes: AI Built for Cannabis Success</h4>
            <p>At Paper Planes, we’re committed to empowering cannabis retailers with AI that’s both intelligent and practical. Our platform helps dispensaries:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Optimize inventory and reduce waste with predictive demand models</li>
                <li className="body">Increase sales by uncovering actionable customer and product insights</li>
                <li className="body">Automate key operational workflows, freeing teams to do more with less</li>
                <li className="body">Make smarter decisions faster, with real-time AI analytics tailored to cannabis retail</li>
              </ul>
            <p className="mt-6">Whether you’re a boutique dispensary or a multi-location brand, AI should be part of your growth strategy — not just an experiment.</p>


   
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
