"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxBackground from "./components/ParallaxBackground";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import PageLayout from "./components/layouts/PageLayout";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <PageTransition key="content">
            <PageLayout>
              <Navbar />
              <main className="pt-[var(--navbar-height-mobile)] md:pt-[var(--navbar-height-desktop)]">
                <section
                  id="home"
                  className="min-h-[calc(100vh-var(--navbar-height-mobile))] md:min-h-[calc(100vh-var(--navbar-height-desktop))]"
                >
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="education">
                  <Education />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="work">
                  <Work />
                </section>
                <section id="certifications">
                  <Certifications />
                </section>
                <section id="resume">
                  <Resume />
                </section>
                <section id="contact">
                  <Contact />
                </section>
                <Footer />
              </main>
            </PageLayout>
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  );
}
