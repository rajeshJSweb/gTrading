import React from "react";

const About = () => {
  return (
    <div className="md:mx-20 w-full px-2">
      <h1 className="text-center text-4xl text-slate-700 font-semibold py-5">
        About Us
      </h1>
      <div className="flex justify-evenly mt-10 text-center md:text-start">
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-4xl font-semibold text-slate-600 text-center">
            2023
          </h1>
          <p className="lg:text-lg text-slate-500">Market entry year</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-4xl font-semibold text-slate-600 text-center">
            ~4M
          </h1>
          <p className="lg:text-lg text-slate-500">
            Registered userson trade platform
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-4xl font-semibold text-slate-600 text-center">
            0%
          </h1>
          <p className="lg:text-lg text-slate-500">Customers' funds lost</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-4xl font-semibold text-slate-600 text-center">
            99%
          </h1>
          <p className="lg:text-lg text-slate-500">
            Countries supportedand 48 US States
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
