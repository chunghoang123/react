import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Student from "./pages/Student";
import PrivateRouter from "./components/PrivateRouter";
import Account from "./components/Account";
import Login from "./components/Login";
import Teams from "./pages/Teams";
import TeamsIndex from "./pages/TeamsIndex";
import Team from "./pages/Team";
import Loading from "./components/Loading";

// Bài load
const LazyLoadComp = lazy(() => import("./components/LazyLoadComp"));

function App() {
  return (
    <>
      <Routes>
        {/* bai1 */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* bai2 */}
        {/* <Route path="/student/:name" element={<Student />} /> */}

        {/* bai3 & 4 */}
        <Route path="/student" element={<Student />} />

        {/* bai5 & 6 */}
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>

        {/* bai7 */}
        <Route path="teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>

        {/* bai8: load */}
        <Route
          path="/load"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLoadComp />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
