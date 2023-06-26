import React from 'react';
import image from './../../../src/utilities/img/img.jpg'
import image2 from './../../../src/utilities/img/image.jpg'
import image3 from './../../../src/utilities/img/image3.jpg'

const Banner = () => {
    return (
        <div className='flex h-[500px]'>
            <div className='w-6/12 flex flex-col justify-center ml-20 gap-5'>
                    <h1 className='text-[35px] font-semibold'>Your all-in-one <span className='text-purple-700 uppercase text-[42px]'>crypto platform</span> to buy, sell, trade, hold, and <span className='uppercase'>earn</span> </h1>
                    <p className='font-semibold text-purple-700 text-lg'>Since 2013, we've guided millions of global users on their digital assets journey1</p>
                    <div>
                    <button className='py-3 px-10 bg-purple-700 text-white font-semibold rounded-md'>Get Start</button>
                    </div>
            </div>
            <div className='w-6/12 flex justify-center items-center'>
                <div className='w-3/12 relative left-10 top-7 rounded-xl border-2 border-slate-300'>
                    <img className='rounded-xl shadow-2xl' src={image3} alt="" />
                </div>
                <div className='w-7/12 rounded-md shadow-2xl'>
                    <img className='rounded-xl' src={image2} style={{ zIndex: -1 }} alt="" />
                </div>
                <div className='relative -left-14 -top-10 rounded-xl border-2 border-slate-300 shadow-2xl w-2/12'>
                    <img className='rounded-xl' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;