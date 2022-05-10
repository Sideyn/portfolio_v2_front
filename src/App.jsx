import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import GlobalContext from "./context/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Project from "./pages/Project";

function App() {
  const { adminId } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        {adminId ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/" />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
