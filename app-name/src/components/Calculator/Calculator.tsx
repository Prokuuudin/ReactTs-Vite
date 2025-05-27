import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // eval используется для простоты примера. В реальных проектах использовать безопасные альтернативы.
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Ошибка");
    }
  };

  return (
    <div className="container">
      <div className=" calculator-box">
        <h2 className="calculator-title">Калькулятор</h2>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-2 text-right border rounded text-lg"
        />
        <div className="button-grid">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((btn) =>
            btn === "=" ? (
              <button
                key={btn}
                className="btn-equal"
                onClick={handleCalculate}
              >
                {btn}
              </button>
            ) : (
              <button
                key={btn}
                className="btn"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            )
          )}
          <button
            className="btn-clear"
            onClick={handleClear}
          >
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
