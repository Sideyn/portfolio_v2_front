import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
