"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../../public/Logo_Nav.png";
import icon13 from "../../../../public/icons/plus-circle.svg";
import icon14 from "../../../../public/icons/x-circle-fill.svg";

import img05 from "../../../../public/blog/img-05.jpg";


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
            <h3 className={`${roboto_condensed.variable} pt-5 pb-5 blog-detail-title`}>How AI reinvents cannabis retail analytics and better decision-making</h3>
              <p className="body blog-detail-date"><span>By Paper Planes</span> <span> • </span> <span>May 24, 2026</span> <span> • </span> <span>Company</span> <span> • </span> <span>Technology</span> </p>
              <Image src={img05} alt="" className="w-full img blog-detail-image" />
          </div>


        </motion.div>

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <p>Cannabis retail runs on data—but most dispensaries are still not using it to its full potential.</p>
            <p className="mt-6">From POS systems to inventory tools, operators have access to thousands of data points every day. The problem isn’t access—it’s turning that data into decisions.</p>
            <p className="mt-6">That’s where AI is changing everything.</p>

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>The Problem with Traditional Cannabis Analytics</h4>
            <p>Most analytics tools in cannabis focus on reporting:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">What sold yesterday</li>
                <li className="body">Which products performed last week</li>
                <li className="body">How your store did last month</li>
              </ul>
            <p className="mt-6">While useful, this is all backward-looking.</p>
            <p className="mt-6">Operators are left asking:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">What should we do today?</li>
                <li className="body">What should we promote?</li>
                <li className="body">What should we reorder?</li>
              </ul>
            <p className="mt-6">Static dashboards and spreadsheets can’t answer those questions fast enough.</p>
   
            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Where AI Is Making the Biggest Impact</h4>
            <h5 className="mt-6">1. Daily Sales Optimization</h5>
            <p>AI can analyze historical trends, day-of-week patterns, and seasonality to generate dynamic daily sales goals.</p>
            <p className="mt-6">Instead of guessing targets, dispensaries get a clear number—and a plan to hit it.</p>

            <h5 className="mt-6">2. Smarter Product Decisions</h5>
            <p>Not all products contribute equally to your business. AI helps identify:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Top-performing SKUs</li>
                <li className="body">High-margin opportunities</li>
                <li className="body">Products that need help selling</li>
              </ul>
            <p className="mt-6">This allows teams to focus on what actually drives revenue.</p>

            <h5 className="mt-6">3. Intelligent Discounting</h5>
            <p>Discounting without data is risky. AI can model:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">How customers respond to price changes</li>
                <li className="body">What discount levels maximize revenue</li>
                <li className="body">Which products are worth promoting</li>
              </ul>
            <p className="mt-6">This turns promotions from guesswork into strategy.</p>


            <h5 className="mt-6">4. Predictive Inventory Ordering</h5>
            <p>One of the biggest challenges in cannabis is knowing what to order—and when. AI uses real-time and historical data to:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Prevent stockouts</li>
                <li className="body">Reduce overstock</li>
                <li className="body">Optimize vendor and brand selection</li>
              </ul>
            <p className="mt-6">The result is better cash flow and higher inventory turnover.</p>



            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>From Insights to Action</h4>
            <p>The biggest advantage of AI isn’t just better insights—it’s faster execution. Instead of spending hours:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Pulling reports</li>
                <li className="body">Updating spreadsheets</li>
                <li className="body">Debating decisions</li>
              </ul>
            <p className="mt-6">Teams can act immediately with clear, data-backed direction.</p>


            <hr className="mt-10 mb-10"></hr>

             <h4 className={`${roboto_condensed.variable}`}>How Paper Planes Brings AI to Cannabis Retail</h4>
            <p>Paper Planes is built to turn cannabis data into daily action using AI. It helps dispensaries:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Set dynamic daily sales goals based on real performance</li>
                <li className="body">Identify what products to sell, discount, or reorder</li>
                <li className="body">Optimize inventory and vendor decisions</li>
                <li className="body">Align teams with clear daily priorities</li>
              </ul>
            <p className="mt-6">Instead of just analyzing your business, Paper Planes actively helps you run it better.</p>


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
