"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";

import logo from "../../../../public/Logo_Nav.png";
import icon13 from "../../../../public/icons/plus-circle.svg";
import icon14 from "../../../../public/icons/x-circle-fill.svg";

import img03 from "../../../../public/blog/img-03.jpg";


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
            <h3 className={`${roboto_condensed.variable} pt-5 pb-5 blog-detail-title`}>How to discount cannabis products without killing your margins</h3>
              <p className="body blog-detail-date"><span>By Paper Planes</span> <span> • </span> <span>March 27, 2026</span> <span> • </span> <span>Company</span> <span> • </span> <span>Technology</span> </p>
              <Image src={img03} alt="" className="w-full img blog-detail-image" />
          </div>


        </motion.div>

          <div className="max-w-4xl text-align-left w-full md:mb-10 mb-4">
            <p>Discounting is one of the most powerful—and most misused—tools in cannabis retail.</p>
            <p className="mt-6">Run the right promotion, and you increase traffic, move inventory, and boost revenue. Run the wrong one, and you destroy margin, train customers to wait for deals, and hurt long-term profitability.</p>
            <p className="mt-6">So how do you actually decide:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Which cannabis products to discount?</li>
                <li className="body">How deep should the discount be?</li>
              </ul>

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Why Discounting Is So Tricky in Cannabis</h4>
            <p>Cannabis retail has unique challenges:</p>
            <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Products lose value over time (freshness, trends, competition)</li>
                <li className="body">Pricing varies widely across categories</li>
                <li className="body">Customers are highly promotion-sensitive</li>
              </ul>
            <p className="mt-6">That means every discount has a tradeoff: You’re exchanging margin for volume.</p>
            <p className="mt-6">The goal isn’t just to sell more—it’s to sell smarter.</p>
   
            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>What Products Should You Discount?</h4>
            <p>Not every product should be discounted—focus on the ones where it actually drives value.</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">Aging inventory: Move products before they lose more value and require deeper markdowns.</li>
                <li className="body">Overstocked SKUs: Prioritize selling through excess inventory to free up cash.</li>
                <li className="body">Low-velocity items: Give slow movers a push with targeted discounts or bundles.</li>
                <li className="body">Competitive categories: Use strategic pricing on price-sensitive items like flower or vapes to drive traffic—but protect your margins.</li>
              </ul>
            <p className="mt-6">The goal isn’t to discount everything—it’s to discount intentionally.</p>
   

            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>How Much Should You Discount?</h4>
            <p>Every discount has a breakeven point. If you lower your price, you need to sell more units to make up for lost margin. For example:</p>
              
              <ul className="list-disc list-outside ml-10 mt-6">
                <li className="body">A small discount might increase conversions without hurting profit</li>
                <li className="body">A large discount might require significantly more volume to break even</li>
              </ul>
            <p className="mt-6">Without understanding this relationship, you’re flying blind.</p>


            <hr className="mt-10 mb-10"></hr>

            <h4 className={`${roboto_condensed.variable}`}>Discount Smarter with Paper Planes</h4>
            <p>Paper Planes removes the guesswork from discounting with its Discount Now tool, giving you clear, data-backed answers instead of gut decisions.</p>
            <p className="mt-6">Before you run a promotion, it shows your breakeven point—how much additional volume you need at each discount level and whether it will actually increase revenue. It also uses your historical data to predict customer demand, so you can see how shoppers are likely to respond at different price points.</p>
            <p className="mt-6">On top of that, it helps you focus on the right products at the right time, highlighting which items need to move and where a discount will actually improve sell-through—without unnecessarily cutting into margins.</p>
            <p className="mt-6">In short, you’re not just discounting—you’re making informed, profitable decisions.</p>
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
