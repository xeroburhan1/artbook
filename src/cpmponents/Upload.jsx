import React from "react";

const Upload = () => {
  return (
    <div>
      <div className="my-0 mx-auto bg-white h-36 w-96 rounded-3xl flex flex-col">
        <button className="bg-purple-600  rounded-3xl text-white text-xs h-5 w-20 mt-4 ml-72 ">
          Browse
        </button>
        <div className=" flex flex-row gap-4">
          <img src="/assets/dp.png" alt="" className=" w-12 ml-10 " />
          <h1 className=" pt-3 text-lg text-gray-500">
            Upload your latest art
          </h1>
        </div>

        <div className=" flex flex-row gap-4 relative  ">
          <button className=" bg-gray-400  rounded-3xl text-black text-xs h-5 w-14 mt-8 ml-8 ">
            Paid
          </button>
          <button className="bg-black  rounded-3xl text-white text-xs h-5 w-14 mt-8  ">
            Free
          </button>

          <img
            src="/assets/Ellipse 3.png"
            alt=""
            className=" h-12 ml-36 mt-2 relative"
          />

          <svg
            className="  mt-4 inset-y-0 right-6 absolute "
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="15.3333"
              y1="2"
              x2="15.3333"
              y2="28"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="14.6667"
              x2="28"
              y2="14.6667"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Upload;
