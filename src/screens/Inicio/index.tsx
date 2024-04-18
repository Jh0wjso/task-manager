import "./styles.css";

import Home from "../../components/Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Inicio() {
  return (
    <div className="homeContent">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
