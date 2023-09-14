import React from "react";

const TripleToggle = () => {
  return (
    <div className="toggle__component">
      <div className="choices">
        <label htmlFor="1">1</label>
        <label htmlFor="2">2</label>
        <label htmlFor="3">3</label>
      </div>
      <div className="radio__wrapper">
        <input id="1" name="theme" type="radio" checked />
        <input id="2" name="theme" type="radio" />
        <input id="3" name="theme" type="radio" />
      </div>
    </div>
  );
};

export default TripleToggle;
