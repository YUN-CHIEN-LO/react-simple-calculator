import "./style/index.scss";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator__input"></div>
        <div className="calculator__body">
          <div className="calculator__btn">7</div>
          <div className="calculator__btn">8</div>
          <div className="calculator__btn">9</div>
          <div className="calculator__btn">DEL</div>
          <div className="calculator__btn">4</div>
          <div className="calculator__btn">5</div>
          <div className="calculator__btn">6</div>
          <div className="calculator__btn">+</div>
          <div className="calculator__btn">1</div>
          <div className="calculator__btn">2</div>
          <div className="calculator__btn">3</div>
          <div className="calculator__btn">-</div>
          <div className="calculator__btn">.</div>
          <div className="calculator__btn">0</div>
          <div className="calculator__btn">/</div>
          <div className="calculator__btn">*</div>
          <div className="calculator__btn calculator--large">RESET</div>
          <div className="calculator__btn calculator--large">=</div>
        </div>

      </div>
    </div>
  );
}

export default App;
