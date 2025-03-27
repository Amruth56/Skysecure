import React from "react";
import { personIcon, phoneIcon, locationIcon } from "./icons.jsx";

const ContactInfo = () => {
  return (
    <div className="flex-1">
      <div className="flex gap-4 items-start mb-8">
        <div className="mt-1">
          <div dangerouslySetInnerHTML={{ __html: personIcon }} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-black">Contact Person</h3>
          <p className="text-base text-gray-600">Mohammed Zaheer, CEO</p>
        </div>
      </div>

      <div className="flex gap-4 items-start mb-8">
        <div className="mt-1">
          <div dangerouslySetInnerHTML={{ __html: phoneIcon }} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-black">Phone</h3>
          <p className="text-base text-gray-600">+971 50 559 3124</p>
        </div>
      </div>

      <div className="flex gap-4 items-start mb-8">
        <div className="mt-1">
          <div dangerouslySetInnerHTML={{ __html: locationIcon }} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-black">Address</h3>
          <p className="text-base text-gray-600">
            Sunshine Building, Office No. 110, Sheikh Rashid Rd - Al Garhoud
            Deira - Dubai - UAE
          </p>
        </div>
      </div>

      <img
        src="/location.png"
        alt="SkySecure UAE office location"
        className="w-full rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10),0px_10px_15px_0px_rgba(0,0,0,0.10)]"
      />
    </div>
  );
};

export default ContactInfo;
