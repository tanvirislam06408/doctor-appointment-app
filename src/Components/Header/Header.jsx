import React from 'react';
import navImag from '../../assets/logo.png'
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    const links = <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/booking'}>My-Bookings</NavLink>
    <NavLink to={'/blogs'}>Blogs</NavLink>
    <NavLink to={'/contact'}>Contact Us</NavLink>
    </>
    return (
        <div className="navbar lg:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
         
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <div className='flex items-center gap-3'>
    <img className='w-9' src={navImag} alt="" />
     <a className="font-bold text-xl">Phudu</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex text-gray-500">
    <ul className="menu items-center menu-horizontal px-1 gap-12">
     {links}
    </ul>
  </div>
  <div className="navbar-end ">
    <button className="rounded-2xl bg-[rgba(23,106,229,1)] text-white btn btn-active btn-primary">Emergency</button>
  </div>
</div>
    );
};

export default Header;