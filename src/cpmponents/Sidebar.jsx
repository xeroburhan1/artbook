import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="nav bg-white h-full w-20 rounded-3xl">
        <div className="flex flex-col items-center justify-center my-auto gap-8 h-screen ">
          <img src="/assets/Iconly/Curved/Home.svg" alt="" />
          <img src="/assets/Iconly/Curved/Info-Square.svg" alt="" />
          <img src="/assets/Iconly/Curved/Profile.svg" alt="" />
          <img src="/assets/Iconly/Curved/Setting.svg" alt="" />
          <img src="/assets/Iconly/Curved/Wallet.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
