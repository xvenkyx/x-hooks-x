import { useCallback, useState } from "react";
import { Child } from "./Child";

const CounterUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleGreet = useCallback(() => {
    console.log("Hello from Parent!");
  },[]);

  console.log("Parent rendered");

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-4xl">Count: {count}</h1>
      <button
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <Child onGreet={handleGreet} />
    </div>
  );
};

export default CounterUseCallback;

// const handleGreet = useCallback(() => {
//   console.log("Hello from Parent!");
// }, []);
