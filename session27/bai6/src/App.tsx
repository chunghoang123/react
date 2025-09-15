import "./App.css";
import { Routes } from "react-router-dom";
import Product from "./components/Product";
import Detail from "./components/Detail";
import Header from "./assets/layout/layOut/Header";

function App() {
  return (
    <>
      <Routes>
        <Header />

        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
