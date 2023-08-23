"use client"
import Image from 'next/image';
import React from 'react';
import img from '../asset/login.png'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/authContext';
import Swal from 'sweetalert2';
import { FaBackspace, FaBackward } from 'react-icons/fa';
import { FaHouseChimneyUser } from 'react-icons/fa6';
const LoginPage = () => {

  let {user,googleLogin,signIn,facebookLogin}=UserAuth()
let router=useRouter()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {console.log(data)
try {
  await signIn(data.email,data.password)
 
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Sign in SuccessFull',
    showConfirmButton: false,
    timer: 1500
  })
  router.push('/')
} catch (error) {
  Swal.fire({
    icon: 'error',
    title: `Opps`,
    text: `${error.message}`,
   
  })
}

reset()
  }

let handleGoogle= async()=>{
try {
  await googleLogin()
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Sign in SuccessFull',
    showConfirmButton: false,
    timer: 1500
  })
  router.push('/')

} catch (error) {
  Swal.fire({
    icon: 'error',
    title: `Opps`,
    text: `${error.message}`,
   
  })
}

}
let handleFacebook= async()=>{
try {
  await facebookLogin()
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Sign in SuccessFull',
    showConfirmButton: false,
    timer: 1500
  })
  router.push('/')

} catch (error) {
  Swal.fire({
    icon: 'error',
    title: `Opps`,
    text: `${error.message}`,
   
  })
}

}
    return (
        <div className='bg-base-200'>
     <div className='px-5 pt-4 '>
     <button className='btn w-30'>
        <Link href={'/'} className='flex justify-between'> <FaHouseChimneyUser/>  <span className='ps-1'>Back To Home</span></Link>
      </button>
     </div>
    <div className="hero min-h-screen bg-base-200 ">
     
  <div className="hero-content flex-col lg:flex-row card dark:text-white  ">
  <div className='w-3/6 '>
    <Image  src={img} alt='login' width={700}/>
   </div>
    <div className=' w-full md:w-3/6 bg-gradient-to-r from-[#ef709b] to-[#fa9372] card-body  rounded-e-lg '>
      <h1 className="text-2xl text-center font-bold py-5">Log in Now</h1>
<div className='justify-center'>
   <form onSubmit={handleSubmit(onSubmit)} >
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Email</label>
<input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl lg:max-w-md"   {...register("email",{required:"Email is required"})} />

{errors.email && <p>{errors.email.message}</p>}

</div>
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Password</label>
<input type="password" placeholder="Type here" className="input input-bordered  w-full max-w-xl lg:max-w-md"  {...register("password",{required:"enter password"})}/>
{errors.password && <p>{errors.password.message}</p>}

</div>
<div className='form-control'>
<label className='py-2 text-xs md:text-base font-extrabold' >
 <Link href={'/signup'}>
 Create New Account
 </Link> 
  </label>

</div>


<div className='text-center py-2'>
  <button className='btn btn-neutral  md:w-full '>
    LogIn  
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