import React from "react";

export default function Bai8() {
  return (
    //ben trai
    // <div className="flex w-[500px] h-[50px] bg-black  justify-start items-center gap-2 p-2 rounded">
    //ben phai
    // <div className="flex w-[500px] h-[50px] bg-black  justify-end items-center gap-2 p-2 rounded">
    // o giua
    // <div className="flex w-[500px] h-[50px] bg-black  justify-center items-center gap-2 p-2 rounded">
    //cach deu 2 ben
    // <div className="flex w-[500px] h-[50px] bg-black  justify-between  items-center gap-2 p-2 rounded">
    //các phần tử giãn ra hai bên
    <div className="flex w-[500px] h-[50px] bg-black  justify-around   items-center gap-33 p-2 rounded">
    {/* //Các phần tử giãn đều 2 bên */}
    {/* // <div className="flex w-[500px] h-[50px] bg-black  justify-around   items-center gap-0 p-2 rounded"> */}


    
      <div className="w-[40px] h-[40px] bg-blue-600 text-white text-sm font-bold flex items-center justify-center rounded">
        01
      </div>
      <div className="w-[40px] h-[40px] bg-blue-600 text-white text-sm font-bold flex items-center justify-center rounded">
        02
      </div>
      <div className="w-[40px] h-[40px] bg-blue-600 text-white text-sm font-bold flex items-center justify-center rounded">
        03
      </div>
    </div>
  );
}
