"use client"
import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '@/context/authContext';

const DashBoardRoot = ({ children }) => {

const {user}=useContext(AuthContext);

const {data:data=[],fefetch}= useQuery(['data'], async()=>{
  const res = await fetch(`http://localhost:3000/api/user/${user?.email}`)
  return res.json()
})


  return (
    <div >
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">


          
          {children}






          <label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <Sidebar data={data}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRoot;