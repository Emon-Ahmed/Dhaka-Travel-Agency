import React from "react";
import useAuth from "../Hooks/useAuth.js";
import { useForm } from "react-hook-form";
export default function Booking() {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then( result => {
      if(result.insertedId){
        alert('DONE');
        reset();
      };
    })
    
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto w-1/2 m-20"
      >
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={user.displayName}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("example")}
          />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            defaultValue={user.email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("exampleRequired", { required: true })}
          />
        </div>
        <div className="relative mb-4">
          <label for="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("exampleRequired2", { required: true })}
          />
        </div>
        <input
          className="m-1 flex mx-auto text-white bg-indigo-500 border-0 py-1.5 px-8 focus:outline-none hover:bg-indigo-600 text-lg"
          type="submit"
        />
      </form>
    </div>
  );
}
