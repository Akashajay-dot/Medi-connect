import React from 'react'
import "../styles/SupAdmnpg.css"
import image from "../assets/png.png"
import map from "../assets/map.png"
function SupAdmnpg() {
  return (
    <div className='SupAdmnPage'>
      <div className="sideSctn">
        <h1 className='supAdmLftHead'>
          Super Admin
        </h1>
        <button className='supAdmLftOpt'>
          Add Hospital
        </button>
        <button className='supAdmLftOpt'>
          Edit Hospital
        </button>
        <button className='supAdmLftOpt'>
          Remove Hospital
        </button>
        <button className='supAdmLftOpt'>
          Managae SuperAdmins
        </button>
        <button className='supAdmLftOpt'>
          Statistics
        </button>
        <button className='supAdmLftLogoutBtn'>
          Logout
        </button>
      </div>
      <div className="mainSctn">
        <h1 className='mainSctnHead'>Add Hospital</h1>
        <div className="mainSctninner">
         {/* <img src={image} alt="" className='noContentPng' /> */}
         <div className="mainSctnlft">

      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 addHsptlrow" placeholder="Hospital Name" />
      <textarea type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 addHsptlrow Address" placeholder="Address" />
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 addHsptlrow" placeholder="Phone" />
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 addHsptlrow" placeholder="Website Link" />
      <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 addHsptlrow" placeholder="Accrdation Status" />
         </div>
      <img className='addHsptlImg' src={map} alt="" />
    
      </div>

        <button className='addHsptlBtn'>Submit</button>
      </div>
    </div>
  )
}

export default SupAdmnpg