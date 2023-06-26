import React, { useContext } from 'react';
import { myContext } from '../../layout/Main';
import image from './../../utilities/img/coin.png'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Services = () => {
    const {services}= useContext(myContext)
    return (
        <div className='mx-20'>
            <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y,FreeMode]}
            spaceBetween={20}
            slidesPerView={4.25}
            Autoplay={{delay:3000}}
            pagination={{ clickable: true }}
            freeMode={true}
            >
                {
                    services.map(service => <SwiperSlide className='py-5' service={service}>
                       <div className='h-[150px] rounded-lg border-2  border-slate-100 shadow-xl px-3 py-3 hover:transition-transform hover:ease-in-out duration-100 hover:transform hover:translate-y-[-10%]'>
                            <h1 className='text-xl font-semibold'>{service.title}</h1>
                            <p className='text-lg'>{service.description}</p>
                            <div className='flex'>
                                <Link className='hover:text-purple-700 py-2 underline cursor-pointer'>Learn more</Link>
                                <img className='relative bottom-5 left-20 w-[80px]' src={service.img} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Services;