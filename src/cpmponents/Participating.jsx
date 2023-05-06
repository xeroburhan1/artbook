import React from "react";
import Particard from "./Particard";

const Participating = () => {
  return (
    <div>
      <div className="py-16    ">
        <h1 className=" text-gray-500 text-xl pl-11">Participating</h1>
        <Particard />
        <Particard />
        <button className="bg-purple-600 p-3 rounded-full w-40 h-20 text-white text-2xl mt-4 ">
          More
        </button>
      </div>
    </div>
  );
};

export default Participating;
