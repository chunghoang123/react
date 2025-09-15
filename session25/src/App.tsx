import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./layOut/Login";
import Register from "./layOut/Register";
<<<<<<< HEAD
import NotFound from "./pages/Notfound";
=======
import NotFound from "./pages/NotFound";
>>>>>>> d7b2d43990a6f7eb2fc12a7e3d88b80171110fde
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Header from "./layOut/Header";
import CustomLink from "./layOut/CustomLink";
import HomePage from "./pages/HomePage";
import ListUser from "./layOut/ListUser";
import UserDetail from "./layOut/UserDetail";

function App() {
  return (
    <>
      <Header />
      <CustomLink />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/" element={<ListUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
