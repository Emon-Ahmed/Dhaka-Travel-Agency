import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


export default function AllTour( ) {
  const { _id } = useParams();
  const [tours, setTour] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltour")
      .then((res) => res.json())
      .then((data) => setTour(data));
  });
  // Delete
  const deleteTour = (id) => {
    const url = `http://localhost:5000/alltour/${id}`;
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center text-4xl font-bold">{tours.length}</h1>
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
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {tour.name}
                  </h2>
                  <p className="mt-1">$16.00</p>
                  <button
                    onClick={() => deleteTour(tour._id)}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/tourdetails/${tour._id}`}
                    className="btn btn-service"
                  >
                    Detials
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
