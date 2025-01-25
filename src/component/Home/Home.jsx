/* eslint-disable no-unused-vars */
import React from 'react'; 

import img from '../../assets/Avatar-Maker.png'

export default function Home() {
  
  return (
    
    <>
    <section className='py-12 bg-[#1ABC9C]'>
        <div className='flex flex-col items-center justify-center py-32 text-white'>
            <img src={img} className='w-56' alt="" />
            <h1 className='py-5 text-4xl font-bold'> START FREMWORK</h1>
            <div className='relative py-1 star'>
                <i className="fa-solid fa-star"></i>
                
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
     


    </section>
      
    </>
  );
}
