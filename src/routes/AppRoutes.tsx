import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Songs from "../pages/Songs";
import Artists from "../pages/Artists";
import Categories from "../pages/Categories";
import Videos from "../pages/Videos";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Subscription from "../pages/Subscription";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscription" element={<Subscription />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;