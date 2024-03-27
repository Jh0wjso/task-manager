import "./styles.css";

import Home from "../../components/Home";
import Header from "../../components/Header";

export default function Inicio() {
  return (
    <div className="homeContent">
      <Header />
      <Home />
    </div>
  );
}
