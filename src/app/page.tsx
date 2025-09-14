"use client";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactForm from "@/app/ContactForm";
import { Accordion, AccordionItem } from "@heroui/accordion";

import logo from "../../public/Logo_Nav.png";
import icon01 from "../../public/icons/Icon=Paper_plane.svg";
import icon02 from "../../public/icons/Icon=Dollar.svg";
import icon03 from "../../public/icons/Icon=Shop_bag.svg";
import icon04 from "../../public/icons/Icon=Bundle.svg";
import icon05 from "../../public/icons/Icon=Person.svg";
import icon06 from "../../public/icons/Icon=Person_ID.svg";
import icon07 from "../../public/icons/Icon=Target.svg";
import icon08 from "../../public/icons/Icon=Marketing.svg";
import icon09 from "../../public/icons/Icon=Package.svg";
import icon10 from "../../public/icons/Icon=Discount $.svg";
import icon11 from "../../public/icons/Icon=Retailer.svg";
import icon12 from "../../public/icons/Icon=Product_price.svg";
import icon13 from "../../public/icons/plus-circle.svg";
import icon14 from "../../public/icons/x-circle-fill.svg";

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
          <a href="#home">
            <Image src={logo} alt="" className="logo" />
          </a>
          <div className="flex justify-end">
            <a href="#solution" className="nav-item">
              Solution
            </a>
            <a href="#features" className="nav-item">
              Features
            </a>
            <a href="#about" className="nav-item">
              About
            </a>

            <a href="#contact" className="nav-item button">
              Request demo
            </a>

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
          <div className="max-w-2xl ">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}

            >
              <p className={`${roboto_condensed.variable} eyebrow`}>Our solution</p>
              <h2 className={`${roboto_condensed.variable} pt-5 pb-5`}>Turn Data Into Actions</h2>
              <p className="body">Paper Planes uses AI to transform cannabis retail data into clear, real-time decisions. From boosting sales to streamlining operations, we help dispensaries grow smarter and faster.</p>
            </motion.div>
          </div>
        </div>

        <div id="features" className="section section-features w-full md:pl-6 md:pr-6 md:pt-30 md:pb-30 pl-4 pr-4 pt-20 pb-20 block justify-items-center">
          <div className="max-w-6xl text-align-left w-full md:mb-10 mb-4">
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

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-6xl">
            
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="feature-block">
              <div className="icon-block"><Image src={icon01} alt={""}/></div>
              <h4 className={`${roboto_condensed.variable}`}>Smart actions</h4>
              <p className="body-sm">Automate decisions that increase revenue and streamline operations with AI-powered recommendations.</p>
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
              <p className="body-sm">Unlock data-driven insights to optimize pricing, promotions, and inventory performance.</p>
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
              <p className="body-sm">Increase average order value by automatically suggesting high-performing product combinations.</p>
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
              <p className="body-sm">Identify and recommend similar products to boost customer satisfaction and maximize cross-sell opportunities.</p>
            </div>
            </motion.div>

          </div>




          <div className="max-w-6xl text-align-left w-full md:mb-10 md:mt-50 mb-4 mt-20">
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

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-6xl w-full">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon05} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Customer strategy</h4>
                <p className="body-sm">Leverage AI to better understand customer behavior and create winning loyalty programs.</p>
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
              <h4 className={`${roboto_condensed.variable}`}>Customer segments</h4>
              <p className="body-sm">Easily identify high-value, at-risk, and emerging customer groups to personalize outreach.</p>
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
              <p className="body-sm">Design precise campaigns that reach the right audience, with the best products, at the right time.</p>
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
              <p className="body-sm">Deploy automated marketing campaigns powered by predictive analytics for maximum impact.</p>
            </div>
            </motion.div>

          </div>





          <div className="max-w-6xl text-align-left  w-full md:mb-10 md:mt-50 mb-4 mt-20">
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

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-6xl w-full">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-block">
                <div className="icon-block"><Image src={icon09} alt={""}/></div>
                <h4 className={`${roboto_condensed.variable}`}>Predictive ordering</h4>
                <p className="body-sm">Never miss a sale—predict demand with AI to ensure shelves are always stocked.</p>
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
                <p className="body-sm">Track product performance in real time and reduce costly overstock or stockouts.</p>
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
                <h4 className={`${roboto_condensed.variable}`}>Vendor analysis</h4>
                <p className="body-sm">Evaluate vendor performance with data-driven scorecards to strengthen supplier relationships.</p>
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
                <h4 className={`${roboto_condensed.variable}`}>Overstock value</h4>
                <p className="body-sm">Quickly identify and resolve excess inventory and overstock patterns to protect your margins.</p>
              </div>
            </motion.div>

          </div>
      </div>




      <div id="about" className="section section-about w-full md:pl-6 md:pr-6 md:pt-40 md:pb-40 pl-4 pr-4 pt-10 pb-20 block justify-items-center">
        <div className="max-w-6xl text-align-left w-full md:mb-10 mb-4">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${roboto_condensed.variable} eyebrow`}>About Us</p>
              <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Frequently Asked Questions</h3>
              {/* <p className="body">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit.</p> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay:.2, duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full  justify-items-center"
            > 
            <Accordion selectionMode="multiple" className="max-w-6xl text-align-left w-full">
              <AccordionItem key="1" aria-label="What is Paper Planes?" title="What is Paper Planes?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Paper Planes is an AI data intelligence platform for recreational cannabis retailers. Our product transforms cannabis inventory management, increases operational efficiency, maximizes sales opportunities, and improves overall customer engagement.</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Why is this a better service?" title="Why is this a better service?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">With a rapidly growing legal cannabis market and highly competitive black market, Paper Planes strategically captures market share, addressing numerous industry pain points with AI data intelligence. Our advanced machine-learning infrastructure will learn sales, product, and consumer trends to prompt actionable business decisions. While competitors are stuck reporting on the past with outdated technology, we focus on transforming data into quick, smart actions.</p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="How can I sign up?" title="How can I sign up?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">We are currently accepting cannabis retailers to join our free base model. Participants must be licensed dispensaries (recreational or medical) and provide API access to POS/cannabis tracking systems. Test our platform for six months with frequent usage and receive free actionable insights. To sign up, contact us below.</p>
              </AccordionItem>
              <AccordionItem key="4" aria-label="Is my data private and secure?" title="Is my data private and secure?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Absolutely! We take data privacy and security seriously. At Paper Planes, we adhere to all compliance regulations for protecting Personally Identifiable Information (PII) and comply with HIPAA standards. We implement encryption, access controls, and regular audits to help maintain the safety and privacy of all data.</p>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Why are we doing this?" title="Why are we doing this?" className={`${roboto_condensed.variable}`} indicator={({isOpen}) => (isOpen ? <OpenIcon /> : <CloseIcon />)}>
                <p className="body-sm mb-10 max-w-4xl">Our mission is to humanize cannabis, both in data and everyday life. Currently, the legal cannabis market is outdated, but we're here to change that. We aim to create a space where cannabis users feel cared for and easily find products that suit their needs. With our AI technology, we're ensuring we truly understand cannabis users to empower retailers to make better business decisions. Finally, we're committed to using data responsibly and ethically, always keeping the well-being of individuals and communities in mind.</p>
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
        <div className="max-w-6xl grid md:grid-cols-2 sm:grid-cols-1 gap-12">
          <div>
            <p className={`${roboto_condensed.variable} eyebrow`}>Request a demo</p>
              <h3 className={`${roboto_condensed.variable} pt-5 pb-5`}>Discover the future of cannabis data</h3>
              <p className="body">Work smarter, sell faster, and grow stronger with AI-powered cannabis insights. Paper Planes turns your data into action.</p>
          </div>

          <div className="md:pt-10 md:pb-10 pt-2 pb-2">
            <ContactForm />
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
