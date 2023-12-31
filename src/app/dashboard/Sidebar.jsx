"use client"
import Link from 'next/link';
import React from 'react';
import { FaHistory, FaHome, FaInfo, FaInfoCircle, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FaTimeline, FaUserCheck, FaWpforms } from 'react-icons/fa6';

const Sidebar = ({ data }) => {
  const role = data[0]?.role;
  if (role === "user") {
    console.log("thik")
  } else if (role === "admin") {
    console.log("admin")
  }

  return (
    <aside className='h-full bg-base-300 '>
      <div className=''>
        <ul className="menu p-4 w-30 md:w-80  text-base-content">




          {
            role && role === "admin" ? <>  <li>
              <Link href={'/dashboard/admin'}> <FaHome /> Admin Home</Link>
            </li>
              <li>
                <p>Admin</p>
              </li>
              <li>
                <Link href={'/dashboard/admin'}> <FaUser /> All user</Link>
              </li>
              <li>
                <Link href={'/dashboard/admin/event'}><FaTimeline /> All event</Link>
              </li></> 
              :
               role === "donor" ? <><li>
                <Link href={'/dashboard'}> <FaHome /> Dashboard Home</Link>
              </li>
                <li>
                  <p>Admin</p>
                </li></> 
                
                :
                
              <>
              <li><Link href={'/dashboard/user'}> <FaHome /> User Dashboard</Link></li>
              <li><Link href={'/dashboard/user/update-profile'}> <FaHome /> Update Profile</Link></li>
              <li><Link href={'/dashboard/user/applydonor'}> <FaHome /> Apply Donation</Link></li>
              

              </>
              
          }




          {/* <li>
            <Link href={'/dashboard/admin'}> <FaUser /> All user</Link>
          </li>
          <li>
            <Link href={'/dashboard/admin/event'}><FaTimeline /> All event</Link>
          </li>
          <li>
            <p>Donor</p>
          </li>
          <li>
            <Link href={'/dashboard/donor/history'}> <FaHistory /> Track Donation </Link>
          </li>
          <li>
            <Link href={'/dashboard/donor'}> <FaInfoCircle /> Donor Info</Link>
          </li>
          <li>
            <p>User</p>
          </li>
          <li>
            <Link href={'/dashboard/user'}> <FaUserCheck /> User Info</Link>
          </li>
          <li>
            <Link href={'/dashboard/user/applydonor'}> <FaWpforms />Apply Donor</Link>
          </li> */}
          <div className="divider "></div>
          <li className='pb-5'>
            <Link href={'/'}> <FaSignOutAlt /> Go to Home</Link>
          </li>
        </ul>
      </div>




    </aside>
  );
};

export default Sidebar;