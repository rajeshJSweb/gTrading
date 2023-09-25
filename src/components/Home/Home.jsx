import React, { useContext } from "react";
import Banner from "./Banner";
import Services from "./Services";
import Table from "./Table";
import { useLoaderData } from "react-router-dom";
import BuyNow from "./BuyNow";
import About from "./About";
import Clients from "./Clients";
import Media from "./Media";
import Featured from "./Featured";
import Massege from "./Massege";
import Join from "./Join";

const Home = () => {
  const currencies = useLoaderData();
  return (
    <div className="overflow-hidden">
      <Banner />
      <Services />
      <Table currencies={currencies} />
      <BuyNow />
      <About />
      <Clients />
      <Media />
      <Featured />
      <Massege />
      <Join />
    </div>
  );
};

export default Home;
