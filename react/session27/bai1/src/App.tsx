import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
