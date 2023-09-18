import React, { useState, useEffect } from "react";

let calculator = {
  result: undefined,
  "+": function () {
    this.result = Math.round((this.subject + this.object) * 1000) / 1000;
  },
  "-": function () {
    this.result = Math.round((this.subject - this.object) * 1000) / 1000;
  },
  "*": function () {
    this.result = Math.round(this.subject * this.object * 1000) / 1000;
  },
  "/": function () {
    this.result = Math.round((this.subject / this.object) * 1000) / 1000;
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
  const [valHolder, setValHolder] = useState(" ");

  const onClickNum = (e) => {
    const num = e.target.id;
    console.log("num: ", num, typeof num);
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

    console.log("newClickedNum: ", newClickedNum);

    calculator.object = Number(newClickedNum.join(""));
    const numValue = Number(newClickedNum.join(""));
    console.log("numValue: ", numValue, typeof numValue);
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
  };

  const onClickOperation = (e) => {
    const operationSign = e.target.id;
    calculator.operation = operationSign;
    console.log("calculator.operation: ", calculator.operation);
    console.log("operationSign: ", operationSign);

    setBtnNumberEl(false);
    setDecimalEl(false);
    setBtnDelEl(false);

    const newHoldNum = [...holdNum];

    if (calculator.object === undefined) {
      newHoldNum[1] = operationSign;
    } else {
      calculator.subject = Number(calculator.object); // 7
      if (newHoldNum[0] === "") {
        newHoldNum[0] = calculator.subject.toString();
      } else {
        newHoldNum[0] = calculator.result;
        calculator.subject = calculator.result;
      }
      newHoldNum[1] = calculator.operation;
      delete calculator.object;
    }
    setClickedNum([]);
    setHoldNum(newHoldNum);

    setValHolder(newHoldNum.join(""));
    setMonitorVal("0");

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);
  };

  const onClickDel = () => {
    const newClickedNum = [...clickedNum];
    newClickedNum.pop();
    if (newClickedNum.length > 0) {
      calculator.object = Number(newClickedNum.join(""));
    } else delete calculator.object;

    if (
      calculator.subject !== undefined &&
      calculator.operation &&
      calculator.subject !== undefined
    ) {
      calculator[calculator.operation]();
    }
    setMonitorVal(newClickedNum.join(""));
    setClickedNum(newClickedNum);

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);
  };

  const onClickEq = () => {
    setValHolder(" ");
    setBtnNumberEl(true);
    setBtnDelEl(true);

    const newClickedNum = [
      calculator.result || calculator.object || calculator.subject,
    ];

    setClickedNum(newClickedNum);

    setMonitorVal(newClickedNum.join(""));

    console.log("clickedNum: ", clickedNum);
    console.log("holdNum: ", holdNum);
    console.log("monitorVal: ", monitorVal);
    console.log("valHolder: ", valHolder);
    console.log("calculator subject: ", calculator.subject);
    console.log("calculator Operation: ", calculator.operation);
    console.log("calculator object: ", calculator.object);
    console.log("calculator result: ", calculator.result);
  };

  const onClickReset = () => {
    calculator.result = undefined;
    setValHolder(" ");
    setMonitorVal("0");
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
  };

  useEffect(() => {
    updateScreen(monitorVal, valHolder);
  }, [updateScreen, monitorVal, valHolder, clickedNum, holdNum]);

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
