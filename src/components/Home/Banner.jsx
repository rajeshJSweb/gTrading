import React from "react";
import image from "./../../../src/utilities/img/img.jpg";
import image2 from "./../../../src/utilities/img/image.jpg";
import image3 from "./../../../src/utilities/img/image3.jpg";

const Banner = () => {
  return (
    <div className="px-2">
      <div className="flex flex-col md:flex-row md:h-[500px] md:pt-[200px] md:mb-24">
        <div className="w-full md:w-6/12 md:flex flex-col justify-center md:ml-20 md:gap-5">
          <h1 className="lg:text-[35px] font-semibold text-center md:text-start mb-2">
            Your all-in-one{" "}
            <span className="text-purple-700 uppercase lg:text-[42px]">
              crypto platform
            </span>{" "}
            to buy, sell, trade, hold, and{" "}
            <span className="uppercase">earn</span>{" "}
          </h1>
          <p className="font-semibold text-purple-700 text-center md:text-start lg:text-lg mb-5">
            Since 2013, we've guided millions of global users on their digital
            assets journey1
          </p>
          <div className="w-full flex justify-center">
            <button className="py-3 px-10 bg-purple-700 text-white font-semibold rounded-md">
              Get Start
            </button>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex justify-center items-center my-14 md:my-0">
          <div className="md:w-3/12 relative left-10 top-7 rounded-xl border-2 border-slate-300">
            <img className="rounded-xl shadow-2xl" src={image3} alt="" />
          </div>
          <div className="md:w-7/12 rounded-md shadow-2xl">
            <img
              className="rounded-xl"
              src={image2}
              style={{ zIndex: -1 }}
              alt=""
            />
          </div>
          <div className="relative -left-14 -top-10 rounded-xl border-2 border-slate-300 shadow-2xl w-2/12">
            <img className="rounded-xl" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
