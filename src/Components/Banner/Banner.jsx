import React from 'react';
import bannerimg from '../../assets/banner-img-1.png'
const Banner = () => {
    return (
        <div className=' min-w-5xl mx-auto p-36'>
          <div className='border-white border-2 bg-gradient-to-b from-gray-200 to-white rounded-2xl p-10'>
              <div className='items-center content-center text-center space-y-10'>
                <h1 className='text-5xl font-extrabold  '>Dependable Care, Backed by Trusted  <br />Professionals.</h1>
                <h4 className='text-xl font-medium opacity-75'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h4>
                <div className='flex gap-4 justify-center'>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="10"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search any doctor..." className=''/>
</label>
 <button className="rounded-2xl bg-[rgba(23,106,229,1)] text-white btn btn-active btn-primary">Search Now</button>
                </div>
                
            </div>
            <div className='md:flex justify-center p-8 gap-6'>
                <img className='w-[520px] h-auto object-contain'  src={bannerimg} alt="" />
                <img className='w-[520px] h-auto object-contain' src={bannerimg} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Banner;