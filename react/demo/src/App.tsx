import { NavLink,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import UseLayout from './layout/UseLayout'
import Progile from './pages/Progile'
import Pay from './pages/Pay'
import PassWord from './pages/PassWord'

function App() {

  return (
    <>
      {/* phan navbar chuyen huong trang */}
      <nav>
        <NavLink to = "/">Home</NavLink>

      </nav> 




    {/* //định nghĩa danh sách các đường dẫn của ứng dụng */}
    <Routes>  
      {/* // định nghĩa từng route tương ứng với tưng component */}
      <Route path='/' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/use' element={<UseLayout/>}/>
      {/* dinh nghia danh sach cac route con cua user */}
      <Route path='profile' element={<Progile/>}  />
      <Route path='pass' element={<PassWord/>}  />
      <Route path='pay' element={<Pay/>}  />


      <Route path='*' element={<NotFound/>}/> 


    </Routes>
      
    </>
  )
}

export default App