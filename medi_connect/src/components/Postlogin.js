import React, { useState } from 'react'
import "../styles/Postlogin.css"
function Postlogin() {
  const [role , setRole ] =useState("Select Role");
  const handleRole =(e)=>{
    setRole(e.target.value)
  }
  return (
    <div className='postlogin'>
<div class="flex flex-col items-center   justify-center h-screen loginForm">
  <div class="w-full	 bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Registration Form</h2>

    <form class="flex gap-11 ">
        <div className="flex flex-col  lftreg justify-between"> 
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="First Name" />
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Last Name" />
      <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email"/>
      <input type="number" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number"/>
      {/* <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Gender"/> */}
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Gender
      </label>
      <select class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender" >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="age">
        Age
      </label>
      {/* <input class="bg-gray-100 text-gray-900 border-0 rounded-md p-2" id="age" type="date"></input> */}
      
     
      <input type="date" id="age" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number"/>
      <textarea name="cover_letter" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Address"></textarea>
      </div>
      <div className='flex flex-col ritreg'>
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Role
      </label>
      <select 
      class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
      id="gender" 
      value={role}
      onChange={handleRole}>
        <option disabled value="Select Role">Select Role</option>
        <option value="Patient">Patient</option>
        <option value="Doctor">Doctor</option>
      </select>


                          {/* FOR PATIENT */}
      {
        role == "Patient" && (
          <div className='roleSpecific'>
            
            <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="photo">
        Choose Photo
      </label>
      <input type="file" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Resume" id="photo"/>
       <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Role
      </label> 
       <input type="number" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Emergency contact"/> 
          </div>
        )
      }
      {/* <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="photo">
        Choose Photo
      </label>
      <input type="file" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Resume" id="photo"/>
      {/* <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Role
      </label> 
       <input type="number" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Emergency contact"/> */}


                          {/* FOR   DOCTOR */}


{
  role == "Doctor" && (
    <div className='roleSpecific'>
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="photo">
    Choose Photo
  </label>
  <input type="file" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Resume" id="photo"/>
  <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Qualification"/>
  <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Specialisation"/>
    </div>
  )
}

 {/* <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="photo">
        Choose Photo
      </label>
      <input type="file" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Resume" id="photo"/>
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Qualification"/>
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Specialisation"/> */}

     


      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Apply</button>
      </div>

    </form>
  </div>
</div>

    </div>

  )
}

export default Postlogin