import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import LoginPage from "./screens/Login";
import RegisterPage from "./screens/Register";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
