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
        <Route path="/projet" element={<Project />} />
        <Route path="/connexion" element={<Login />} />
        {adminId ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/accueil" />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
