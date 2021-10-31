import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function AllTour() {
  const { user } = useAuth();
  const [tours, setTour] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://agile-inlet-91085.herokuapp.com/alltour")
      .then((res) => res.json())
      .then((data) => {
        setTour(data);
        setLoading(false);
      });
  }, []);
  // Buy Now
  const bookNow = (tour) => {
    delete tour._id;
    const data = { ...tour, userEmail: user.email, status: "Pending" };
    fetch("https://agile-inlet-91085.herokuapp.com/orders", {
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
    const url = `https://agile-inlet-91085.herokuapp.com/alltour/${id}`;
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

  if (loading) {
    return (
      <div className="text-center">
        <button type="button" class="bg-rose-600 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          <div className="text-4xl p-20">
            <p>Loading</p>
          </div>
        </button>
      </div>
    );
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="banner">
            <div className="py-16">
              <h1 className="banner-heading text-center text-4xl text-white font-bold">
                Total Tour {tours.length}
              </h1>
            </div>
          </div>
        </div>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {tours.map((tour) => (
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
                    {/* <button
                      onClick={() => deleteTour(tour._id)}
                      className="flex mx-auto text-white bg-red-500 border-0 py-1.5 px-8 focus:outline-none hover:bg-red-600 text-lg"
                    >
                      Delete
                    </button> */}
                    <Link to={`/tourdetails/${tour._id}`}>
                      <button className="m-1 flex text-white bg-green-400 hover:bg-green-500 border-0 py-1.5 px-8 focus:outline-none  text-lg">
                        Book Now
                      </button>
                    </Link>
                    {/* <Link to="/orderlist">
                      <button
                        onClick={() => bookNow(tour)}
                        className="flex mx-auto text-white bg-green-500 border-0 py-1.5 px-8 focus:outline-none hover:bg-green-600 text-lg"
                      >
                        Book Now
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
