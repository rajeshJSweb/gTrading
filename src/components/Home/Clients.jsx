import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Clients = ({}) => {
    const [item, setItem]= useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div className='mx-24 '>
            <h1 className='text-center text-4xl text-slate-700 font-semibold my-10'>Our products received recognition</h1>
            <div className='grid grid-cols-3 w-full justify-center items-center gap-5'>
                {
                    item.slice(0,9).map(item => <div className='border-2 flex flex-col items-center border-slate-200 shadow-sm rounded-xl h-[180px] p-2' item={item}>
                        <img className='h-[30%] text-center mt-5' src={item.img} alt="" />
                        <h1 className='text-center text-xl text-slate-700 mt-5'>{item.title}</h1>
                        <p className='text-sm mt-2'>{item.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Clients;