/* eslint-disable no-unused-vars */
 
 
import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    let [scrollY , setscrollY]=useState(0);
    document.addEventListener("scroll" , ()=>{
      setscrollY(window.scrollY)
    })


  return (<>
      <nav className={`bg-[#2C3E50]  ${scrollY==0?"py-9":"py-5"} transition-all duration-500 text-white fixed z-50 w-full`}>
          <div className='container flex items-center justify-between mx-auto'>
              <><div className='title'>
                      <Link className='text-3xl font-bold ' to={"Home"} >Start Framework</Link>
                  </div></>

              <div>
                  <ul className='flex gap-10 font-bold'>
                      <li>
                         <NavLink to={"about"}>ABOUT </NavLink> 
                      </li>
                      <li>
                      <NavLink to={"portfolio"}>PORTFOLIO </NavLink>
                      </li>
                      <li>
                      <NavLink to={"contact"}>CONTACT </NavLink>
                      </li>
                      

                  </ul>
              </div>

          </div>
      </nav>
  </>);
}
