import React from "react";
import { quoteIcon } from "./icons.jsx";

const TestimonialCard = ({ quote, author, position }) => {
  return (
    <article className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-6">
        <div dangerouslySetInnerHTML={{ __html: quoteIcon }} />
      </div>
      <blockquote className="mb-8 text-lg text-gray-600">"{quote}"</blockquote>
      <footer className="flex flex-col">
        <cite className="text-base font-bold text-black not-italic">
          --{author}
        </cite>
        <span className="text-base text-gray-600">{position}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
