/* eslint-disable no-unused-vars */
import React from 'react';

export default function Footer() {
  return ( <>

  <div className='text-white  z-50 w-full   '>
    <div className='bg-[#2C3E50] py-20  '> 
       <div className='w-[75%] flex items-center justify-around gap-10  container mx-auto text-start  '>
       <div  > 
            <h1 className='text-2xl font-bold'>LOCATION</h1>
        <p >2215 John Daniel Drive <br />Clark, MO 65243</p>
        
        </div>


        <div > <h1 className='text-2xl font-bold'>AROUND THE WEB  </h1> 

        <div className=' flex justify-center items-center gap-5 py-5' >

            <div className=' rounded-full w-8 h-8  text-center border-2 py-0.5'>

            <i className="fa-brands fa-facebook" style={{ color: "#e3e3e3" }} />
            </div>

            <div className=' rounded-full w-8 h-8  text-center border-2 py-0.5'>

<i className="fa-brands fa-twitter" style={{ color: "#e3e3e3" }} />
</div>


<div className=' rounded-full w-8 h-8  text-center border-2 py-0.5'>

<i className="fa-brands fa-linkedin" style={{ color: "#e3e3e3" }} />
</div>


<div className=' rounded-full w-8 h-8  text-center border-2 py-0.5'>

<i className="fa-brands fa-facebook" style={{ color: "#e3e3e3" }} />
</div>



        </div>
        
        
        
        
        
              </div>
       
       
       
        <div >
             <h1 className='text-2xl font-bold'>  ABOUT FREELANCER </h1>  
        <p>Freelance is a free to use, licensed Bootstrap theme <br />
        created by Route</p>
         </div>

       </div>


    </div>

    <div className='bg-[#1A252F] py-5 text-center'> <p>Copyright © Your Website 2021</p> </div>
  </div>

  
    </>
  );
}
