import React, { Component } from "react";
import "./style/index.scss";

// 按鈕陣列
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

/**
 * 計算機組件
 *
 * 注： a + b 中，稱 a 為第一數， + 為運算符， b 為第二數
 */
class Calculator extends Component {
  //#region STATE 狀態
  state = {
    // 顯示內容
    text: "",
    // 存放第一數
    number: 0,
    // 存放當前運算符
    calState: "",
    // 是否重整輸入框
    clearFlag: false,
  };
  //#endregion

  //#region MEHTODS 方法

  /**
   * 進行運算
   *
   * @param {number} nowNumber - 第二數
   * @returns {number} 運算結果
   */
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

  /**
   * 處理點擊事件
   *
   * @param {string} target - 點擊的按鈕
   */
  handleClick = (target) => {
    const { text, number, calState, clearFlag } = this.state;
    const { doCalculate } = this;
    // 預處理第二數格式
    const nowNumber =
      text.length > 0 ? parseFloat(text.replace(/^\./, "0.")) : 0;
    // 暫存狀態
    let newText = text;
    let newCalState = "";
    let newNumber = 0;
    let newClearFlag = clearFlag;

    switch (target) {
      case "+":
        // 加法
        newNumber = doCalculate(nowNumber);
        newCalState = "plus";
        newClearFlag = true;
        break;

      case "-":
        // 減法
        newNumber = doCalculate(nowNumber);
        newCalState = "minus";
        newClearFlag = true;
        break;

      case "*":
        // 乘法
        newNumber = doCalculate(nowNumber);
        newCalState = "time";
        newClearFlag = true;
        break;

      case "/":
        // 除法
        newNumber = doCalculate(nowNumber);
        newCalState = "divide";
        newClearFlag = true;
        break;

      case "DEL":
        // 刪除
        newText = text.slice(0, -1).replace(/\.$/, "");
        break;

      case "RESET":
        // 重製
        newText = "";
        newNumber = doCalculate(0);
        break;

      case "=":
        // 等於，進行運算
        newNumber = doCalculate(nowNumber);

        // 處理計算結果格式
        const tmp = newNumber.toString();
        if (tmp === "NaN") {
          // 計算錯誤
          newText = "Error";
        } else if (tmp.match(/\./)) {
          // 處理小數點，取小數點後七位
          newText = tmp.slice(0, 9);
        } else if (tmp.length > 8) {
          // 數字超過顯示範圍
          newText = "Exceed";
        } else {
          // 正常狀況
          newText = tmp;
        }

        newCalState = "equals";
        break;

      default:
        // 數字
        if (clearFlag) {
          // 清輸入框，出現時機：輸入完第一數及運算符後，輸入第二數前
          newText = target;
          newClearFlag = !clearFlag;
        } else if (
          text.length === 1 &&
          text.length[0] === 0 &&
          target === "0"
        ) {
          // 連續輸入兩個0
          newText = "";
        } else if (text.length >= 8 || (target === "." && text.match(/\./))) {
          // 超過輸入框範圍或重複輸入小數點
          newText = text;
        } else {
          // 正常狀況
          newText = text + target;
        }
        newCalState = calState === "equals" ? "" : calState;
        newNumber = calState === "equals" ? 0 : number;
        break;
    }

    // 更新狀態
    this.setState({
      text: newText,
      number: newNumber,
      calState: newCalState,
      clearFlag: newClearFlag,
    });
  };

  //#endregion

  //#region RENDER 渲染

  /**
   * 渲染計算機按鈕
   *
   * @returns {JSX}
   */
  renderBtn = () => {
    const { handleClick } = this;

    return (
      <div className="calculator__body">
        {btnList.map((target) => {
          // 數字鍵為深色
          const classDark =
            parseInt(target) || parseInt(target) === 0 || target === "="
              ? "calculator--dark"
              : "";
          // 重製鍵與等於鍵為大按鈕
          const classLarge =
            target === "RESET" || target === "=" ? "calculator--large" : "";

          return (
            <div
              key={target}
              className={`calculator__btn ${classLarge} ${classDark}`}
              onClick={() => {
                // 綁定點及回乎函式
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

  /**
   * 渲染函式
   *
   * @returns {JSX} 計算機樣板
   */
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
  //#endregion
}

export default Calculator;
