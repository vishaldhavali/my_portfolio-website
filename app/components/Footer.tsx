"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#080014] py-8 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-purple-400">
            &copy; {new Date().getFullYear()} Vishal Dhavali. All rights
            reserved.
          </p>
          <p className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
            Made with passion and dedication
          </p>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/vishal-dhavali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-pink-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/vishaldhavali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-pink-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
