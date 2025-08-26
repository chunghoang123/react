import React, { useEffect, useState } from "react";

export default function DemoUserEffect() {
    const[count,setCount] = useState <number>(0);

    useEffect(()=>{
        console.log();
        <button onClick={() => setCount(count +1)}>count</button>
        
    })
  return <div></div>;
}
