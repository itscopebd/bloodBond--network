"use client"
import Link from 'next/link';
import React from 'react';
import { FaHistory, FaHome, FaInfo, FaInfoCircle, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FaDatabase, FaTimeline } from 'react-icons/fa6';

const Sidebar = () => {
    return (
        <aside className='h-full bg-base-300 '>
             <ul className="menu p-4 w-30 md:w-80 h-3/6  text-base-content">
     
      <li>
        <Link href={'/dashboard'}> <FaHome/> Dashboard Home</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin'}> <FaUser/> All user</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin/event'}><FaTimeline/> All event</Link>
      </li>
      <li>
        <Link href={'/dashboard/donor/history'}> <FaHistory/> Track Donation </Link>
      </li>
      <li>
        <Link href={'/dashboard/donor'}> <FaInfoCircle/> Donor Info</Link>
      </li>
      
    </ul>
    <div className="divider  "></div>
    <ul className='menu p-4 w-30 md:w-80  h-1/6 text-base-content'>
        <li>
            <Link href={'/'}> <FaSignOutAlt/> Go to Home</Link>
        </li>
    </ul>
    <button className='btn  drawer-button toggle md:hidden'>
close
    </button>
        </aside>
    );
};

export default Sidebar;