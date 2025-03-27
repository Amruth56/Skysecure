import React from "react";
import { linkedinIcon, twitterIcon } from "./icons.jsx";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="text-center">
          <p className="mb-12 text-base text-gray-300">
            Visit our global site:{" "}
            <a
              href="https://skysecure.ai"
              className="hover:text-white transition-colors"
            >
              SkySecure.ai
            </a>
          </p>
          <div className="flex gap-6 justify-center mb-6">
            <a
              href="https://linkedin.com/company/skysecure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <div dangerouslySetInnerHTML={{ __html: linkedinIcon }} />
            </a>
            <a
              href="https://twitter.com/skysecure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity"
            >
              <div dangerouslySetInnerHTML={{ __html: twitterIcon }} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 SkySecure Cyber Security LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
