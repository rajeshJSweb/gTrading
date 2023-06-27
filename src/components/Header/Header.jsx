import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsGridFill,BsArrowUpShort,BsArrowUpRight} from 'react-icons/bs'
import {FaFacebookMessenger,FaTiktok} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosArrowUp} from 'react-icons/io'
import { motion } from 'framer-motion';
import {MdCurrencyExchange} from 'react-icons/md'
import {BiMobileAlt} from 'react-icons/bi'

const Header = () => {
    const [click, setClick]= useState(true)
    const [childHover, setChildHover]= useState(true)
    const [mousePosition, setMousePosition]= useState({x:0, y:0})


    const handleMouseOver = ()=>{
        setClick(false)
    }

    const handleMouseLeave =()=>{
        if(!childHover){
            setClick(true)
        }
    }

    const handleChildMouseOver = ()=>{
        setChildHover(true)
    }


    const handleChildMouseLeave=()=>{
        setChildHover(true)
        if(!click){
            setClick(true)
        }
    }


    const handleMouseMove =()=>{
            setMousePosition({x:e.clientX, y:e.clientY})
            if(mousePosition.y > e.clientY){
                setClick(true)
            }
    }

    return (
        <div className='bg-gradient-to-r fixed w-full flex flex-col justify-center items-center from-purple-50 to-purple-50 bg-opacity-10 z-10' style={{zIndex:1}}>
            <div className='flex justify-between fixed w-full'>
                <div className='w-4/12 flex justify-center items-center text-2xl gap-5'>
                    <BsFacebook/>
                    <FaFacebookMessenger/>
                    <AiFillInstagram/>
                    <FaTiktok/>
                </div>
                <div className='w-4/12 text-center'>
                    <p><span className='text-[52px] text-purple-700 font-semibold'>G</span><span className='text-slate-700 font-semibold'>trading</span></p>
                </div>
                <div className='w-4/12 flex justify-center items-center font-semibold'>
                    <motion.div whileTap={{scale:1 , transition:{duration:0.75}}} className='flex gap-5'>
                        <Link to='/login' className='bg-slate-300 rounded-md py-2 px-5 hover:bg-purple-800 hover:text-purple-100'>Login</Link>
                        <Link to='registration' className='bg-purple-700 text-white rounded-md py-2 px-5 hover:bg-purple-800 hover:text-purple-100'>New User?</Link>
                    </motion.div>
                </div>
            </div>
            <div className='flex gap-10 w-full justify-center pb-5 pt-2 items-center relative top-16'>
                    <div>
                        <div  
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className={`flex bg-gray-200 px-3 py-2 justify-center items-center gap-1 rounded-md hover:bg-purple-200 hover:text-purple-800`}>
                                <BsGridFill/>
                                <Link>Products</Link>
                                <IoIosArrowUp className={`text-xl text-black transform  transition-all duration-200 cursor-pointer ${!click? 'rotate-0': 'rotate-180'}`}/>
                        </div>
                        <div
                        onMouseOver={handleChildMouseOver}
                        onMouseLeave={handleChildMouseLeave}
                        className={`w-8/12 bg-slate-50 h-[500px] z-10 absolute top-20 left-4 -right-10 rounded-xl shadow-xl ${click? 'hidden':'block'}`}>
                            <div className='relative flex p-2 mx-5 mt-10'>
                                <div className='w-4/12'>
                                    <h1 className='text-slate-900 font-semibold'>For Traders</h1>
                                    <div className='pr-8 flex flex-col gap-5 mt-5'>
                                        <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                            <div className='flex gap-2'>
                                                <MdCurrencyExchange className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Exchange Plus</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Trad with deep liquity</p>
                                        </div>
                                        <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                            <div className='flex gap-2'>
                                                <MdCurrencyExchange className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Spot Trading</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Place limit, market orders here</p>
                                        </div>
                                        <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                            <div className='flex gap-2'>
                                                <MdCurrencyExchange className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Margin Trading</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Trade digital assets on the leverage</p>
                                        </div>
                                        <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                            <div className='flex gap-2 items-center' >
                                                <BiMobileAlt className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Mobile App</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Buy. sell, exchange crypto anywhere and anytime</p>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='w-4/12'>
                                    <h1 className='text-slate-900 font-semibold'>For Everyone</h1>
                                <div className='flex flex-col gap-3 mt-5'>
                                    <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                        <div className='flex gap-2 items-center' >
                                                <BiMobileAlt className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Mobile App</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Buy. sell, exchange crypto anywhere and anytime</p>
                                    </div>
                                    <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                        <div className='flex gap-2 items-center' >
                                                <BiMobileAlt className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Earn</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Buy. sell, exchange crypto anywhere and anytime</p>
                                    </div>
                                    <div className='hover:bg-purple-100 px-4 py-4 rounded-xl'>
                                        <div className='flex gap-2 items-center' >
                                                <BiMobileAlt className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Loan</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Buy. sell, exchange crypto anywhere and anytime</p>
                                    </div>
                                    <div className='hover:bg-purple-100 px-2 py-4 rounded-xl'>
                                        <div className='flex gap-2 items-center' >
                                                <BiMobileAlt className='text-purple-700 text-xl'/>
                                                <Link className='font-semibold'>Wallets</Link>
                                            </div>
                                            <p className='text-xs pl-7 text-slate-700 font-medium'>Buy. sell, exchange crypto anywhere and anytime</p>
                                    </div>
                                </div>
                                </div>
                                <div className='w-4/12'>
                                    <h1>For Bussiness</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className='border-2 border-purple-500 h-[40px]'/>
                    <Link className='hover:text-purple-700'>Fees</Link>
                    <Link className='hover:text-purple-700'>Company</Link>
                    <Link className='hover:text-purple-700'>Prices</Link>
                    <Link className='hover:text-purple-700'>Affiliate Program</Link>
                    <Link className='hover:text-purple-700'>University</Link>
            </div>
        </div>
    );
};

export default Header;