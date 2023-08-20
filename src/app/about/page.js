import React from 'react';
import Image from 'next/image';
import banner from "@/app/asset/AboutPage Banner.jpg";
import './about.css'

const AboutUs = () => {
    return (
        <div className='w-full about'>
            <div className='banner'>
            <Image className='w-full h-min' src={banner} alt="banner"/>
            <div className='overlay-text'>
                <h1 className='heading text-4xl font-bold mb-5'>Our Commitment to Saving Lives</h1>
                <p className='text text-xl'>At BloodBond Network, we are on a mission to make a difference in the world of healthcare and well-being.</p>
            </div>
            </div>
            <div className="mission-vision grid grid-cols-2	">
                <div className="mission">
                    <h2>Mission</h2>
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                </div>

            </div>
            
            

        </div>
    );
};

export default AboutUs;