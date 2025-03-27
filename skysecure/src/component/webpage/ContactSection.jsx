import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-16 text-4xl font-bold text-center text-sky-600">
          Get in Touch
        </h2>
        <div className="flex gap-12 max-md:flex-col">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
