import React from "react";

const Topbar = () => {
  return (
    <div>
      <div className="topnav flex justify-between items-center h-12 mx-20 my-5">
        <img src="/assets/logo.png" alt="" className="w-36" />

        <div className="flex relative ">
          <input
            type="text"
            placeholder="Search here"
            className="bg-white rounded-3xl w-60 h-10 placeholder:pl-6 relative pr-10"
          />
          <img
            src="/assets/Iconly/Curved/Search.svg"
            alt=""
            className="w-6 absolute top-3 right-4 fill-slate-500"
          />
        </div>

        <div className="flex gap-4 relative">
          <img
            src="/assets/Iconly/Curved/Notification.svg"
            alt=""
            className="w-6 relative"
          />
          <div className="w-4 h-4 rounded-full bg-yellow-300 absolute"></div>
          <img src="/assets/Iconly/Curved/Buy.svg" alt="" className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
