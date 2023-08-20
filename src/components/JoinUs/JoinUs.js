import React from 'react';


const JoinUs = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-[#D32F2F] mb-3'>Join US</h1>
            <p className='text-center mb-6'>Join our volunteer team and play a vital role in supporting our blood donation mission. <br /> Together, we can create a meaningful impact and inspire positive change in our community.</p>


            <div className="hero w-[800px] h-[400px] mx-auto" style={{ backgroundImage: 'url(https://shorturl.at/egEG4)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="mb-5 text-3xl font-bold">Make A Difference</h2>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn text-[#D32F2F]">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
