import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsGridFill,BsArrowUpShort} from 'react-icons/bs'
import {FaFacebookMessenger,FaTiktok} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosArrowUp} from 'react-icons/io'

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-slate-50'>
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
                    <div className='flex gap-5'>
                        <Link className='bg-slate-300 rounded-md py-2 px-5 hover:bg-purple-800 hover:text-purple-100'>Login</Link>
                        <Link className='bg-purple-700 text-white rounded-md py-2 px-5 hover:bg-purple-800 hover:text-purple-100'>New User?</Link>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 justify-center pb-5 pt-2 items-center relative top-16'>
                    <div className='flex bg-gray-200 px-3 py-2 justify-center items-center gap-1 rounded-md hover:bg-purple-200 hover:text-purple-800 '>
                        <BsGridFill/>
                        <Link>Products</Link>
                        <IoIosArrowUp className='text-xl text-black transform hover:rotate-180 transition-all duration-200 cursor-pointer'/>
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