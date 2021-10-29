import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Login() {
  const { signInGoogle, error } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const googleLogin = () => {
    signInGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <section className="text-gray-600 body-font bg-green-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="mx-auto md:pr-16 lg:pr-0 pr-0">
            <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-center text-4xl text-gray-900 font-medium title-font mb-5">
                Login
              </h2>
              {/* <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div> */}
              <div>
                {/* <button className="text-white bg-green-500 border-0 py-1.5 px-10 focus:outline-none hover:bg-green-600 text-lg">
                  Login
                </button> */}
                <button
                  onClick={googleLogin}
                  className="text-white bg-green-500 border-0 py-1.5 px-10 ml-1 focus:outline-none hover:bg-green-600 text-lg"
                >
                  Google
                </button>
              </div>
              <p className="text-xs text-red-500 mt-3">{error}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
