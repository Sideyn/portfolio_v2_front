import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import GlobalContext from "./context/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Project from "./pages/Project";

function App() {
  const { alert, adminId } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {adminId ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route
            path="admin"
            element={
              <h2>
                Vous n&#39;avez pas accès à la partie administrateur, veuillez
                vous connectez
              </h2>
            }
          />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
