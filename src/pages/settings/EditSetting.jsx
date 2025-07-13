import React, { useState } from "react";

const EditProfile = () => {


  const [userdata, setuserdata] = useState({
    name:"",
    username:"",
    website:"",
    bio:"",
    email:"",
    phone:"",
    gender:"",
  });




  const handleOnChange = (e) => {
    let {name , value} = e.target
    setuserdata({...userdata , [name]:value})

  }


  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(userdata);
    setuserdata({
       name:"",
    username:"",
    website:"",
    bio:"",
    email:"",
    phone:"",
    gender:"",
    })

  }




  return (
    <div className="w-[65%] mx-auto px-10 py-10 text-sm font-sans">
      {/* Profile Picture */}
      <div className="flex items-center w-full space-x-4 mb-6 bg-[#EFEFEF] p-3 rounded-2xl relative">
        <img
          src="https://i.pinimg.com/736x/c6/70/17/c67017d2ac9dacdce614de3d4e66aa10.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover object-top"
        />
        <div>
         <div>
           <p className="font-semibold">username_here</p>
            <p className="font-semibold">name_here</p>

         </div>
          <button className=" text-sm font-medium absolute right-4 cursor-pointer bg-[#1877F2] text-white py-1.5 px-4 rounded-md top-1/3 hover:opacity-70 transition">
            Change photo
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleOnSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input 
          onChange={handleOnChange}
          value={userdata.name}
          name="name"
            type="text"
            className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400"
            placeholder="Full Name"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input 
          onChange={handleOnChange}
          value={userdata.username}
          name="username"
            type="text"
            className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400"
            placeholder="username_here"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-gray-700 mb-1">Website</label>
          <input 
          onChange={handleOnChange}
          value={userdata.website}
          name="website"
            type="text"
            className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-gray-700 mb-1">Bio</label>
          <textarea
          onChange={handleOnChange}
          value={userdata.bio}
          name="bio"
            rows="3"
            className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400 resize-none"
            placeholder="Tell something about yourself"
          ></textarea>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input 
          onChange={handleOnChange}
          value={userdata.email}
          name="email"
            type="email"
            className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400"
            placeholder="email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input 
          onChange={handleOnChange}
          value={userdata.phone}
          name="phone"
            type="tel"
            className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400"
            placeholder="+91 12345 67890"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 mb-1">Gender</label>
          <select onChange={handleOnChange} value={userdata.gender} name="gender" className="w-full border border-gray-300 bg-[#FAFAFA] rounded-md p-2 outline-none focus:border-gray-400">
            <option value="">Select</option>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-5 rounded-md text-sm font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
