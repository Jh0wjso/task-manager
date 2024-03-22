import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import LoginPage from "./screens/Login";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
