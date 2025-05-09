import { useEffect, useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count : ", count);

    return () => {
      console.log("cleaned up");
    };
  }, [count]);

  return (
    <div className="text-center">
      <h1 className="text-gray-800 font-bold text-[50px]">Counter</h1>
      <h1 className="text-[50px]">{count}</h1>
      <div className="card">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
