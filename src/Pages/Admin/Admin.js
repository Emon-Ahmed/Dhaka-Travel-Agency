import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function Login() {
  const { signInGoogle, error, user, setUser } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  const googleLogin = () => {
    signInGoogle("admin").then((result) => {

      if (result.user.email) {
        
        fetch("0/addadmin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: result.user.email }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              // setUser({ ...user, role: "admin" });
              // console.log(user);
              history.push(redirect_uri);
            }
          });
      }

    });
  };
  return (
    <div>
      <section className="text-gray-600 body-font bg-green-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="mx-auto md:pr-16 lg:pr-0 pr-0">
            <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-center text-4xl text-gray-900 font-medium title-font mb-5">
                Admin
              </h2>
              <div>
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
