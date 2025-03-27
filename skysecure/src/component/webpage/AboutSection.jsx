import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="flex gap-12 items-center max-md:flex-col">
          <div className="flex-1">
            <h2 className="mb-6 text-4xl font-bold text-sky-600">
              About SkySecure UAE
            </h2>
            <div className="space-y-8 text-lg text-gray-600">
              <p>
                SkySecure Cyber Security LLC is the UAE arm of SkySecure
                Technologies Pvt. Ltd. (headquartered in Bangalore, India). We
                bring SkySecure's global expertise in cybersecurity to
                businesses in the Middle East.
              </p>
              <p>
                Our Dubai office, located in the Sunshine Building, Al Garhoud,
                allows us to serve local clients with on-the-ground support and
                regional insights.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/office.png"
              alt="SkySecure UAE office"
              className="w-full rounded-[8px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
