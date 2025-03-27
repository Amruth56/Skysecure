import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "One of the most remarkable aspects of our partnership with Skysecure has been their unwavering support. They provided comprehensive training to our staff, ensuring a smooth transition to the new systems. Their customer service is unparalleled; they were always available to answer our queries, address any issues promptly, and provide insightful advice to help us leverage technology to our advantage.",
      author: "Saptesh Parish",
      position: "Director, Enterprise IT",
    },
    {
      quote:
        "With Skysecure's expertise, we secured our FMCG operations using Microsoft Security solutions—achieving 100% MFA adoption and significantly reducing phishing risks. Their seamless implementation gave us confidence and control over our security landscape.",
      author: "Ajith Kumar",
      position: "IT Head",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-16 text-4xl font-bold text-center text-sky-600">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
