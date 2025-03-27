"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Show success message or handle errors
  };

  return (
    <div className="flex-1">
      <form
        className="p-8 bg-white rounded-xl shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-base text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="px-4 w-full rounded-lg border border-gray-300 h-[50px] focus:border-sky-600 focus:ring-1 focus:ring-sky-600 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="px-4 w-full rounded-lg border border-gray-300 h-[50px] focus:border-sky-600 focus:ring-1 focus:ring-sky-600 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-base text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="p-4 w-full rounded-lg border border-gray-300 h-[146px] focus:border-sky-600 focus:ring-1 focus:ring-sky-600 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="py-3 w-full font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
