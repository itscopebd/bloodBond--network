"use client"
import { UserAuth } from '@/context/authContext';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const ApplyDonor = () => {

  const [divisions, setDivisins] = useState([])
  const [divisionsId, setDivisinsId] = useState([])


  useEffect(() => {

    const loadDivision = async () => {
      await fetch("/data/bangladesh-info/division.json")
        .then(res => res.json())
        .then(data => setDivisins(data))
    }

    loadDivision()

  }, [])


const handleDivision=(e)=>{
const id = e.target.value
console.log(id)
}



  let { user } = UserAuth()
  const { register, handleSubmit, control, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    alert("Submit success")

  }

  const positiveNumberValidation = (value) => {
    return parseFloat(value) > 0 || "Please enter a valid phone number";
  };


  return (
    <div className='mt-5 '>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold ">Become a Donor!</h1>
            <p className="py-6">Thank you for considering becoming a donor and joining us in making a significant difference in the lives of those in need.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" defaultValue={user?.email}  {...register("email")} readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="name"  {...register("name", { required: "Full Name is required" })} className="input input-bordered" />
                {errors.name && <p className="text-error pt-1">{errors.name.message}</p>}


              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recent Illnesses or Medical Procedures name</span>
                </label>
                <input type="text" placeholder="Recent Illnesses or Medical Procedures" className="input input-bordered"  {...register("recentIllnesses", { required: "Please Fill up this feild" })} />
                {errors.recentIllnesses && <p className="text-error pt-1">{errors.recentIllnesses.message}</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth
                  </span>
                </label>
                <input type="date" placeholder="Date of Birth"  {...register("dateOfBirth", { required: "Please Fill up this feild" })} className="input input-bordered" />
                {errors.dateOfBirth && <p className="text-error pt-1">{errors.dateOfBirth.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input type="number" placeholder="Phone number"  {...register("phone", {
                  required: "Phone number is required",
                  validate: positiveNumberValidation
                })} className="input input-bordered" />
                {errors.phone && <p className="text-error pt-1">{errors.phone.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Adress</span>
                </label>
                <input type="text" placeholder="Adress"  {...register("adress", { required: "Please Fill up this feild" })} className="input input-bordered" />
                {errors.adress && <p className="text-error pt-1">{errors.adress.message}</p>}
              </div>



              <div className='md:flex justify-between'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Division</span>
                  </label>
                  <select className="select select-bordered w-full "  {...register("division", { required: "Please select a Division" })} onChange={(e)=>handleDivision(e)}>
                    <option selected value="">
                      Select Division
                    </option>
                    {
                     divisions.map(division=><option  value={division.id} key={division.id}>{division.name}</option>) 
                    }

                  </select>
                  {errors.division && <p className="text-error pt-1">{errors.division.message}</p>}
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  <select className="select select-bordered w-full "  {...register("district", { required: "Please select a district" })}>
                    <option selected value="">
                      Select blood Type
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="N/A">Don't know</option>
                  </select>
                  {errors.district && <p className="text-error pt-1">{errors.district.message}</p>}
                </div>



                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Upzila</span>
                  </label>
                  <select className="select select-bordered w-full "  {...register("upzila", { required: "Please select a Upzila" })}>
                    <option selected value="">
                      Select blood Type
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="N/A">Don't know</option>
                  </select>
                  {errors.upzila && <p className="text-error pt-1">{errors.upzila.message}</p>}
                </div>

              </div>

              <div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Blood Type </span>
                  </label>
                  <select className="select select-bordered w-full "  {...register("blood", { required: "Please select a blood type" })}>
                    <option selected value="">
                      Select blood Type
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="N/A">Don't know</option>
                  </select>

                  {errors.blood && <p className="text-error pt-1">{errors.blood.message}</p>}
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className="label-text">Select Gender</span>
                  </label>
                  <select className="select select-bordered w-full  "  {...register("gender", { required: "Please select a gender" })}>
                    <option selected value="">
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-error pt-1">{errors.gender.message}</p>}
                </div>
              </div>




              <div className="form-control">
                <h4>Do You have HiV?</h4>
                <label className="label cursor-pointer">
                  <span className="label-text">NO</span>

                  <Controller
                    name="hivStatus"
                    control={control}
                    rules={{ required: "Please select an option" }}
                    defaultValue={false}
                    render={({ field }) => (
                      <input type="radio" {...field} className="radio checked:bg-red-500" value={false} />
                    )}
                  />

                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">YES</span>
                  <Controller
                    name="hivStatus"
                    control={control}
                    defaultValue={false}
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                      <input type="radio" {...field} className="radio checked:bg-blue-500" value={true} />
                    )}
                  />  </label>
                {errors.hivStatus && <p className="text-error">{errors.hivStatus.message}</p>}

              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDonor;