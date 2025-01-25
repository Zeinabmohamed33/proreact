import React from 'react';

export default function About() {
  return ( <>
  <section className='py-32 bg-[#1ABC9C] text-center text-white'>
    <div className='py-14 container mx-auto'>
        <h1 className='text-4xl font-bold '> ABOUT COMPONENT </h1>
        <div className='relative py-1 star'>
                <i className="fa-solid fa-star"></i>
                
            </div>
            <div>
                <div className='grid grid-cols-12 py-4 text-start'>
                    <div className='p-4 col-span-6'>
                        <p>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>

                    </div>
                    <div className='p-4 col-span-6'>
                        <p>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>

                    </div>



                </div>
            </div>


    </div>

  </section>
  

      
    </>
  );
}
