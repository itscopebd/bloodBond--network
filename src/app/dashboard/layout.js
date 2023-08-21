import React from 'react';
import Sidebar from './Sidebar';

const DashBoardRoot = ({children}) => {
    return (
        <div >
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col justify-center ">
    {children}
    <label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
   
  <Sidebar></Sidebar>
  </div>
</div>
        </div>
    );
};

export default DashBoardRoot;