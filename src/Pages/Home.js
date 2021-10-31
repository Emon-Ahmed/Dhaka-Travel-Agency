import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import "../App.css";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Home() {
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
      <section className="container mx-auto">
        <Banner></Banner>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="w-full flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-48 h-full bg-green-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-2 mb-8">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  About Dhaka Travel
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  Dhaka is the capital city of Bangladesh.
                </p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-justify">
              Dhaka is the capital city of Bangladesh, in southern Asia. Set
              beside the Buriganga River, it’s at the center of national
              government, trade and culture.
            </p>
            <p className="mb-8 leading-relaxed text-justify">
              The 17th-century old city was the Mughal capital of Bengal, and
              many palaces and mosques remain. American architect Louis Khan’s
              National Parliament House complex typifies the huge, fast-growing
              modern metropolis.
            </p>
            <div className="flex justify-center">
              <Link to="/about">
                <button className="bg-green-400 hover:bg-green-500 shadow inline-flex items-center border-0 py-2 text-white px-8  focus:outline-none text-base mt-4 md:mt-0">
                  About Us
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://emonahmed.com/programming-hero/11/banner2.jpg"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-2 mb-8">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Dhaka Travel's Tours
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Dhaka is the capital city of Bangladesh, in southern Asia. Set
                beside the Buriganga River, it’s at the center of national
                government, trade and culture.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {tours
              .map((tour) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={tour.url}
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {tour.name}
                    </h2>
                    <p className="mt-1">Description</p>
                    <div className="pl-0">
                      <Link to={`/tourdetails/${tour._id}`}>
                        <button className="m-1 flex text-white bg-green-400 hover:bg-green-500 border-0 py-1.5 px-8 focus:outline-none  text-lg">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 8)}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-2 mb-8">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Dhaka Travel's Blog
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Dhaka is the capital city of Bangladesh, in southern Asia. Set
                beside the Buriganga River, it’s at the center of national
                government, trade and culture.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://emonahmed.com/programming-hero/11/blog1.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Where Children Sleep
              </h2>
              <p className="text-base leading-relaxed mt-2">
                21 min read Children all over the world live and sleep in very
                different environments. It is my hope that these photographs
                will help children, and adults.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://emonahmed.com/programming-hero/11/blog2.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Wakhan, An Other Afghanistan
              </h2>
              <p className="text-base leading-relaxed mt-2">
                8 min read Journeying through a remote region of northeastern
                Afghanistan, untouched by the war and preserved from the Taliban
                regime, this story pays.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://emonahmed.com/programming-hero/11/blog3.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Women at the End of the Land
              </h2>
              <p className="text-base leading-relaxed mt-2">
                For centuries, the nomadic Nenets reindeer herders of the
                Siberian arctic have migrated across one of the most challenging
                environments on Earth.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-2 mb-8">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Dhaka Travel's Testimonial
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Dhaka is the capital city of Bangladesh, in southern Asia. Set
                beside the Buriganga River, it’s at the center of national
                government, trade and culture.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                Fantastic! Our Costa Rica travel company took care of everything. The owner and his wife met us at the airport with a care package of coffee and chocolate. It was such a nice welcome. Our drivers to and from the resort were great. The transportation was comfortable and we had plenty of time to stop along the wa
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://emonahmed.com/programming-hero/11/emon.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Emon Ahmed
                    </span>
                    <span className="text-gray-500 text-sm">DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                Our trip to Morocco was truly a once-in-a-lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was incredible. After reading our initial request and speaking with us on the phone, he designed a tour perfectly custom to what our interests were.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://emonahmed.com/programming-hero/11/sadia.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Sadia
                    </span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
