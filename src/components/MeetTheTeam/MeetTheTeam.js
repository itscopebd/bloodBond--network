import React from 'react';
import Image from 'next/image';
import volunteer from '@/app/asset/volunteer.jpg';
import volunteer2 from '@/app/asset/volunteer2.jpg';

const MeetTheTeam = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold text-red-700 text-center mb-5'>Meet Our Team</h2>
            <div className='flex justify-center'>
            <div className="cards grid grid-cols-4 gap-4 mx-auto ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Joe Keith</h2>
                <p>Donor</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Donor</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">John Keith</h2>
                <p>Donor</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Joe Keith</h2>
                <p>Donor</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Donor</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">John Keith</h2>
                <p>Donor</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className=' rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Volunteer</p>
         </div>
            </div>
            </div>
            </div>
            <button className='btn btn-primary mx-auto'>See More</button>

        </div>
    );
};

export default MeetTheTeam;