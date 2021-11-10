import React, { Component } from "react";
import "./style/index.scss";

const btnList = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "*",
  "RESET",
  "=",
];
class Calculator extends Component {
  state = {
    text: "",
    number: 0,
    calState: "",
    clearFlag: false,
  };

  doCalculate = (nowNumber) => {
    const { number, calState } = this.state;
    let newNumber = nowNumber;
    switch (calState) {
      case "plus":
        newNumber = number + nowNumber;
        break;
      case "minus":
        newNumber = number - nowNumber;
        break;
      case "time":
        newNumber = number * nowNumber;
        break;
      case "divide":
        newNumber = number / nowNumber;
        break;
      case "reset":
        newNumber = 0;
        break;
      default:
        break;
    }

    return newNumber;
  };

  handleClick = (target) => {
    const { text, number, calState, clearFlag } = this.state;
    const { doCalculate } = this;
    const nowNumber =
      text.length > 0 ? parseFloat(text.replace(/^\./, "0.")) : 0;
    let newText = text;
    let newCalState = "";
    let newNumber = 0;
    let newClearFlag = clearFlag;

    switch (target) {
      case "+":
        newNumber = doCalculate(nowNumber);
        newCalState = "plus";
        newClearFlag=true;
        break;
      case "-":
        newNumber = doCalculate(nowNumber);
        newCalState = "minus";
        newClearFlag=true;
        break;
      case "*":
        newNumber = doCalculate(nowNumber);
        newCalState = "time";
        newClearFlag=true;
        break;
      case "/":
        newNumber = doCalculate(nowNumber);
        newCalState = "divide";
        newClearFlag=true;
        break;
      case "DEL":
        newText = text.slice(0, -1).replace(/\.$/, "");
        break;
      case "RESET":
        newText = "";
        newNumber = doCalculate( 0);
        break;
      case "=":
        newNumber = doCalculate(nowNumber);
        const tmp = newNumber.toString();
        if (tmp === "NaN") {
          newText = "Error";
        } else if (tmp.match(/\./)) {
          newText = tmp.slice(0, 8);
        } else if (tmp.length > 8) {
          newText = "Exceed";
        } else {
          newText = tmp;
        }

        newCalState = "equals";
        break;
      default:
        if (clearFlag) {
          newText = target;
          newClearFlag = !clearFlag;
        } else if (
          text.length === 1 &&
          text.length[0] === 0 &&
          target === "0"
        ) {
          newText = "";
        } else if (calState === "equals") {
          newText = target;
        } else if (text.length < 8) {
          newText = text + target;
        } else {
          newText = text;
        }
        newCalState = calState === "equals" ? "" : calState;
        newNumber = calState === "equals" ? 0 : number;
        break;
    }
    this.setState({
      text: newText,
      number: newNumber,
      calState: newCalState,
      clearFlag: newClearFlag
    });
  };

  renderBtn = () => {
    const { handleClick } = this;

    return (
      <div className="calculator__body">
        {btnList.map((target) => {
          const classDark =
            parseInt(target) || parseInt(target) === 0 || target === "="
              ? "calculator--dark"
              : "";
          const classLarge =
            target === "RESET" || target === "=" ? "calculator--large" : "";
          return (
            <div
              key={target}
              className={`calculator__btn ${classLarge} ${classDark}`}
              onClick={() => {
                handleClick(target);
              }}
            >
              {target}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { text, clearFlag } = this.state;
    const { renderBtn } = this;
    return (
      <div className="App">
          {clearFlag}
        <div className="calculator">
          <div className="calculator__input"> {text} </div>
          {renderBtn()}
        </div>
      </div>
    );
  }
}

export default Calculator;
