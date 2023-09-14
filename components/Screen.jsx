import React from "react";

const Screen = () => {
  return (
    <>
      <div id="valueHolder"></div>
      <input
        type="text"
        id="calculator__screen"
        className="screen__component"
        placeholder="0"
        disabled
      />
    </>
  );
};

export default Screen;
