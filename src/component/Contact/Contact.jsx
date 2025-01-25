/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Contact() {
    let [datainput , setdatainput]=useState("")
    let [placeholderr , setplaceholderr]=useState("")
  return (  <>
  <section className='py-32 text-center'>
    <div>
        <h1 className='text-4xl font-bold'> CONATCT SECTION </h1>
        <div className='relative py-1 star2'>
                <i className="fa-solid fa-star"></i>
                
            </div>

            <div className='my-10 text-start '>
                <div className='w-1/2 mx-auto my-2'>
                <div className='overflow-hidden'> <label className={`text-[#1ABC9C]  ${datainput!="" && placeholderr=="userName"?"translate-y-0": "translate-y-full" } transition-all duration-500 block `} htmlFor="">userName:</label> </div>
                
                <input onInput={(e)=>{setdatainput(e.target.value); setplaceholderr(e.target.placeholder)}} type="text" className='w-full py-3 px-2 border border-e-0 border-t-0 border-s-0 focus-visible:outline-none ' placeholder='userName' />

                </div>

                <div className='w-1/2 mx-auto my-2'>
                <div className='overflow-hidden'> <label className={`text-[#1ABC9C]  ${datainput!=""&&placeholderr=="userAge"?"translate-y-0": "translate-y-full" } transition-all duration-500 block `} htmlFor="">userAge:</label> </div>
                
                <input onInput={(e)=>{setdatainput(e.target.value); setplaceholderr(e.target.placeholder)}} type="text" className='w-full py-3 px-2 border border-e-0 border-t-0 border-s-0 focus-visible:outline-none ' placeholder='userAge' />

                </div>



                <div className='w-1/2 mx-auto my-2'>
                <div className='overflow-hidden'> <label className={`text-[#1ABC9C]  ${datainput!=""&&placeholderr=="userEmail"?"translate-y-0": "translate-y-full" } transition-all duration-500 block `} htmlFor="">userEmail:</label> </div>
                
                <input onInput={(e)=>{setdatainput(e.target.value); setplaceholderr(e.target.placeholder)}} type="email" className='w-full py-3 px-2 border border-e-0 border-t-0 border-s-0 focus-visible:outline-none ' placeholder='userEmail' />

                </div>

                <div className='w-1/2 mx-auto my-2'>
                <div className='overflow-hidden'> <label className={`text-[#1ABC9C]  ${datainput!=""&&placeholderr=="userPassword"?"translate-y-0": "translate-y-full" } transition-all duration-500 block `} htmlFor="">userPassword:</label> </div>
                
                <input onInput={(e)=>{setdatainput(e.target.value); setplaceholderr(e.target.placeholder)}} type="password" className='w-full py-3 px-2 border border-e-0 border-t-0 border-s-0 focus-visible:outline-none ' placeholder='userPassword' />

                </div>



                <div className='w-1/2 mx-auto my-2 py-6' >
                <button type='submit' className='bg-blue-500 py-2 px-4 r text-white rounded-full' > send massage</button>
                </div>


                









            </div>




    </div>


  </section>
      
    </>
  );
}
