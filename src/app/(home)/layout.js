import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import React from 'react';

const Homelayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;