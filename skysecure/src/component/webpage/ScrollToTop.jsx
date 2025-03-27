"use client";
import React, { useState, useEffect } from "react";
import { arrowUpIcon } from "./icons.jsx";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex fixed right-8 bottom-8 justify-center items-center w-12 h-12 rounded-full shadow-md bg-sky-600 bg-opacity-80 hover:bg-opacity-100 transition-all"
        >
          <div dangerouslySetInnerHTML={{ __html: arrowUpIcon }} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
