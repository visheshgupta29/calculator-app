import React from "react";

const Screen = ({ monitorVal, valHolder }) => {
  return (
    <>
      <div id="valueHolder">{valHolder}</div>
      {/* <input
        type="text"
        id="calculator__screen"
        className="screen__component"
        value={monitorVal}
        disabled
      /> */}
      <div id="calculator__screen" className="screen__component">
        {monitorVal}
      </div>
    </>
  );
};

export default Screen;
