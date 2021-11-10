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
  };

  doCalculate = (currentState, nowNumber) => {
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

    console.log(newNumber);

    return newNumber;
  };

  handleClick = (target) => {
    const { text, number, calState } = this.state;
    const { doCalculate } = this;
    const nowNumber =
      text.length > 0 ? parseFloat(text.replace(/^\./, "0.")) : 0;
    let newText = "";
    let newCalState = "";
    let newNumber = 0;

    switch (target) {
      case "+":
        newNumber = doCalculate("plus", nowNumber);
        newCalState = "plus";
        break;
      case "-":
        newNumber = doCalculate("minus", nowNumber);
        newCalState = "minus";
        break;
      case "*":
        newNumber = doCalculate("time", nowNumber);
        newCalState = "time";
        break;
      case "/":
        newNumber = doCalculate("divide", nowNumber);
        newCalState = "divide";
        break;
      case "DEL":
        newText = text.slice(0, -1).replace(/\.$/, "");
        break;
      case "RESET":
        newText = "";
        newNumber = doCalculate("reset", 0);
        break;
      case "=":
        newNumber = doCalculate("equals", nowNumber);
        newText = newNumber.toString();
        newCalState = "equals";
        break;
      default:
        if (text.length === 1 && text.length[0] === 0 && target === "0") {
          newText = "";
        } else if (calState === "equals") {
          newText = target;
        } else {
          newText = text + target;
        }
        newCalState = calState === "equals" ? "" : calState;
        newNumber = calState === "equals" ? 0 : number;
        break;
    }
    this.setState({
      text: newText,
      number: newNumber,
      calState: newCalState,
    });
  };

  renderBtn = () => {
    const { handleClick } = this;

    return (
      <div className="calculator__body">
        {btnList.map((target) => {
          const classLarge =
            target === "RESET" || target === "=" ? "calculator--large" : "";
          return (
            <div
              key={target}
              className={`calculator__btn ${classLarge}`}
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
    const { text } = this.state;
    const { renderBtn } = this;
    return (
      <div className="App">
        <div className="calculator">
          <div className="calculator__input"> {text} </div>
          {renderBtn()}
        </div>
      </div>
    );
  }
}

export default Calculator;
