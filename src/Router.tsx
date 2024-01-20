import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}
