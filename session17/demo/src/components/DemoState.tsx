import React, { useState } from 'react'



// pham vi import các file thư viện bên ngoài hoặc các biến toàn cụng
export default function DemoState() {



    // phạm vi viết logic code và sử dụng các react hooks

    const [count,setCount] = useState<number>(0)
    const [email,setEmail] =useState<string>("")


    const handleIncrease = ()=>{
        //cập nhật giá trị của state "count"

        setCount(count +1)
    }
  return (
    <div>

    <h1>Count: {count}</h1>
        
        <button onClick={handleIncrease} > Increase</button>
      
    </div>
  )
}
