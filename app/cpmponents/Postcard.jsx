import React from "react";

const Postcard = () => {
  return (
    <div>
      <div className="my-3 mx-auto bg-white h-80 w-96 rounded-3xl ">
        <div className=" flex flex-row gap-4 pt-2 ">
          <img
            src="/assets/image 1.png"
            alt=""
            className=" w-14 ml-10 rounded-full "
          />
          <div className=" flex flex-col">
            <h1 className=" mt-2  text-xl text-black font-bold">Shamim.</h1>
            <div className=" flex flex-row">
              <span className=" -mt-1    ">10 mins</span>
              <button className="bg-black  rounded-3xl text-white text-xs h-4 w-14  ml-2 mt-1 ">
                Digital
              </button>
            </div>
          </div>

          <svg
            className=" mt-2 -ml-12  "
            width="22"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16.5" cy="16.5" r="16.5" fill="#FFE600" />
            <path
              d="M17 9L19.1607 14.8393L25 17L19.1607 19.1607L17 25L14.8393 19.1607L9 17L14.8393 14.8393L17 9Z"
              fill="#635E5E"
            />
          </svg>

          <svg
            className=" mt-2 ml-20"
            width="22"
            height="33"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18.5" cy="18.5" r="18.5" fill="#B8B7B7" />
            <path
              d="M19.216 9.76C19.648 9.76 19.968 9.832 20.176 9.976C20.384 10.104 20.512 10.272 20.56 10.48C20.608 10.704 20.632 10.952 20.632 11.224L20.632 20.152C20.632 20.408 20.608 20.64 20.56 20.848C20.496 21.072 20.368 21.248 20.176 21.376C19.968 21.504 19.64 21.568 19.192 21.568C18.744 21.568 18.424 21.504 18.232 21.376C18.024 21.248 17.896 21.072 17.848 20.848C17.8 20.624 17.776 20.376 17.776 20.104L17.776 11.2C17.776 10.928 17.8 10.68 17.848 10.456C17.896 10.248 18.024 10.08 18.232 9.952C18.424 9.824 18.752 9.76 19.216 9.76ZM19.216 23.896C19.68 23.896 20.024 23.96 20.248 24.088C20.456 24.232 20.592 24.424 20.656 24.664C20.704 24.904 20.728 25.168 20.728 25.456C20.728 25.76 20.704 26.024 20.656 26.248C20.592 26.472 20.448 26.648 20.224 26.776C20 26.92 19.656 26.992 19.192 26.992C18.712 26.992 18.368 26.92 18.16 26.776C17.952 26.632 17.816 26.44 17.752 26.2C17.688 25.976 17.656 25.712 17.656 25.408C17.656 25.136 17.688 24.88 17.752 24.64C17.816 24.4 17.952 24.216 18.16 24.088C18.368 23.96 18.72 23.896 19.216 23.896Z"
              fill="#2E263B"
            />
          </svg>
        </div>

        <div>
          <img
            src="/assets/image 3.png"
            alt=""
            className=" w-80 mt-4 ml-8 h-48 "
          />
        </div>

        <div className=" flex justify-between">
          <svg
            className="w-8 h-8 ml-8 mt-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className=" mr-40 mt-3 text-xl font-bold">120</span>
          <button className="bg-purple-500  rounded-3xl text-white text-xs h-7 w-24 mt-3 mr-8  ">
            Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
