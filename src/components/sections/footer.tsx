"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion for watermark text
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/_asl_realtors/", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#forms", label: "Forms" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-[#0B0B0B] text-white transition-colors duration-300 overflow-x-clip"
    >
      {/* Background ASL Realtors Watermark */}
      <motion.div
        style={{ y }}
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-screen max-w-[100vw] flex justify-center items-center pointer-events-none z-0"
      >
        <span className="font-black text-white/20 sm:text-white/15 md:text-white/10 leading-none tracking-tight select-none text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] whitespace-nowrap translate-y-[15%] inline-block">
          ASL Realtors
        </span>
      </motion.div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-start gap-4 mb-8 w-full">
              <Image
                src="/LOGOFOOT.png"
                alt="ASL Realtors logo"
                width={2000}
                height={900}
                className="h-[60rem] sm:h-[75rem] md:h-[90rem] lg:h-[110rem] xl:h-[140rem] 2xl:h-[160rem] w-auto min-w-[400px] sm:min-w-[500px] md:min-w-[600px] object-contain"
                priority
                style={{ maxHeight: 'none' }}
              />
              <span className="text-xl font-semibold tracking-wide text-white"></span>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="request-quote-button"
              aria-label="Enquiry Now"
            >
              <span className="request-quote-text">Enquiry Now</span>
              <span className="request-quote-icon">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-5 text-base">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-[#A3A3A3] hover:text-[#FF5C28] transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold text-white mb-5 text-base">
              Contact Us
            </h3>
            <ul className="space-y-3 text-[#A3A3A3] text-base">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span> H.NO. 6-2-1/13, 2nd floor,<br /> opp. SAIFABAD POLICE STATION,<br /> Lakdikapul, Hyderabad, Telangana 500004</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="tel:+916303822799"
                  className="hover:text-[#FF5C28] transition-colors"
                >
                  +91-63038 22799
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="tel:+914045259569"
                  className="hover:text-[#FF5C28] transition-colors"
                >
                  +91-40452 59569
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="mailto:ceo@aslrealtors.com"
                  className="hover:text-[#FF5C28] transition-colors"
                >
                  info@aslrealtors.com
                </a>
              </li>
            </ul>

            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "#FF5C28",
                    rotate: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#1F1F1F] text-white p-2.5 rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#A3A3A3] gap-4"
        >
          <p className="flex items-center gap-2">
            © 2025 ASL Realtors ✦ Designed by{" "}
            <a
              href="https://wa.me/917013892569"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF5C28] hover:underline transition-colors"
            >
              <Image
                src="/optiwebrix_logo.jpg"
                alt="OptiWebtrix logo"
                width={24}
                height={24}
                className="h-6 w-auto object-contain"
                style={{
                  mixBlendMode: 'multiply',
                }}
              />
              OptiWebtrix Team
            </a>
          </p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
