import { useEffect, useState } from "react";

const slowFunction = (num: number): number => {
  console.log("Slow function running...");
  for (let i = 0; i < 1e9; i++) { } // heavy task - simulating
  return num * 2;
};

export default function CounterUseMemoA() {
  const [count, setCount] = useState(1);
  const [double, setDouble] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("UseEffect is Hit")
    const result = slowFunction(count);
    setDouble(result); // set result in state
  }, [count]);

  console.log("App rendered");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Double: {double}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>{toggle ? "ON" : "OFF"}</p>
    </div>
  );
}
