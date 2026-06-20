"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../../public/Logo_Nav.png";
import icon13 from "../../../../public/icons/plus-circle.svg";
import icon14 from "../../../../public/icons/x-circle-fill.svg";

import img06 from "../../../../public/blog/img-06.jpg";


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
            <h3 className={`${roboto_condensed.variable} pt-5 pb-5 blog-detail-title`}>A dispensary’s guide to customer segmentation and targeted marketing</h3>
              <p className="body blog-detail-date"><span>By Paper Planes</span> <span> • </span> <span>June 28, 2026</span> <span> • </span> <span>Company</span> <span> • </span> <span>Technology</span> </p>
              <Image src={img06} alt="" className="w-full img blog-detail-image" />
          </div>


        </motion.div>

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <p>Not all cannabis customers are the same—but most dispensaries treat them that way.</p>
            <p className="mt-6">Same promotions. Same recommendations. Same experience.</p>
            <p className="mt-6">The result? Missed revenue, weaker loyalty, and inefficient marketing.</p>
            <p className="mt-6">The dispensaries that win understand one thing: Different customers buy for different reasons—and you need to treat them differently.</p>

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Why Customer Segmentation Matters</h4>
            <h5 className="mt-6">1. More Effective Promotions</h5>
            <p>Blanket discounts are expensive—and often unnecessary.</p>
            <p className="mt-6">When you understand your segments, you can:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Target discounts only to price-sensitive customers</li>
                <li className="body">Offer premium products to high-value shoppers</li>
                <li className="body">Increase conversion without sacrificing margin</li>
              </ul>


             <h5 className="mt-6">2. Higher Customer Retention</h5>
            <p>Not every customer needs the same message.</p>
            <p className="mt-6">Segmentation allows you to:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Re-engage customers who haven’t visited recently</li>
                <li className="body">Reward loyal, high-frequency shoppers</li>
                <li className="body">Personalize communication</li>
              </ul>
             <p className="mt-6">This leads to stronger relationships—and more repeat business.</p>



             <h5 className="mt-6">3. Better Inventory Decisions</h5>
            <p>Your customers determine your inventory strategy.</p>
            <p className="mt-6">By understanding what different segments buy, you can:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Stock the right products</li>
                <li className="body">Reduce slow-moving inventory</li>
                <li className="body">Double down on high-demand categories</li>
              </ul>


             <h5 className="mt-6">4. Smarter Day-to-Day Operations</h5>
             <p>Segmentation isn’t just for marketing—it impacts daily execution.</p>
            <p className="mt-6">Knowing who is likely to shop today helps you:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Adjust staffing</li>
                <li className="body">Prioritize product placement</li>
                <li className="body">Align your team around customer demand</li>
              </ul>

            <hr className="mt-10 mb-10"></hr>


            <h4 className={`${roboto_condensed.variable}`}>The Challenge: Turning Data Into Segments</h4>
  
            <p>Most dispensaries already have the data:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Transaction history</li>
                <li className="body">Customer visits</li>
                <li className="body">Product preferences</li>
              </ul>
            <p className="mt-6">But turning that into clear, actionable segments is difficult.</p>
            <p className="mt-6">Spreadsheets can only go so far—and they’re rarely updated in real time.</p>


            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Smart Targeting with Paper Planes</h4>
            <p>Paper Planes makes it easy to understand your customers by automatically segmenting them based on real shopping behavior.</p>
            <p className="mt-6">Identify key customer groups, including:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Loyal, high-value customers</li>
                <li className="body">Occasional or at-risk shoppers</li>
                <li className="body">Discount-driven buyers</li>
                <li className="body">Category-specific shoppers</li>
              </ul>
            
              <p className="mt-6">Paper Planes also reveals customer traffic trends, showing when customers shop and how traffic changes over time.</p>
              <p className="mt-6">With these insights, dispensaries can better align promotions, staffing, and inventory with customer demand—driving stronger engagement and sales.</p>
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
