"use client"
import Image from 'next/image';
import { useState } from 'react';
import img from '../asset/login.png'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/authContext';
import { ColorRing } from 'react-loader-spinner';
import Swal from 'sweetalert2';
const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  let { user, googleLogin, signIn, facebookLogin } = UserAuth()
  let router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await signIn(data.email, data.password)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Login Success!',
        showConfirmButton: false,
        timer: 1500
      })
      setLoading(false)
      router.push('/')

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Login Not Success!',

      })
    }

    reset()
  }

  let handleGoogle = async () => {
    try {
      await googleLogin()
        .then(async res => {


          const response = await fetch("/api/user", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({ name: user?.displayName, email: user?.email, role: "user" })
          })
          if (response) {

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Registration Success!',
              showConfirmButton: false,
              timer: 1500
            })
          }



        })

      router.push('/')

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Login Not Success!',

      })
    }

  }
  let handleFacebook = async () => {
    try {
      await facebookLogin()

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Login Success!',
        showConfirmButton: false,
        timer: 1500
      })
      router.push('/')

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Login Not Success!',

      })
    }

  }
  return (
    <div className='bg-base-200' >
      <div className='px-5 pt-4 '>
        <button className='btn w-30'>
          <Link href={'/'} className='flex justify-between'>  <span className='ps-1'>Back To Home</span></Link>
        </button>
      </div>
      <div className="hero min-h-screen bg-base-200 ">

        <div className="hero-content flex-col lg:flex-row card dark:text-white  ">
          <div className='w-3/6 '>
            <Image src={img} alt='login' width={700} />
          </div>
          <div className=' w-full md:w-3/6 bg-gradient-to-r from-[#ef709b] to-[#fa9372] card-body  rounded-e-lg '>
            <h1 className="text-2xl text-center font-bold py-5">Log in Now</h1>
            <div className='justify-center'>

              <form onSubmit={handleSubmit(onSubmit)} >
                <div className='form-control'>
                  <label className='py-2 text-xs md:text-sm' >Email</label>
                  <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl lg:max-w-md" required  {...register("email")} />
                </div>
                <div className='form-control'>
                  <label className='py-2 text-xs md:text-sm' >Password</label>
                  <input type="password" placeholder="Type here" className="input input-bordered  w-full max-w-xl lg:max-w-md"  {...register("password")} />
                </div>
                <div className='form-control'>
                  <label className='py-2 text-xs md:text-sm' >
                    <Link href={'/signup'}>
                      Create New Account
                    </Link>
                  </label>

                </div>


                <div className='text-center py-2'>

                  <button className='btn btn-neutral md:w-full overflow-hidden '> {
                    loading && loading ? <ColorRing
                      visible={true}
                      height="40"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={['#F4F4F3', '#FFF', '#EB4249', '#abbd81', '#849b87']}
                    /> : "LogIn"


                  }
                  </button>


                </div>

              </form>



              <div className=" divider  text-sm">OR LogIn with </div>
              <div className=' flex items-center justify-center py-1 '>
                <button className='btn btn-circle btn-outline btn-primary mx-2' onClick={handleGoogle}>
                  G
                </button>
                <button className='btn btn-circle btn-outline btn-primary mx-2'>
                  in
                </button>
                <button className='btn btn-circle btn-outline mx-2 btn-primary ' onClick={handleFacebook}>
                  F
                </button>
              </div>


            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;