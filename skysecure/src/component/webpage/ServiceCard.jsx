import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-6">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold text-black">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
