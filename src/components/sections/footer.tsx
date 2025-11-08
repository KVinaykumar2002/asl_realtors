"use client";

import { ArrowRight, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-[#0B0B0B] text-white relative overflow-hidden transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <span className="font-black text-white/5 select-none leading-none text-[10rem] sm:text-[12rem] lg:text-[14rem] whitespace-nowrap">
          Livohaus
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-snug max-w-lg mb-8">
              Your trusted partner in home renovation & interiors.
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF642F] to-[#FF4800] px-8 py-3.5 text-base font-medium text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
              aria-label="Request a free quote"
            >
              Request Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-5 text-base">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#ff5c28' }}
                    className="text-[#A3A3A3] transition-colors text-base font-normal inline-block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold text-white mb-5 text-base">Contact Us</h3>
            <ul className="space-y-3 text-base text-[#A3A3A3]">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>California, United States</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="tel:617-555-0192"
                  whileHover={{ x: 5, color: '#ff5c28' }}
                  className="flex items-start transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                  <span>(617) 555-0192</span>
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="mailto:contact@livohaus.com"
                  whileHover={{ x: 5, color: '#ff5c28' }}
                  className="flex items-start transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                  <span>contact@livohaus.com</span>
                </motion.a>
              </motion.li>
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex space-x-3 mt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#ff5c28' }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#1F1F1F] text-white p-2.5 rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#A3A3A3] gap-4"
        >
          <p className="text-center sm:text-left">
            © 2025 Livohaus ✦ Designed by <a href="#" className="text-primary hover:underline">Arnab</a>
          </p>
          <p className="text-center sm:text-right">
            Crafted with care ✦ Built with excellence
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;