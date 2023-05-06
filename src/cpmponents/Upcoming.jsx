import React from "react";

const Upcoming = () => {
  return (
    <div>
      <div className="flex-none w-36 bg-red-600 h-36 rounded-3xl relative">
        <span className=" text-4xl font-bold text-gray-700 absolute  right-20 top-10   ">
          EX
        </span>
        <span className=" border-b-2 border-transparent border-gray-800 w-20 absolute top-20 right-12 "></span>
        <span className=" absolute text-lg font-bold top-20 right-12 pt-1">
          Exhibition
        </span>
        <span className=" absolute text-md font-bold top-24 right-20 text-gray-700 pt-3">
          25 Feb
        </span>
      </div>
    </div>
  );
};

export default Upcoming;
