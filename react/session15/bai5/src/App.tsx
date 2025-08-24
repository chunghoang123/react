import './App.css'
import StudentManagement from './components/StudentManagement'  
function App() {

  return (
    <>
      <h1>Quản lý sinh viên</h1>
      <StudentManagement students={students}  />
    </>
  )
}

export default App
