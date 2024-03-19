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
            onChange={(e) => 
              fetch(`http://localhost:3003/notes/search/${e.target.value}`)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error("Erro ao obter dados da API:", error))
            }
          ></input>
        </div>
        <button className="searchButton">
            <BsSearch />
          </button>
      </div>
    </nav>
  );
}
