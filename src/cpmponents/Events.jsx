import React from "react";
import Upcoming from "./Upcoming";

const Events = () => {
  return (
    <div>
      <div className="px-6 py-3 flex flex-col gap-3">
        <div className="h-56 bg-slate-900 rounded-3xl">
          <div className=" relative ">
            <img
              src="/assets/Rectangle 27.png"
              alt=""
              className=" h-56 w-72   "
            />
            <span className="absolute inset-y-0 right-40 top-12 flex items-center  text-gray-300 text-xl ">
              Digital art
            </span>
            <br />
            <span className="absolute inset-y-0 right-36 top-24  flex items-center   text-white text-2xl font-bold ">
              Exhibition
            </span>
          </div>
        </div>
        <div className="h-48 bg-slate-800 rounded-3xl">
          <div className=" relative ">
            <img
              src="/assets/Rectangle 30.png"
              alt=""
              className=" h-48 w-72   "
            />
            <span className="absolute inset-y-0 right-44 top-0 flex items-center  text-gray-300 text-xl ">
              Canvas
            </span>
            <br />
            <span className="absolute inset-y-0 right-40  top-10 flex items-center   text-white text-2xl font-bold ">
              Contest
            </span>
          </div>
        </div>
        <h1 className="pl-2 flex text-xl flex-col">
          Upcoming <span className="font-bold text-xl ">Events</span>
        </h1>
        <div className="flex">
          <div className="flex-1 flex gap-3 overflow-x-auto pb-5">
            <Upcoming />
            <Upcoming />
            <Upcoming />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
