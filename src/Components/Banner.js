import React from "react";
import {Link} from "react-router-dom"

export default function Banner() {
  return (
    <div className="container">
      <div className="mx-auto">
        <div className="banner">
          <div className="py-24">
            <h1 className="text-center py-1.5 text-2xl text-white">
              Dhaka Travel Agency
            </h1>
            <h1 className="banner-heading text-center text-4xl text-white font-bold">
              We are professional planners for your vacations
            </h1>
            <h1 className="text-center py-1.5 text-2xl text-white">
              We make dreams come true!
            </h1>
            <div className="text-center my-1">
              <Link to="/alltour"><button  className="bg-green-400 hover:bg-green-500 shadow-lg inline-flex items-center border-0 py-2 text-white px-8 focus:outline-none text-base mt-4 md:mt-0"> View Tour </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
