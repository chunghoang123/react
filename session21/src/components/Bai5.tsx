import React from "react";

export default function Bai5() {
  return (
    <div>
      <div className="relative w-[300px] h-[200px] bg-sky-200 p-4 rounded-md shadow-md">
        <p className="text-sky-700">Relative parent</p>
        <div className="absolute bottom-4 left-4 bg-sky-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg">
          Absolute child
        </div>
      </div>
    </div>
  );
}
