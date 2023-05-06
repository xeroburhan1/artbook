import React from "react";
import Upload from "./Upload";
import Postcard from "./Postcard";

const Middle = () => {
  const styles = {
    maxHeight: "500px",
  };

  return (
    <div className="flex-1 flex-col gap-3 overflow-y-auto" style={styles}>
      <Upload />
      <Postcard />
      <Postcard />
      <Postcard />
    </div>
  );
};

export default Middle;
