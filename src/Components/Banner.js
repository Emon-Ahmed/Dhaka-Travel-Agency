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
              <Link to="/alltour"><button  className="primary-btn"> View Tour </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
