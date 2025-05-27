import React, { useState } from "react";
// Калькулятор 2
const Calculator: React.FC = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState<string | number>("");

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Введите корректные числа");
      return;
    }

    let res: number;

    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult("Деление на ноль невозможно");
          return;
        }
        res = a / b;
        break;
      default:
        setResult("Неизвестная операция");
        return;
    }

    setResult(res);
  };

  return (
    <div className="container">
      <h2 className="calculator-title">Калькулятор</h2>

      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Число 1"
        className="calculator-input"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="calculator-select"
      >
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>

      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Число 2"
        className="calculator-input"
      />

      <button onClick={handleCalculate} className="btn-equal">
        Вычислить
      </button>

      <div className="calculator-result">
        Результат: {result}
      </div>
    </div>
  );
};

export default Calculator;







// Калькулятор 1

// const Calculator: React.FC = () => {
//   const [input, setInput] = useState("");

//   const handleClick = (value: string) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput("");
//   };

//   const handleCalculate = () => {
//     try {
//       // eval используется для простоты примера. В реальных проектах использовать безопасные альтернативы.
//       const result = eval(input);
//       setInput(result.toString());
//     } catch {
//       setInput("Ошибка");
//     }
//   };

//   return (
//     <div className="container">
//       <div className=" calculator-box">
//         <h2 className="calculator-title">Калькулятор</h2>
//         <input
//           type="text"
//           value={input}
//           readOnly
//           className="calculator-input"
//         />
//         <div className="button-grid">
//           {[
//             "7",
//             "8",
//             "9",
//             "/",
//             "4",
//             "5",
//             "6",
//             "*",
//             "1",
//             "2",
//             "3",
//             "-",
//             "0",
//             ".",
//             "=",
//             "+",
//           ].map((btn) =>
//             btn === "=" ? (
//               <button
//                 key={btn}
//                 className="btn-equal"
//                 onClick={handleCalculate}
//               >
//                 {btn}
//               </button>
//             ) : (
//               <button
//                 key={btn}
//                 className="btn"
//                 onClick={() => handleClick(btn)}
//               >
//                 {btn}
//               </button>
//             )
//           )}
//           <button
//             className="btn-clear"
//             onClick={handleClear}
//           >
//             Очистить
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;
