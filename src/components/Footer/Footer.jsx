import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGridFill, BsArrowUpShort } from "react-icons/bs";
import { FaFacebookMessenger, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="lg:flex justify-between lg:my-10 lg:mx-24 px-2">
      <div className="lg:w-4/12 flex flex-col gap-5">
        <h1 className="text-[70px] text-purple-700 font-semibold text-center lg:text-start">
          G<span className="text-[30px] text-slate-500">trading</span>
        </h1>
        <h2 className="lg:text-left text-xl font-semibold text-slate-700 text-center">
          Stay tuned
        </h2>
        <form className="flex flex-col gap-5 mb-10 lg:mb-0" action="">
          <input
            className="lg:w-10/12 outline-none border-b-2 mt-5 border-slate-200 p-2"
            placeholder="Email address"
            type="email"
          />
          <input
            className="bg-purple-700 text-xl font-semibold text-white px-5 py-2 lg:w-10/12"
            type="submit"
            value="Subscribe Now"
          />
        </form>
      </div>
      <div className="lg:w-4/12 flex gap-5">
        <div className="w-8/12 flex flex-col gap-1">
          <h1 className="text-xl text-slate-900 font-semibold border-b-2">
            Service
          </h1>
          <Link>Buy & Sell Crypto</Link>
          <Link>Buy Bitcoin</Link>
          <Link>Buy Ethereum</Link>
          <Link>BTC to USD</Link>
          <Link>Buy Bitcoin with Bank Account</Link>
          <Link>Buy Bitcoin with Prepaid Card</Link>
          <Link>Buy Crypto with Apple pay</Link>
        </div>
        <div className="w-4/12 flex flex-col gap-1">
          <h1 className="text-xl text-slate-900 font-semibold border-b-2">
            About Us
          </h1>
          <Link>About Us</Link>
          <Link>Contact</Link>
          <Link>Location</Link>
          <Link>University</Link>
          <Link>Legal & Security</Link>
          <Link>Tern & Conditions</Link>
          <Link>Team</Link>
          <Link>Blogs</Link>
          <Link>Press</Link>
          <Link>Sitemap</Link>
        </div>
      </div>
      <div className="lg:w-4/12 flex justify-center w-full px-2">
        <div className="w-full lg:w-auto text-center">
          <h1 className="text-xl font-semibold text-slate-900 border-b-2 border-slate-500">
            Follow
          </h1>
          <div className="flex gap-3 justify-center my-5 text-3xl">
            <FaFacebookMessenger className="text-purple-600 hover:text-purple-500" />
            <BsFacebook className="text-blue-700 hover:text-blue-500" />
            <FaTiktok className="text-red-600 hover:text-red-400" />
            <AiFillInstagram className="text-pink-600 hover:text-pink-400" />
          </div>
          <h1 className="border-[1px] p-2 rounded-xl">gTrading Status</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
