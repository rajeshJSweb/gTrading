import React, { useContext } from 'react';
import Banner from './Banner';
import Services from './Services';
import Table from './Table';
import { useLoaderData } from 'react-router-dom';
import BuyNow from './BuyNow';
import About from './About';
import Clients from './Clients';
import Media from './Media';
import Featured from './Featured';
import Massege from './Massege';
import Join from './Join';

const Home = () => {
    const currencies = useLoaderData()
    return (
        <div>
              <style>
                    {`
                    /* Custom scrollbar styles */
                    ::-webkit-scrollbar {
                        width: 5px;
                    }
                    
                    ::-webkit-scrollbar-track {
                        background-color: #F1F1F1;
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        background-color: #888;
                        border-radius: 0.8em;
                    }
                    `}
                </style>
            <Banner/>
            <Services/>
            <Table currencies={currencies}/>
            <BuyNow/>
            <About/>
            <Clients />
            <Media/>
            <Featured/>
            <Massege/>
            <Join/>
        </div>
    );
};

export default Home;