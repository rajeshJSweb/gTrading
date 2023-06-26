import React, { createContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


export const myContext = createContext();

const Main = () => {
    const services= useLoaderData();

    const allValue = {
        services
    }


    return (
        <myContext.Provider value={allValue}>
            <Header/>
            <Outlet/>
            <Footer/>
        </myContext.Provider>
    );
};

export default Main;