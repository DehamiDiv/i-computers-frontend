import { useState } from "react";
export default function Test() {
  const [count, setCount] = useState(60);
  return (
    <div className="w-full h-full bg-yellow-500 flex justify-center items-center">
      <div className="w-[400px] h-[400px] bg-red-100 flex justify-center items-center flex-col">
        <h1 className="text-[55px]">{count}</h1>
        <div className="w-full h-[50px] flex justify-center items-center gap-[60px]">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="w-[100px] h-[45px] bg-red-500 text-white"
          >
            Decrement
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="w-[100px] h-[45px] bg-green-400 text-white"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
