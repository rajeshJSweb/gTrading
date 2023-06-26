import React, { useContext } from 'react';
import Banner from './Banner';
import Services from './Services';
import Table from './Table';
import { useLoaderData } from 'react-router-dom';
import BuyNow from './BuyNow';
import About from './About';
import Clients from './Clients';
import Media from './Media';

const Home = () => {
    const currencies = useLoaderData()
    return (
        <div>
            <Banner/>
            <Services/>
            <Table currencies={currencies}/>
            <BuyNow/>
            <About/>
            <Clients />
            <Media/>
        </div>
    );
};

export default Home;