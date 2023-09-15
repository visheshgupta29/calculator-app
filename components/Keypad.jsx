import React from "react";

const Keypad = () => {
  return (
    <div className="keyboard__component">
      <button id="7" className="btn btn--input btn--number" value="7">
        7
      </button>
      <button id="8" className="btn btn--input btn--number" value="8">
        8
      </button>
      <button id="9" className="btn btn--input btn--number" value="9">
        9
      </button>
      <button id="del" className="btn btn--remove" value="del">
        del
      </button>
      <button id="4" className="btn btn--input btn--number" value="4">
        4
      </button>
      <button id="5" className="btn btn--input btn--number" value="5">
        5
      </button>
      <button id="6" className="btn btn--input btn--number" value="6">
        6
      </button>
      <button
        id="+"
        className="btn btn--input btn--operation"
        value="+"
        disabled
      >
        +
      </button>
      <button id="1" className="btn btn--input btn--number" value="1">
        1
      </button>
      <button id="2" className="btn btn--input btn--number" value="2">
        2
      </button>
      <button id="3" className="btn btn--input btn--number" value="3">
        3
      </button>
      <button
        id="-"
        className="btn btn--input btn--operation"
        value="-"
        disabled
      >
        -
      </button>
      <button id="." className="btn btn--input btn--number" value=".">
        .
      </button>
      <button id="0" className="btn btn--input btn--number" value="0">
        0
      </button>
      <button
        id="/"
        className="btn btn--input btn--operation"
        value="/"
        disabled
      >
        /
      </button>
      <button
        id="*"
        className="btn btn--input btn--operation"
        value="*"
        disabled
      >
        x
      </button>
      <button id="reset" className="btn btn--remove btn--reset" value="C">
        reset
      </button>
      <button id="=" className="btn btn--equal" value="=" disabled>
        =
      </button>
    </div>
  );
};

export default Keypad;
