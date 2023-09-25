import React from "react";
import image1 from "./../../utilities/img/investo.png";
import image2 from "./../../utilities/img/bloombarg.png";
import image3 from "./../../utilities/img/hedgeweek.png";

const Media = () => {
  return (
    <div className="my-20 px-2">
      <h1 className="text-center text-3xl text-slate-700 font-semibold">
        …and positive media coverage
      </h1>
      <div className="w-full lg:flex gap-20 justify-center items-center mt-10">
        <img
          className="lg:w-[20%] shadow-sm p-3 rounded-xl"
          src={image1}
          alt=""
        />
        <img
          className="lg:w-[20%] shadow-sm p-3 rounded-xl"
          src={image2}
          alt=""
        />
        <img
          className="lg:w-[20%] shadow-sm p-3 rounded-xl"
          src={image3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Media;
