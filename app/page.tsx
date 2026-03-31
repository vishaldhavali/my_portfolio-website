"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Footer from "./components/Footer";
import ParallaxBackground from "./components/ParallaxBackground";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import PageLayout from "./components/layouts/PageLayout";
import LoadingScreen from "./components/LoadingScreen";
import dynamic from "next/dynamic";

// Dynamic imports for heavy components
const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const Resume = dynamic(() => import("./components/Resume"), {
  loading: () => <div className="h-96" />,
  ssr: false,
});

const Education = dynamic(() => import("./components/Education"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const Certifications = dynamic(() => import("./components/Certifications"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const HobbiesInterests = dynamic(
  () => import("./components/HobbiesInterests"),
  {
    loading: () => <div className="h-96" />,
    ssr: true,
  },
);

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <div className="h-96" />,
});

const Work = dynamic(() => import("./components/Work"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const ParticleBackground = dynamic(
  () => import("./components/ParticleBackground"),
  {
    ssr: false,
  },
);

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
    }, 800);

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
                <section id="achievements">
                  <Achievements />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="softskills">
                  <SoftSkills />
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
                <section id="hobbies">
                  <HobbiesInterests />
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
