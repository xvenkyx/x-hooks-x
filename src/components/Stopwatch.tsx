import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const reset = () => {
    setIsCounting(false);
    setCount(0);
  };

  useEffect(() => {
    if (!isCounting) return;

    // setCount(0) //resetting

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); //stopping
    };
  }, [isCounting]);

  return (
    <div className="text-center ">
      <h1 className="text-gray-800 font-bold text-[50px]">Stopwatch</h1>
      <h1 className="text-[50px]">{count}</h1>
      <div className="">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setIsCounting(!isCounting);
          }}
        >
          {isCounting ? "Stop" : "Start"}
        </button>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => reset()}
        >
          Reset
        </button>
        <h3 className="text-[20px]">
          The useEffect runs whenever the component is mounted or when the value
          in the dependency array changes.
        </h3>
        <h4 className="text-[17px]">
          The cleanup function runs whenever the component is unmounted or
          before the next render.
        </h4>
      </div>
    </div>
  );
};

export default Stopwatch;
