import { useState } from "react";

function Cal() {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-72">
        <h2 className="text-2xl font-bold text-center mb-4">Calculator</h2>

        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-3 text-right text-xl border rounded-lg focus:outline-none"
        />

        <div className="grid grid-cols-4 gap-3">
          <button onClick={clear} className="col-span-2 bg-red-500 text-white p-3 rounded-lg hover:bg-red-600">C</button>
          <button onClick={handleClick} value="/" className="bg-gray-200 p-3 rounded-lg">/</button>
          <button onClick={handleClick} value="*" className="bg-gray-200 p-3 rounded-lg">*</button>

          <button onClick={handleClick} value="7" className="btn hover:bg-gray-300 rounded-2xl">7</button>
          <button onClick={handleClick} value="8" className="btn hover:bg-gray-300 rounded-2xl">8</button>
          <button onClick={handleClick} value="9" className="btn hover:bg-gray-300 rounded-2xl">9</button>
          <button onClick={handleClick} value="-" className="bg-gray-200 p-3 rounded-lg">-</button>

          <button onClick={handleClick} value="4" className="btn hover:bg-gray-300 rounded-2xl">4</button>
          <button onClick={handleClick} value="5" className="btn hover:bg-gray-300 rounded-2xl">5</button>
          <button onClick={handleClick} value="6" className="btn hover:bg-gray-300 rounded-2xl">6</button>
          <button onClick={handleClick} value="+" className="bg-gray-200 p-3 rounded-lg">+</button>

          <button onClick={handleClick} value="1" className="btn hover:bg-gray-300 rounded-2xl p-3">1</button>
          <button onClick={handleClick} value="2" className="btn hover:bg-gray-300 rounded-2xl p-3">2</button>
          <button onClick={handleClick} value="3" className="btn hover:bg-gray-300 rounded-2xl p-3">3</button>
          <button onClick={calculate} className="row-span-2 bg-green-500 text-white rounded-lg hover:bg-green-600">=</button>

          <button onClick={handleClick} value="0" className="col-span-2 btn hover:bg-gray-300 rounded-2xl p-3">0</button>
          <button onClick={handleClick} value="." className="btn  hover:bg-gray-300 roounded-2xl">.</button>
        </div>
      </div>
    </div>
  );
}

export default Cal;
