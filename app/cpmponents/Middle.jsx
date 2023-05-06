import React from "react";
import Upload from "./Upload";
import Postcard from "./Postcard";

const Middle = () => {
  // const styles = {
  //   maxHeight: "500px",
  // };

  return (
    <div className="">
    <div className="flex-1 flex-col gap-3 " >
      <Upload />
      <Postcard />
      <Postcard />
      <Postcard />
    </div>
    </div>
  );
};

export default Middle;
