"use client";
import React from "react";
import Header from "@/component/webpage/Header";

import HeroSection from "@/component/webpage/HeroSection";
import AboutSection from "@/component/webpage/AboutSection";
// import ServicesSection from "@/component/webpage/ServicesSection";
import ServicesSection from "@/component/webpage/ServiceSection";
import TestimonialsSection from "@/component/webpage/TestimonialsSection";
import ContactSection from "@/component/webpage/ContactSection";
import Footer from "@/component/webpage/Footer";
import ScrollToTop from "@/component/webpage/ScrollToTop";

const SkySecureHomepage = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SkySecureHomepage;
