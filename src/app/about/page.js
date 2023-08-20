import React from 'react';
import Image from 'next/image';
import banner from "@/app/asset/AboutPage Banner.jpg";
import './about.css'
import MeetTheTeam from '@/components/MeetTheTeam/MeetTheTeam';

const AboutUs = () => {
    return (
        <div className='w-full about'>
            <div className='banner'>
            <Image className='w-full h-min' src={banner} alt="banner"/>
            <div className='overlay-text'>
                <h1 className='heading text-6xl font-bold mb-5'>Our Commitment to Saving Lives</h1>
                <p className='text text-2xl'>At BloodBond Network, we are on a mission to make a difference in the world of healthcare and well-being.</p>
            </div>
            </div>
            <div className="mission-vision grid grid-cols-2 gap-4	mt-10">
                <div className="mission px-5">
                    <h2 className='text-center text-3xl text-red-700 font-bold mb-2'>Our Mission</h2>
                    <p className=' italic text-xl text-center w-4/5 mx-auto border border-red-700 p-5 rounded-2xl'>Empowering Lives Through Lifesaving Blood Donations. Our mission is to bridge hope with action, advocating for and facilitating lifesaving blood donations that impact countless lives. At the heart of our purpose lies the commitment to provide a lifeline of donated blood, driving positive change and saving lives.</p>
                </div>
                <div className="vision px-5">
                    <h2 className='text-center text-3xl text-red-700 font-bold mb-2'>Our Vision</h2>
                    <p className=' italic text-center w-4/5 mx-auto  border border-red-700 p-5 rounded-xl text-xl'>Empowering Lives Through Lifesaving Blood Donations. Our mission is to bridge hope with action, advocating for and facilitating lifesaving blood donations that impact countless lives. At the heart of our purpose lies the commitment to provide a lifeline of donated blood, driving positive change and saving lives.</p>
                </div>
            </div>

            <MeetTheTeam></MeetTheTeam>
            
            

        </div>
    );
};

export default AboutUs;