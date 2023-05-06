import React from "react";

const Particard = () => {
  return (
    <div>
      <div className=" bg-white rounded-full  my-3 h-36 w-44 relative ">
        <img src="/assets/Group 13.png " alt="" className=" h-36 w-44 " />
        <span className="absolute inset-y-0 right-24 top-6 flex items-center -pt-28 text-gray-300 text-xl ">
          Vector
        </span>
        <br />
        <span className="absolute inset-y-0 right-20 flex items-center top-16  text-white text-2xl font-bold ">
          Content
        </span>
      </div>
    </div>
  );
};

export default Particard;
