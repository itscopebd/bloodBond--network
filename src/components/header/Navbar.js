"use client";

import Link from 'next/link';
import React, { useContext } from 'react';
import './Navbar.css';
import Image from 'next/image';
import logo from '@/app/asset/Blood (2).png'
import { AuthContext } from '@/context/authContext';

const Navbar = () => {

  const {user}= useContext(AuthContext);


  console.log(user)
  const NavItems =   <>
  

  <li className='text-white font-semibold'><Link href="/">Home</Link></li>
  <li className='text-white font-semibold'><Link href="/about">About</Link></li>
  <li className='text-white font-semibold'><Link href="/donorlist">Donors</Link></li>
  <li className='text-white font-semibold'><Link href="/contact">Contact Us</Link></li>

  {/* when user registration then show dashboard  */}
  {
    user && <li className='text-white font-semibold'><Link href="/dashboard">Dashboard</Link></li> 
  }
  

  </> 


  return (
    <div className="navbar bg-black px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            {NavItems}
          </ul>
        </div>
        {/* Logo and Name */}
        <Image className='logo' src={logo} width={40} height={20} alt="logo" />
        <a className="normal-case text-xl font-bold text-white">BloodBond Network</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {NavItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn">
          <Link href={'/login'}>Sign in</Link>

        </button>
      </div>
    </div>
  );
};
export default Navbar;

