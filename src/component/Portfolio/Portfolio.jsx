/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Portfolio() {

    let[ allamg ,setallamg]=useState([img1 , img2 , img3, img2 ,img1 , img3])
    let[ layer ,setlayer]=useState("hidden")
    let[ curentimg ,setcurentimg]=useState("img1")
  return (  <>


  <section className='py-24 '>
    <div className='container mx-auto text-center text-[#2C3E50] p-3'>
        <h1 className='text-4xl font-bold '> PORTFOLIO COMPONENT </h1>
        <div className='relative py-1 star2'>
                <i className="fa-solid fa-star"></i>
                
            </div>


            <div className=' grid grid-cols-12'>
                

                
                {allamg.map((item , index)=>{return <div onClick={()=>{setlayer("block");setcurentimg(item) }} key={index} className='col-span-4 p-4'>
                    <div className='box-img relative group cursor-pointer'>
                        <img src={item} className='w-full' alt="" />
                        <div className='layer-img absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500   bg-green-300/50'>
                        
                        <i className="fa-solid text-5xl text-white fa-plus"></i>

                        </div>

                    </div>

                </div>})}

                

            </div>
        
    </div>



    <div onClick={(e)=>{e.target.tagName !="IMG"? setlayer("hidden"):""}} className={`fixed inset-0 z-[50] ${layer} bg-blue-400/30 flex justify-center items-center`}>
        <img src={curentimg} className='w-1/3' alt="" />

    </div>

  </section>

      
    </>
  );
}
