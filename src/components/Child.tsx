import React from "react";

interface ChildProps {
  onGreet: () => void;
}
//type safety
export const Child = React.memo(({ onGreet }: ChildProps) => {
  console.log("Child rendered");

  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={onGreet}
      >
        Greet
      </button>
    </div>
  );
});
