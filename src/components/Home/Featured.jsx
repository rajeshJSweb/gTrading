import React, { useEffect, useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Featured = () => {
    const [image, setImage]= useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setImage(data))
    },[])
    return (
        <div className='relative z-0'>
            <h1 className='text-center text-slate-700 text-4xl font-semibold'>Featured in</h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y,FreeMode]}
                spaceBetween={20}
                slidesPerView={4.25}
                Autoplay={{delay:3000}}
                pagination={{ clickable: true }}
                freeMode={true}
                navigation={true}
            >
                {
                    image.map(image => <SwiperSlide image={image}>
                        <div className='h-[150px] flex justify-center items-center gap-10 shadow-md my-10'>
                            <img className='p-5' src={image.img} alt="" />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Featured;