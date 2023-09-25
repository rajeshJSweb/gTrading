import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="lg:mx-24 lg:my-14">
      <div className="shadow-md border-2 border-slate-50 h-[200px] flex justify-center items-center flex-col gap-5">
        <h1 className="lg:text-3xl font-semibold text-slate-800 lg:px-40 text-center">
          Become part of a global community of people who have found their path
          to the crypto world with CEX.IO
        </h1>
        <Link className="bg-purple-700 hover:bg-purple-600 px-10 py-3 font-semibold text-white rounded-tr-2xl rounded-bl-2xl">
          Join with <span className="text-slate-400">gTrading</span>
        </Link>
      </div>
    </div>
  );
};

export default Join;
