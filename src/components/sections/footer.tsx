"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
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

  const services = [
    { href: "", label: "Project marketing" },
    { href: "", label: "Property management" },
    { href: "", label: "Real estate solutions" },
    { href: "", label: "Land acquisition" },
  ];

  return (
    <footer
      className="relative bg-[#0B0B0B] text-white transition-colors duration-300 overflow-x-clip"
    >
      {/* Footer Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16 mb-16">
          {/* Left Column - Logo and Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 w-full">
              {/* Logo */}
              <div className="flex-shrink-0 -m-2 w-full lg:w-auto">
                <Image
                  src="/asl logo blue tm.pdf (2).png"
                  alt="ASL Realtors logo"
                  width={500}
                  height={300}
                  className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 w-auto min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[450px] xl:min-w-[500px] 2xl:min-w-[550px] object-contain"
                  priority
                />
              </div>
              
              {/* Services */}
              <div className="flex-1 w-full lg:w-auto lg:ml-6 min-w-[220px] pt-0 lg:pt-0">
                <h3 className="font-semibold text-white mb-6 text-lg lg:text-base">
                  Our Services
                </h3>
                <ul className="space-y-3.5">
                  {services.map((service, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap"
                    >
                      <Link
                        href={service.href}
                        className="text-[#E0E0E0] hover:text-[#FF5C28] transition-colors block text-base lg:text-sm font-medium"
                      >
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:col-span-1 lg:col-span-1 pt-0 lg:pt-0"
          >
            <h3 className="font-semibold text-white mb-6 text-lg lg:text-base">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-[#E0E0E0] hover:text-[#FF5C28] transition-colors block text-base lg:text-sm font-medium"
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
            className="flex flex-col md:col-span-1 lg:col-span-1 pt-0 lg:pt-0"
          >
            <h3 className="font-semibold text-white mb-6 text-lg lg:text-base">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-[#E0E0E0] text-base lg:text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-[#E0E0E0]" />
                <span className="font-medium"> H.NO. 6-2-1/13, 2nd floor,<br /> opp. SAIFABAD POLICE STATION,<br /> Lakdikapul, Hyderabad, Telangana 500004</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-[#E0E0E0]" />
                <a
                  href="tel:+916303822799"
                  className="hover:text-[#FF5C28] transition-colors font-medium"
                >
                  +91-63038 22799
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-[#E0E0E0]" />
                <a
                  href="tel:+914045259569"
                  className="hover:text-[#FF5C28] transition-colors font-medium"
                >
                  +91-40452 59569
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-[#E0E0E0]" />
                <a
                  href="mailto:ceo@aslrealtors.com"
                  className="hover:text-[#FF5C28] transition-colors font-medium"
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
            Copyright ©️ 2025 ASL REALTORS. All rights reserved. ✦ Designed by{" "}
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
