"use client"
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import { Blocks, ColorRing } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Swal from 'sweetalert2';
require('dotenv').config()

const UpdateProfile = () => {



    const [customLoading, setCustomLoading] = useState(false)
    const { user,loading } = useContext(AuthContext);
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()
    const { data: data = [], fefetch } = useQuery(['data'], async () => {
        const res = await fetch(`http://localhost:3000/api/user/${user?.email}`)
        return res.json()
    })


    const onSubmit = async (update) => {
        setCustomLoading(true)
        try {
            const image_host_api=process.env.image_host;
            console.log(image_host_api)
           const image_host_url=`https://api.imgbb.com/1/upload?key=${image_host_api}`
            const formData = new FormData();
            formData.append("image", update.image[0])
            console.log(image_host_url)
            await fetch(image_host_url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch((err)=>{
                    console.log(err)
                })
             
            

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Update Success!',
                showConfirmButton: false,
                timer: 1500
            })
            setCustomLoading(false)


        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Update Not Success!',

            })
            setCustomLoading(false)
        }

        reset()
    }



if (loading) {

    return <Blocks
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
  />
    
}


    return (
        <>
            <div className='flex justify-center items-center h-full'>
                <div className='w-2/1 bg-base-100 shadow-xl p-10'>
                    <h3 className="text-3xl mb-5 text-center">My Profile</h3>
                    <div className="card lg:card-side">

                        <div className='h-32 w-32 rounded-full border-2 border-red-300 flex justify-center items-center gap-5'>
                            <img src="https://i.ibb.co/c8KhYh8/admission.png" className='h-full w-full rounded-full' alt="Image No Updated" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">UserId:</h2>
                            <p>Name: {data[0]?.name}</p>
                            <p>Email: {data[0]?.email}</p>
                            <p className="flex items-center gap-2">Phone: {data[0] && data[0].phone ? data[0]?.phone : <span className="text-red-500">Phone No Updated!</span>}</p>

                        </div>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-3xl font-bold'>Edit Profile</h3>

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='form-control'>
                                <label className='py-2 text-xs md:text-sm' >Phone Number</label>
                                <input type="number" placeholder="Type here" className="input input-bordered w-full" required  {...register("phone")} />
                            </div>
                            <div className='form-control'>
                                <label className='py-2 text-xs md:text-sm' >Image</label>
                                <input type="file" placeholder="Type here" className="input input-bordered  w-full"  {...register("image")} />
                            </div>

                            <div className='text-center py-2'>

                                <button className='btn btn-neutral md:w-full overflow-hidden '> {
                                    customLoading && customLoading ? <ColorRing
                                        visible={true}
                                        height="40"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#F4F4F3', '#FFF', '#EB4249', '#abbd81', '#849b87']}
                                    /> : "Update"
                                }
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;