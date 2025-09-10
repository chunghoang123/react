import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Regiter from './pages/Regiter'
import Login from './pages/Login'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/'  element = {<HomePage/>}></Route>
      <Route path='login'  element = {<Login/>}></Route>
      <Route path='register'  element = {<Regiter/>}></Route>

    </Routes>
    </>
  )
}

export default App
