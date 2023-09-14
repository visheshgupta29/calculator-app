import React from "react";

const Keypad = () => {
  return (
    <div className="keyboard__component">
      <button id="7" className="btn btn--input btn--number">
        7
      </button>
      <button id="8" className="btn btn--input btn--number">
        8
      </button>
      <button id="9" className="btn btn--input btn--number">
        9
      </button>
      <button id="del" className="btn btn--remove">
        del
      </button>
      <button id="4" className="btn btn--input btn--number">
        4
      </button>
      <button id="5" className="btn btn--input btn--number">
        5
      </button>
      <button id="6" className="btn btn--input btn--number">
        6
      </button>
      <button id="+" className="btn btn--input btn--operation" disabled>
        +
      </button>
      <button id="1" className="btn btn--input btn--number">
        1
      </button>
      <button id="2" className="btn btn--input btn--number">
        2
      </button>
      <button id="3" className="btn btn--input btn--number">
        3
      </button>
      <button id="-" className="btn btn--input btn--operation" disabled>
        -
      </button>
      <button id="." className="btn btn--input btn--number">
        .
      </button>
      <button id="0" className="btn btn--input btn--number">
        0
      </button>
      <button id="/" className="btn btn--input btn--operation" disabled>
        /
      </button>
      <button id="*" className="btn btn--input btn--operation" disabled>
        x
      </button>
      <button id="reset" className="btn btn--remove btn--reset">
        reset
      </button>
      <button id="=" className="btn btn--equal" disabled>
        =
      </button>
    </div>
  );
};

export default Keypad;
