import React, { useState } from "react";

let calculator = {
  result: undefined,
  "+": function () {
    this.result = this.subject + this.object;
  },
  "-": function () {
    this.result = this.subject - this.object;
  },
  "*": function () {
    this.result = this.subject * this.object;
  },
  "/": function () {
    this.result = this.subject / this.object;
  },
};

const Keypad = ({ updateScreen }) => {
  // button disable
  const [btnNumberEl, setBtnNumberEl] = useState(false);
  const [btnOperationEl, setBtnOperationEl] = useState(true);
  const [btnEqualEl, setBtnEqualEl] = useState(true);
  const [decimalEl, setDecimalEl] = useState(false);
  const [btnDelEl, setBtnDelEl] = useState(false);

  const [clickedNum, setClickedNum] = useState([]);
  const [holdNum, setHoldNum] = useState(["", ""]);

  const [monitorVal, setMonitorVal] = useState("0");
  const [valHolder, setValHolder] = useState("");

  const onClickNum = (e) => {
    const num = e.target.id;
    setBtnOperationEl(false);
    setBtnEqualEl(false);

    const newClickedNum = [...clickedNum];

    if (num === ".") {
      if (newClickedNum.length === 0) newClickedNum.push("0");
      if (!newClickedNum.includes(num)) {
        newClickedNum.push(num);
        setDecimalEl(true);
      }
    } else {
      newClickedNum.push(num);
    }

    calculator.object = Number(clickedNum.join(""));
    const numValue = Number(clickedNum.join(""));
    setMonitorVal(numValue.toString());

    if (
      calculator.subject !== undefined &&
      calculator.operation &&
      calculator.object !== undefined
    ) {
      calculator[calculator.operation]();
    }

    setClickedNum(newClickedNum);

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);

    updateScreen(monitorVal, valHolder);
  };

  const onClickOperation = (e) => {
    const operationSign = e.target.id;
    calculator.operation = operationSign;
    console.log("calculator.operation: ", calculator.operation);
    console.log("operationSign: ", operationSign);

    setBtnNumberEl(false);
    setDecimalEl(false);
    setBtnDelEl(false);

    if (calculator.object === undefined) {
      const temp = holdNum[0];
      setHoldNum(temp, operationSign);
    } else {
      calculator.subject = Number(calculator.object);
      if (holdNum[0] === "") {
        // holdNum[0] = calculator.subject;
        const temp = holdNum[1];
        setHoldNum([calculator.subject, temp]);
      } else {
        const temp = holdNum[1];
        setHoldNum([Math.round(calculator.result * 1000) / 1000, temp]);
        // holdNum[0] = Math.round(calculator.result * 1000) / 1000;
        calculator.subject = calculator.result;
      }
      const temp = holdNum[0];
      setHoldNum([temp, calculator.operation]);
      // holdNum[1] = calculator.operation;
      delete calculator.object;
    }
    setClickedNum([]);

    setValHolder(holdNum.join(""));
    setMonitorVal(clickedNum.join(""));

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);

    updateScreen(monitorVal, valHolder);
  };

  const onClickDel = () => {
    setClickedNum((oldarray) => oldarray.slice(0, oldarray.length - 1)); // pop()
    if (clickedNum.length > 0) {
      calculator.object = Number(clickedNum.join(""));
    } else delete calculator.object;

    if (
      calculator.subject !== undefined &&
      calculator.operation &&
      calculator.subject !== undefined
    ) {
      calculator[calculator.operation]();
    }
    setMonitorVal(clickedNum.join(""));

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);

    updateScreen(monitorVal, valHolder);
  };

  const onClickEq = () => {
    setValHolder("");
    setBtnNumberEl(true);
    setBtnDelEl(true);

    setClickedNum([
      calculator.result || calculator.object || calculator.subject,
    ]);

    setMonitorVal(clickedNum.join(""));

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);

    updateScreen(monitorVal, valHolder);
  };

  const onClickReset = () => {
    calculator.result = undefined;
    setValHolder("");
    setMonitorVal("");
    setHoldNum(["", ""]);
    setClickedNum([]);
    delete calculator.subject;
    delete calculator.object;
    delete calculator.operation;
    setBtnDelEl(false);
    setBtnEqualEl(true);
    setBtnNumberEl(false);
    setBtnOperationEl(true);

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);

    updateScreen(monitorVal, valHolder);
  };

  return (
    <div className="keyboard__component">
      <button
        id="7"
        className="btn btn--input btn--number"
        value="7"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        7
      </button>
      <button
        id="8"
        className="btn btn--input btn--number"
        value="8"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        8
      </button>
      <button
        id="9"
        className="btn btn--input btn--number"
        value="9"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        9
      </button>
      <button
        id="del"
        className="btn btn--remove"
        value="del"
        onClick={onClickDel}
        disabled={btnDelEl}
      >
        del
      </button>
      <button
        id="4"
        className="btn btn--input btn--number"
        value="4"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        4
      </button>
      <button
        id="5"
        className="btn btn--input btn--number"
        value="5"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        5
      </button>
      <button
        id="6"
        className="btn btn--input btn--number"
        value="6"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        6
      </button>
      <button
        id="+"
        className="btn btn--input btn--operation"
        value="+"
        onClick={onClickOperation}
        disabled={btnOperationEl}
      >
        +
      </button>
      <button
        id="1"
        className="btn btn--input btn--number"
        value="1"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        1
      </button>
      <button
        id="2"
        className="btn btn--input btn--number"
        value="2"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        2
      </button>
      <button
        id="3"
        className="btn btn--input btn--number"
        value="3"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        3
      </button>
      <button
        id="-"
        className="btn btn--input btn--operation"
        value="-"
        onClick={onClickOperation}
        disabled={btnOperationEl}
      >
        -
      </button>
      <button
        id="."
        className="btn btn--input btn--number"
        value="."
        onClick={onClickNum}
        disabled={decimalEl}
      >
        .
      </button>
      <button
        id="0"
        className="btn btn--input btn--number"
        value="0"
        onClick={onClickNum}
        disabled={btnNumberEl}
      >
        0
      </button>
      <button
        id="/"
        className="btn btn--input btn--operation"
        value="/"
        onClick={onClickOperation}
        disabled={btnOperationEl}
      >
        /
      </button>
      <button
        id="*"
        className="btn btn--input btn--operation"
        value="*"
        onClick={onClickOperation}
        disabled={btnOperationEl}
      >
        x
      </button>
      <button
        id="reset"
        className="btn btn--remove btn--reset"
        value="C"
        onClick={onClickReset}
      >
        reset
      </button>
      <button
        id="="
        className="btn btn--equal"
        value="="
        onClick={onClickEq}
        disabled={btnEqualEl}
      >
        =
      </button>
    </div>
  );
};

export default Keypad;
