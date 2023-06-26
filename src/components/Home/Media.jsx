import React, { useState } from 'react';
import image1 from './../../utilities/img/forbes.png'
import image2 from './../../utilities/img/investo.png'
import image3 from './../../utilities/img/kaiko.png'

const Media = () => {
    const [mouse, setMouse]= useState(false)

    const handleIcon = ()=>{
        if(mouse){
            setMouse(false)
        }
        else{
            setMouse(true)
        }
    }

    return (
        <div>
            <div className='flex gap-2 w-full'>
                <div className='w-4/12'>
                    <img className='w-[50%]' src={image1} alt="" />
                </div>
                <div className='w-4/12'>
                    <img className='w-[50%]' src={image2} alt="" />
                </div>
                <div className='w-4/12'>
                    <img className='w-[50%]' src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Media;