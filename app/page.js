import React from "react";
import Sidebar from "./cpmponents/Sidebar";
import Topbar from "./cpmponents/Topbar";
import Events from "./cpmponents/Events";
import Participating from "./cpmponents/Participating";
import Middle from "./cpmponents/Middle";

const Home = () => {
  return (
    <div className="bg-slate-800 ">
    <div className="ml-64 mr-64 bg-slate-800 ">
    <div className="App main bg-gradient-to-r rounded-t-3xl from-background1 to-background2 w-full h-screen flex ">
      <Sidebar />
      <div className="middle bg-gradient-to-r from-background1 to-background2 w-9/12 h-screen">
        <Topbar />
        <div className="flex h-5/6 px-20">
          <div className="h-full w-4/12 bg-transparent">
            <div className="flex items-end justify-end">
              <img src="/assets/dp.png" alt="" className="w-24" />
            </div>
            <Participating />
          </div>
          <div className="h-full w-8/12 bg-transparent">
            <div className="py-5 px-5">
              <h1 className="font-fredoka text-xl text-gray-500">
                Hey Shamim !
              </h1>
              <h1 className="font-fredoka font-bold text-4xl -my-1 ">
                Welcome
              </h1>
            </div>

            <div className="container flex h-5/6 w-full overflow-auto justify-center">
              <Middle />
            </div>
          </div>
        </div>
      </div>

      <div className="right bg-white w-3/12 h-screen rounded-3xl">
        <Events />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
