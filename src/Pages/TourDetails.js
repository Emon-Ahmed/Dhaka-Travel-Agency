import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function TourDetails() {
    const [tour, setTour] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
      const url = `http://localhost:5000/alltour/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setTour(data));
    }, []);

  return (
    <div>
      <h1> Hi {id} </h1>
      <div className="container">
        <div className="single-service text-center my-5">
          <p className="my-2">This is {tour.name}  </p>
          <Link
                    to={`/booking/${tour._id}`}
                    className="btn btn-service"
                  >
                    book
                  </Link>
        </div>
      </div>
    </div>
  );
}
