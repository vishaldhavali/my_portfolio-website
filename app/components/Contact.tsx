"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Verify environment variables
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-red-900/90 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-red-200">
                    Configuration Error
                  </p>
                  <p className="mt-1 text-sm text-red-300/80">
                    Email service not properly configured.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-red-500/20">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-400 hover:text-red-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </motion.div>
        ),
        {
          duration: 5000,
          position: "bottom-right",
        }
      );
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Sending email with:", {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form: formRef.current,
      });

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Reset form
      setFormData({ user_name: "", user_email: "", message: "" });

      // Success toast
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-[#1A0033]/90 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-purple-200">
                    Message Sent Successfully!
                  </p>
                  <p className="mt-1 text-sm text-purple-300/80">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-purple-500/20">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-purple-400 hover:text-purple-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </motion.div>
        ),
        {
          duration: 5000,
          position: "bottom-right",
        }
      );
    } catch (error) {
      // Error toast
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-red-900/90 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-red-200">
                    Failed to Send Message
                  </p>
                  <p className="mt-1 text-sm text-red-300/80">
                    Please try again later.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-red-500/20">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-400 hover:text-red-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </motion.div>
        ),
        {
          duration: 5000,
          position: "bottom-right",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      animation="slideUp"
      className="py-4 md:py-6 bg-[#0A0118]/50 relative"
    >
      <div className="container mx-auto px-4 md:mt-0">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          style={{
            background: "linear-gradient(to right, #A855F7, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#6EACDA]">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-[#021526] p-3 rounded-full">
                  <FaMapMarkerAlt className="text-[#6EACDA] text-xl" />
                </div>
                <div>
                  <p className="text-[#E2E2B6]">Location</p>
                  <p className="text-white">Bangalore, Karnataka</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#021526] p-3 rounded-full">
                  <FaEnvelope className="text-[#6EACDA] text-xl" />
                </div>
                <div>
                  <p className="text-[#E2E2B6]">Email</p>
                  <a
                    href="mailto:vishaldhavali2209@gmail.com"
                    className="text-white hover:text-[#6EACDA] transition-colors"
                  >
                    vishaldhavali2209@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#021526] p-3 rounded-full">
                  <FaPhone className="text-[#6EACDA] text-xl" />
                </div>
                <div>
                  <p className="text-[#E2E2B6]">Phone</p>
                  <p className="text-white">+91 9164302294</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-[#6EACDA]">
                Social Links
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vishal-dhavali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#021526]/50 p-4 rounded-full hover:bg-purple-600/20 transition-colors group border border-purple-500/20"
                >
                  <FaLinkedin className="text-2xl text-purple-400 group-hover:text-purple-300" />
                </a>
                <a
                  href="https://github.com/vishaldhavali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#021526]/50 p-4 rounded-full hover:bg-purple-600/20 transition-colors group border border-purple-500/20"
                >
                  <FaGithub className="text-2xl text-purple-400 group-hover:text-purple-300" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-[#E2E2B6]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#021526] text-white border border-[#6EACDA] focus:outline-none focus:ring-2 focus:ring-[#6EACDA] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block mb-2 text-[#E2E2B6]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#021526] text-white border border-[#6EACDA] focus:outline-none focus:ring-2 focus:ring-[#6EACDA] transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-[#E2E2B6]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[#1A0033] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
