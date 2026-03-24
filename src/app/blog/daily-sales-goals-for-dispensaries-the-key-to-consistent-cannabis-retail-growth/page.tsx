"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../../public/Logo_Nav.png";
import icon13 from "../../../../public/icons/plus-circle.svg";
import icon14 from "../../../../public/icons/x-circle-fill.svg";

import img02 from "../../../../public/blog/img-02.jpg";


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
            <h3 className={`${roboto_condensed.variable} pt-5 pb-5 blog-detail-title`}>Daily sales goals for dispensaries: the key to consistent cannabis retail growth</h3>
              <p className="body blog-detail-date"><span>By Paper Planes</span> <span> • </span> <span>February 22, 2026</span> <span> • </span> <span>Company</span> <span> • </span> <span>Technology</span> </p>
              <Image src={img02} alt="" className="w-full img blog-detail-image" />
          </div>


        </motion.div>

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <p>In cannabis retail, success isn’t just about having great products or a prime location—it’s about execution, every single day. While many dispensaries focus on monthly revenue targets or big promotional spikes like 4/20, the operators who consistently win are the ones obsessed with daily sales goals.</p>
            <p className="mt-6">And there’s a reason for that: cannabis retail is a daily operations game.</p>

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Why Daily Sales Goals Matter (Especially in Cannabis)</h4>
            <p>Daily sales goals keep your dispensary focused on what matters today. In a fast-moving retail environment where demand shifts and products lose value over time, monthly targets alone aren’t enough.</p>
            <p className="mt-6">They help your team stay aligned, catch slow days before they add up, and make smarter decisions in real time. Budtenders know what to sell, managers can adjust on the fly, and owners stay connected to actual performance.</p>
            <p className="mt-6">Just as importantly, daily goals improve inventory movement—pushing high-margin products, clearing aging stock, and avoiding missed opportunities.</p>
            <p className="mt-6">In short, daily sales goals turn data into action—and action into revenue.</p>
   
            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>The Problem: Daily Sales Goals Are Hard to Calculate</h4>
            <p>Most dispensaries don’t struggle with setting daily goals—they struggle with figuring out how to set them. Common issues:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Relying on static monthly targets</li>
                <li className="body">Ignoring day-of-week trends</li>
                <li className="body">Not accounting for seasonality or events</li>
                <li className="body">Spending hours in spreadsheets</li>
              </ul>
            <p className="mt-6">This is where most analytics tools stop short.</p>
   

            <hr className="mt-10 mb-10"></hr>


            <h4 className={`${roboto_condensed.variable}`}>Paper Planes: Daily Sales Goals, Automated</h4>
            <p>Paper Planes takes the guesswork out of daily sales goals by using your historical data to generate a dynamic target that actually reflects how your store performs. Instead of relying on static numbers, it analyzes trends like day-of-week performance and seasonality to deliver a goal that’s realistic and achievable.</p>
            <p className="mt-6">But it doesn’t stop at the number. Paper Planes tells you how to hit it—surfacing the top products to sell right now, highlighting high-margin SKUs, and identifying inventory that needs to move.</p>
            <p className="mt-6">To keep your team aligned, it also sends daily standup emails with your sales goal, key product focus, and clear priorities for the day.</p>
            <p className="mt-6">No spreadsheets. No guessing. Just clear, data-driven direction every single day.</p>

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
