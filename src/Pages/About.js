import React from "react";

export default function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
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
              <p className="mb-4 leading-relaxed text-justify">
              Dhaka Travel is a full-service Outbound Tour Operator in Bangladesh. The founder of Dhaka Travel  is a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. 
            </p>
            </div>

            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Tour Done</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Total User</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                350
              </h2>
              <p className="leading-relaxed">Tour Area</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                40
              </h2>
              <p className="leading-relaxed">Destination</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://emonahmed.com/programming-hero/11/about-page.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
