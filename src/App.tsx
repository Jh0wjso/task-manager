import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Header from "./components/Header";
import LoginPage from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
