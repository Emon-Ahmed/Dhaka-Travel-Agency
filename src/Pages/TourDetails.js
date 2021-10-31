import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function TourDetails() {
  const [tour, setTour] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://agile-inlet-91085.herokuapp.com/alltour/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTour(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="single-service text-center my-20">
          <p className="my-2 text-4xl font-bold">This is {tour.name} </p>
          <p className="my-2 text-xl">This is {tour.email} </p>
          <Link to={`/booking/${tour._id}`}>
            <button className="m-1 flex mx-auto text-white bg-indigo-500 border-0 py-1.5 px-8 focus:outline-none hover:bg-indigo-600 text-lg">
              Book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
