import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
export default function OrderList() {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  const [tours, setTour] = useState([]);
  const orderMail = user.email;
  const url = `http://localhost:5000/orderlist/${orderMail}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderMail]);
  if (order.length == 0) return <p>Nothing To Show</p>;

  // Buy Now
  const bookNow = (tour) => {
    delete tour._id;
    const data = { ...tour, userEmail: user.email, status: "Pending" };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("DONE");
        }
      });
  };

  // Delete
  const deleteTour = (id) => {
    const url = `http://localhost:5000/orderlist/${id}`;
    console.log(id);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("DELETED");
          const rem = tours.filter((tour) => tour._id !== id);
          setTour(rem);
        }
      });
  };
  return (
    <div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap">
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider rounded-t">
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
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none  bg-gray-100 border-indigo-500 text-indigo-500 border-b-2 hover:text-gray-900 tracking-wider">
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
      </div>

      <div className="container mx-auto flex">
        {/* {order?.map((o) => (
          <h1 className="text-center text-2xl">{o.name} </h1>
        ))} */}

        
        {order?.map((tour) => (
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {tour.name}
              </h2>
              <p className="mt-1">Description</p>
              <div className="pl-0">
                <button
                  onClick={() => deleteTour(tour._id)}
                  className="flex mx-auto text-white bg-red-500 border-0 py-1.5 px-8 focus:outline-none hover:bg-red-600 text-lg"
                >
                  Delete
                </button>
                <Link to={`/tourdetails/${tour._id}`}>
                  <button className="m-1 flex text-white bg-green-400 hover:bg-green-500 border-0 py-1.5 px-8 focus:outline-none  text-lg">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
