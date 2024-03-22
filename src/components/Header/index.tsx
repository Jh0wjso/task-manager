import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";
import { NoteProps } from "../../data/interfaces/noteProps.props";

export default function Header() {
  const [searchResults, setSearchResults] = useState([]);

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
              fetch(`http://localhost:3003/notes?q=${e.target.value}`)
                .then((response) => response.json())
                .then((data) => setSearchResults(data))
                .catch((error) =>
                  console.error("Erro ao obter dados da API:", error)
                )
            }
            list="searchResults"
          ></input>
          <datalist id="searchResults">
            {searchResults.map((note: NoteProps) => (
              <option key={note.id} value={note.title + " - " + note.content}/>
            ))}
          </datalist>
        </div>
        <button className="searchButton">
          <BsSearch />
        </button>
      </div>
    </nav>
  );
}
