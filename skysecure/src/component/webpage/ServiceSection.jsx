import React from "react";
import ServiceCard from "./ServiceCard";
import {
  securityIcon,
  implementationIcon,
  complianceIcon,
  automationIcon,
  marketplaceIcon,
} from "./icons.jsx";

const ServicesSection = () => {
  const services = [
    {
      icon: securityIcon,
      title: "Cybersecurity Consulting",
      description:
        "Expert advisory services to improve your security posture and protect your digital assets.",
    },
    {
      icon: implementationIcon,
      title: "Implementation & Managed Services",
      description:
        "End-to-end deployment and management of security solutions tailored to your needs.",
    },
    {
      icon: complianceIcon,
      title: "Cyber Risk & Compliance",
      description:
        "Comprehensive assessments and auditing to ensure regulatory compliance.",
    },
    {
      icon: automationIcon,
      title: "Automation",
      description:
        "Advanced security automation and orchestration solutions for enhanced efficiency.",
    },
    {
      icon: marketplaceIcon,
      title: "Marketplace",
      description: "One-stop shop for all your IT software procurement needs.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-16 text-4xl font-bold text-center text-sky-600">
          Our Services
        </h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
