import React from "react";

const HeroSection = () => {
  return (
    <section className="overflow-hidden relative">
      <img
        src="/mainpagebg.png"
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <div className="absolute  bg-white bg-opacity-40" />
      <div className="relative max-w-screen-xl mx-auto px-4 py-28 text-center">
        <h1 className="text-5xl font-extrabold text-black max-sm:text-3xl">
          Empowering Dubai with
          <br /> World-Class Cybersecurity
        </h1>
        <p className="mt-6 mb-12 text-xl text-gray-600 max-sm:text-lg">
          Protecting businesses with cutting-edge security solutions and
          <br /> trusted expertise
        </p>
        <a href="#contact">
              <button className="px-8 py-4 text-lg font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors">
                Get in Touch
              </button>
            </a>
      </div>
    </section>
  );
};

export default HeroSection;