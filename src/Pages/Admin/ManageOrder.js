import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function Profile() {
    const [ seeOrder, setSeeOrder ]= useState([]);
    fetch('http://localhost:5000/orderlist')
    .then(res => res.json())
    .then( data => setSeeOrder(data) )

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  tracking-wider rounded-t">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <Link to="/profile"> Profile </Link>
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <Link to="/orderlist"> My Orders </Link>
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none  bg-gray-100 border-indigo-500 text-indigo-500 border-b-2 tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              <Link to="/manageorder"> Manage All Orders </Link>
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <Link to="/addtour">Add A New Service</Link>
            </a>
          </div>
          <div>
              

        {
            seeOrder.map( list => <li> {list.email} </li> )
        }





          </div>
        </div>
      </section>
    </div>
  );
}
