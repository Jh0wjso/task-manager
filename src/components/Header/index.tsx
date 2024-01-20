import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./styles.css";

export default function Header() {
  return (
    <nav className="containerHeader">
      <div className="navbarContent">
          <Link to="/" className="flex flex-row items-center">
            <h1 className="pageTittle">CoreNotes</h1>
          </Link>

        <div className="searchBar">
          <input
            className="searchInput"
            type="text"
            placeholder="Pesquisar Notas.."
          ></input>
        </div>
        <button className="searchButton">
            <BsSearch />
          </button>
      </div>
    </nav>
  );
}
