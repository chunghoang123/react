import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/task/:id" element={<TaskDetail />} />
    </Routes>
  );
}

export default App;
