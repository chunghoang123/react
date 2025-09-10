import Passwor from 'antd/es/input/Password'
import React from 'react'

export default function Regiter() {
    const userLocal = localStorage.getItem("users");
    const listUser = userLocal ? JSON.parse(userLocal):[];
    const [user,setUser] = userState({
        email:"",
        password:""
    })
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setUser({
            ...user,
            [name]:value,
        })
    }
    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        //xử lí logic
        if(UserActivation.email && UserActivation.password){
            //lưu dữ liệu lên local
            localStorage.setItem("user",JSON.stringify([...listUser,user]));
            //chuyển về trang đăng nhập
        }else{
            alert("vui long dien day du thong tin")

        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
