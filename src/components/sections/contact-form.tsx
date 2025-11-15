"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactFormSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [serviceType, setServiceType] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("fullName") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string)?.trim() ?? "";
    const location = (formData.get("location") as string)?.trim() ?? "";
    const projectService = serviceType.trim();
    const message = (formData.get("message") as string)?.trim() ?? "";

    if (!projectService) {
      alert("Please select a service type before submitting.");
      return;
    }

    const whatsappNumber = "916303822799";
    const whatsappMessage = [
      "Hello ASL Realtors, I'd like to make an enquiry.",
      fullName ? `Name: ${fullName}` : null,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      projectService ? `Service: ${projectService}` : null,
      location ? `Location: ${location}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    form.reset();
    setServiceType("");
  };

  return (
    <section
      id="contact"
      className="bg-background dark:bg-[#0B0B0B] py-20 lg:py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex w-full flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="w-full overflow-hidden rounded-3xl border border-primary/10 bg-white/90 shadow-[0_40px_120px_rgba(75,58,43,0.18)] backdrop-blur-xl"
              >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1752138554116!2d78.46002827527444!3d17.40337710234407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97441378d4bd%3A0x7674e068ee13ee48!2sASL%20REALTORS%20A%20Realestate%20Solutions%20Company!5e0!3m2!1sen!2sin!4v1762971532643!5m2!1sen!2sin"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full rounded-3xl md:h-[540px]"
                title="ASL Realtors location"
              />
            </motion.div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-secondary dark:bg-neutral-900/60 border border-white/10 p-8 lg:p-12 rounded-2xl shadow-xl dark:shadow-none backdrop-blur-md transition-colors duration-300"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Label htmlFor="fullName" className="font-medium text-text-dark dark:text-white">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-2 bg-background dark:bg-neutral-900/80 dark:text-white dark:border-white/10 transition-all focus:scale-[1.01]"
                />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="email" className="font-medium text-text-dark dark:text-white">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 bg-background dark:bg-neutral-900/80 dark:text-white dark:border-white/10 transition-all focus:scale-[1.01]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <Label htmlFor="phone" className="font-medium text-text-dark dark:text-white">
                    Phone Number (optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 bg-background dark:bg-neutral-900/80 dark:text-white dark:border-white/10 transition-all focus:scale-[1.01]"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <Label htmlFor="location" className="font-medium text-text-dark dark:text-white">
                    Project Location <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    className="mt-2 bg-background dark:bg-neutral-900/80 dark:text-white dark:border-white/10 transition-all focus:scale-[1.01]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <Label htmlFor="renovationType" className="font-medium text-text-dark dark:text-white">
                    Type of Service <span className="text-primary">*</span>
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType} required>
                    <SelectTrigger className="mt-2 w-full bg-background dark:bg-neutral-900/80 dark:text-white dark:border-white/10">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-background dark:bg-neutral-900/90 dark:text-white border border-white/10">
                      <SelectItem value="Retail properties">Retail properties</SelectItem>
                      <SelectItem value="Commercial properties">Commercial properties</SelectItem>
                      <SelectItem value="Hospitality properties">Hospitality properties</SelectItem>
                      <SelectItem value="Warehouses">Warehouses</SelectItem>
                      <SelectItem value="Open plots">Open plots</SelectItem>
                      <SelectItem value="Office spaces">Office spaces</SelectItem>
                      <SelectItem value="Co-working spaces">Co-working spaces</SelectItem>
                      <SelectItem value="Investments">Investments</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="renovationType" value={serviceType} />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 }}
              >
                <Label htmlFor="message" className="font-medium text-text-dark dark:text-white">
                  Message / Project Brief
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 bg-background dark:bg-neutral-900/80 dark:text-white dark:border-white/10 transition-all focus:scale-[1.01]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 }}
              >
                <motion.button
                    type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="request-quote-button w-full justify-center mt-2"
                  >
                  <span className="request-quote-text">Enquiry Now</span>
                  <span className="request-quote-icon">
                    <ArrowRight className="h-5 w-5" />
                    </span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;