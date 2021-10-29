import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Profile() {
  const { user, logOut } = useAuth();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/12 md:w-3/12 w-5/12 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src={user.photoURL}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {user.displayName}
            </h1>
            <p className="mb-8 leading-relaxed"> {user.email} </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="inline-flex text-white bg-green-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-green-600  text-lg"
              >
                Home
              </Link>
              <Link
                to="/login"
                onClick={logOut}
                className="ml-4 inline-flex text-white bg-red-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-gray-200  text-lg"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
